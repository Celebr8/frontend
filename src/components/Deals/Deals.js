import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Deals.css';

const Deals = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: January 11, 2019</p>
	  <p>With Whichost, you can easily and quickly find and book unique, inspiring spaces to host your parties, which in itself is already an amazing benefit.</p>
	  <p>With our Birthday Deal we want to give you a special gift on your birthday. This is the deal:</p>
	  <ol>
	  	<li>Get 100% refund as soon as the booking is confirmed;</li>
	  	<li>Win a €5.00 or €10.00  Amazon Gift Card by reviewing the pub where you hosted your party, plus we’ll add to the gift card €0.50 or €1.00 per additional person for parties of more than 10 people;</li>
	  	<li>Win a €10.00 or €15.00 Amazon Gift Card by reviewing the pub that you recommend to us and where you hosted your party, plus €0.50 or €1.00 per additional person for parties of more than 10 people.</li>
	  </ol>
	  <p>At the bottom of this page you will find examples that explain how each benefit is redeemed.</p>
	  <p>The following Terms & Conditions apply:</p>
	  
	  <h2>Terms & Conditions</h2>
	  <ol>
	  	<li>The Whichost Birthday Deal is currently available only for Ireland and the UK.</li>
	  	<li>You must have your Whichost account fully completed, especially the Birthday field.
	  		<ol>
	  			<li>Users with an incomplete profile and no Birthday date indicated, will not avail of this benefit.</li>
	  		</ol>
	  	</li>
	  	<li>You get a 100% refund as soon as the booking is confirmed, and not within five days of making use of the booking (having the celebration/party) as per the normal procedure.
	  		<ol>
	  			<li>The refund goes back to the same payment method used to request the booking;</li>
	  			<li>The refund might take between 7-15 business days. The speed depends entirely on the financial institution used by the user;</li>
	  			<li>This benefit is only valid for listings that are managed by Whichost.
	  				<ol>
	  					<li>You can find this information at the bottom of the description of the listing. If it`s managed by Whichost it will say: <b>This listing is managed by Whichost.</b></li>
	  				</ol>
	  			</li>
	  		</ol>
	  		
	  	</li>
	  	<li>By booking a pub over the Whichost platform, you get awarded a €5.00 or €10.00 Amazon Gift Card, plus €0.50 or €1.00 per additional person for parties of more than 10 people, for reviewing the pub on Whichost. Conditions:
	  		<ol>
	  			<li>€5.00 plus €0.50 per additional person (parties over 10 people), for parties that will be held on a Thursday, Friday, Saturday or Sunday.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.
	  				<ol>
	  					<li>.
	  						<ol>
	  						<li>.</li>
	  						<li>.</li>
	  						<li>.</li>
	  						<li>.</li>
	  						</ol>
	  					</li>
	  					<li>.
	  						<ol>
	  						<li>.</li>
	  						<li>.</li>
	  						<li>.</li>
	  						<li>.</li>
	  						</ol>
	  					</li>
	  					<li>.
	  						<ol>
	  						<li>.</li>
	  						<li>.</li>
	  						<li>.</li>
	  						<li>.</li>
	  						</ol>
	  					</li>
	  				</ol>
	  			</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  		</ol>	
	  	</li>
	  	<li>.
	  		<ol>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.
	  				<ol>
	  					<li>.
	  						<ol>
	  							<li>.</li>
	  							<li>.</li>
	  							<li>.</li>
	  							<li>.</li>
	  						</ol>
	  					</li>
	  					<li>.
	  						<ol>
	  							<li>.</li>
	  							<li>.</li>
	  							<li>.</li>
	  							<li>.</li>
	  						</ol>
	  					</li>
	  					<li>.
	  						<ol>
	  							<li>.</li>
	  							<li>.</li>
	  							<li>.</li>
	  							<li>.</li>
	  						</ol>
	  					</li>
	  				</ol>
	  			</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  			<li>.</li>
	  		</ol>
	  	</li>
	  	<li>.
	  		<ol>
	  			<li>.</li>
	  		</ol>
	  	</li>
	  	<li>.</li>
	  	<li>.</li>
	  	<li>.</li>
	  </ol>	
    </div>
  );
};

Deals.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

Deals.propTypes = {
  rootClassName: string,
  className: string,
};

export default Deals;
