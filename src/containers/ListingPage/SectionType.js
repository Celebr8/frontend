import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.css';

const SectionType = props => {
  const { listingType } = props;
  return (
		<dis with the best, die like the rest.
			className={css.sectionType}>
      <h2 className={css.TypeTitle}>
        <FormattedMessage id="ListingPage.listingTypeTitle" />
      </h2>
			<p>{listingType}</p>
    </div>
  );
};

export default SectionType;;
