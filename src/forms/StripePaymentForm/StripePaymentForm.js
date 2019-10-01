/**
 * Note: This form is using card from Stripe Elements https://stripe.com/docs/stripe-js#elements
 * Card is not a Final Form field so it's not available trough Final Form.
 * It's also handled separately in handleSubmit function.
 */

import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import * as moment from 'moment';
import { bool, func, object, string } from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Form as FinalForm } from 'react-final-form';
import {
  FieldCheckbox,
  FieldTextInput,
  Form,
  IconSpinner,
  NamedLink,
  PrimaryButton,
  SavedCardDetails,
  StripePaymentAddress,
} from '../../components';
import config from '../../config';
import { ensurePaymentMethodCard } from '../../util/data';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import css from './StripePaymentForm.css';

/**
 * Translate a Stripe API error object.
 *
 * To keep up with possible keys from the Stripe API, see:
 *
 * https://stripe.com/docs/api#errors
 *
 * Note that at least at moment, the above link doesn't list all the
 * error codes that the API returns.
 *
 * @param {Object} intl - react-intl object from injectIntl
 * @param {Object} stripeError - error object from Stripe API
 *
 * @return {String} translation message for the specific Stripe error,
 * or the given error message (not translated) if the specific error
 * type/code is not defined in the translations
 *
 */
const stripeErrorTranslation = (intl, stripeError) => {
  const { message, code, type } = stripeError;

  if (!code || !type) {
    // Not a proper Stripe error object
    return intl.formatMessage({ id: 'StripePaymentForm.genericError' });
  }

  const translationId =
    type === 'validation_error'
      ? `StripePaymentForm.stripe.validation_error.${code}`
      : `StripePaymentForm.stripe.${type}`;

  return intl.formatMessage({
    id: translationId,
    defaultMessage: message,
  });
};

const stripeElementsOptions = {
  fonts: [
    {
      family: 'sofiapro',
      fontSmoothing: 'antialiased',
      src:
        'local("sofiapro"), local("SofiaPro"), local("Sofia Pro"), url("https://assets-sharetribecom.sharetribe.com/webfonts/sofiapro/sofiapro-medium-webfont.woff2") format("woff2")',
    },
  ],
};

const cardStyles = {
  base: {
    fontFamily: '"sofiapro", Helvetica, Arial, sans-serif',
    fontSize: '18px',
    fontSmoothing: 'antialiased',
    lineHeight: '24px',
    letterSpacing: '-0.1px',
    color: '#4A4A4A',
    '::placeholder': {
      color: '#B2B2B2',
    },
  },
};

const OneTimePaymentWithCardElement = props => {
  const { cardClasses, formId, handleStripeElementRef, hasCardError, error, label, intl } = props;
  const labelText =
    label || intl.formatMessage({ id: 'StripePaymentForm.saveAfterOnetimePayment' });
  return (
    <React.Fragment>
      <label className={css.paymentLabel} htmlFor={`${formId}-card`}>
        <FormattedMessage id="StripePaymentForm.paymentCardDetails" />
      </label>
      <div className={cardClasses} id={`${formId}-card`} ref={handleStripeElementRef} />
      {hasCardError ? <span className={css.error}>{error}</span> : null}
      <div className={css.saveForLaterUse}>
        <FieldCheckbox
          className={css.saveForLaterUseCheckbox}
          textClassName={css.saveForLaterUseLabel}
          id="saveAfterOnetimePayment"
          name="saveAfterOnetimePayment"
          label={labelText}
          value="saveAfterOnetimePayment"
          useSuccessColor
        />
        <span className={css.saveForLaterUseLegalInfo}>
          <FormattedMessage id="StripePaymentForm.saveforLaterUseLegalInfo" />
        </span>
      </div>
    </React.Fragment>
  );
};
const PaymentMethodSelector = props => {
  const {
    cardClasses,
    formId,
    changePaymentMethod,
    defaultPaymentMethod,
    handleStripeElementRef,
    hasCardError,
    error,
    paymentMethod,
    intl,
  } = props;
  const last4Digits = defaultPaymentMethod.attributes.card.last4Digits;
  const labelText = intl.formatMessage(
    { id: 'StripePaymentForm.replaceAfterOnetimePayment' },
    { last4Digits }
  );
  return (
    <React.Fragment>
      <h3 className={css.paymentHeading}>
        <FormattedMessage id="StripePaymentForm.payWithHeading" />
      </h3>
      <SavedCardDetails
        className={css.paymentMethodSelector}
        card={defaultPaymentMethod.attributes.card}
        onChange={changePaymentMethod}
      />
      {paymentMethod === 'replaceCard' ? (
        <OneTimePaymentWithCardElement
          cardClasses={cardClasses}
          formId={formId}
          handleStripeElementRef={handleStripeElementRef}
          hasCardError={hasCardError}
          error={error}
          label={labelText}
          intl={intl}
        />
      ) : null}
    </React.Fragment>
  );
};
const getPaymentMethod = (selectedPaymentMethod, hasDefaultPaymentMethod) => {
  return selectedPaymentMethod == null && hasDefaultPaymentMethod
    ? 'defaultCard'
    : selectedPaymentMethod == null
    ? 'onetimeCardPayment'
    : selectedPaymentMethod;
};

const initialState = {
  error: null,
  cardValueValid: false,
  attendance: 10,
  time: '20:30',
};

/**
 * Payment form that asks for credit card info using Stripe Elements.
 *
 * When the card is valid and the user submits the form, a request is
 * sent to the Stripe API to fetch handle payment. `stripe.handleCardPayment`
 * may ask more details from cardholder if 3D security steps are needed.
 *
 * See: https://stripe.com/docs/payments/payment-intents
 *      https://stripe.com/docs/elements
 */
class StripePaymentForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleCardValueChange = this.handleCardValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.paymentForm = this.paymentForm.bind(this);
    this.initializeStripeElement = this.initializeStripeElement.bind(this);
    this.handleStripeElementRef = this.handleStripeElementRef.bind(this);
    this.changePaymentMethod = this.changePaymentMethod.bind(this);
    this.finalFormAPI = null;
    this.cardContainer = null;
  }

  componentDidMount() {
    if (!window.Stripe) {
      throw new Error('Stripe must be loaded for StripePaymentForm');
    }

    if (config.stripe.publishableKey) {
      const {
        onStripeInitialized,
        hasHandledCardPayment,
        defaultPaymentMethod,
        loadingData,
      } = this.props;
      this.stripe = window.Stripe(config.stripe.publishableKey);

      onStripeInitialized(this.stripe);

      if (!(hasHandledCardPayment || defaultPaymentMethod || loadingData)) {
        this.initializeStripeElement();
      }
    }
  }

  componentWillUnmount() {
    if (this.card) {
      this.card.removeEventListener('change', this.handleCardValueChange);
      this.card.unmount();
      this.card = null;
    }
  }

  initializeStripeElement(element) {
    const elements = this.stripe.elements(stripeElementsOptions);

    if (!this.card) {
      this.card = elements.create('card', { style: cardStyles });
      this.card.mount(element || this.cardContainer);
      this.card.addEventListener('change', this.handleCardValueChange);
      // EventListener is the only way to simulate breakpoints with Stripe.
      window.addEventListener('resize', () => {
        if (this.card) {
          if (window.innerWidth < 1024) {
            this.card.update({ style: { base: { fontSize: '18px', lineHeight: '24px' } } });
          } else {
            this.card.update({ style: { base: { fontSize: '20px', lineHeight: '32px' } } });
          }
        }
      });
    }
  }

  changePaymentMethod(changedTo) {
    if (this.card && changedTo === 'defaultCard') {
      this.card.removeEventListener('change', this.handleCardValueChange);
      this.card.unmount();
      this.card = null;
    }
    this.setState({ paymentMethod: changedTo });
  }

  handleStripeElementRef(el) {
    this.cardContainer = el;
    if (this.stripe && el) {
      this.initializeStripeElement(el);
    }
  }

  handleCardValueChange(event) {
    const { intl } = this.props;
    const { error, complete } = event;

    const postalCode = event.value.postalCode;
    if (this.finalFormAPI) {
      this.finalFormAPI.change('postal', postalCode);
    }

    this.setState(() => {
      return {
        error: error ? stripeErrorTranslation(intl, error) : null,
        cardValueValid: complete,
      };
    });
  }

  handleSubmit(values) {
    const {
      onSubmit,
      inProgress,
      formId,
      hasHandledCardPayment,
      defaultPaymentMethod,
    } = this.props;
    const { initialMessage } = values;
    const { cardValueValid, paymentMethod } = this.state;
    const billingDetailsKnown = hasHandledCardPayment || defaultPaymentMethod;
    const onetimePaymentNeedsAttention = !billingDetailsKnown && !cardValueValid;

    if (inProgress || onetimePaymentNeedsAttention) {
      // Already submitting or card value incomplete/invalid
      return;
    }

    const params = {
      message: initialMessage ? initialMessage.trim() : null,
      card: this.card,
      formId,
      formValues: values,
      paymentMethod: getPaymentMethod(
        paymentMethod,
        ensurePaymentMethodCard(defaultPaymentMethod).id
      ),
    };

    onSubmit(params);
  }

  // Celebr8 customisation
  validAttendance(attendance) {
    if (attendance < 8)
      return this.props.intl.formatMessage({
        id: `StripePaymentForm.attendanceErrorNotEnough`,
      });
    else if (attendance > 500)
      return this.props.intl.formatMessage({
        id: `StripePaymentForm.attendanceErrorTooMuch`,
      });
    else return null;
  }

  validTime(time) {
    if (moment(time, 'HH:mm').hour() < 12)
      return this.props.intl.formatMessage({
        id: `StripePaymentForm.timeErrorTooEarly`,
      });
    else return null;
  }

  paymentForm(formRenderProps) {
    const {
      className,
      rootClassName,
      inProgress: submitInProgress,
      formId,
      paymentInfo,
      authorDisplayName,
      showInitialMessageInput,
      loadingData,
      defaultPaymentMethod,
      intl,
      onChange,
      initiateOrderError,
      confirmPaymentError,
      invalid,
      handleSubmit,
      form,
      hasHandledCardPayment,
    } = formRenderProps;

    this.finalFormAPI = form;

    const ensuredDefaultPaymentMethod = ensurePaymentMethodCard(defaultPaymentMethod);
    const billingDetailsNeeded = !(hasHandledCardPayment || confirmPaymentError);
    const billingDetailsKnown = hasHandledCardPayment || ensuredDefaultPaymentMethod;
    const onetimePaymentNeedsAttention = !billingDetailsKnown && !this.state.cardValueValid;
    const submitDisabled = invalid || onetimePaymentNeedsAttention || submitInProgress;
    const hasCardError = this.state.error && !submitInProgress;
    const classes = classNames(rootClassName || css.root, className);
    const cardClasses = classNames(css.card, {
      [css.cardSuccess]: this.state.cardValueValid,
      [css.cardError]: hasCardError,
    });

    const billingDetailsNameLabel = intl.formatMessage({
      id: 'StripePaymentForm.billingDetailsNameLabel',
    });

    const billingDetailsNamePlaceholder = intl.formatMessage({
      id: 'StripePaymentForm.billingDetailsNamePlaceholder',
    });

    const happyBirtdayLabel = (
      <Fragment>
        <FormattedMessage id="StripePaymentForm.happyBirtdayLabel" />
        &nbsp;
        <NamedLink name="BirthdayDealPage" target="_blank">
          <FormattedMessage id="StripePaymentForm.happyBirtdayLink" />
        </NamedLink>
      </Fragment>
    );

    const handleAttendanceChange = e => {
      // A change in the message should call the onChange prop with
      // the current token and the new message.

      const attendance = e.target.value;
      const onlyNumber = new RegExp('^[0-9]*$');

      if (onlyNumber.test(attendance))
        this.setState(prevState => {
          const newState = { ...prevState, attendance };
          onChange(newState);
          return newState;
        });
    };

    const handleTimeChange = e => {
      const time = e.target.value;
      this.setState(prevState => {
        const newState = { ...prevState, time };
        onChange(newState);
        return newState;
      });
    };

    const handleOccasionChange = e => {
      const occasion = e.target.value;
      this.setState(prevState => {
        const newState = { ...prevState, occasion };
        onChange(newState);
        return newState;
      });
    };

    const messagePlaceholder = intl.formatMessage(
      { id: 'StripePaymentForm.messagePlaceholder' },
      { name: authorDisplayName }
    );

    const messageOptionalText = intl.formatMessage({
      id: 'StripePaymentForm.messageOptionalText',
    });

    const initialMessageLabel = intl.formatMessage(
      { id: 'StripePaymentForm.messageLabel' },
      { messageOptionalText: messageOptionalText }
    );

    // Asking billing address is recommended in PaymentIntent flow.
    // In CheckoutPage, we send name and email as billing details, but address only if it exists.
    const billingAddress = (
      <StripePaymentAddress intl={intl} form={form} fieldId={formId} card={this.card} />
    );

    const hasStripeKey = config.stripe.publishableKey;
    const showPaymentMethodSelector = ensuredDefaultPaymentMethod.id;
    const selectedPaymentMethod = getPaymentMethod(
      this.state.paymentMethod,
      showPaymentMethodSelector
    );
    const showOnetimePaymentFields = ['onetimeCardPayment', 'replaceCard'].includes(
      selectedPaymentMethod
    );

    return hasStripeKey ? (
      <Form className={classes} onSubmit={handleSubmit}>
        {billingDetailsNeeded && !loadingData ? (
          <React.Fragment>
            {showPaymentMethodSelector ? (
              <PaymentMethodSelector
                cardClasses={cardClasses}
                formId={formId}
                defaultPaymentMethod={ensuredDefaultPaymentMethod}
                changePaymentMethod={this.changePaymentMethod}
                handleStripeElementRef={this.handleStripeElementRef}
                hasCardError={hasCardError}
                error={this.state.error}
                paymentMethod={selectedPaymentMethod}
                intl={intl}
              />
            ) : (
              <React.Fragment>
                <h3 className={css.paymentHeading}>
                  <FormattedMessage id="StripePaymentForm.paymentHeading" />
                </h3>
                <OneTimePaymentWithCardElement
                  cardClasses={cardClasses}
                  formId={formId}
                  handleStripeElementRef={this.handleStripeElementRef}
                  hasCardError={hasCardError}
                  error={this.state.error}
                  intl={intl}
                />
              </React.Fragment>
            )}

            {showOnetimePaymentFields ? (
              <div className={css.paymentAddressField}>
                <h3 className={css.billingHeading}>
                  <FormattedMessage id="StripePaymentForm.billingDetails" />
                </h3>

                <FieldTextInput
                  className={css.field}
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="cc-name"
                  label={billingDetailsNameLabel}
                  placeholder={billingDetailsNamePlaceholder}
                />

                {billingAddress}
              </div>
            ) : null}
          </React.Fragment>
        ) : loadingData ? (
          <p className={css.spinner}>
            <IconSpinner />
          </p>
        ) : null}

        {initiateOrderError ? (
          <span className={css.errorMessage}>{initiateOrderError.message}</span>
        ) : null}
        {showInitialMessageInput ? (
          <div>
            <h3 className={css.messageHeading}>
              <FormattedMessage id="StripePaymentForm.messageHeading" />
            </h3>

            <FieldTextInput
              type="textarea"
              id={`${formId}-message`}
              name="initialMessage"
              label={initialMessageLabel}
              placeholder={messagePlaceholder}
              className={css.message}
            />
          </div>
        ) : null}

        <Fragment>
          <h3 className={css.timeHeading}>
            <FormattedMessage id="StripePaymentForm.timeHeading" />
          </h3>

          <label className={css.timeLabel}>
            <FormattedMessage id="StripePaymentForm.timeLabel" />
          </label>

          <span className={css.time}>
            <TextField
              id="time"
              type="time"
              defaultValue="20:30"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.time}
              onChange={handleTimeChange}
              inputProps={{
                step: 900, // 15 min
              }}
            />
          </span>

          <p className={css.validTime}>{this.validTime(this.state.time)}</p>
        </Fragment>
        <Fragment>
          <h3 className={css.occasionHeading}>
            <FormattedMessage id="StripePaymentForm.occasionHeading" />
          </h3>

          <label className={css.occasionLabel}>
            <FormattedMessage id="StripePaymentForm.occasionLabel" />
          </label>

          <select
            className={css.occasion}
            name="occasion"
            id="occasion"
            onChange={handleOccasionChange}
          >
            <option value="justBecause">
              {intl.formatMessage({ id: 'StripePaymentForm.justBecause' })}
            </option>

            <option value="birthday">
              {intl.formatMessage({ id: 'StripePaymentForm.birthday' })}
            </option>
          </select>
          <p>
            {this.state.occasion === 'birthday' ? happyBirtdayLabel : <Fragment>&nbsp;</Fragment>}
          </p>
        </Fragment>
        <Fragment>
          <h3 className={css.attendanceHeading}>
            <FormattedMessage id="StripePaymentForm.attendanceHeading" />
          </h3>

          <label className={css.messageLabel} htmlFor={`${formId}-attendance`}>
            <FormattedMessage id="StripePaymentForm.expectedAttendance" />
          </label>

          <span>
            <input
              style={{ width: '4em', display: 'inline' }}
              id={`${formId}-attendance`}
              className={css.attendance}
              value={this.state.attendance}
              onChange={handleAttendanceChange}
            />{' '}
            people.
          </span>

          <p className={css.validAttendance}>{this.validAttendance(this.state.attendance)}</p>
        </Fragment>
        <div className={css.submitContainer}>
          <p className={css.paymentInfo}>{paymentInfo}</p>
          <PrimaryButton
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
          >
            <FormattedMessage id="StripePaymentForm.submitPaymentInfo" />
          </PrimaryButton>
        </div>
      </Form>
    ) : (
      <div className={css.missingStripeKey}>
        <FormattedMessage id="StripePaymentForm.missingStripeKey" />
      </div>
    );
  }

  render() {
    const { onSubmit, ...rest } = this.props;
    return <FinalForm onSubmit={this.handleSubmit} {...rest} render={this.paymentForm} />;
  }
}

StripePaymentForm.defaultProps = {
  className: null,
  rootClassName: null,
  inProgress: false,
  loadingData: false,
  defaultPaymentMethod: null,
  onChange: () => null,
  showInitialMessageInput: true,
  hasHandledCardPayment: false,
  initiateOrderError: null,
  handleCardPaymentError: null,
  confirmPaymentError: null,
};

StripePaymentForm.propTypes = {
  className: string,
  rootClassName: string,
  inProgress: bool,
  loadingData: bool,
  initiateOrderError: object,
  handleCardPaymentError: object,
  confirmPaymentError: object,
  formId: string.isRequired,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  onChange: func,
  paymentInfo: string.isRequired,
  authorDisplayName: string.isRequired,
  showInitialMessageInput: bool,
  hasHandledCardPayment: bool,
  defaultPaymentMethod: propTypes.defaultPaymentMethod,
};

export default injectIntl(StripePaymentForm);
