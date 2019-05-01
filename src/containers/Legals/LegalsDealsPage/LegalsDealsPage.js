import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
	Footer,
	LegalsDeals
} from '../../../components';

import config from '../../../config';
import { legalsTabs } from '../tabs';

import css from './LegalsDealsPage.css';

const LegalsDealsPageComponent = props => {
  const { scrollingDisabled, intl } = props;

	const tabs = legalsTabs(intl, 'LegalsDealsPage');

	const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LegalsDealsPage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="LegalsDealsPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="LegalsDealsPage.heading" />
            </h1>
            <LegalsDeals />
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

LegalsDealsPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const LegalsDealsPage = compose(
  connect(mapStateToProps),
  injectIntl
)(LegalsDealsPageComponent);

export default LegalsDealsPage;
