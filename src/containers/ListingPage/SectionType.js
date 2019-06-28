import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionType = props => {
  const { listingType } = props;
  const listingTypeFormatted =
    listingType == 'common' ? (
      <FormattedMessage id="ListingPage.listingTypeCommon" />
    ) : (
      <FormattedMessage id="ListingPage.listingTypePrivate" />
    );

  return (
    <div className={css.sectionType}>
      <h2 className={css.typeTitle}>
        <FormattedMessage id="ListingPage.listingTypeTitle" />
      </h2>
      <p>{listingTypeFormatted}</p>
    </div>
  );
};

export default SectionType;
