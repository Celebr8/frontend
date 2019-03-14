import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';

import { dealsTabs } from '../tabs'

import {
  Page,
  LayoutSideNavigationWithHero,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperHero,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
	Deals,
	BirthdayDeal
} from '../../../components';
import config from '../../../config';

import css from './BirthdayDealPage.css';

const BirthdayDealPageComponent = props => {
  const { scrollingDisabled, intl } = props;

	const tabs = dealsTabs(intl, 'BirthdayDealPage');

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
          <TopbarContainer currentPage="BirthdayDealPage" />
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
            <h1 className={css.heading}>
              <FormattedMessage id="BirthdayDealPage.heading" />
            </h1>
            <BirthdayDeal />
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

BirthdayDealPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const BirthdayDealPage = compose(
  connect(mapStateToProps),
  injectIntl
)(BirthdayDealPageComponent);

export default BirthdayDealPage;;
