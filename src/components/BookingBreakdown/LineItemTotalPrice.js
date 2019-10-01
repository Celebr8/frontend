import { bool } from 'prop-types';
import React from 'react';
import { formatMoney } from '../../util/currency';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import { txIsCanceled, txIsDeclined, txIsDelivered } from '../../util/transaction';
import { propTypes } from '../../util/types';
import css from './BookingBreakdown.css';

const LineItemUnitPrice = props => {
  const { transaction, isProvider, intl } = props;

  let providerTotalMessageId = 'BookingBreakdown.providerTotalDefault';
  if (txIsDelivered(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDelivered';
  } else if (txIsDeclined(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDeclined';
  } else if (txIsCanceled(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalCanceled';
  }

  const totalLabel = isProvider ? (
    <FormattedMessage id={providerTotalMessageId} />
  ) : (
    <FormattedMessage id="BookingBreakdown.total" />
  );

  const totalPrice = isProvider
    ? transaction.attributes.payoutTotal
    : transaction.attributes.payinTotal;
  const formattedTotalPrice = formatMoney(intl, totalPrice);

  return (
    <div className={css.lineItem}>
      <div className={css.totalLabel}>{totalLabel}</div>
      <div className={css.totalPrice}>{formattedTotalPrice}</div>
    </div>
  );
};

LineItemUnitPrice.propTypes = {
  transaction: propTypes.transaction.isRequired,
  isProvider: bool.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemUnitPrice;
