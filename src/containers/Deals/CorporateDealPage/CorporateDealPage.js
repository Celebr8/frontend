import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { CorporateDeal, Footer, LayoutSideNavigationWithHero, LayoutWrapperFooter, LayoutWrapperHero, LayoutWrapperMain, LayoutWrapperSideNav, LayoutWrapperTopbar, Page } from '../../../components';
import config from '../../../config';
import { TopbarContainer } from '../../../containers';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import { dealsTabs } from '../tabs';
import css from './CorporateDealPage.css';

const CorporateDealPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = dealsTabs(intl, 'CorporateDealPage');

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
          <TopbarContainer currentPage="CorporateDealPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperHero className={css.hero}>
          <div className={css.heroContent}>
            <h1 className={css.heroMainTitle}>
              <FormattedMessage id="DealsPage.title" />
            </h1>
          </div>
        </LayoutWrapperHero>
        <LayoutWrapperMain>
          <div className={css.content}>
            <CorporateDeal />
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigationWithHero>
    </Page>
  );
};

const { bool } = PropTypes;

CorporateDealPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const CorporateDealPage = compose(
  connect(mapStateToProps),
  injectIntl
)(CorporateDealPageComponent);

export default CorporateDealPage;
