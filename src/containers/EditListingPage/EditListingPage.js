import { bool, func, object, oneOf, shape, string } from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { EditListingWizard, NamedRedirect, Page } from '../../components';
import { TopbarContainer } from '../../containers';
import { getMarketplaceEntities } from '../../ducks/marketplaceData.duck';
import { createStripeAccount, stripeAccountClearError } from '../../ducks/stripe.duck';
import { isScrollingDisabled, manageDisableScrolling } from '../../ducks/UI.duck';
import { ensureOwnListing } from '../../util/data';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { types as sdkTypes } from '../../util/sdkLoader';
import { LISTING_STATE_DRAFT, LISTING_STATE_PENDING_APPROVAL, propTypes } from '../../util/types';
import {
  createSlug,
  LISTING_PAGE_PARAM_TYPES,
  LISTING_PAGE_PARAM_TYPE_DRAFT,
  LISTING_PAGE_PARAM_TYPE_NEW,
  LISTING_PAGE_PENDING_APPROVAL_VARIANT,
} from '../../util/urlHelpers';
import css from './EditListingPage.css';
import {
  clearUpdatedTab,
  loadData,
  removeListingImage,
  requestCreateAvailabilityException,
  requestCreateListingDraft,
  requestDeleteAvailabilityException,
  requestFetchAvailabilityExceptions,
  requestFetchBookings,
  requestImageUpload,
  requestPublishListingDraft,
  requestUpdateListing,
  updateImageOrder,
} from './EditListingPage.duck';

const { UUID } = sdkTypes;

// N.B. All the presentational content needs to be extracted to their own components
export const EditListingPageComponent = props => {
  const {
    currentUser,
    createStripeAccountError,
    fetchInProgress,
    getOwnListing,
    history,
    intl,
    onFetchAvailabilityExceptions,
    onCreateAvailabilityException,
    onDeleteAvailabilityException,
    onFetchBookings,
    onCreateListingDraft,
    onPublishListingDraft,
    onUpdateListing,
    onImageUpload,
    onRemoveListingImage,
    onManageDisableScrolling,
    onPayoutDetailsSubmit,
    onPayoutDetailsFormChange,
    onUpdateImageOrder,
    onChange,
    page,
    params,
    scrollingDisabled,
  } = props;

  const { id, type } = params;
  const isNewURI = type === LISTING_PAGE_PARAM_TYPE_NEW;
  const isDraftURI = type === LISTING_PAGE_PARAM_TYPE_DRAFT;

  const listingId = page.submittedListingId || (id ? new UUID(id) : null);
  const currentListing = ensureOwnListing(getOwnListing(listingId));
  const { state: currentListingState } = currentListing.attributes;

  const isPastDraft = currentListingState && currentListingState !== LISTING_STATE_DRAFT;
  const shouldRedirect = (isNewURI || isDraftURI) && listingId && isPastDraft;
  const showForm = isNewURI || currentListing.id;

  if (shouldRedirect) {
    const isPendingApproval =
      currentListing && currentListingState === LISTING_STATE_PENDING_APPROVAL;

    // If page has already listingId (after submit) and current listings exist
    // redirect to listing page
    const listingSlug = currentListing ? createSlug(currentListing.attributes.title) : null;

    const redirectProps = isPendingApproval
      ? {
          name: 'ListingPageVariant',
          params: {
            id: listingId.uuid,
            slug: listingSlug,
            variant: LISTING_PAGE_PENDING_APPROVAL_VARIANT,
          },
        }
      : {
          name: 'ListingPage',
          params: {
            id: listingId.uuid,
            slug: listingSlug,
          },
        };

    return <NamedRedirect {...redirectProps} />;
  } else if (showForm) {
    const {
      createListingDraftError = null,
      publishListingError = null,
      updateListingError = null,
      showListingsError = null,
      uploadImageError = null,
    } = page;
    const errors = {
      createListingDraftError,
      publishListingError,
      updateListingError,
      showListingsError,
      uploadImageError,
      createStripeAccountError,
    };
    const newListingPublished =
      isDraftURI && currentListing && currentListingState !== LISTING_STATE_DRAFT;

    // Show form if user is posting a new listing or editing existing one
    const disableForm = page.redirectToListing && !showListingsError;

    // Images are passed to EditListingForm so that it can generate thumbnails out of them
    const currentListingImages =
      currentListing && currentListing.images ? currentListing.images : [];

    // Images not yet connected to the listing
    const imageOrder = page.imageOrder || [];
    const unattachedImages = imageOrder.map(i => page.images[i]);

    const allImages = currentListingImages.concat(unattachedImages);
    const removedImageIds = page.removedImageIds || [];
    const images = allImages.filter(img => {
      return !removedImageIds.includes(img.id);
    });

    const title =
      isNewURI || isDraftURI
        ? intl.formatMessage({ id: 'EditListingPage.titleCreateListing' })
        : intl.formatMessage({ id: 'EditListingPage.titleEditListing' });

    return (
      <Page title={title} scrollingDisabled={scrollingDisabled}>
        <TopbarContainer
          className={css.topbar}
          mobileRootClassName={css.mobileTopbar}
          desktopClassName={css.desktopTopbar}
          mobileClassName={css.mobileTopbar}
        />
        <EditListingWizard
          id="EditListingWizard"
          className={css.wizard}
          params={params}
          disabled={disableForm}
          errors={errors}
          fetchInProgress={fetchInProgress}
          newListingPublished={newListingPublished}
          history={history}
          images={images}
          listing={currentListing}
          availability={{
            calendar: page.availabilityCalendar,
            onFetchAvailabilityExceptions,
            onCreateAvailabilityException,
            onDeleteAvailabilityException,
            onFetchBookings,
          }}
          onUpdateListing={onUpdateListing}
          onCreateListingDraft={onCreateListingDraft}
          onPublishListingDraft={onPublishListingDraft}
          onPayoutDetailsFormChange={onPayoutDetailsFormChange}
          onPayoutDetailsSubmit={onPayoutDetailsSubmit}
          onImageUpload={onImageUpload}
          onUpdateImageOrder={onUpdateImageOrder}
          onRemoveImage={onRemoveListingImage}
          onChange={onChange}
          currentUser={currentUser}
          onManageDisableScrolling={onManageDisableScrolling}
          updatedTab={page.updatedTab}
          updateInProgress={page.updateInProgress || page.createListingDraftInProgress}
        />
      </Page>
    );
  } else {
    // If user has come to this page through a direct linkto edit existing listing,
    // we need to load it first.
    const loadingPageMsg = {
      id: 'EditListingPage.loadingListingData',
    };
    return (
      <Page title={intl.formatMessage(loadingPageMsg)} scrollingDisabled={scrollingDisabled} />
    );
  }
};

EditListingPageComponent.defaultProps = {
  createStripeAccountError: null,
  currentUser: null,
  currentUserHasOrders: null,
  listing: null,
  listingDraft: null,
  notificationCount: 0,
  sendVerificationEmailError: null,
};

EditListingPageComponent.propTypes = {
  createStripeAccountError: propTypes.error,
  currentUser: propTypes.currentUser,
  fetchInProgress: bool.isRequired,
  getOwnListing: func.isRequired,
  onFetchAvailabilityExceptions: func.isRequired,
  onCreateAvailabilityException: func.isRequired,
  onCreateListingDraft: func.isRequired,
  onPublishListingDraft: func.isRequired,
  onImageUpload: func.isRequired,
  onManageDisableScrolling: func.isRequired,
  onPayoutDetailsFormChange: func.isRequired,
  onPayoutDetailsSubmit: func.isRequired,
  onUpdateImageOrder: func.isRequired,
  onRemoveListingImage: func.isRequired,
  onUpdateListing: func.isRequired,
  onChange: func.isRequired,
  page: object.isRequired,
  params: shape({
    id: string.isRequired,
    slug: string.isRequired,
    type: oneOf(LISTING_PAGE_PARAM_TYPES).isRequired,
    tab: string.isRequired,
  }).isRequired,
  scrollingDisabled: bool.isRequired,

  /* from withRouter */
  history: shape({
    push: func.isRequired,
  }).isRequired,

  /* from injectIntl */
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const page = state.EditListingPage;
  const { createStripeAccountInProgress, createStripeAccountError } = state.stripe;
  const { currentUser } = state.user;

  const fetchInProgress = createStripeAccountInProgress;

  const getOwnListing = id => {
    const listings = getMarketplaceEntities(state, [{ id, type: 'ownListing' }]);

    return listings.length === 1 ? listings[0] : null;
  };
  return {
    createStripeAccountError,
    currentUser,
    fetchInProgress,
    getOwnListing,
    page,
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onUpdateListing: (tab, values) => dispatch(requestUpdateListing(tab, values)),
  onFetchBookings: params => dispatch(requestFetchBookings(params)),
  onFetchAvailabilityExceptions: params => dispatch(requestFetchAvailabilityExceptions(params)),
  onCreateAvailabilityException: params => dispatch(requestCreateAvailabilityException(params)),
  onDeleteAvailabilityException: params => dispatch(requestDeleteAvailabilityException(params)),
  onCreateListingDraft: values => dispatch(requestCreateListingDraft(values)),
  onPublishListingDraft: listingId => dispatch(requestPublishListingDraft(listingId)),
  onImageUpload: data => dispatch(requestImageUpload(data)),
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
  onPayoutDetailsFormChange: () => dispatch(stripeAccountClearError()),
  onPayoutDetailsSubmit: values => dispatch(createStripeAccount(values)),
  onUpdateImageOrder: imageOrder => dispatch(updateImageOrder(imageOrder)),
  onRemoveListingImage: imageId => dispatch(removeListingImage(imageId)),
  onChange: () => dispatch(clearUpdatedTab()),
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const EditListingPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(injectIntl(EditListingPageComponent));

EditListingPage.loadData = loadData;

export default EditListingPage;
