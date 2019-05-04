export const dealsTabs = (intl, selected) => [
    {
      text: intl.formatMessage({ id: 'DealsPage.dealsTabTitle' }),
      selected: selected == 'DealsPage',
      linkProps: {
        name: 'DealsPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'DealsPage.birthdayDealTabTitle' }),
      selected: selected == 'BirthdayDealPage',
      linkProps: {
        name: 'BirthdayDealPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'DealsPage.corporateDealTabTitle' }),
      selected: selected == 'CorporateDealPage',
      linkProps: {
        name: 'CorporateDealPage',
      },
    },
  ];

