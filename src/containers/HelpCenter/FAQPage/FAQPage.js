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
			<h2>General</h2>
				<ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How does Whichost work?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Whichost is a marketplace for booking some of the most unique and amazing spaces for your parties and celebrations. We connect you with the businesses you love and new ones you might not have thought about previously. You can search for pubs, compare prices and amenities, request to book, and easily and securely pay through our platform.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What does Whichost do?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Our marketplace is a platform that allows anyone to create an account in seconds, discover pubs, book them and pay hassle free. For businesses, we make it easy to add your pub, manage booking requests, message directly to customers, and securely accept payments. As a company, we operate the marketplace platform, market pubs to customers, support the community, and ensure that both sides have the best experience possible.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What if my business is not a pub? Can I list it on Whichost?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Our marketplace is a platform initially designed for pubs. However, we understand that some businesses may have a similar customer audience and business operation as pubs do. If you believe your business can be listed in our marketplace, please email us at grow@whichost.com.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How does the Whichost pricing work?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Whichost has a simple, straightforward pricing where you pay as you go. No setup, monthly or hidden fees. You can review all the details in our <a href="#">Fees page</a>.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What if I don't charge for bookings?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						We understand that for the longest time most parties have been booked without any upfront payment. However, the users' behaviour is changing and more and more they are getting used to having to pay upfront for all types of bookings. Charging upfront for users to requesting a booking at your business makes them have skin on the game, which will significantly reduce the probability of a no-show. As an idea, you can always tell your customers that the money they pay for the booking will be used as credit for their receipt.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What happens when I mark a booking as a No-Show?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						When you mark a booking as No-Show, three things will happen:
						<ol>
							<li>We will refund you for that booking;</li>
							<li>The customer will be notified of the No-Show;</li>
							<li>The customers internal account will be updated with the No-Show;</li>
							<li>Once a customer accumulates 4 (four) No-Shows, their account is suspended.</li>
						</ol>
						<a href="#">Report a No-Show</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What if I have a booking fee depending on the number of people coming to the party?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						In cases where you charge a booking fee depending on group size, we recommend you having different listings since you can limit the number of people who can attend and the price per hour, per listing.
						<br/><br/>So, in one listing you set the limit of the group size to the maximum number of people where the booking fee is a set price. To give you an idea, let's say for example that you usually charge a booking fee if the group size is more than 20 people. In this first listing, you set the maximum group size limit to 20. Up to 20 people, you will charge a minimum amount for the booking.
						<br/><br/>In the second listing, you set the minimum group size to 21 (because this is where you start charging a different price for the booking) and the maximum depending on how many people you can receive. Let's say for example your pub can receive 50 people. So in this second listing, the group size limits are a minimum of 20 and a maximum of 50 people, and in this listing you set up a different booking fee.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What is the "6% back" that you mention?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						At Whichost we believe for-profit organisations not only have a responsibility to provide value to society, but also a responsibility to give back so we can all live in a better world!
						<br/><br/>That's why at Whichost, every three months, we will take 6% of our revenue and donate it to local non-profit organisations that are focused on making this world a better place.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Do I need to create an account?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						You can discover and browse pubs without creating an account. To message a pub, request a booking, or list your pub you will be prompted to create a user account. All user accounts require an email verification. You must also add further verification and payment information when listing your pub.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How to get good-looking profile pictures?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						The ideal image ratio should be 3:2, for example 750x500 pixels or 1500x1000 pixels. You can use a basic image editor (like "Paint") or some online tools like "Cropp.me" or "Cut My Pic".
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel11'} onChange={this.handleChange('panel11')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What countries do you support?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Whichost is an open platform marketplace that aims to operate worldwide. However, at this stage, we will only operate in Ireland. We will make announcements as we open operations in more countries. We are a fresh bootstrap startup on a mission, located in Cork, Ireland.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel12'} onChange={this.handleChange('panel12')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>I don't see my questions here.</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Please, feel free to contact us at <a href="mailto:support@whichost.com?subject=Help Center Question" target="_blank">support@whichost.com</a>. We'll be happy to answer all of your questions.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>

				<h2>Pubs</h2>
				<ExpansionPanel expanded={expanded === 'panel13'} onChange={this.handleChange('panel13')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Why should I list my pub on Whichost?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						<ol>
							<li>Get new customers from around the world.</li>
							Whichost allows you to showcase your pub to the millions of locals and tourists that move through your country every year, in a way that you couldn’t before. Locals, just as tourists, love to celebrate and they will need to find a place to do it. Why not at your pub?
							<br/><br/>
							<li>Generate more revenue.</li>
							Listing your pub on Whichost opens up a world of new opportunities for new customers and more parties, thus making you extra cash! You earn more money simply by hosting more parties, at your pub, for locals and travellers from all over the world!
							<br/><br/>
							<li>Develop long-lasting relationships.</li>
							It will be easier for your customers to stay in touch with you, no matter where in the world they are. You will be able to build long-lasting relationships with them and increase their potential for repeat bookings and recommendations.
							<br/><br/>
							<li>Invest in something you couldn't afford before.</li>
							As a result of generating more revenue by hosting more celebrations at your pub, you can now invest in that new thing you’ve always dreamed of.
							<br/><br/>
							<li>Reason to update your pub (good excuse).</li>
							There are always things you can do to spruce up your pub but sometimes the motivation is too much of an ask. Becoming a host on Whichost gives you the excuse to freshen up your pub. It gives you that extra push (and cash) to give the walls a lick of paint or to revamp the furnishings.
						</ol>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel14'} onChange={this.handleChange('panel14')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do I list my pub on Whichost?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Adding your pub to Whichost is easy and only takes a few minutes. Once you’ve created a Whichost account, simply click the “+ Add my pub” at the top right.
						Please note that all listings are subject to review by our team to ensure the safety of our community. If you need help with your listing, please email us at <a href="mailto:support@whichost.com?subject=How do I list my pub inquiry" target="_blank">support@whichost.com</a>.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel15'} onChange={this.handleChange('panel15')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What are the type of listings available (Common, Private and Free)?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						When listing your pub you first will be prompted to choose one of the two listing types. Here are the main differences between them:

						<ol>
							<li>Common Spaces</li>
							This is the most common listing type. A common space is where you can have more than one booking at the same time. Usually, common spaces are the common areas of your pub.
							<br/><br/>With this type of listing:
								<br/>- you can set up a price per night
								<br/>- the calendar is available and
								<br/>- reviews are available.
							<br/><br/>When a customer requests a booking in your common space it's important for you to keep an eye on the number of people coming, and the parties that you have already accepted for the day requested.
							Setting up a price will reduce the number of no-shows in your pub and increase the quality of customers. The minimum price you can set up, regardless if you go with per night or per person, is €9.00. We always recommend you indicating to your customers, in the description of your listing, that the payment will be used as credit for their tab since this is a common practice and most customers will expect that.
							You can list more than one common space if you need to.
							<br/><br/>
							<li>Private Spaces</li>
							This listing type is for those spaces in your pub that customers can book to have private parties. As the name indicates, they are private spaces so as soon as a customer books it, that space will only available for that party and for that period of time.
							<br/><br/>With this type of listing:
								<br/>- you can set up a price per night
								<br/>- the calendar is activated and
								<br/>- reviews are available.
							<br/><br/>You can clearly indicate the days of the week and times in which your private space is available. As a customer requests a booking in your private space and you confirm the booking, that night (or those hours) will be reserved, so no other customer will be able to make a booking request for the same date and times.
							<br/><br/>Setting up a price will reduce the number of no-shows in your pub and increase the quality of customers. The minimum price you can set up, regardless if you go with per night or per hour, is €9.00. We always recommend you indicating to your customers, in the description of your listing, that the payment will be used as credit for their tab since this a common practice and most customers will expect that.
							<br/><br/>You can list more than one private space if you need to.
						</ol>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel16'} onChange={this.handleChange('panel16')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How much does it cost to list my pub?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						We currently don't charge anything to list your pub on Whichost. It's completely free. <a href="https://www.whichost.com/l/new" target="_blank">List your pub now</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel17'} onChange={this.handleChange('panel17')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Do you charge transaction fees for bookings?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						We charge a small amount in form of a deposit. It's only fair. <a href="https://www.whichost.com/help/fees" target="_blank">Learn more about our fees.</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel18'} onChange={this.handleChange('panel18')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Why do you charge transaction fees?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Whichost is a fresh and self-funded startup. Instead of starting a venture-backed startup that focuses on vanity metrics, revenue at all costs, and expectations of investors, we’ve chosen to keep Whichost a self-funded company. We’ve raised € 0.00 to date and this is something that we're incredibly proud of. We would rather build a platform that is so valuable that the community is willing to pay for Whichost, we can reinvest revenue in the site, and we commit ourselves to building the best online community for pubs in the world.
						<br/><br/>If at any time you feel that Whichost's pricing is not worth the nominal fee to support the site, community, and offer the level of service and commitment that we do, please email us at <a href="mailto:support@whichost.com" target="_blank">support@whichost.com</a>. We will cancel your account for you if needed. We would also love to hear your feedback (good and bad at <a href="mailto:feedback@whichost.com" target="_blank">feedback@whichost.com</a>), learn more about your pub's needs, and find the best way that Whichost can help you.
						<br/><br/><a href="https://www.whichost.com/help/fees" target="_blank">Learn more about our fees.</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel19'} onChange={this.handleChange('panel19')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Can I add multiple spaces that I have at my pub?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Yes! You can add multiple spaces that you have at your pub. To create a listing for one of your spaces just click on <a href="https://www.whichost.com/l/new" target="_blank">"+Add your pub"</a> at the top right.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel20'} onChange={this.handleChange('panel20')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How to get good-looking listing pictures?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						The ideal image ratio should be 3:2, for example 660x440 pixels or 1500x1000 pixels.
						<br/><br/>If the uploaded image ratio is within 20% of the 3:2 ratio, for example 680x440 pixels, it will be cropped to the target ratio (660x440 pixels) to avoid gray bars on the sides. If the image is not even close to the target ratio (e.g. more than 20% should be cropped), for example 1200x440 pixels, no cropping will happen at all.
						<br/><br/>You can use a basic image editor (like Paint) or some online tools like "Cropp.me" or "Cut My Pic".
						<br/><br/>In the case that you don't have quality images of your space(s) and need help with it, please contact us at <a href="mailto:support@whichost.com" target="_blank">support@whichost.com</a> and we'll put you in touch with a photographer.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel21'} onChange={this.handleChange('panel21')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do I price my pub on Whichost?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						We put pricing in the hands of pubs. You can price your pub at your discretion and please take local rates, taxes, Whichost fees, and other fees into consideration when listing your hourly rate. You can also make the booking at your pub free.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel22'} onChange={this.handleChange('panel22')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What information should I put on my listing page, in the description?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Your listing description should be an accurate description of your space(s), amenities, how it is typically used, and what customers can expect. The community loves discovering new pubs and the more detailed and inspiring you can be, the more booking requests you will receive. You can also mention and detail additional services you offer. If you have particular pub policies, rules, expectations, booking terms, etc please also include this in your listing.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel23'} onChange={this.handleChange('panel23')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>What cancellation policy can I use with my listing?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						At Whichost we do not have pre-designed cancellation policies since it is very common for users to cancel parties even the same day it was schedule to take place.
						<br/><br/>We do advise users to cancel as soon as possible to not affect your operation.
						<br/><br/> If a customer booked your space b ut they didn't showed up, we reccomend you to <a href="#">Report a No-Show.</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel24'} onChange={this.handleChange('panel24')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Do I get a unique web address for my listing?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Yes. Every listing inside Whichost has its own web address that you can copy and share everywhere. To get your unique web address:
						<ol>
							<li>Log in to your Whichost account;</li>
							<li>Hover over your profile image (top right corner) and click on "Your Listings" in the menu that will appear;</li>
							<li>Click on one of your open listings;</li>
							<li>Once the listing loads, you will find your unique listing web address at the top of your web browser, inside the address field.</li>
						</ol>
							Now you can copy and share your unique listing web address everywhere. See below how to use it to add a booking button to your Faceboogk Page.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel25'} onChange={this.handleChange('panel25')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do I add a booking button to my pub's Facebook page?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						To add a booking button to your Facebook page, you'll need to have admin, editor, moderator or advertiser rights assigned on the Facebook page. To add a booking button to your page:<ol>
							<li>Click + Add a Button below your Page's cover photo (or hover over your current button to edit it);</li>
							<li>Select "Make a booking with you" from the options and mark "Book Now";</li>
							<li>Click Next;</li>
							<li>Select "Link to website" from the options and enter your listing web address (see question above to get your listing web address) in the box that will appear;</li>
							<li>Click Finish.</li>
						</ol>
						Once the button has been created, you can test your button:
						<ol>
							<li>Hover over your button;</li>
							<li>Select Test Button.</li>
						</ol>
							</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel26'} onChange={this.handleChange('panel26')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do I add my payout information?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						All accounts that have a pub listing must add payout information in order to receive booking requests. Whichost uses Stripe to power payments. Adding your payout information is easy and can be done in these steps:
						<ol>
							<li>When logged into your Whichost account, click on the top right account avatar and then “Account settings” in the drop-down;</li>
							<li>On the left navigation, click on “Payments” which will take you to the “Payment settings”;</li>
							<li>Enter your contact information (required by Stripe for verification) and bank account information.</li>
							</ol>
							If at any time you need help with this, please email us at <a href="mailto:support@whichost.com?subject=Adding my payout information" target="_blank">support@whichost.com</a>
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel27'} onChange={this.handleChange('panel27')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do I accept a booking request?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						You can easily accept a booking request by doing the following:
						<ol>
							<li>When logged into your Whichost account, click on “Inbox” in the top right navigation;</li>
							<li>On the left side navigation of your Messages Inbox, select the “Booking Requests” tab;</li>
							<li>Click on the booking request messages directly and you will see the option to accept or deny the booking request. Please note that you can also message the customer directly on the request to clarify any details or let them know about availability.</li>
						</ol>
							</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel28'} onChange={this.handleChange('panel28')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Do I have to accept a booking request?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						You are not required to accept a request and you may decline any request. If you take no action to accept or deny a request, the booking request will automatically expire in 72 hours. If you missed the request by accident, you can message the customer directly from their expired request and suggest that they make another request.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel29'} onChange={this.handleChange('panel29')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Does Whichost screen customers?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Whichost verifies some information about customers and hosts to help make the community a safer place for everyone. As a host, for added security, you can also ask potential customers to provide an official ID.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel30'} onChange={this.handleChange('panel30')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do reviews work?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Trust between pubs and customers is essential. One way to build trust is with rates and comments to each other, after a transaction. This is how trust is built with Whichost. After a booking is used, both the pub and the customer can review each other. A review consists of:
						<ol>
							<li>A positive or negative rating (thumbs up or down);</li>
							<li>A free-form text comment.</li>
						</ol>
						If you want you can choose not to review the customer. However, you can't refuse a review from the customer after a used booking. Reviews are visible to everyone on each user's profile page. A pub’s rating (percentage of positive ratings and number of ratings) is also shown on each listing page.
						<br/><br/><i>Please note that reviews are only available for paid transactions.</i>
							</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel31'} onChange={this.handleChange('panel31')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Is it possible to edit or delete reviews?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Currently, it is not possible to edit or delete reviews. If there is an issue with a review, you can email us at <a href="mailto:support@whichost.com?subject=Review Dispute inquiry" target="_blank">support@whichost.com</a> and we'll be happy to help.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel32'} onChange={this.handleChange('panel32')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How much time do I have to respond to booking requests?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						You have 72 hours (3 days) to either accept or deny a booking request. After 72 hours, the booking request will automatically expire. If you missed the request by accident, you can message the customer directly from their expired request and suggest that they make another request.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel33'} onChange={this.handleChange('panel33')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Can I modify a booking request?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						Once a booking request is sent, the dates, amount, and details of the booking request cannot be modified. This is a booking agreement, so please note that we require the booking request to be resent with the accurate dates, time, price, and details per our Terms of Service and Community Guidelines.
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel34'} onChange={this.handleChange('panel34')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>How do I charge for additional services?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						If you offer additional services that are not included in your listings price, you can choose to mention them in your listing's description. This can be done during your initial pub listing creation or by editing it at any time from your dashboard. Please note that we do not offer additional services to be booked part of pub booking currently on our platform and this is outside the Services Agreement.
						<br/><br/>If you want your customers to be able to book your additional services (like finger food or drink vouchers) directly during the initial booking process, please send us a feedback at <a href="mailto:feedback@whichost.com?subject=Additional Services Feedback" target="_blank">feedback@whichost.com</a>. We appreciate every piece of feedback that we receive from you!
						</Typography>
					</ExpansionPanelDetails>
				</ExpansionPanel>
				<ExpansionPanel expanded={expanded === 'panel35'} onChange={this.handleChange('panel35')}>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.headingNoDetails}><b>Can I request a deposit?</b></Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
						We do not currently have a deposit option, but instead only offer full booking payments to be accepted on our platform. If you require a deposit, accept a booking request, and do not use Whichost for the full payment of this, please note that this is outside our Services Agreement and a Booking Agreement.
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
