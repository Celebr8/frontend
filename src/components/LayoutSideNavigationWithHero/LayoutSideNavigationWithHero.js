/**
 * LayoutSideNavigation needs to have 3-4 children:
 * LayoutWrapperTopbar, LayoutWrapperSideNav, LayoutWrapperMain, and possibly LayoutWrapperFooter.
 * SideNavWrapper will be shown aside on Desktop layout and
 * as a sub bar under Topbar on mobile screens.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  LayoutWrapperTopbar,
  LayoutWrapperSideNav,
  LayoutWrapperMain,
  LayoutWrapperHero,
  LayoutWrapperFooter,
} from '../../components';

import css from './LayoutSideNavigationWithHero.css';

const prepareChildren = children => {
  const childrenCount = React.Children.count(children);
  if (!(childrenCount === 4 || childrenCount === 5)) {
    throw new Error(
      `Menu needs to have 4 - 5 children:
      LayoutWrapperTopbar, LayoutWrapperHero, LayoutWrapperSideNav, and LayoutWrapperMain,
      and optionally LayoutWrapperFooter.`
    );
  }

  const childrenMap = {};

  React.Children.forEach(children, child => {
    if (child.type === LayoutWrapperTopbar) {
      childrenMap.layoutWrapperTopbar = child;
    } else if (child.type === LayoutWrapperSideNav) {
      childrenMap.layoutWrapperSideNav = child;
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
        `LayoutSideNavigation has an unknown child.
      Only LayoutWrapperTopbar, LayoutWrapperHero, LayoutWrapperSideNav, LayoutWrapperMain, LayoutWrapperFooter are allowed.`
      );
    }
  });
  return childrenMap;
};

const LayoutSideNavigationWithHero = props => {
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
        {preparedChildren.layoutWrapperSideNav}
        {preparedChildren.layoutWrapperMain}
      </div>
      {maybeFooter}
    </div>
  );
};

LayoutSideNavigationWithHero.defaultProps = {
  className: null,
  rootClassName: null,
  containerClassName: null,
};

const { node, string } = PropTypes;

LayoutSideNavigationWithHero.propTypes = {
  children: node.isRequired,
  className: string,
  rootClassName: string,
  containerClassName: string,
};

export default LayoutSideNavigationWithHero;
