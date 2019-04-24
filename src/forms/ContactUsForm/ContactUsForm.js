import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import { FieldPhoneNumberInput, Form, PrimaryButton, FieldTextInput } from '../../components';

import { ReCaptcha } from 'react-recaptcha-google';

import css from './ContactUsForm.css';

import config from '../../config';

class ContactUsFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recaptchaToken: null,
    };

    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    const state = { ...state, recaptchaToken };
    this.setState(state);
  }

  render() {
    const recaptchaToken = this.state.recaptchaToken;

		const onSubmit = (values) => this.props.onSubmit({...values, recaptchaToken})
		const finalFormProps = {...this.props, onSubmit}

    return (
      <Fragment>
        <ReCaptcha
          ref={el => {
            this.captchaDemo = el;
          }}
          size="invisible"
          render="explicit"
          sitekey={config.reCaptchaSiteKey}
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
        <FinalForm
          {...finalFormProps}
          render={fieldRenderProps => {
            const {
              rootClassName,
              className,
              formId,
              handleSubmit,
              intl,
              invalid,
              sendingInProgress,
              sendingError,
            } = fieldRenderProps;

            const { email, phoneNumber, message, subject, recaptchaToken } = fieldRenderProps;

            const values = { email, phoneNumber, message, subject, recaptchaToken };

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

            const phoneRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.phoneRequired',
            });

            const phonePlaceholder = intl.formatMessage({
              id: 'ContactUsForm.phonePlaceholder',
            });

            const phoneRequired = validators.required(phoneRequiredMessage);

            // message

            const messageLabel = intl.formatMessage({
              id: 'ContactUsForm.messageLabel',
            });

            const messageRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.messageRequired',
            });

            const messagePlaceholder = intl.formatMessage({
              id: 'ContactUsForm.messagePlaceholder',
            });

            const messageRequired = validators.required(messageRequiredMessage);

            // Subject

            const subjectLabel = intl.formatMessage({
              id: 'ContactUsForm.subjectLabel',
            });

            const subjectRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.subjectRequired',
            });

            const subjectPlaceholder = intl.formatMessage({
              id: 'ContactUsForm.subjectPlaceholder',
            });

            const subjectRequired = validators.required(subjectRequiredMessage);

            const classes = classNames(rootClassName || css.root, className);

            const sendingErrorRendered = sendingError ? (
              <p className={css.sendingError}>{sendingError}</p>
            ) : null;

            const submitInProgress = sendingInProgress;
						const submitDisabled = invalid || submitInProgress;

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
                    validate={phoneRequired}
                  />

                  <FieldTextInput
                    className={css.subject}
                    name="subject"
                    id={formId ? `${formId}.subject` : 'subject'}
                    label={subjectLabel}
                    placeholder={subjectPlaceholder}
                    validate={subjectRequired}
                  />

                  <FieldTextInput
                    type="textarea"
                    name="message"
                    id={formId ? `${formId}.message` : 'message'}
                    label={messageLabel}
                    placeholder={messagePlaceholder}
                    validate={messageRequired}
                  />
                </div>

                <div className={css.bottomWrapper}>
                  <PrimaryButton
                    className={css.submitButton}
                    type="submit"
                    inProgress={submitInProgress}
										disabled={submitDisabled}
                  >
                    <FormattedMessage id="ContactUsForm.sendMessage" />
                  </PrimaryButton>
                </div>
                {sendingErrorRendered}
              </Form>
            );
          }}
        />
      </Fragment>
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
  subject: null,
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
  subject: null,
};

const ContactUsForm = compose(injectIntl)(ContactUsFormComponent);

ContactUsForm.displayName = 'ContactUsForm';

export default ContactUsForm;
