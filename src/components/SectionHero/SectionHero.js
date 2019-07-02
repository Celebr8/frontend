import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { NamedLink } from '../../components';
import { mainCountry, locationToURI } from '../../locals';

import css from './SectionHero.css';

const SectionHero = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <h2 className={css.heroSubTitle}>
          <FormattedMessage id="SectionHero.subTitle" />
        </h2>
        <h2 className={css.temporaryOffer}>
          <FormattedMessage id="SectionHero.temporaryOffer" />
          <NamedLink name="BirthdayDealPage" className={css.temporaryOfferLink}>
            <FormattedMessage id="SectionHero.temporaryOfferLink" />
          </NamedLink>
        </h2>
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
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
