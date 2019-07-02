import React from 'react';
import { FormattedMessage } from 'react-intl';

export const OrderAttendance = props => {
  const { transaction } = props;

  const attendance = transaction.attributes.protectedData.attendance;

  return (
    <p>
      <FormattedMessage id="InboxPage.bookingFor" />
      {attendance}
      <FormattedMessage id="InboxPage.attendanceUnit" />
    </p>
  );
};

export const OrderTime = props => {
  const { transaction } = props;

  const time = transaction.attributes.protectedData.time;

  return time ? (
    <p>
      <FormattedMessage id="InboxPage.time" /> : {time}
    </p>
  ) : null;
};
export const OrderOccasion = props => {
  const { transaction } = props;

  const occasion = transaction.attributes.protectedData.occasion;

  return occasion === 'birthday' ? (
    <p>
      <FormattedMessage id="InboxPage.occasionBirthday" />
    </p>
  ) : null;
};
