import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  Footer,
  LayoutSingleColumn,
  LayoutWrapperFooter,
  LayoutWrapperMain,
  LayoutWrapperTopbar,
  Page,
} from '../../components';
import { TopbarContainer } from '../../containers';
import { verify } from '../../ducks/EmailVerification.duck';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { EmailVerificationForm } from '../../forms';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import { parse } from '../../util/urlHelpers';
import css from './EmailVerificationPage.css';

/**
  Parse verification token from URL

  Returns stringified token, if the token is provided.

  Returns `null` if verification token is not provided.

  Please note that we need to explicitely stringify the token, because
  the unwanted result of the `parse` method is that it automatically
  parses the token to number.
*/
const parseVerificationToken = location => {
  const urlParams = parse(location.search);
  const verificationToken = urlParams.t;

  if (verificationToken) {
    return `${verificationToken}`;
  }

  return null;
};

export const EmailVerificationPageComponent = props => {
  const {
    currentUser,
    intl,
    scrollingDisabled,
    submitVerification,
    emailVerificationInProgress,
    verificationError,
    location,
  } = props;
  const title = intl.formatMessage({
    id: 'EmailVerificationPage.title',
  });

  const initialValues = { verificationToken: parseVerificationToken(location) };

  return (
    <Page title={title} scrollingDisabled={scrollingDisabled} referrer="origin">
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain className={css.layoutWrapperMain}>
          <div className={css.root}>
            <div className={css.content}>
              {currentUser ? (
                <EmailVerificationForm
                  initialValues={initialValues}
                  onSubmit={submitVerification}
                  currentUser={currentUser}
                  inProgress={emailVerificationInProgress}
                  verificationError={verificationError}
                />
              ) : (
                <FormattedMessage id="EmailVerificationPage.loadingUserInformation" />
              )}
            </div>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

EmailVerificationPageComponent.defaultProps = {
  currentUser: null,
  verificationError: null,
};

const { bool, func, shape, string } = PropTypes;

EmailVerificationPageComponent.propTypes = {
  currentUser: propTypes.currentUser,
  scrollingDisabled: bool.isRequired,
  submitVerification: func.isRequired,
  emailVerificationInProgress: bool.isRequired,
  verificationError: propTypes.error,

  // from withRouter
  location: shape({
    search: string,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  const { currentUser } = state.user;
  const { verificationError, verificationInProgress } = state.EmailVerification;
  return {
    verificationError,
    emailVerificationInProgress: verificationInProgress,
    currentUser,
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const mapDispatchToProps = dispatch => ({
  submitVerification: ({ verificationToken }) => {
    return dispatch(verify(verificationToken));
  },
});

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const EmailVerificationPage = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  injectIntl
)(EmailVerificationPageComponent);

export default EmailVerificationPage;
