import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './LegalsDeals.css';

const LegalsDeals = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: May 30, 2019</p>
      <h2 id="birthday_gift">Birthday Gift</h2>
			<p><ol>
		<li>The Whichost Birthday Gift is currently available only for Ireland and the UK.</li>
		<li>You must have your Whichost account fully completed, especially the Birthday field.
			<ol>
				<li>Users with an incomplete profile and no Birthday date indicated, will not avail of this benefit.</li>
			</ol>
		</li>
		<li>You get 100% back of any booking price. This will come either as a refund or credit to your party bill receipt.
			<ol>
				<li>A refund goes back to the same payment method used to request the booking;</li>
				<li>A refund might take between 7-15 business days. The speed depends entirely on your financial institution;</li>
				<li>The refund benefit is only valid for listings that are managed by Whichost.</li>
			</ol>

		</li>
		<li>By having your party through Whichost between Thursdays and Sundays, you will receive a One4all Gift Card of up to €200.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 15.00</li>
				<li>31 to 50 people - € 35.00</li>
				<li>51 to 100 people - € 60.00</li>
				<li>101 to 200 people - € 115.00</li>
				<li>201+ people - € 200.00</li>
			</ul>
			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if you have the party at a pub that you recommended to us*. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The user that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked through Whichost at least one full week (7 days) after recommending the pub. That will give Whichost enough time to list the pub.</li>
					</ol>
				</li>
				<li>Only the user that booked the pub can post a review.</li>
				<li>One review per booked party.</li>
				<li>All One4all Gift Cards are physical cards. We will require an address to deliver it.</li>
			</ol>
		</li>
		<li>By having the party through Whichost between Mondays and Wednesdays, you will receive a One4all Gift Card of up to €230.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 25.00</li>
				<li>31 to 50 people - € 45.00</li>
				<li>51 to 100 people - € 75.00</li>
				<li>101 to 200 people - € 130.00</li>
				<li>201+ people - € 230.00</li>
			</ul>
			<ol>
				<li>Only the user that booked the pub can post a review.</li>
				<li>One review per booked party.</li>
				<li>All One4all Gift Cards are physical cards. We will require an address to deliver it.</li>
			</ol>
		</li>
		<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
		<li>Whichost users can avail this benefit only once per year.</li>
		<li>Whichost reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be published immediately.</li>
	</ol></p>
      <br/><br/>
      <h2 id="corporate_benefit">Corporate Benefit</h2>
			<p><ol>

		<li>The Whichost Corporate Benefit is currently available only for Ireland and the UK.</li>

		<li>You must use your organisation email address in your Whichost account, and have your account fully completed.
			<ol>
				<li>Users with an incomplete profile and using an email different than the one provided by the organisation, will not avail of this benefit.</li>
				<li>If you were already a user of Whichost previously to this benefit, you need to change the email address in your Whichost account to your organisation email address.</li>
			</ol>
		</li>

		<li>You get 100% back of any booking price. This will come either as a refund or credit to your party bill receipt.
			<ol>
				<li>A refund goes back to the same payment method used to request the booking;</li>
				<li>A refund might take between 7-15 business days. The speed depends entirely on your financial institution;</li>
				<li>The refund benefit is only valid for listings that are managed by Whichost.</li>
			</ol>
		</li>
		<li>By having the party through Whichost between Thursdays and Sundays, you  will receive a One4all Gift Card of up to €280.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 20.00</li>
				<li>31 to 50 people - € 45.00</li>
				<li>51 to 100 people - € 80.00</li>
				<li>101 to 200 people - € 160.00</li>
				<li>201+ people - € 270.00</li>
			</ul>

			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if you have the party at a pub that you recommended to us*. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The person that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked through Whichost at least one full week (7 days) after recommending the pub. That will give Whichost enough time to list the pub.</li>
					</ol>
				</li>
				<li>All One4all Gift Cards are physical cards. We will require an address to deliver it.</li>
			</ol>
		</li>
		<li>By having the party through Whichost between Mondays and Wednesdays, you will receive a One4all Gift Card of up to €300.00, depending on the size of the party as follows:
			<ul>
				<li>Up to 30 people - € 30.00</li>
				<li>31 to 50 people - € 55.00</li>
				<li>51 to 100 people - € 95.00</li>
				<li>101 to 200 people - € 175.00</li>
				<li>201+ people - € 300.00</li>
			</ul>

			<ol>
				<li>Whichost will add an extra €10.00 to the One4all Gift Card if you have the party at a pub that you recommended to us*. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
					<ol>
						<li>This is valid for recommendations of pubs not already listed on Whichost.</li>
						<li>The person that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
						<li>The party must be booked through Whichost at least one full week (7 days) after recommending the pub. That will give Whichost enough time to list the pub.</li>
					</ol>
				</li>
				<li>All One4all Gift Cards are physical cards. We will require an address to deliver it. We will confirm that address through the email in your Whichost account, which must be your organisation email address.</li>
			</ol>
		</li>
		<li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
		<li>Whichost reserves the right to change these terms and conditions at any time without prior notice. In the event that any changes are made, the revised terms and conditions shall be published immediately.</li>
	</ol></p>
      <br/><br/>
      <h2 id="recommend_reward">Recommend Reward</h2>
			<p>
      <ol>
        <li>The Whichost Recommend Reward is currently available only for Ireland and the UK.</li>
        <li>By having the party through Whichost at a pub that you recommend us, you will get a One4all Gift Card for the value of €15 which you can use in over 2,000 shops. You can recommend a pub at any time by <a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank">clicking here</a>.
          <ol>
            <li>This is valid for recommendations of pubs not already listed on Whichost.</li>
            <li>The person that recommended the pub must be the same one that books it through Whichost and celebrates their party there.</li>
            <li>All One4all Gift Cards are physical cards. We will require an address to deliver it.</li>
          </ol>
        </li>
        <li>This Whichost benefit does not accumulate with any other deals, promotions or benefits that Whichost may provide at any time.</li>
        <li>Whichost reserves the right to change these terms and conditions at any time. In the event that any changes are made, the revised terms and conditions shall be communicated 30 days prior to the official release of the new terms.</li>
      </ol>
      </p>

    </div>
  );
};

LegalsDeals.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

LegalsDeals.propTypes = {
  rootClassName: string,
  className: string,
};

export default LegalsDeals;
