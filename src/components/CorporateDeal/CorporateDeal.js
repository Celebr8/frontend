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

    <div className={css.container}>
      <div className={classes}>
				<h2>Give your employees a gift card to use with over 2,000 shops in Ireland &amp; the UK! <br />They get up to €310 with each of their celebrations.</h2>
				<section className={css.getInTouch}>
					<div className={css.btnGroup + ' ' + css.containerButton}>
						<section className={css.centerButtons}>
							<NamedLink name="ContactUsPage"><button type="submit">Contact us for more info</button></NamedLink>
						</section>
					</div>
				</section>
				<div className={css.steps}>
					<div className={css.step}>
						<p>
							The value of the gift card depends on the size of the party: from “Up to 30 people” to “201+”, and on the day that it’s held. Celebrations held between Mondays and Wednesdays have a higher value. This is a physical gift card, so we will need an address to deliver it.
							<br/><br/>
              How much will this benefit cost to your organisation? Nothing, because giving back is in our culture!
              <br/><br/>
							<b>We will add €10 to the gift card if your employees can’t find the pub they want and they recommend it to us, so they can celebrate there.</b>
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
