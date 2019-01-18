import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionGroupSize = props => {
  const { options, selectedOptions } = props;
  return (
    <div className={css.sectionGroupSize}>
      <h2 className={css.groupSizeTitle}>
        <FormattedMessage id="ListingPage.groupSizeTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.groupSize"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionGroupSize;
