import classNames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NamedLink } from '../../components';
import { locationToURI, mainCountry } from '../../locals';
import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className, title, subTitle, hideButton } = props;
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>{title}</h1>
        <h2 className={css.heroSubTitle}>{subTitle}</h2>
        <div style={!hideButton ? {} : { display: 'none' }}>
          <NamedLink
            name="SearchPage"
            to={{
              search: locationToURI(mainCountry),
            }}
            className={css.heroButton}
          >
            <FormattedMessage id="SectionHero.browseButton" />
          </NamedLink>
        </div>
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
