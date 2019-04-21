import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';

import { helpCenterTabs } from '../tabs'

import { ContactUsForm } from '../../../forms';

import {
	Page,
	LayoutSideNavigationWithHero,
	LayoutWrapperMain,
	LayoutWrapperHero,
	LayoutWrapperSideNav,
	LayoutWrapperTopbar,
	LayoutWrapperFooter,
	Footer,
	ContactUs
} from '../../../components';

import config from '../../../config';

import { sendContactUsMessage } from './ContactUsPage.duck';

import css from './ContactUsPage.css';

const ContactUsPageComponent = props => {
	const { 
		scrollingDisabled,
		intl,
		onSendMessage,
		sendingInProgress,
		sendingError
	} = props;

	const tabs = helpCenterTabs(intl, 'ContactUsPage');

	const initialValues = {
		email: '',	
		phoneNumber: '',
		message: '',
		subject: ''
	}

	const siteTitle = config.siteTitle;
	const schemaTitle = intl.formatMessage({ id: 'ContactUsPage.schemaTitle' }, { siteTitle });
	const schema = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		name: schemaTitle,
	};
	return (
		<Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
			<LayoutSideNavigationWithHero>
				<LayoutWrapperTopbar>
					<TopbarContainer currentPage="ContactUsPage" />
				</LayoutWrapperTopbar>
				<LayoutWrapperHero className={css.hero}>
					<div className={css.heroContent}>
						<h1 className={css.heroMainTitle}>
							<FormattedMessage id="ContactUsPage.title" />
						</h1>
					</div>
				</LayoutWrapperHero>
				<LayoutWrapperSideNav tabs={tabs} />
				<LayoutWrapperMain>
					<ContactUsForm 
						className={css.form}
						initialValues={initialValues}
						onSubmit={values => onSendMessage(values)}
						sendingInProgress={sendingInProgress}
						sendingError={sendingError}
					/>
				</LayoutWrapperMain>
				<LayoutWrapperFooter>
					<Footer />
				</LayoutWrapperFooter>
			</LayoutSideNavigationWithHero>
		</Page>
	);
};

const { bool } = PropTypes;

ContactUsPageComponent.propTypes = {
	scrollingDisabled: bool.isRequired,

	// from injectIntl
	intl: intlShape.isRequired,
};

const mapStateToProps = state => {
	return {
		scrollingDisabled: isScrollingDisabled(state),
		sendingError: state.sendingError,
		sendingInProgress: state.sendingInProgress
	};
};

const mapDispatchToProps = dispatch => ({
	onSendMessage: (values) => dispatch(sendContactUsMessage(values))
})

const ContactUsPage = compose(
	connect(mapStateToProps, mapDispatchToProps),
	injectIntl
)(ContactUsPageComponent);

export default ContactUsPage;;
