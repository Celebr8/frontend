import classNames from 'classnames';
import { bool, string } from 'prop-types';
import React from 'react';
import { Form as FinalForm } from 'react-final-form';
import { compose } from 'redux';
import { FieldTextInput, Form, IconEnquiry, PrimaryButton } from '../../components';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import css from './EnquiryForm.css';

const EnquiryFormComponent = props => (
  <FinalForm
    {...props}
    render={fieldRenderProps => {
      const {
        rootClassName,
        className,
        submitButtonWrapperClassName,
        formId,
        handleSubmit,
        inProgress,
        intl,
        listingTitle,
        authorDisplayName,
        sendEnquiryError,
      } = fieldRenderProps;

      const messageLabel = intl.formatMessage(
        {
          id: 'EnquiryForm.messageLabel',
        },
        { authorDisplayName }
      );
      const messagePlaceholder = intl.formatMessage(
        {
          id: 'EnquiryForm.messagePlaceholder',
        },
        { authorDisplayName }
      );
      const messageRequiredMessage = intl.formatMessage({
        id: 'EnquiryForm.messageRequired',
      });
      const messageRequired = validators.requiredAndNonEmptyString(messageRequiredMessage);

      const classes = classNames(rootClassName || css.root, className);
      const submitInProgress = inProgress;
      const submitDisabled = submitInProgress;

      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <IconEnquiry className={css.icon} />
          <h2 className={css.heading}>
            <FormattedMessage id="EnquiryForm.heading" values={{ listingTitle }} />
          </h2>
          <FieldTextInput
            className={css.field}
            type="textarea"
            name="message"
            id={formId ? `${formId}.message` : 'message'}
            label={messageLabel}
            placeholder={messagePlaceholder}
            validate={messageRequired}
          />
          <div className={submitButtonWrapperClassName}>
            {sendEnquiryError ? (
              <p className={css.error}>
                <FormattedMessage id="EnquiryForm.sendEnquiryError" />
              </p>
            ) : null}
            <PrimaryButton type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
              <FormattedMessage id="EnquiryForm.submitButtonText" />
            </PrimaryButton>
          </div>
        </Form>
      );
    }}
  />
);

EnquiryFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  inProgress: false,
  sendEnquiryError: null,
};

EnquiryFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  inProgress: bool,

  listingTitle: string.isRequired,
  authorDisplayName: string.isRequired,
  sendEnquiryError: propTypes.error,

  // from injectIntl
  intl: intlShape.isRequired,
};

const EnquiryForm = compose(injectIntl)(EnquiryFormComponent);

EnquiryForm.displayName = 'EnquiryForm';

export default EnquiryForm;
