/* eslint-disable no-console */
import EditListingRegularlyOpenOnForm from './EditListingRegularlyOpenOnForm';

export const Empty = {
  component: EditListingRegularlyOpenOnForm,
  props: {
    publicData: {},
    onSubmit: values => {
      console.log('Submit EditListingRegularlyOpenOnForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save rules',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
