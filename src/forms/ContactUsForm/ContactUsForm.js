import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import * as ibantools from 'ibantools';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { ensureCurrentUser } from '../../util/data';
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
              currentUser,
              formId,
              handleSubmit,
              intl,
              invalid,
              pristine,
              sendingInProgress,
              sendingError,
              values,
            } = fieldRenderProps;

            const user = ensureCurrentUser(currentUser);

            console.log('user', user);

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

            // Organisation

            const organisationLabel = intl.formatMessage({
              id: 'ContactUsForm.organisationLabel',
            });

            const organisationRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.organisationRequired',
            });

            const organisationPlaceholder = intl.formatMessage({
              id: 'ContactUsForm.organisationPlaceholder',
            });

            const organisationRequired = validators.required(organisationRequiredMessage);

            // Number of employees

            const organisationSizeLabel = intl.formatMessage({
              id: 'contactusform.organisationSizeLabel',
            });

            const organisationSizeRequiredMessage = intl.formatMessage({
              id: 'contactusform.organisationSizeRequired',
            });

            const organisationSizeRequired = validators.required(organisationSizeRequiredMessage);

            // Website

            const organisationWebsiteLabel = intl.formatMessage({
              id: 'contactusform.organisationWebsiteLabel',
            });

            const organisationWebsiteRequiredMessage = intl.formatMessage({
              id: 'contactusform.organisationWebsiteRequired',
            });

            const organisationWebsitePlaceholder = intl.formatMessage({
              id: 'ContactUsForm.organisationWebsitePlaceholder',
            });

            const organisationWebsiteRequired = validators.required(
              organisationWebsiteRequiredMessage
            );

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

            const corporateDealFields =
              enquiry == 'corporate' ? (
                <Fragment>
                  <FieldTextInput
                    key="organisation"
                    className={css.organisation}
                    name="organisation"
                    id={formId ? `${formId}.organisation` : 'organisation'}
                    label={organisationLabel}
                    placeholder={organisationPlaceholder}
                    validate={organisationRequired}
                  />
                  <FieldSelect
                    name="organisationSize"
                    key="organisationSize"
                    id={formId ? `${formId}.organisationSize` : 'organisationSize'}
                    label={organisationSizeLabel}
                  >
                    <option value="A">Self-employed</option>
                    <option value="B">1-10 employees</option>
                    <option value="C">11-50 employees</option>
                    <option value="D">51-200 employees</option>
                    <option value="E">201-500 employees</option>
                    <option value="F">501-1000 employees</option>
                    <option value="G">1001-5000 employees</option>
                    <option value="H">5001-10,000 employees</option>
                    <option value="I">10,001+ employees</option>
                  </FieldSelect>

                  <FieldTextInput
                    key="organisationWebsite"
                    className={css.organisationWebsite}
                    name="organisationWebsite"
                    id={formId ? `${formId}.organisationWebsite` : 'organisationWebsite'}
                    label={organisationWebsiteLabel}
                    placeholder={organisationWebsitePlaceholder}
                    validate={organisationWebsiteRequired}
                  />
                </Fragment>
              ) : null;

            const emailField = user.id == null? (
              <FieldTextInput
                type="email"
                name="email"
                key="email"
                id={formId ? `${formId}.email` : 'email'}
                label={emailLabel}
                placeholder={emailPlaceholder}
                validate={validators.composeValidators(emailRequired, emailValid)}
              />
            ) : null;

            return (
              <Form
                key={formId}
                className={classes}
                onSubmit={e => {
                  const {
                    enquiry,
                    position,
                    listingName,
                    socialMedias,
                    iban,
                    organisation,
                    organisationSize,
                    organisationWebsite,
                  } = values;

                  const extraValues = {
                    enquiry,
                    position,
                    listingName,
                    socialMedias,
                    iban,
                    organisation,
                    organisationSize,
                    organisationWebsite,
                  };

                  const completeMessage = extraValues.keys.reduce(
                    (acc, key) => acc + `\n${key} : ${values[key]}`,
                    ''
                  );

                  // this.submittedValues = { ...values, message: completeMessage};
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

                  {emailField}
                  {phoneField}
                  {subjectField}

                  {claimFields}

                  {payementInfoFields}

                  {corporateDealFields}

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
