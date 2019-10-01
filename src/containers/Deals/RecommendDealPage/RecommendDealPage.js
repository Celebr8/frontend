import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Footer,
  LayoutSideNavigationWithHero,
  LayoutWrapperFooter,
  LayoutWrapperHero,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  Page,
  RecommendDeal,
} from '../../../components';
import config from '../../../config';
import { TopbarContainer } from '../../../containers';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import { dealsTabs } from '../tabs';
import css from './RecommendDealPage.css';

const RecommendDealPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = dealsTabs(intl, 'RecommendDealPage');

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
          <TopbarContainer currentPage="RecommendDealPage" />
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
          <div className={css.content}>
            <RecommendDeal />
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

RecommendDealPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const RecommendDealPage = compose(
  connect(mapStateToProps),
  injectIntl
)(RecommendDealPageComponent);

export default RecommendDealPage;
