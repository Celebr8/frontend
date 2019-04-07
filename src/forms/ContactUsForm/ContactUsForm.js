import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import { FieldPhoneNumberInput, Form, PrimaryButton, FieldTextInput } from '../../components';

import css from './ContactUsForm.css';

class ContactUsFormComponent  extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <FinalForm
        {...this.props}
        render={fieldRenderProps => {
          const {
            rootClassName,
            className,
            formId,
            handleSubmit,
            intl,
            invalid,
          } = fieldRenderProps;

          const { email, phoneNumber, message, subject } = fieldRenderProps;

					const values = { email, phoneNumber, message, subject };

          // email

          const emailLabel = intl.formatMessage({
            id: 'ContactUsForm.emailLabel',
          });

          const emailPlaceholder = intl.formatMessage({
            id: 'ContactUsForm.emailPlaceholder',
          });

          const emailRequiredMessage = intl.formatMessage({
            id: 'ContactUsForm.emailRequired',
          });

          const emailRequired = validators.required(emailRequiredMessage);

          const emailInvalidMessage = intl.formatMessage({
            id: 'ContactUsForm.emailInvalid',
          });
          const emailValid = validators.emailFormatValid(emailInvalidMessage);

					// phone

          const phoneLabel = intl.formatMessage({
            id: 'ContactUsForm.phoneLabel',
          });

          const phonePlaceholder = intl.formatMessage({
            id: 'ContactUsForm.phonePlaceholder',
          });

					// message

          const messageLabel = intl.formatMessage({
            id: 'ContactUsForm.messageLabel',
          });

          const messagePlaceholder = intl.formatMessage({
            id: 'ContactUsForm.messagePlaceholder',
          });

					// Subject

          const subjectLabel = intl.formatMessage({
            id: 'ContactUsForm.subjectLabel',
          });

          const subjectPlaceholder = intl.formatMessage({
            id: 'ContactUsForm.subjectPlaceholder',
          });

          // const tooManyVerificationRequests = isTooManyEmailVerificationRequestsError(
          //   sendVerificationEmailError
          // );

          const classes = classNames(rootClassName || css.root, className);

          return (
            <Form
              className={classes}
              onSubmit={e => {
								this.submittedValues = values;
                handleSubmit(e);
              }}
            >
              <div className={css.contactUsSection}>
                <FieldTextInput
                  type="email"
                  name="email"
                  id={formId ? `${formId}.email` : 'email'}
                  label={emailLabel}
                  placeholder={emailPlaceholder}
                  validate={validators.composeValidators(emailRequired, emailValid)}
                />

                <FieldPhoneNumberInput
                  className={css.phone}
                  name="phoneNumber"
                  id={formId ? `${formId}.phoneNumber` : 'phoneNumber'}
                  label={phoneLabel}
                  placeholder={phonePlaceholder}
                />

                <FieldTextInput
                  className={css.subject}
                  name="subject"
                  id={formId ? `${formId}.subject` : 'subject'}
                  label={subjectLabel}
                  placeholder={subjectPlaceholder}
                />

								<FieldTextInput
									type="textarea"
									name="message"
                  id={formId ? `${formId}.message` : 'message'}
									label={messageLabel}
									placeholder={messagePlaceholder}
								/>
              </div>



              <div className={css.bottomWrapper}>
                <PrimaryButton
                  className={css.submitButton}
                  type="submit"
                >
                  <FormattedMessage id="ContactUsForm.sendMessage" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

ContactUsFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  formId: null,
  inProgress: false,
  email: null,
  phoneNumber: null,
	message: null,
	subject: null
};

const { bool, func, string } = PropTypes;

ContactUsFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  formId: string,
  inProgress: bool,
  intl: intlShape.isRequired,
	ready: bool.isRequired,
	email: string,
	phoneNumber: string,
	message: string,
	subject: null
};

const ContactUsForm = compose(injectIntl)(ContactUsFormComponent);

ContactUsForm.displayName = 'ContactUsForm';

export default ContactUsForm;
