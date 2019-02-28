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
