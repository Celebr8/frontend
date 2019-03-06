import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Deals.css';

const Deals = props => {
	const { rootClassName, className } = props;
	const classes = classNames(rootClassName || css.root, className);

	// prettier-ignore
	return (
		<div>
		<div className={css.postContainer}>
			<div className={[css.image, css.imageLeft]}> 
			</div>
			<div className={css.desc}>
				<h3 className={css.postTitle}>Post title</h3>
				Description here asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf ere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf ere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hfere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf
			</div>
			<div className={[css.readMore, css.desc]}>
				<a href="#" target="_blank">Read more about the terms &nbsp;<i className="fa">&#xf101;</i></a>
			</div>
		</div>
		<div className={css.postContainer}>
			<div className={[css.image,,css.imageRight]}>
			</div>
			<div className={css.desc}>
				<h3 className={css.postTitle}>Post title</h3>
				Description here asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf ere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf ere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hfere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf
			</div>
			<div className={[css.readMore, css.desc]}>
				<a href="#" target="_blank">Community Guidelines &nbsp;<i className="fa">&#xf101;</i></a>
			</div>
		</div>
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
