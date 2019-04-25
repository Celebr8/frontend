import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '..';

import { PricingTable } from './pricingTable';

import css from './BirthdayDeal.css';

import image1 from './img/birthday_deal_image_01.png';
import image2 from './img/birthday_deal_image_02.png';
import image3 from './img/birthday_deal_image_03.png';


const BirthdayDeal  = props => {
	const { rootClassName, className } = props;
	const classes = classNames(rootClassName || css.root, className);

	const termsAndConditionsTitle = (<h2>Terms and conditions</h2>);
	const examplesTitle = (<h2>Examples</h2>);

	// prettier-ignore
	return (

		<div className={classes}>

			<section className={css.container}>
				<p>Book your birthday party through Whichost and treat yourself! With Whichost, you can easily and quickly find and book unique, inspiring spaces to host your parties, which in itself is already an amazing benefit.</p>
				<p><span>Enjoy an One4all Gift Card of up to <b>€ 230.00</b> on us, by just following these simple three steps!</span></p>
			</section>

			<section className={css.boxes}>
				<div className={css.container}>
					<div className={css.boxLeft}>
						<img src={image1}></img>
						<h3>Happy Birthday!</h3>
						<p>At Whichost we are all about giving back! That’s why we reward you for celebrating with us.</p>
						<p>Search for a pub, select “Birthday party” under occasion type and book it (step 1).</p>
						<section className={css.readMore}>
							<a href="https://www.whichost.com/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756" target="_blank">Browse pubs now -></a>
						</section>
					</div>
				</div>
			</section>

			<section className={css.boxes}>
				<div className={css.container}>
					<div className={css.boxRight}>
						<img src={image2}></img>
						<h3>Have a great time!</h3>
						<p>Take your friends out and show them how to party without leaving a mess. It’s all about leaving the place as you would like to find it (step 2).</p>
						<section className={css.readMore}>
							<NamedLink name="CommunityGuidelinesPage" target="_blank">Community guidelines -></NamedLink>
						</section>
					</div>
				</div>
			</section>

			<section className={css.boxes}>
				<div className={css.container}>
					<div className={css.boxLeft}>
						<img src={image3}></img>
						<h3>Let us know how it was!</h3>
						<p>Show us how you party. Gather your party group together, take a picture, post it on social media and let us know how your party was by tagging Whichost (step 3).</p>
						<section className={css.readMore}>
							<a href="#termsAndConditions">Read more about the terms -></a>
						</section>
					</div>
				</div>
			</section>
			<br/><br/>
			<section>
				<p>With our Birthday Deal, we want to give you a special gift on your birthday where you will receive an One4all Gift Card of up to €230.00 in value.</p>
				<h2>This is how it works</h2>
				<ul>
					<p><li>You will get will get 100% back of your booking payment once it’s confirmed. This will come either as a refund or credit to your party bill receipt.</li></p>
					<p><li>Receive up to €200.00 in an One4all Gift Card for parties held between Thursdays and Sundays, depending on the size of the party (see table below).</li></p>
					<p><li>Receive up to €230.00 in an One4all Gift Card for parties held between Mondays and Wednesdays (see table below).</li></p>
				</ul>
			</section>

			<PricingTable />

			<p><b>We will add an extra €10.00 to the One4all Gift Card</b> if you have your party at a pub that you recommended to us<b>*</b>. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.</p>
			<p><i>* Valid only for recommendations of pubs that are not already listed on Whichost.</i></p>

			<section>

			</section>

			<section className={css.getInTouch}>
				<h3>Do you have any questions?</h3>
				<p>Don't hesitate to contact us via the highlighted options below. As we don't sleep at all, we'll get back to you very soon.</p>
				<div className={css.btnGroup + ' ' + css.containerButton}>
					<section className={css.centerButtons}>
						<NamedLink name="ContactUsPage">
							<button type="submit">Contact us</button>
						</NamedLink>
					</section>
				</div>
			</section>
			<details>
				<summary id="termsAndConditions">Terms and Conditions</summary>
				<p>
					<ol>
						<li>The Whichost Birthday Deal is currently available only for Ireland and the UK.</li>
						<li>You must have your Whichost account fully completed, especially the Birthday field.
							<ol>
								<li>Users with an incomplete profile and no Birthday date indicated, will not avail of this benefit.</li>
							</ol>
						</li>
						<li>You get 100% back of your booking payment once it’s confirmed and not within five days of making use of the booking (having the celebration/party) as per the normal procedure. This will come either as a refund or credit to your party bill receipt.
							<ol>
								<li>A refund goes back to the same payment method used to request the booking;</li>
								<li>A refund might take between 7-15 business days. The speed depends entirely on your financial institution;</li>
								<li>The refund benefit is only valid for listings that are managed by Whichost.
									<ol>
										<li>You can find this information at the bottom of the description of the listing. If it's managed by Whichost it will say: <b>“This listing is managed by Whichost.”</b></li>
									</ol>
								</li>
							</ol>

						</li>
						<li>By having your party through Whichost between Thursdays and Sundays, and reviewing the pub, you will receive an One4all Gift Card of up to €200.00, depending on the size of the party as follows:
							<ul>
								<li>Up to 30 people - € 15.00</li>
								<li>31 to 50 people - € 35.00</li>
								<li>51 to 100 people - € 60.00</li>
								<li>101 to 200 people - € 115.00</li>
								<li>201+ people - € 200.00</li>
							</ul>
							<ol>
								<li>Whichost will add an extra €10.00 to the One4all Gift Card if the user has the party at a pub that they recommended to us*. The user can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
									<ol>
										<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
										<li>The user that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
										<li>The party must be booked at least one full week (7 days) after recommending the pub. That will give Whichost enough time for the pub to be listed.</li>
									</ol>
								</li>
								<li>Only the user that booked the pub can post the review.</li>
								<li>One review per booked party.</li>
								<li>The user must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
									<ol>
										<li>The user can prove that they held the party with an Instagram post:
											<ol>
												<li>The post must be generated by the same user that booked the party.</li>
												<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
												<li>When posting the picture on Instagram, the user must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
												<li>The post must be kept live on the user's Instagram account for at least one full week (7 days).</li>
											</ol>
										</li>
										<li>The user can prove that they held the party with an Facebook post:
											<ol>
												<li>The post must be generated by the same user that booked the party.</li>
												<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
												<li>When posting the picture on Facebook, the user must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the user must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
												<li>The post must be kept live on the user’s Facebook account for at least one full week (7 days).</li>
											</ol>
										</li>
										<li>The user can prove that they held the party with an Twitter post:
											<ol>
												<li>The post must be generated by the same user that booked the party.</li>
												<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
												<li>When posting the picture on Twitter, the user must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the user must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
												<li>The post must be kept live on the user's Twitter account for at least one full week (7 days).</li>
											</ol>
										</li>
									</ol>
								</li>
								<li>The review must be submitted within one week of making use of the booking.</li>
								<li>All One4all Gift Cards are sent electronically to the user’s email address in their Whichost account.</li>
							</ol>
						</li>
						<li>By having the party through Whichost between Mondays and Wednesdays, and reviewing the pub, the user will receive an One4all Gift Card of up to €230.00, depending on the size of the party as follows:
							<ul>
								<li>Up to 30 people - € 25.00</li>
								<li>31 to 50 people - € 45.00</li>
								<li>51 to 100 people - € 75.00</li>
								<li>101 to 200 people - € 130.00</li>
								<li>201+ people - € 230.00</li>
							</ul>

							<ol>
								<li>Only the user that booked the pub can post the review.</li>
								<li>One review per booked party.</li>
								<li>The user must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
									<ol>
										<li>The user can prove that they held the party with an Instagram post:
											<ol>
												<li>The post must be generated by the same user that booked the party.</li>
												<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
												<li>When posting the picture on Instagram, the user must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
												<li>The post must be kept live on the user’s Instagram account for at least one full week (7 days).</li>
											</ol>
										</li>
										<li>The user can prove that they held the party with an Facebook post:
											<ol>
												<li>The post must be generated by the same user that booked the party.</li>
												<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
												<li>When posting the picture on Facebook, the user must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the user must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
												<li>The post must be kept live on the user’s Facebook account for at least one full week (7 days).</li>
											</ol>
										</li>
										<li>The user can prove that they held the party with an Twitter post:
											<ol>
												<li>The post must be generated by the same user that booked the party.</li>
												<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
												<li>When posting the picture on Twitter, the user must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the user must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
												<li>The post must be kept live on the user’s Twitter account for at least one full week (7 days).</li>
											</ol>
										</li>
									</ol>
								</li>
								<li>The review must be submitted within one week of making use of the booking.</li>
								<li>All One4all Gift Cards are sent electronically to the user’s email address in their Whichost account.</li>
							</ol>
						</li>
						<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
						<li>Whichost users can avail this benefit only once per year.</li>
						<li>Whichost reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be published immediately.</li>
					</ol>
				</p>
		</details>

		<details>
		<summary>Examples</summary>
		<p>Below you will find examples of each of the benefits and how to avail them.</p>
		<p>
			<ol>
				<li><b>Example explaining how to avail the 100% refund benefit:</b>
					<ol>
						<li>Aoife registers to Whichost.</li>
						<li>Aoife completes her profile and indicates her birthday in it.</li>
						<li>Aoife requests a booking at a pub that is managed by Whichost, to celebrate her birthday.</li>
						<li>The booking is confirmed.</li>
						<li>Aoife’s 100% refund is triggered (if the listing is managed by Whichost).</li>
					</ol>
				</li>
				<li><b>Example explaining how to avail the One4all Gift Card if the pub was already listed on Whichost:</b>
					<ol>
						<li>Aoife registers to Whichost.</li>
						<li>Aoife completes her profile and indicates her birthday in it.</li>
						<li>Aoife requests a booking for a party of 20 people at a pub through Whichost, to celebrate her birthday.</li>
						<li>The pub confirms the booking.</li>
						<li>Aoife’s 100% refund is triggered (if the listing is managed by Whichost).</li>
						<li>Aoife enjoys the party and while at it, she posts an image of the party on her Instagram/Facebook/Twitter account, tagging Whichost in that post.</li>
						<li>Aoife keeps the post live for at least a full week (7 days) on her Instagram/Facebook/Twitter account.</li>
						<li>Aoife writes a review for the pub on Whichost.</li>
						<li>Whichost checks the Instagram/Facebook/Twitter post and the bookings in the platform and if everything matches, they send:
							<ol>
								<li>A €15.00 One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Thursday, Friday, Saturday or Sunday.</li>
								<li>A €25.00 One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Monday, Tuesday or Wednesday.</li>
							</ol>
						</li>
						<li>If the information does not match, for any reason, Whichost will contact Aoife to clarify.</li>
					</ol>
				</li>
				<li><b>Example explaining how to avail the One4all Gift Card if the pub was not already listed on Whichost and it was recommended:</b>
					<ol>
						<li>Aoife registers to Whichost.</li>
						<li>Aoife completes her profile.</li>
						<li>Aoife recommends a pub ABC to Whichost through the <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">‘Recommending a pub’</a> form provided by Whichost.</li>
		<li>Whichost adds the pub ABC to the platform and replies to Aoife confirming she can now book the party.</li>
		<li>Aoife requests a booking for a party of 20 people at pub ABC through Whichost.</li>
		<li>The pub confirms the booking.</li>
		<li>Aoife’s 100% refund is triggered (if the listing is managed by Whichost).</li>
		<li>Aoife enjoys the party and while at it, she posts an image of the party on her Instagram/Facebook/Twitter account, tagging Whichost in that post.</li>
		<li>Aoife keeps the post live for at least a full week (7 days) on her Instagram/Facebook/Twitter account.</li>
		<li>Aoife writes a review for the pub on Whichost.</li>
		<li>Whichost checks the Instagram/Facebook/Twitter post and the bookings in the platform and if everything matches, they send:
			<ol>
				<li>A €25.00 (€15.00 for the party of 20 + €10.00 for the pub recommendation) One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Thursday, Friday, Saturday or Sunday.</li>
				<li>A €25.00 One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Monday, Tuesday or Wednesday.</li>
			</ol>
		</li>
		<li>If the information does not match, for any reason, Whichost will contact Aoife to clarify.</li>
	</ol>
</li>
		</ol>
		</p>
		</details>

	</div>



	);
	};

	BirthdayDeal.defaultProps = {
		rootClassName: null,
			className: null,
	};

	const { string } = PropTypes;

	BirthdayDeal.propTypes = {
		rootClassName: string,
			className: string,
	};

	export default BirthdayDeal;
