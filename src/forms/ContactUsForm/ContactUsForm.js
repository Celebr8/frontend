import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Form as FinalForm } from 'react-final-form';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import * as validators from '../../util/validators';
import {
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
    const finalFormProps = { ...this.props, onSubmit };

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
              values,
            } = fieldRenderProps;

            const { email, phoneNumber, message, subject, enquiry, recaptchaToken } = values;

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
								label: 'Website'
							},
							{
								key: 'facebook',
								label: 'Facebook Page'
							},
							{
								key: 'twitter',
								label: 'Twitter'
							},
							{
								key: 'instagram',
								label: 'Instagram'
							},
						]


						// ... 
						
						const askPhone = enquiry == 'claim';

            const classes = classNames(rootClassName || css.root, className);

            const sendingErrorRendered = sendingError ? (
              <p className={css.sendingError}>{sendingError}</p>
            ) : null;

            const submitInProgress = sendingInProgress;
            const submitDisabled = invalid || submitInProgress;

            const If = props => (props.if ? props.children : null);

            return (
              <Form
                className={classes}
                onSubmit={e => {
                  this.submittedValues = values;
                  handleSubmit(e);
                }}
              >
                <div className={css.contactUsSection}>
                  <FieldSelect
                    name="enquiry"
                    name="enquiry"
                    id={formId ? `${formId}.enquiry` : 'enquiry'}
                    label={enquiryLabel}
                    validate={enquiryRequired}
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
                    id={formId ? `${formId}.email` : 'email'}
                    label={emailLabel}
                    placeholder={emailPlaceholder}
                    validate={validators.composeValidators(emailRequired, emailValid)}
                  />

                  <If if={askPhone}>
                    <FieldPhoneNumberInput
                      className={css.phone}
                      name="phoneNumber"
                      id={formId ? `${formId}.phoneNumber` : 'phoneNumber'}
                      label={phoneLabel}
                      placeholder={phonePlaceholder}
                      validate={phoneRequired}
                    />
                  </If>

                  <If if={enquiry != 'claim'}>
                    <FieldTextInput
                      className={css.subject}
                      name="subject"
                      id={formId ? `${formId}.subject` : 'subject'}
                      label={subjectLabel}
                      placeholder={subjectPlaceholder}
                      validate={subjectRequired}
                    />
                  </If>

                  <If if={enquiry == 'claim'}>
										<FieldTextInput
											name="listingName"
											id={formId ? `${formId}.listingName` : 'listingName'}
											label={listingNameLabel}
											placeholder={listingNamePlaceholder}
											validate={listingNameRequired}
										/>

                    <FieldSelect
                      name="position"
                      id={formId ? `${formId}.position` : 'position'}
                      label={positionLabel}
                      validate={positionRequired}
                    >
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                    </FieldSelect>

										<FieldCheckboxGroup 
											name="socialMedias"
                    	id={formId ? `${formId}.socialMedias` : 'socialMedias'}
                      label={socialMediasLabel}
                      validate={socialMediasRequired}
											options={socialMediasOptions}
										/>

                  </If>

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
