import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomListingTypeSelectField = props => {
  const { name, id, listingTypes, intl } = props;
  const listingTypeLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.listingTypeLabel',
  });
  const listingTypePlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.listingTypePlaceholder',
  });
  const listingTypeRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.listingTypeRequired',
    })
  );
  return (
    <FieldSelect
      className={css.listingType}
      name={name}
      id={id}
      label={listingTypeLabel}
      validate={listingTypeRequired}
    >
      <option disabled value="">
        {listingTypePlaceholder}
      </option>
      {listingTypes.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  );
};

export default CustomListingTypeSelectField;
