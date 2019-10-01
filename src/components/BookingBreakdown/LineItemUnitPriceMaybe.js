import React from 'react';
import { formatMoney } from '../../util/currency';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import css from './BookingBreakdown.css';

const LineItemUnitPriceMaybe = props => {
  const { transaction, unitType, intl } = props;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;
  const translationKey = isNightly
    ? 'BookingBreakdown.pricePerNight'
    : isDaily
    ? 'BookingBreakdown.pricePerDay'
    : 'BookingBreakdown.pricePerQuantity';

  const unitPurchase = transaction.attributes.lineItems.find(
    item => item.code === unitType && !item.reversal
  );

  const formattedUnitPrice = unitPurchase ? formatMoney(intl, unitPurchase.unitPrice) : null;

  return formattedUnitPrice ? (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>
        <FormattedMessage id={translationKey} />
      </span>
      <span className={css.itemValue}>{formattedUnitPrice}</span>
    </div>
  ) : null;
};

LineItemUnitPriceMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  unitType: propTypes.bookingUnitType.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemUnitPriceMaybe;
