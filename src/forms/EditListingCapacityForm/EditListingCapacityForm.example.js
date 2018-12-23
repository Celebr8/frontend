/* eslint-disable no-console */
import EditListingCapacityForm from './EditListingCapacityForm';

export const Empty = {
  component: EditListingCapacityForm,
  props: {
    publicData: {},
    onSubmit: values => {
      console.log('Submit EditListingCapacityForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save rules',
    updated: false,
    updateInProgress: false,
  },
  group: 'forms',
};
