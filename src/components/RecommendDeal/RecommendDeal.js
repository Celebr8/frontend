import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { NamedLink } from '..';
import { PricingTable } from './pricingTable';
import css from './RecommendDeal.css';




const RecommendDeal = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  const termsAndConditionsTitle = <h2>Terms and conditions</h2>;
  const examplesTitle = <h2>Examples</h2>;

  // prettier-ignore
  return (

		<div className={css.container}>
			<div className={classes}>
				<h1>Get up to €100 for recommending a pub and celebrating there.</h1>
				<div className={css.steps}>
					<div>
						<p>Earn a gift card to use with over 2,000 shops in Ireland &amp; the UK! We are always adding pubs to our platform, so when you want to celebrate in a pub that we don't have, not to worry since you can still celebrate there.
						</p>
						<p>
						When you recommend a pub, we will collect information on it so that the listing can be created and you can book your party there. We will issue the gift card after you’ve held your party with them. The value of it depends on the size of your party.<br />
						This is a physical gift card, so we will ask for an address to deliver it.
						</p>
					</div>
				</div>
				<PricingTable />
			</div>
			<section className={css.getInTouch}>
				<div className={css.btnGroup + ' ' + css.containerButton}>
					<section className={css.centerButtons}>
						<a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank"><button type="submit">Recommend a pub</button></a>
					</section>
					<div className={css.readMore}>
						<NamedLink name="LegalsDealsPage">Recommend Reward Terms &amp; Conditions</NamedLink>
					</div>
				</div>
			</section>
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
