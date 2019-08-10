import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NamedLink } from '../../components';
import css from './SectionPublicans.css';

const SectionPublicans = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.publicanWrap}>
        <span className={css.subTitle}>
          <FormattedMessage id="SectionPublican.subTitle" />
        </span>
        <h2 className={css.mainTitle}>
          <FormattedMessage id="SectionPublican.mainTitle" />
        </h2>
        <div className={css.buttonWrap}>
          <NamedLink name="NewListingPage" className={css.addYourPubButton}>
            <FormattedMessage id="SectionPublican.addPub" />
          </NamedLink>
          <NamedLink name="GuidebookForProvidersPage" className={css.secondaryButton}>
            <FormattedMessage id="SectionPublican.moreInfo" />
          </NamedLink>
        </div>
      </div>
    </div>
  );
};

SectionPublicans.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionPublicans.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionPublicans;
