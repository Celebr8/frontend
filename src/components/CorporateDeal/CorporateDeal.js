import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '..';

import { PricingTable } from './pricingTable';

import css from './CorporateDeal.css';

const CorporateDeal = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (

    <div className={css.container}>
      <div className={classes}>
				<h2>Earn a gift card to use with over 2,000 shops in Ireland &amp; the UK! <br />Get up to €310 with each of your celebrations.</h2>
				<section className={css.getInTouch}>
					<div className={css.btnGroup + ' ' + css.containerButton}>
						<section className={css.centerButtons}>
							<a href="/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756"><button type="submit">Find a pub for your celebration</button></a>
						</section>
					</div>
				</section>
				<div className={css.steps}>
					<div className={css.step}>
						<p>
              <b>Use your organisation email in your Celebr8 account, and that's it! You are ready to enjoy our Corporate Benefit.</b>
              <br/><br/>
							The value of the gift card depends on the size of the party: from “Up to 30 people” to “201+”, and on the day that it’s held. Celebrations held between Mondays and Wednesdays have a higher value. This is a physical gift card, so we will ask for an address to deliver it.
							<br/><br/>
							<b>We will add €10 to the gift card if you can’t find the pub you want and you recommend it to us, so you can celebrate there.</b>
						</p>
					</div>
					<div className={css.step}>
						<PricingTable />
					</div>
				</div>
			</div>
			<div className={css.readMore}>
				<NamedLink name="LegalsDealsPage" anchor="corporate_benefit">Corporate Benefit Terms &amp; Conditions</NamedLink>
			</div>
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
