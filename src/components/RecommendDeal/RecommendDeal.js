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

		<div className={classes}>

			<section className={css.container}>

				<PricingTable />

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
