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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
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
