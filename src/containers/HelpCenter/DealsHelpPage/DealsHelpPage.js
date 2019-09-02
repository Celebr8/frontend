import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';
import { helpCenterTabs } from '../tabs';
import {
  NamedLink,
  Page,
  LayoutSideNavigationWithHero,
  LayoutWrapperMain,
  LayoutWrapperHero,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
} from '../../../components';
import config from '../../../config';

import css from './DealsHelpPage.css';

const DealsHelpPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = helpCenterTabs(intl, 'DealsHelpPage');

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
					<h2>Giving back is in our culture</h2>
					<p>At Celebr8 we spent days and nights contemplating how we can further benefit the community. We turn ideas into presentations and finally into actions. <i>We also turn coffee beans into sleepless nights</i>.</p>
					<p>We asked people like you for feedback and we had numerous brainstormings with Publicans. The results are fantastic! We call them <NamedLink name="DealsPage"> "The Celebr8 Benefits"</NamedLink>.</p>
					<p>At the moment we have three active benefits. All linked to attractive rewards and you can read more on the following pages. You can either benefit of our <NamedLink name="BirthdayDealPage">Birthday Gift</NamedLink>, you can reward your employees and colleagues with our <NamedLink name="CorporateDealPage">Corporate Benefit</NamedLink> or you can get a €15 gift card with our <a href="https://www.celebr8.co/benefits/recommend-gift" target="_blank">Recommend Reward</a>.</p>
					<p>What are you waiting for? <a href="https://www.celebr8.co/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756" target="_blank">Find a pub</a> and book it now!</p>
					<br/>
					<h2>Still have questions? We're here to help.</h2>
			    <p>If you still have questions that are not covered by our <NamedLink name="FAQPage">help center</NamedLink>, we invite you to <NamedLink name="ContactUsPage">contact us</NamedLink> and we'll assist you personally.</p>
			    <br/>
				</LayoutWrapperMain>
				<LayoutWrapperFooter>
					<Footer />
				</LayoutWrapperFooter>
			</LayoutSideNavigationWithHero>
		</Page>
	);
};

const { bool } = PropTypes;

DealsHelpPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const DealsHelpPage = compose(
  connect(mapStateToProps),
  injectIntl
)(DealsHelpPageComponent);

export default DealsHelpPage;
