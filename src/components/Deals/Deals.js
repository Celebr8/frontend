import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Deals.css';

const Deals = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: April 14, 2018</p>
			Lorem ipsum.... Radu, your move &lt;3
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
