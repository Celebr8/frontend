import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Footer,
  LayoutSideNavigation,
  LayoutWrapperFooter,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  Page,
  PrivacyPolicy,
} from '../../../components';
import config from '../../../config';
import { TopbarContainer } from '../../../containers';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import { legalsTabs } from '../tabs';
import css from './PrivacyPolicyPage.css';

const PrivacyPolicyPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = legalsTabs(intl, 'PrivacyPolicyPage');

  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'TermsOfServicePage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="PrivacyPolicyPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="PrivacyPolicyPage.heading" />
            </h1>
            <PrivacyPolicy />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

PrivacyPolicyPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const PrivacyPolicyPage = compose(
  connect(mapStateToProps),
  injectIntl
)(PrivacyPolicyPageComponent);

export default PrivacyPolicyPage;
