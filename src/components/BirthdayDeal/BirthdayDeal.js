import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './BirthdayDeal.css';

const BirthdayDeal  = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
	  
    <div className={classes}>
    
	  <p>We support your celebration because we care.</p>
	  <p><span>Follow these three simple steps and we will reward you with up to <b>€ 200</b></span></p>
	  
	  <div className={css.post_container}>
  <div className={css.image}
        style="background-image:url('https://ae01.alicdn.com/kf/HTB13zAXIFXXXXbxXFXXq6xXFXXX7/New-Arrival-2014-Mens-Flared-Jeans-Men-s-Bell-Bottom-Denim-Male-Big-Horn-Jean-Flare.jpg');">
  </div>
  <div className={css.desc}>
  <h3 className={css.postTitle}>Post title</h3>
   <p>Description here asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf ere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf ere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hfere asjhd skdhf kasdhf askdfh ;alskdf lasdfj askdjfh kasdhf kasjd hf
   </p>
  </div>
  <div className={css.readMore}>
  <a href="#" target="_blank">Read more about the terms &nbsp;<i style="font-size:18px" className={css.fa}>&#xf101;</i></a>
  </div>
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
