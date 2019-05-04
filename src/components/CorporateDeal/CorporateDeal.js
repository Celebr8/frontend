import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '..';

import { PricingTable } from './pricingTable';

import css from './CorporateDeal.css';

import image1 from './img/employee_benefit_image_01.png';

const CorporateDeal = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>

      <section className={css.container}>
				<p>The main focus of an employees benefits strategy, in any organisation, is to improve talent attraction and employee retention. The latter is especially important because losing a valued employee can cost up to 5x their annual salary.</p>
      </section>

      <section className={css.boxes}>
				<div className={css.container}>
					<div className={css.boxLeft}>
						<img src={image1}></img>
						<h3>Win win for everyone!</h3>
						<p>Give your employees the benefit of enjoying an One4all Gift Card of up to <span><b>€ 300.00</b></span> on us, with every party they book through Whichost!</p>
						<p>How many of your employees would be more inclined to stay if they had good benefits? <b>75% of them</b>.</p>
                        <p>And what’s the number one benefit for them? Plenty of research confirms that the number one benefit for employees is having <b>more money in their bank accounts</b>.</p>
					</div>
				</div>
        </section>

      <section>
        <br></br><b>That can come mainly in four ways:</b>
            <ol>
                <li>Benefits that saves them time (time is money);</li>
                <li>Benefits that saves them money;</li>
                <li>Benefits that give them money;</li>
                <li>Higher salary (more money).</li>
            </ol>
      </section>

    <section>
                <p>With Whichost, you and your employees can easily find and book pubs to host your parties, which in itself is already an amazing benefit (it saves time).</p>
                <p>With our Employee Benefit, we want to give your employees the benefit of receiving an One4all Gift Card of up to €300.00 in value (it gives money) with every party.</p>
								<p><strong>Your employees already book pubs to host their parties and celebrations (birthdays, promotions, graduations, farewells, etc.) so why not give them another reason to celebrate.</strong></p>
    </section>

    <h2>This is how it works</h2>
      <ul>
        <p><li>They will get will get 100% of their booking payment back once the booking is confirmed. This will come either as a refund or credit to their party bill receipt.</li></p>
				<p><li>They will receive up to €280.00 in an One4all Gift Card for parties held between Thursdays and Sundays, depending on the size of the party (see table below).</li></p>
				<p><li>They will receive up to €300.00 in an One4all Gift Card for parties held between Mondays and Wednesdays, depending on the size of the party (see table below).</li></p>
      </ul>
    <PricingTable />

    <p><b>We will add an extra €10.00 to the One4all Gift Card</b> if they have their party at a pub that they recommended to us<b>*</b>. They can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.</p>
    <p><i>* Valid only for recommendations of pubs that are not already listed on Whichost.</i></p>


      <section className={css.getInTouch}>
				<h3>Don't let your employees wait. Reward them now!</h3>
				<p>If providing employees with great benefits is very important for your organisation, contact us and we will be more than happy to have a chat and provide you with detailed information about our Whichost Employees Benefit and how to implement it.</p>
				<div className={css.btnGroup + ' ' + css.containerButton}>
					<section className={css.centerButtons}>
             <NamedLink name="ContactUsPage">
                <button type="submit">Contact us</button>
             </NamedLink>
             <a target="_blank" href="https://calendly.com/whichost/30min">
                <button type="submit">Request a Callback</button>
             </a>
					</section>
				</div>
			</section>

    <details>
            <summary id="termsAndConditions">Terms and Conditions</summary>
            <p>

    <ol>

		<li>The Whichost Employee Benefit is currently available only for Ireland and the UK.</li>

		<li>The employee must register to Whichost using their organisation email address and have their Whichost account fully completed.
			<ol>
				<li>Users with an incomplete profile and using an email different than the one provided by your organisation, will not avail of this benefit.</li>
				<li>If an employee was already a user of Whichost previously to this benefit, the user needs to change the email address in their Whichost account to their organisation email address.</li>
			</ol>
		</li>

		<li>The employee gets a 100% of their booking payment back  once the booking is confirmed and not within five days of making use of the booking (having the celebration/party) as per the normal procedure. This will come either as a refund or credit to their party bill receipt.
			<ol>
				<li>A refund goes back to the same payment method used to request the booking;</li>
				<li>A refund might take between 7-15 business days. The speed depends entirely on the financial institution used by the employee;</li>
			</ol>

		</li>
		<li>By having the party through Whichost between Thursdays and Sundays, and reviewing the pub, the employee  will receive an One4all Gift Card of up to €280.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 20.00</li>
				<li>31 to 50 people - € 45.00</li>
				<li>51 to 100 people - € 80.00</li>
				<li>101 to 200 people - € 160.00</li>
				<li>201+ people - € 270.00</li>
			</ul>

			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if the employee has the party at a pub that they recommended to us*. The employee can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The employee that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked at least one full week (7 days) after recommending the pub. That will give Whichost enough time for the pub to be listed.</li>
					</ol>
				</li>
				<li>Only the employee that booked the pub can post the review.</li>
				<li>One review per booked party.</li>
				<li>The employee must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
					<ol>
						<li>The employee can prove that they held the party with an Instagram post:
							<ol>
								<li>The post must be generated by the same employee that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Instagram, the employee must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the employee’s Instagram account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The employee can prove that they held the party with an Facebook post:
							<ol>
								<li>The post must be generated by the same employee that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Facebook, the employee must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the employee must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the employee’s Facebook account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The employee can prove that they held the party with an Twitter post:
							<ol>
								<li>The post must be generated by the same employee that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Twitter, the employee must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the employee must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the employee’s Twitter account for at least one full week (7 days).</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>The review must be submitted within one week of making use of the booking.</li>
				<li>All One4all Gift Cards are sent electronically to the employee’s email address in their Whichost account.</li>
			</ol>
		</li>
		<li>By having the party through Whichost between Mondays and Wednesdays, and reviewing the pub, the employee will receive an One4all Gift Card of up to €300.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 30.00</li>
				<li>31 to 50 people - € 55.00</li>
				<li>51 to 100 people - € 95.00</li>
				<li>101 to 200 people - € 175.00</li>
				<li>201+ people - € 300.00</li>
			</ul>

			<ol>
				<li>Only the employee that booked the pub can post the review.</li>
				<li>One review per booked party.</li>
				<li>The employee must provide proof that the party was held. For this they can use Instagram, Facebook or Twitter as follows:
					<ol>
						<li>The employee can prove that they held the party with an Instagram post:
							<ol>
								<li>The post must be generated by the same employee that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Instagram, the employee must properly tag the Whichost Instagram account by entering @whichost in the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the employee’s Instagram account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The employee can prove that they held the party with an Facebook post:
							<ol>
								<li>The post must be generated by the same employee that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Facebook, the employee must properly tag the Whichost Facebook page by entering @whichost in the post and selecting the Whichost Facebook Page from the options that will be presented. For this to happen, the employee must Like the Whichost Facebook Page previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the employee’s Facebook account for at least one full week (7 days).</li>
							</ol>
						</li>
						<li>The employee can prove that they held the party with an Twitter post:
							<ol>
								<li>The post must be generated by the same employee that booked the party.</li>
								<li>The post must be a picture of the party being held at the pub, which means capturing as many of the party participants as possible at the pub.</li>
								<li>When posting the picture on Twitter, the employee must properly tag the Whichost Twitter account by entering @whichostie in the post. For this to happen, the employee must follow the Whichost Twitter account previous to the post. This will be the way for us to track.</li>
								<li>The post must be kept live on the employee’s Twitter account for at least one full week (7 days).</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>The review must be submitted within one week of making use of the booking.</li>
				<li>All One4all Gift Cards are sent electronically to the employee’s email address in their Whichost account.</li>
			</ol>
		</li>
		<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
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
					<li>Aoife, a fictitious employee of yours, registers to Whichost using her organisation email address.</li>
					<li>Aoife completes her profile.</li>
					<li>Aoife requests a booking at a pub that is managed by Whichost.</li>
					<li>The booking is confirmed.</li>
					<li>Aoife’s 100% refund is triggered (if the listing is managed by Whichost).</li>
				</ol>
			</li>
			<li><b>Example explaining how to avail the One4all Gift Card if the pub was already listed on Whichost:</b>
				<ol>
					<li>Aoife, a fictitious employee of yours, registers to Whichost using her organisation email address.</li>
					<li>Aoife completes her profile.</li>
					<li>Aoife requests a booking for 20 people at a pub that is managed by Whichost.</li>
					<li>The booking is confirmed.</li>
					<li>Aoife’s 100% refund is triggered (if the listing is managed by Whichost).</li>
					<li>Aoife enjoys the party and while at it, she posts an image of the party on her Instagram/Facebook/Twitter account, tagging Whichost in that post.</li>
					<li>Aoife keeps the post live for at least a full week (7 days) on her Instagram/Facebook/Twitter account.</li>
					<li>Aoife writes a review for the pub on Whichost.</li>
					<li>Whichost checks the Instagram/Facebook/Twitter post and the bookings in the platform and if everything matches, they send:
						<ol>
							<li>A €20.00 One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Thursday, Friday, Saturday or Sunday.</li>
							<li>A €30.00 One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Monday, Tuesday or Wednesday.</li>
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
							<li>A €30.00 (€20.00 for the party of 20 + €10.00 for the pub recommendation) One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Thursday, Friday, Saturday or Sunday.</li>
							<li>A €30.00 One4all Gift Card to Aoife’s email address (the one registered in her Whichost account) if the party was held on a Monday, Tuesday or Wednesday.</li>
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

CorporateDeal.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

CorporateDeal.propTypes = {
  rootClassName: string,
  className: string,
};

export default CorporateDeal;
