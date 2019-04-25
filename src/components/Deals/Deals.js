import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Deals.css';

import { NamedLink } from '..';

const Deals = props => {
	const { rootClassName, className } = props;
	const classes = classNames(rootClassName || css.root, className);

	// prettier-ignore
	return (
        <section>
		<h1>Part of our culture is giving back</h1>
        <p> On this page you will find all the ways in which we'll give back to our community and customers.</p>
        <p>Take a look at the menu and you'll see our active deals for you as a loyal customer. We call them <b>"The Whichost Deals"</b>.</p>
				<p>Click for example on <b>"Birthday deal"</b>, read through the details and don't hesitate to <u><NamedLink name="ContactUs">write us a message</NamedLink></u>, in case you have further questions. You can also <u><NamedLink name="ContactUsPage">ask us for a callback</NamedLink></u> and we'll get back to you over the phone.</p>
        <br></br>
        <h3>Have fun!</h3>
        </section>
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
