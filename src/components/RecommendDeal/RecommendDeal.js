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

const RecommendDeal = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  const termsAndConditionsTitle = <h2>Terms and conditions</h2>;
  const examplesTitle = <h2>Examples</h2>;

  // prettier-ignore
  return (

		<div className={css.container}>
			<div className={classes}>
				<h2>Earn a gift card to use with over 2,000 shops in Ireland &amp; the UK!
					Get €15 for recommending a pub and celebrating there.</h2>
				<section className={css.getInTouch}>
					<div className={css.btnGroup + ' ' + css.containerButton}>
						<section className={css.centerButtons}>
							<a href="https://docs.google.com/forms/d/e/1FAIpQLSfr2dEghUT1VF1i9BWPsvZIJpnHe2FPVmCuoHJaAR3AXDe_GA/viewform" target="_blank"><button type="submit">Recommend a pub</button></a>
						</section>
					</div>
				</section>
				<div className={css.steps}>
					<div>
						<p>
							When you recommend us a pub, we will get in touch with the pub and let them know you want to book your celebration with them.
							We will issue the gift card after you’ve held your party with them. This is a physical gift card, so we will ask for an address to deliver it.
						</p>
					</div>
				</div>
			</div>
			<div className={css.readMore}>
				<NamedLink name="LegalsDealsPage">Recommend Reward Terms &amp; Conditions</NamedLink>
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
