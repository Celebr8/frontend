import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';
import { helpCenterTabs } from '../tabs'
import {
	Page,
	LayoutSideNavigationWithHero,
	LayoutWrapperMain,
	LayoutWrapperHero,
	LayoutWrapperSideNav,
	LayoutWrapperTopbar,
	LayoutWrapperFooter,
	Footer
} from '../../../components';
import config from '../../../config';

import css from './DealsHelpPage.css';

const DealsHelpPageComponent = props => {
	const { scrollingDisabled, intl } = props;

	const tabs = helpCenterTabs(intl, 'DealsPage');

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
					<h2>Part of our culture is giving back</h2>
					<p>At Whichost we spent days and nights contemplating about how we can further benefit the community. We turn general ideas into presentations and finally into actions. <i>We also turn coffee beans into sleepless nights</i>.</p>
					<p>We asked people like you for feedback and we had numerous brainstormings with Publicans. The results are fantastic! We call them <a href="https://www.whichost.com/deals" target="_blank">"The Whichost Deals"</a>.</p>
					<p>At the moment we have two active deals for our members. Both are linked to attractive rewards and you can read more on the following deals pages. You can either benefit of our <a href="https://www.whichost.com/birthday-deal" target="_blank">Birthday Deal</a> or you can reward your employees and colleagues with our <a href="https://www.whichost.com/employees-benefit" target="_blank">Corporate Benefit</a>.</p>
					<p>What are you waiting for? <a href="https://www.whichost.com/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756" target="_blank">Browse pubs</a> and book now!</p>
					<br/>
					<h2>Contact us. We're here to help.</h2>
			    <p>If you still have questions that are not covered by our <a href="https://www.whichost.com/help/faq" target="_blank">help center</a>, we invite you to <a href="https://www.whichost.com/help/contact-us" target="_blank">contact us</a> and we'll assist you personally.</p>
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

export default DealsHelpPage;;
