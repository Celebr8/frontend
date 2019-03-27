import React, { Component } from 'react';
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
	Footer,
	FAQ
} from '../../../components';
import config from '../../../config';

import css from './FAQPage.css';

import { withStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});

class FAQPagePanelsBase extends React.Component {

	state = {

		expanded: null

	}

	handleChange = panel => (event, expanded) => {

		this.setState({

			expanded: expanded ? panel : false

		})

	}

	render() {

		const { classes } = this.props;

		const { expanded } = this.state;	

		return (
			<div className={classes.root}>
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>General settings</Typography>
						<Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
							maximus est, id dignissim quam.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Users</Typography>
						<Typography className={classes.secondaryHeading}>
							You are currently not an owner
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
							diam eros in elit. Pellentesque convallis laoreet laoreet.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Advanced settings</Typography>
						<Typography className={classes.secondaryHeading}>
							Filtering has been entirely disabled for whole web server
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
							eros, vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>Personal data</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
							eros, vitae egestas augue. Duis vel est augue.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)

	}

}

const FAQPagePanel = withStyles(styles)(FAQPagePanelsBase);

const FAQPageComponent = props => {

	const { scrollingDisabled, intl } = props;

	const tabs = helpCenterTabs(intl, 'FAQPage');

	const siteTitle = config.siteTitle;
	const schemaTitle = intl.formatMessage({ id: 'FAQPage.schemaTitle' }, { siteTitle });
	const schema = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		name: schemaTitle,
	};
	return (
		<Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
			<LayoutSideNavigationWithHero>
				<LayoutWrapperTopbar>
					<TopbarContainer currentPage="FAQPage" />
				</LayoutWrapperTopbar>
				<LayoutWrapperHero className={css.hero}>
					<div className={css.heroContent}>
						<h1 className={css.heroMainTitle}>
							<FormattedMessage id="FAQPage.title" />
						</h1>
					</div>
				</LayoutWrapperHero>
				<LayoutWrapperSideNav tabs={tabs} />
				<LayoutWrapperMain>
					<FAQPagePanel />
				</LayoutWrapperMain>
				<LayoutWrapperFooter>
					<Footer />
				</LayoutWrapperFooter>
			</LayoutSideNavigationWithHero>
		</Page>
	);
};

const { bool } = PropTypes;

FAQPageComponent.propTypes = {
	scrollingDisabled: bool.isRequired,

	// from injectIntl
	intl: intlShape.isRequired,
};

const mapStateToProps = state => {
	return {
		scrollingDisabled: isScrollingDisabled(state),
	};
};

const FAQPage = compose(
	connect(mapStateToProps),
	injectIntl
)(FAQPageComponent);

export default FAQPage;;
