import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import * as ibantools from 'ibantools';
import classNames from 'classnames';
import { ensureCurrentUser } from '../../util/data';
import * as validators from '../../util/validators';
import arrayMutators from 'final-form-arrays';
import {
  NamedLink,
  FieldCheckboxGroup,
  FieldPhoneNumberInput,
  FieldTextInput,
  FieldSelect,
  Form,
  LocationAutocompleteInputField,
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
      location: null,
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
    const state = { ...this.state, recaptchaToken };
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

            const enquiry = fieldRenderProps.enquiry ? fieldRenderProps.enquiry : values.enquiry;

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

            const termsAndConditionsRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.termsAndConditionsRequired',
            });

            const termsAndConditionsRequired = values =>
              values && values.length === 0 ? termsAndConditionsRequiredMessage : null;

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

            const ibanRequired = validators.required(ibanRequiredMessage);
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
              id: 'ContactUsForm.organisationSizeLabel',
            });

            const organisationSizeRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.organisationSizeRequired',
            });

            const organisationSizeRequired = validators.required(organisationSizeRequiredMessage);

            // Website

            const organisationWebsiteLabel = intl.formatMessage({
              id: 'ContactUsForm.organisationWebsiteLabel',
            });

            const organisationWebsiteRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.organisationWebsiteRequired',
            });

            const organisationWebsitePlaceholder = intl.formatMessage({
              id: 'ContactUsForm.organisationWebsitePlaceholder',
            });

            const organisationWebsiteRequired = validators.required(
              organisationWebsiteRequiredMessage
            );

            // ListingName

            const pubNameLabel = intl.formatMessage({
              id: 'ContactUsForm.pubNameLabel',
            });

            const pubNameRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.pubNameRequired',
            });

            const pubNamePlaceholder = intl.formatMessage({
              id: 'ContactUsForm.pubNamePlaceholder',
            });

            const pubNameRequired = validators.required(pubNameRequiredMessage);

            // Location

            const locationRequiredMessage = intl.formatMessage({
              id: 'ContactUsForm.locationRequired',
            });

            const locationRequired = value => {
              const location = value ? value.selectedPlace : value;

              this.setState({ ...this.state, location });
              return this.state.location ? null : locationRequiredMessage;
            };

            // Occasion

            const occasionLabel = intl.formatMessage({
              id: 'ContactUsForm.occasionLabel',
            });

            // ...

            const askPhone = enquiry === 'claim';

            const classes = classNames(rootClassName || css.root, className);

            const sendingErrorRendered = sendingError ? (
              <p className={css.sendingError}>{sendingError}</p>
            ) : null;

            const submitInProgress = sendingInProgress;

            const submitDisabled = !this.state.location || invalid || submitInProgress;

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
              enquiry === 'claim' ? (
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

                  <p>
                    To claim your listing you must agree to our{' '}
                    <NamedLink name="TermsOfServicePage">
                      Terms &amp; Conditions of Service
                    </NamedLink>
                    , together with our{' '}
                    <NamedLink name="PrivacyPolicyPage">Privacy Policy</NamedLink>.
                  </p>

                  <FieldCheckboxGroup
                    name="termsAndConditions"
                    id={formId ? `${formId}.termsAndConditions` : 'termsAndConditions'}
                    options={[{ key: 'agreed', label: 'I agree' }]}
                    validate={termsAndConditionsRequired}
                  />
                  {pristine && !values.termsAndConditions && termsAndConditionsRequired}
                </Fragment>
              ) : null;

            const subjectField =
              enquiry !== 'claim' ? (
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
              enquiry === 'changePaymentInfo' ? (
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
              enquiry === 'corporate' ? (
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
                    validate={organisationSizeRequired}
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

            const emailField =
              user.id === null ? (
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

            const recommandPubFields =
              enquiry === 'recommandPub' ? (
                <Fragment>
                  <FieldTextInput
                    type="text"
                    name="pubName"
                    key="pubName"
                    id={formId ? `${formId}.pubName` : 'pubName'}
                    label={pubNameLabel}
                    placeholder={pubNamePlaceholder}
                    validate={pubNameRequired}
                  />

                  <label htmlFor="location">
                    <FormattedMessage id="ContactUsForm.locationLabel" />
                  </label>
                  <LocationAutocompleteInputField
                    name="location"
                    format={null}
                    id={formId ? `${formId}.location` : 'location'}
                    validate={locationRequired}
                  />

                  <FieldSelect
                    name="occasion"
                    key="occasion"
                    id={formId ? `${formId}.occasion` : 'occasion'}
                    label={occasionLabel}
                    defaultValue="justBecause"
                  >
                    <option value="justBecause">Just because :)</option>
                    <option value="birthdayDeal">To make use of the Birthday Gift</option>
                    <option value="corporateDeal">To make use of the Corporate Benefit</option>
                    <option value="recommandDeal">To make use of the Recommend Reward</option>
                  </FieldSelect>
                </Fragment>
              ) : null;

            return (
              <Form
                key={formId}
                className={classes}
                onSubmit={e => {
                  const valuesWithEmail = user.id
                    ? { ...values, email: user.attributes.email }
                    : values;
                  this.submittedValues = valuesWithEmail;
                  handleSubmit(e);
                }}
              >
                <div className={css.contactUsSection}>
                  <FieldSelect
                    name="enquiry"
                    key="enquiry"
                    id={formId ? `${formId}.enquiry` : 'enquiry'}
                    label={enquiryLabel}
                    defaultValue="claim"
                    disabled={finalFormProps.enquiry !== undefined}
                  >
                    <option value="general">General Enquiry</option>
                    <option value="booking">Booking a pub</option>
                    <option value="listing">Listing a space</option>
                    <option value="claim">Claiming a listing</option>
                    <option value="privacy">Privacy Enquiry</option>
                    <option value="changePaymentInfo">Change payement informations</option>
                    <option value="corporate">Corporate Benefits Enquiries</option>
                    <option value="recommandPub">Recommand a pub</option>
                  </FieldSelect>

                  {emailField}
                  {phoneField}
                  {subjectField}

                  {claimFields}

                  {payementInfoFields}

                  {corporateDealFields}
                  {recommandPubFields}

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
                  <br/>
                  <PrimaryButton
                    className={css.scheduleCallback}
                    type="submit"
                    inProgress={submitInProgress}
                  >
                    <FormattedMessage id="ContactUsForm.scheduleCallback" />
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

const { bool, string } = PropTypes;

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
