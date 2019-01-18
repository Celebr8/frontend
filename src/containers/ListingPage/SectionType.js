import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionType = props => {
  const { listingType } = props;
  return (
		<div className={css.sectionType}>
      <h2 className={css.TypeTitle}>
        <FormattedMessage id="ListingPage.listingTypeTitle" />
      </h2>
			<p>{listingType}</p>
    </div>
  );
};

export default SectionType;;
