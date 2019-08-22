import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '..';

import css from './RecommendDeal.css';

const RecommendDeal = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (

		<div className={css.container}>
			<div className={classes}>
				<h2>Earn a gift card to use with over 2,000 shops in Ireland &amp; the UK!<br />
					Get €15 for recommending a pub and celebrating there.</h2>
				<section className={css.getInTouch}>
					<div className={css.btnGroup + ' ' + css.containerButton}>
						<section className={css.centerButtons}>
							<NamedLink name="ContactUsPage" params={{enquiry: 'recommandAPub'}}>
								<button type="submit">Recommend a pub</button>
							</NamedLink>
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
