/**
 * LayoutSingleColumnWithHero needs to have 3-4 children:
 * LayoutWrapperTopbar, LayoutWrapperSideNav, LayoutWrapperMain, and possibly LayoutWrapperFooter.
 * SideNavWrapper will be shown aside on Desktop layout and
 * as a sub bar under Topbar on mobile screens.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperHero,
  LayoutWrapperFooter,
} from '../../components';

import css from './LayoutSingleColumnWithHero.css';

const prepareChildren = children => {
  const childrenCount = React.Children.count(children);
  if (!(childrenCount === 3 || childrenCount === 4)) {
    throw new Error(
      `Menu needs to have 3 - 4 children:
      LayoutWrapperTopbar, LayoutWrapperHero and LayoutWrapperMain,
      and optionally LayoutWrapperFooter.`
    );
  }

  const childrenMap = {};

  React.Children.forEach(children, child => {
    if (child.type === LayoutWrapperTopbar) {
      childrenMap.layoutWrapperTopbar = child;
    } else if (child.type === LayoutWrapperMain) {
      // LayoutWrapperMain needs different rootClassName
      const childWithAddedCSS = React.cloneElement(child, {
        rootClassName: css.layoutWrapperMain,
      });
      childrenMap.layoutWrapperMain = childWithAddedCSS;
    } else if (child.type === LayoutWrapperHero) {
      childrenMap.layoutWrapperHero = child;
    } else if (child.type === LayoutWrapperFooter) {
      childrenMap.layoutWrapperFooter = child;
    } else {
      throw new Error(
        `LayoutSingleColumnWithHero has an unknown child.
      Only LayoutWrapperTopbar, LayoutWrapperHero, ayoutWrapperMain, LayoutWrapperFooter are allowed.`
      );
    }
  });
  return childrenMap;
};

const LayoutSingleColumnWithHero = props => {
  const { className, rootClassName, containerClassName, children } = props;

  const preparedChildren = prepareChildren(children);
  const classes = classNames(rootClassName || css.root, className);
  const containerClasses = containerClassName || css.container;

  const maybeFooter = preparedChildren.layoutWrapperFooter || null;

  return (
    <div className={classes}>
      {preparedChildren.layoutWrapperTopbar}
			{preparedChildren.layoutWrapperHero}
      <div className={containerClasses}>
        {preparedChildren.layoutWrapperMain}
      </div>
      {maybeFooter}
    </div>
  );
};

LayoutSingleColumnWithHero.defaultProps = {
  className: null,
  rootClassName: null,
  containerClassName: null,
};

const { node, string } = PropTypes;

LayoutSingleColumnWithHero.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
  containerClassName: string,
};

export default LayoutSingleColumnWithHero;
