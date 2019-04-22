import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import { TopbarContainer } from '../../containers';
import {
	Page,
	LayoutSingleColumnWithHero,
	LayoutWrapperMain,
	LayoutWrapperHero,
	LayoutWrapperTopbar,
	LayoutWrapperFooter,
	Footer,
	FAQ
} from '../../components';
import config from '../../config';

import css from './CareersPage.css';

const CareersPageComponent = props => {

	const { scrollingDisabled, intl } = props;

	const siteTitle = config.siteTitle;
	const schemaTitle = intl.formatMessage({ id: 'CareersPage.schemaTitle' }, { siteTitle });
	const schema = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		name: schemaTitle,
	};
	return (
		<Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
			<LayoutSingleColumnWithHero>
				<LayoutWrapperTopbar>
					<TopbarContainer currentPage="CareersPage" />
				</LayoutWrapperTopbar>
				<LayoutWrapperHero className={css.hero}>
					<div className={css.heroContent}>
						<h1 className={css.heroMainTitle}>
							<FormattedMessage id="CareersPage.title" />
						</h1>
					</div>
				</LayoutWrapperHero>
				<LayoutWrapperMain>
					Lorem Ipsum
				</LayoutWrapperMain>
				<LayoutWrapperFooter>
					<Footer />
				</LayoutWrapperFooter>
			</LayoutSingleColumnWithHero>
		</Page>
	);
};

const { bool } = PropTypes;

CareersPageComponent.propTypes = {
	scrollingDisabled: bool.isRequired,

	// from injectIntl
	intl: intlShape.isRequired,
};

const mapStateToProps = state => {
	return {
		scrollingDisabled: isScrollingDisabled(state),
	};
};

const CareersPage = compose(
	connect(mapStateToProps),
	injectIntl
)(CareersPageComponent);

export default CareersPage;;
