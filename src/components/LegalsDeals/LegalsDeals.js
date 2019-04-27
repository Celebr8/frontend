import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './LegalsDeals.css';

const LegalsDeals = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: April 14, 2018</p>

			<p>Lorem ipsum</p>

    </div>
  );
};

LegalsDeals.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

LegalsDeals.propTypes = {
  rootClassName: string,
  className: string,
};

export default LegalsDeals;
