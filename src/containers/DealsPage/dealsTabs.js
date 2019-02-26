export const dealsTabs = (intl) => [
    {
      text: intl.formatMessage({ id: 'DealsPage.dealsTabTitle' }),
      selected: true,
      linkProps: {
        name: 'DealsPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'DealsPage.birthdayDealTabTitle' }),
      selected: false,
      linkProps: {
        name: 'BirthdayDealPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'DealsPage.corporateDealTabTitle' }),
      selected: false,
      linkProps: {
        name: 'CorporateDealPage',
      },
    },
  ];

