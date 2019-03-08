import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './BirthdayDeal.css';
import image1 from './img/birthday_deal_image_01.png';
import image2 from './img/birthday_deal_image_02.png';
import image3 from './img/birthday_deal_image_03.png';

const BirthdayDeal  = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
	  
    <div className={classes}>
    
		<section className={css.container}>
	  			<p>We support your celebration because we care.</p>
	  			<p><span>Follow these three simple steps and we will reward you with up to <b>€ 200</b></span></p>
	  	</section>
	  		
	  	<section className={css.boxes}>
	  		<div className={css.container}>
	  			<div className={css.boxLeft}>
	  				<img src={image1}></img>
	  				<h3>Happy Birthday!</h3>
	  				<p>At Whichost it's all about your day! That's why we reward you for celebrating.</p>
	  				<p>Search for a pub, select the type "Birthday" and book it.</p>
	  				<section className={css.readMore}>
	  				<a href="#" target="_blank">Browse pubs now -></a>
	  				</section>
	  			</div>
	  		</div>
	  	</section>
	  	
	  	<section className={css.boxes}>
	  		<div className={css.container}>
	  			<div className={css.boxRight}>
	  				<img src={image2}></img>
	  				<h3>Have a great time!</h3>
	  				<p>Take your friends and show them how to party but don't forget to not leave a mess behind. It's all about leaving the place like you would like to find it next time.</p>
	  				<section className={css.readMore}>
	  				<a href="#" target="_blank">Community guidelines -></a>
	  				</section>
	  			</div>
	  		</div>
	  	</section>
	  	
	  	<section className={css.boxes}>
	  		<div className={css.container}>
	  			<div className={css.boxLeft}>
	  				<img src={image3}></img>
	  				<h3>Let us know how it was!</h3>
	  				<p>We are excited about this special day!</p>
	  				<p>Gather your party group together, take a picture, post it on social media  and let us know how your party was.</p>
	  				<section className={css.readMore}>
	  				<a href="#" target="_blank">Learn about the deal terms -></a>
	  				</section>
	  			</div>
	  		</div>
	  	</section>
	  	<section className={css.getInTouch}>
	  		<h3>Excited? Do you have any questions?</h3>
	  		<p>Don't hesitate to contact us via the highlited options below. As we don't sleep at all, we'll get back to you very soon.</p>
	  				<div className={css.btnGroup + ' ' + css.containerButton}>
	  					<section className={css.centerButtons}>
	  						<button>Email us</button>
	  						<button>Book a call</button>
	  					</section>
	  				</div>
	  	</section>
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
