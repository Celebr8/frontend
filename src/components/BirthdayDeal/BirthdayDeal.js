import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NamedLink } from '..';
import css from './BirthdayDeal.css';
import { PricingTable } from './pricingTable';




const BirthdayDeal = props => {
	const { rootClassName, className } = props;
	const classes = classNames(rootClassName || css.root, className);

	// prettier-ignore
	return (
		<div className={css.container}>
			<div className={classes}>
				<h1>Get up to €330 when celebrating your birthday.</h1>
				<p>Earn a gift card to use with over 2,000 shops in Ireland &amp; the UK! The value of the gift card depends on the size of your birthday: from “Up to 30 people” to “201+”, and on the day that it’s held. Birthdays held between Mondays and Wednesdays have a higher value. This is a physical gift card, so we will ask you for an address to deliver it.

				</p>
				<p>
					<strong>
					We will add from €15 to €100 to the gift card if you can’t find the pub you want on our platform, and you recommend it to us so you can celebrate there.
					</strong>
				</p>
				
				<PricingTable />

				<section className={css.getInTouch}>
					<div className={css.btnGroup + ' ' + css.containerButton}>
						<section className={css.centerButtons}>
							<a href="https://www.whichost.com/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756">
								<button type="submit">Find a pub for your birthday</button>
							</a>
						</section>
						<div className={css.readMore}>
					<NamedLink name="LegalsDealsPage">Birthday Gift Terms &amp; Conditions</NamedLink>
				</div>
					</div>
				</section>
				
			</div>
			
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
