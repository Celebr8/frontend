import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './CorporateDeal.css';

import image1 from './img/employee_benefit_image_01.png'; 

const CorporateDeal  = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      
      <section className={css.container}>
				<p>The main focus of an employee benefits strategy, in any organisation, is to improve talent attraction and employee retention. The latter is especially important because losing a valued employee can cost up to 5x their annual salary</p>
      </section>
      
      <section className={css.boxes}>
				<div className={css.container}>
					<div className={css.boxLeft}>
						<img src={image1}></img>
						<h3>Win win for everyone!</h3>
						<p>Give your employees the benefit of enjoying an Amazon Gift Card of up to <span><b>€ 300.00</b></span> on us, with every party they book through Whichost!</p>
						<p>How many of your employees would be more inclined to stay if they had good benefits? <b>75% of them</b>.</p>
                        <p>And what’s the number one benefit for them? Plenty of research confirms that the number one benefit for employees is having <b>more money in their bank accounts</b>.</p>
					</div>
				</div>
        </section>
      
      <section>
        <br></br><b>That can come mainly in four ways:</b>
            <ol>
                <li>Benefits that saves them time (time is money);</li>
                <li>Benefits that saves them money;</li>
                <li>Benefits that give them money;</li>
                <li>Higher salary (more money).</li>
            </ol>
      </section>
    
    <section>
                <p>With Whichost, you and your employees can easily find and book pubs to host your parties, which in itself is already an amazing benefit (it saves time).</p>
                <p>With our Employee Benefit, we want to give your employees the benefit of receiving an Amazon Gift Card of up to €300.00 in value (it gives money) with every party.</p>
                <p>If providing employees with great benefits is very important for your organisation, contact us at corporate@whichost.com and we will be more than happy to have a chat and provide you with detailed information about our Whichost Employee Benefit.</p>      
    </section>
      
      <section className={css.getInTouch}>
				<h3>Don't let your employees wait. Reward them now!</h3>
				<p>Get in touch with us and we'll help you to implement our Whichost Employee Benefit into your company and bring the work life ballance to the next level!</p>
				<div className={css.btnGroup + ' ' + css.containerButton}>
					<section className={css.centerButtons}>
                        <form action="mailto:support@whichost.com" method="get" target="_blank">
                            <button type="submit">Email us</button>
                        </form>
						<form action="https://info.whichost.com/eng/book-a-call" method="get" target="_blank">
                            <button type="submit">Book a call</button>
                        </form>
					</section>
				</div>
			</section>
    
    <details>
            <summary>A</summary>               
    </details>
    <details>
            <summary>B</summary>                         
    </details>
      
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
