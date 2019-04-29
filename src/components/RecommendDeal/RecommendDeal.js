import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '..';

import { PricingTable } from './pricingTable';

import css from './RecommendDeal.css';

import image1 from './img/birthday_deal_image_01.png';
import image2 from './img/birthday_deal_image_02.png';
import image3 from './img/birthday_deal_image_03.png';


const RecommendDeal  = props => {
	const { rootClassName, className } = props;
	const classes = classNames(rootClassName || css.root, className);

	const termsAndConditionsTitle = (<h2>Terms and conditions</h2>);
	const examplesTitle = (<h2>Examples</h2>);

	// prettier-ignore
	return (

		<div className={css.container}>
		<div className={classes}>
		<h2>Earn a gift card to use with over 2,000 shops in Ireland!
		<br/>
		Get up to €240 when celebrating your birthday.</h2>
		<section className={css.getInTouch}>
			<div className={css.btnGroup + ' ' + css.containerButton}>
					<section className={css.centerButtons}>
          	<a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform"><button type="submit">Find a pub for your birthday</button></a>
					</section>
				</div>
			</section>
		<div className={css.steps}>
			<div className={css.step}>
				<p>
				The value of the gift card depends on the size of your birthday: from “Up to 30 people” to “201+”, and on the day that it’s held. Birthdays held between Mondays and Wednesdays have a higher value. This is a physical gift card, so we will ask you for an address to deliver it.
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
		<a href="#" target="_blank">Birthday Gift Terms & Conditions</a>
		</div>
		</div>



	);
	};

	RecommendDeal.defaultProps = {
		rootClassName: null,
			className: null,
	};

	const { string } = PropTypes;

	RecommendDeal.propTypes = {
		rootClassName: string,
			className: string,
	};

	export default RecommendDeal;
