import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListingLink } from '../../components';
import { EditListingCapacityForm } from '../../forms';
import { ensureListing } from '../../util/data';
import { LISTING_STATE_DRAFT } from '../../util/types';
import css from './EditListingCapacityPanel.css';



const GROUPSIZE_NAME = 'groupSize';

const EditListingCapacityPanel = props => {
  const {
    rootClassName,
    className,
    listing,
    onSubmit,
    onChange,
    submitButtonText,
    panelUpdated,
    updateInProgress,
    errors,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const { publicData } = currentListing.attributes;

  const isPublished = currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
  const panelTitle = isPublished ? (
    <FormattedMessage
      id="EditListingCapacityPanel.title"
      values={{ listingTitle: <ListingLink listing={listing} /> }}
    />
  ) : (
    <FormattedMessage id="EditListingCapacityPanel.createListingTitle" />
  );

  const groupSize = publicData && publicData.groupSize;
  const initialValues = { groupSize };

  return (
    <div className={classes}>
      <h1 className={css.title}>{panelTitle}</h1>
      <p>
            Here you can choose the size party your venue can host.
        </p>
      <EditListingCapacityForm
        className={css.form}
        name={GROUPSIZE_NAME}
        initialValues={initialValues}
        onSubmit={values => {
          const { groupSize = [] } = values;

          const updatedValues = {
            publicData: { groupSize },
          };
          onSubmit(updatedValues);
        }}
        onChange={onChange}
        saveActionMsg={submitButtonText}
        updated={panelUpdated}
        updateInProgress={updateInProgress}
        fetchErrors={errors}
      />
    </div>
  );
};

EditListingCapacityPanel.defaultProps = {
  rootClassName: null,
  className: null,
  listing: null,
};

const { bool, func, object, string } = PropTypes;

EditListingCapacityPanel.propTypes = {
  rootClassName: string,
  className: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingCapacityPanel;
