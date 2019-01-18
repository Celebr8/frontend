import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionRegularlyOpenOn = props => {
  const { options, selectedOptions } = props;
  return (
    <div className={css.sectionRegularlyOpenOn}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.regularlyOpenOnTitle" />
      </h2>
      <PropertyGroup
        id="ListingPage.regularlyOpenOn"
        options={options}
        selectedOptions={selectedOptions}
        twoColumns={true}
      />
    </div>
  );
};

export default SectionRegularlyOpenOn;
