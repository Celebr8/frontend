import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import * as ibantools from 'ibantools';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import arrayMutators from 'final-form-arrays';
import {
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldPhoneNumberInput,
  FieldTextInput,
  FieldSelect,
  Form,
  PrimaryButton,
} from '../../components';

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

    const onSubmit = values => this.props.onSubmit({ ...values, recaptchaToken });
    const finalFormProps = {
      ...this.props,
      ...arrayMutators,
      onSubmit,
    };

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
              pristine,
              sendingInProgress,
              sendingError,
              values,
            } = fieldRenderProps;

            const {
              email,
              phoneNumber,
              message,
              subject,
              enquiry,
              recaptchaToken,
              termsAndConditions,
            } = values;

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

            // Enquiry

            const enquiryLabel = intl.formatMessage({
              id: 'ContactUsForm.enquiryLabel',
            });

            const enquiryRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.enquiryRequired',
            });

            const enquiryRequired = validators.required(enquiryRequiredMessage);

            // Position (if the enquiry is about claiming a pub)

            const positionLabel = intl.formatMessage({
              id: 'ContactUsForm.positionLabel',
            });

            const positionRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.positionRequired',
            });

            const positionRequired = validators.required(positionRequiredMessage);

            // Listing name (if the enquiry is about claiming a pub)

            const listingNameLabel = intl.formatMessage({
              id: 'ContactUsForm.listingNameLabel',
            });

            const listingNameRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.listingNameRequired',
            });

            const listingNamePlaceholder = intl.formatMessage({
              id: 'ContactUsForm.listingNamePlaceholder',
            });

            const listingNameRequired = validators.required(listingNameRequiredMessage);

            // Social Medias

            const socialMediasLabel = intl.formatMessage({
              id: 'ContactUsForm.socialMediasLabel',
            });

            const socialMediasRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.socialMediasRequired',
            });

            const socialMediasPlaceholder = intl.formatMessage({
              id: 'ContactUsForm.socialMediasPlaceholder',
            });

            const socialMediasRequired = validators.required(socialMediasRequiredMessage);

            const socialMediasOptions = [
              {
                key: 'website',
                label: 'Website',
              },
              {
                key: 'facebook',
                label: 'Facebook Page',
              },
              {
                key: 'twitter',
                label: 'Twitter',
              },
              {
                key: 'instagram',
                label: 'Instagram',
              },
            ];

            // termsAndConditionsLabel

            const termsAndConditionsLabel = intl.formatMessage({
              id: 'ContactUsForm.termsAndConditionsLabel',
            });

            const termsAndConditionsRequired = intl.formatMessage({
              id: 'ContactUsForm.termsAndConditionsLabel',
            });

            const termsAndConditionsValidate = value => {
              console.log(value);
              return value && value.length && values[0] == 'agreed' ? null : 'Hello';
              return null;
            };

            // IBAN

            const ibanLabel = intl.formatMessage({
              id: 'ContactUsForm.ibanLabel',
            });

            const ibanRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.ibanRequired',
            });

            const ibanInvalidMessage = intl.formatMessage({
              id: 'ContactUsForm.ibanInvalid',
            });

            const ibanRequired = validators.required(listingNameRequiredMessage);
            const ibanInvalid = iban => {
              return ibantools.isValidIBAN(ibantools.electronicFormatIBAN(iban))
                ? null
                : ibanInvalidMessage;
            };

            const ibanValidator = validators.composeValidators(ibanRequired, ibanInvalid);

            const ibanPlaceholder = intl.formatMessage({
              id: 'ContactUsForm.ibanPlaceholder',
            });

            const ibanParser = iban => ibantools.friendlyFormatIBAN(iban);

            // ...

            const askPhone = enquiry == 'claim';

            const classes = classNames(rootClassName || css.root, className);

            const sendingErrorRendered = sendingError ? (
              <p className={css.sendingError}>{sendingError}</p>
            ) : null;

            const submitInProgress = sendingInProgress;
            const submitDisabled = invalid || submitInProgress;

            const phoneField = askPhone ? (
              <FieldPhoneNumberInput
                className={css.phone}
                name="phoneNumber"
                key="phoneNumber"
                id={formId ? `${formId}.phoneNumber` : 'phoneNumber'}
                label={phoneLabel}
                placeholder={phonePlaceholder}
                validate={phoneRequired}
              />
            ) : null;

            const listingNameField = (
              <FieldTextInput
                name="listingName"
                id={formId ? `${formId}.listingName` : 'listingName'}
                label={listingNameLabel}
                placeholder={listingNamePlaceholder}
                validate={listingNameRequired}
              />
            );

            const claimFields =
              enquiry == 'claim' ? (
                <Fragment>
                  {listingNameField}
                  <FieldSelect
                    name="position"
                    id={formId ? `${formId}.position` : 'position'}
                    label={positionLabel}
                    validate={positionRequired}
                  >
                    <option value="" />
                    <option value="owner">Owner</option>
                    <option value="manager">Manager</option>
                  </FieldSelect>

                  <FieldCheckboxGroup
                    name="socialMedias"
                    id={formId ? `${formId}.socialMedias` : 'socialMedias'}
                    label={socialMediasLabel}
                    options={socialMediasOptions}
                  />

                  <FieldCheckboxGroup
                    name="termsAndConditions"
                    id={formId ? `${formId}.termsAndConditions` : 'termsAndConditions'}
                    label={termsAndConditionsLabel}
                    options={[{ key: 'agreed', label: 'I agree' }]}
                  />
                  {pristine && !termsAndConditions && termsAndConditionsRequired}
                </Fragment>
              ) : null;

            const subjectField =
              enquiry != 'claim' ? (
                <FieldTextInput
                  key="subject"
                  className={css.subject}
                  name="subject"
                  id={formId ? `${formId}.subject` : 'subject'}
                  label={subjectLabel}
                  placeholder={subjectPlaceholder}
                  validate={subjectRequired}
                />
              ) : null;

            const payementInfoFields =
              enquiry == 'changePaymentInfo' ? (
                <Fragment>
                  {listingNameField}
                  <FieldTextInput
                    key="iban"
                    className={css.iban}
                    name="iban"
                    id={formId ? `${formId}.iban` : 'iban'}
                    label={ibanLabel}
                    placeholder={ibanPlaceholder}
                    validate={ibanValidator}
                    format={ibanParser}
                  />
                </Fragment>
              ) : null;

            return (
              <Form
                key={formId}
                className={classes}
                onSubmit={e => {
                  const { enquiry, position, listingName, socialMedias, iban } = values;

                  const extraValues = {
                    enquiry,
                    position,
                    listingName,
                    socialMedias,
                    iban,
                  };
                  const completeMessage = extraValues.keys.reduce(
                    (acc, key) => acc + `\n${key} : ${values[key]}`,
                    ''
                  );
                  // this.submittedValues = { ...values, message: completeMessage};
                  console.log('completeMessage', completeMessage);
                  this.submittedValues = values;
                  handleSubmit(e);
                }}
              >
                <div className={css.contactUsSection}>
                  <FieldSelect
                    name="enquiry"
                    key="enquiry"
                    id={formId ? `${formId}.enquiry` : 'enquiry'}
                    label={enquiryLabel}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="booking">Booking a pub</option>
                    <option value="listing">Listing a space</option>
                    <option value="claim">Claiming a listing</option>
                    <option value="changePaymentInfo">Change payement informations</option>
                    <option value="corporate">Corporate Benefits Enquiries</option>
                  </FieldSelect>

                  <FieldTextInput
                    type="email"
                    name="email"
                    key="email"
                    id={formId ? `${formId}.email` : 'email'}
                    label={emailLabel}
                    placeholder={emailPlaceholder}
                    validate={validators.composeValidators(emailRequired, emailValid)}
                  />

                  {phoneField}
                  {subjectField}

                  {claimFields}

                  {payementInfoFields}

                  <FieldTextInput
                    type="textarea"
                    name="message"
                    id={formId ? `${formId}.message` : 'message'}
                    label={messageLabel}
                    placeholder={messagePlaceholder}
                    validate={validators.requiredFieldArrayCheckbox('this is required')}
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
