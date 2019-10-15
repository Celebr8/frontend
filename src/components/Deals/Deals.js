import PropTypes from 'prop-types';
import React from 'react';
const Deals = props => {

  // prettier-ignore
  return (
        <section>
		<h1>Giving back is in our culture</h1>
        <p>On this page, you will find all the ways in which we are giving back to our community.</p>
        <p>Take a look at the menu and you'll see our active benefits for you. We call them <b>"The Celebr8 Benefits"</b>.</p>
				<p>Click yourself through our <b>"Birthday Gift"</b>, <b>"Corporate Benefit"</b> or the <b>"Recommend Reward"</b> to see which one suits you best. Don't hesitate to <u><a href="https://www.celebr8.co/help/contact-us" target="_blank" rel="noopener noreferrer">write us a message</a></u>, in case you have further questions. You can also <u><a href="https://calendly.com/celebr8/30min" target="_blank" rel="noopener noreferrer">request a callback</a></u> and we'll get back to you over the phone.</p>
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
