export const dealsTabs = (intl, selected) => [
    {
      text: intl.formatMessage({ id: 'DealsPage.dealsTabTitle' }),
      selected: selected == 'DealsPage',
      linkProps: {
        name: 'DealsPage',
      },
    },
    {
        text: intl.formatMessage({ id: 'DealsPage.userFeeDonationTabTitle' }),
        selected: selected == 'UserFeeDonationPage',
        linkProps: {
          name: 'UserFeeDonationPage',
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
      text: intl.formatMessage({ id: 'DealsPage.recommendDealTabTitle' }),
      selected: selected == 'RecommendDealPage',
      linkProps: {
        name: 'RecommendDealPage',
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

