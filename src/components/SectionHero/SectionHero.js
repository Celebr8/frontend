import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import css from './SectionHero.css';

const SectionHero = props => {
  const {
    rootClassName,
    className,
    title,
    subtitle,
    children
  } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          { title }
        </h1>
        <h2 className={css.heroSubTitle}>
          { subtitle }
        </h2>
        { children }
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
