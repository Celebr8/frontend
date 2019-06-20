import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { TopbarContainer } from '../..';
import { Footer, LayoutSideNavigationWithHero, LayoutWrapperFooter, LayoutWrapperHero, LayoutWrapperMain, LayoutWrapperSideNav, LayoutWrapperTopbar, Page, UserFeeDonation } from '../../../components';
import config from '../../../config';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { dealsTabs } from '../tabs';
import css from './UserFeeDonationPage.css';




const UserFeeDonationPageComponent = props => {
  const { scrollingDisabled, intl } = props;

	const tabs = dealsTabs(intl, 'UserFeeDonationPage');

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
          <TopbarContainer currentPage="UserFeeDonationPage" />
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
             <UserFeeDonation />
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

UserFeeDonationPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const UserFeeDonationPage = compose(
  connect(mapStateToProps),
  injectIntl
)(UserFeeDonationPageComponent);

export default UserFeeDonationPage;;
