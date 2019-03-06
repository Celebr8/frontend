/**
 * This is a wrapper component for different Layouts. Main content should be added to this wrapper.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './LayoutWrapperHero.css';

const LayoutWrapperHero = props => {
  const { className, rootClassName, children } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

LayoutWrapperHero.defaultProps = {
  className: null,
  rootClassName: null,
};

const { node, string } = PropTypes;

LayoutWrapperHero.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
};

export default LayoutWrapperHero;
