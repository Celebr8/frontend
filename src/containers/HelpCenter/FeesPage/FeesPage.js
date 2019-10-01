import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  FeesTabs,
  Footer,
  LayoutSideNavigationWithHero,
  LayoutWrapperFooter,
  LayoutWrapperHero,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  Page,
} from '../../../components';
import config from '../../../config';
import { TopbarContainer } from '../../../containers';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import { helpCenterTabs } from '../tabs';
import css from './FeesPage.css';

const FeesPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = helpCenterTabs(intl, 'FeesPage');

  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'FeesPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigationWithHero>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="FeesPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperHero className={css.hero}>
          <div className={css.heroContent}>
            <h1 className={css.heroMainTitle}>
              <FormattedMessage id="FeesPage.title" />
            </h1>
          </div>
        </LayoutWrapperHero>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <FeesTabs />
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigationWithHero>
    </Page>
  );
};

const { bool } = PropTypes;

FeesPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const FeesPage = compose(
  connect(mapStateToProps),
  injectIntl
)(FeesPageComponent);

export default FeesPage;
