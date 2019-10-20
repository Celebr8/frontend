/**
 * This component will show the booking info and calculated total price.
 * I.e. dates and other details related to payment decision in receipt format.
 */
import classNames from 'classnames';
import { oneOf, string } from 'prop-types';
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import { propTypes } from '../../util/types';
import css from './BookingBreakdown.css';
import LineItemBookingPeriod from './LineItemBookingPeriod';
import { default as LineItemCustomerCommissionMaybe, default as LineItemCustomerCommissionRefundMaybe } from './LineItemCustomerCommissionRefundMaybe';
import LineItemRefundMaybe from './LineItemRefundMaybe';
import LineItemSubTotalMaybe from './LineItemSubTotalMaybe';
import LineItemTotalPrice from './LineItemTotalPrice';
import LineItemUnitPriceMaybe from './LineItemUnitPriceMaybe';
import LineItemUnitsMaybe from './LineItemUnitsMaybe';
import LineItemUnknownItemsMaybe from './LineItemUnknownItemsMaybe';



export const BookingBreakdownComponent = props => {
  const { rootClassName, className, userRole, unitType, transaction, booking, intl } = props;

  const isCustomer = userRole === 'customer';
  const isProvider = userRole === 'provider';

  // const hasCommissionLineItem = transaction.attributes.lineItems.find(item => {
  //   const hasCustomerCommission = isCustomer && item.code === LINE_ITEM_CUSTOMER_COMMISSION;
  //   const hasProviderCommission = isProvider && item.code === LINE_ITEM_PROVIDER_COMMISSION;
  //   return (hasCustomerCommission || hasProviderCommission) && !item.reversal;
  // });

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <LineItemUnitPriceMaybe transaction={transaction} unitType={unitType} intl={intl} />
      <LineItemBookingPeriod transaction={transaction} booking={booking} unitType={unitType} />
      <LineItemUnitsMaybe transaction={transaction} unitType={unitType} />

      <LineItemUnknownItemsMaybe transaction={transaction} intl={intl} />

      <LineItemSubTotalMaybe
        transaction={transaction}
        unitType={unitType}
        userRole={userRole}
        intl={intl}
      />
      <LineItemRefundMaybe transaction={transaction} intl={intl} />

      <LineItemCustomerCommissionMaybe
        transaction={transaction}
        isCustomer={isCustomer}
        intl={intl}
      />
      <LineItemCustomerCommissionRefundMaybe
        transaction={transaction}
        isCustomer={isCustomer}
        intl={intl}
      />

      <hr className={css.totalDivider} />
      <LineItemTotalPrice transaction={transaction} isProvider={isProvider} intl={intl} />
      {/* {hasCommissionLineItem ? (
        <span className={css.feeInfo}>
          <FormattedMessage id="BookingBreakdown.commissionFeeNote" />
        </span>
      ) : null} */}
    </div>
  );
};

BookingBreakdownComponent.defaultProps = { rootClassName: null, className: null };

BookingBreakdownComponent.propTypes = {
  rootClassName: string,
  className: string,

  userRole: oneOf(['customer', 'provider']).isRequired,
  unitType: propTypes.bookingUnitType.isRequired,
  transaction: propTypes.transaction.isRequired,
  booking: propTypes.booking.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const BookingBreakdown = injectIntl(BookingBreakdownComponent);

BookingBreakdown.displayName = 'BookingBreakdown';

export default BookingBreakdown;
