import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Deals, Footer, LayoutSideNavigationWithHero, LayoutWrapperFooter, LayoutWrapperHero, LayoutWrapperMain, LayoutWrapperSideNav, LayoutWrapperTopbar, Page } from '../../../components';
import config from '../../../config';
import { TopbarContainer } from '../../../containers';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import { dealsTabs } from '../tabs';
import css from './DealsPage.css';

const DealsPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = dealsTabs(intl, 'DealsPage');

  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'DealsPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigationWithHero>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="DealsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperHero className={css.hero}>
          <div className={css.heroContent}>
            <h1 className={css.heroMainTitle}>
              <FormattedMessage id="DealsPage.title" />
            </h1>
          </div>
        </LayoutWrapperHero>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <Deals />
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigationWithHero>
    </Page>
  );
};

const { bool } = PropTypes;

DealsPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const DealsPage = compose(
  connect(mapStateToProps),
  injectIntl
)(DealsPageComponent);

export default DealsPage;
