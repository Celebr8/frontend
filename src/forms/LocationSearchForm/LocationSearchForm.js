import classNames from 'classnames';
import { func, string } from 'prop-types';
import React from 'react';
import { Field, Form as FinalForm } from 'react-final-form';
import { injectIntl, intlShape } from 'react-intl';
import { Form, LocationAutocompleteInput } from '../../components';
import css from './LocationSearchForm.css';

const LocationSearchFormComponent = props => {
  const handleChange = location => {
    if (location.selectedPlace) {
      // Note that we use `onSubmit` instead of the conventional
      // `handleSubmit` prop for submitting. We want to autosubmit
      // when a place is selected, and don't require any extra
      // validations for the form.
      props.onSubmit({ location });
    }
  };

  return (
    <FinalForm
      {...props}
      render={formRenderProps => {
        const { rootClassName, className, intl } = formRenderProps;
        const classes = classNames(rootClassName || css.root, className);

        // Allow form submit only when the place has changed
        const preventFormSubmit = e => e.preventDefault();

        return (
          <Form className={classes} onSubmit={preventFormSubmit}>
            <Field
              name="location"
              format={null}
              render={({ input, meta }) => {
                const { onChange, ...restInput } = input;

                // Merge the standard onChange function with custom behaviur. A better solution would
                // be to use the FormSpy component from Final Form and pass this.onChange to the
                // onChange prop but that breaks due to insufficient subscription handling.
                // See: https://github.com/final-form/react-final-form/issues/159
                const searchOnChange = value => {
                  onChange(value);
                  handleChange(value);
                };

                const searchInput = { ...restInput, onChange: searchOnChange };
                return (
                  <LocationAutocompleteInput
                    placeholder={intl.formatMessage({ id: 'LocationSearchForm.placeholder' })}
                    iconClassName={css.searchInputIcon}
                    inputClassName={css.searchInput}
                    predictionsClassName={css.searchPredictions}
                    input={searchInput}
                    meta={meta}
                  />
                );
              }}
            />
          </Form>
        );
      }}
    />
  );
};

LocationSearchFormComponent.defaultProps = { rootClassName: null, className: null };

LocationSearchFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  onSubmit: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const LocationSearchForm = injectIntl(LocationSearchFormComponent);

export default LocationSearchForm;
