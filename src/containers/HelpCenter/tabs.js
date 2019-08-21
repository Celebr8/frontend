export const helpCenterTabs = (intl, selected) => [
  {
    text: intl.formatMessage({ id: 'HelpCenter.ContactUsTabTitle' }),
    selected: selected === 'ContactUsPage',
    linkProps: {
      name: 'ContactUsPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'HelpCenter.FAQTabTitle' }),
    selected: selected === 'FAQPage',
    linkProps: {
      name: 'FAQPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'HelpCenter.FeesTabTitle' }),
    selected: selected === 'FeesPage',
    linkProps: {
      name: 'FeesPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'HelpCenter.DealsTabTitle' }),
    selected: selected === 'DealsHelpPage',
    linkProps: {
      name: 'DealsHelpPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'HelpCenter.FirstStepsTabTitle' }),
    selected: selected === 'FirstStepsPage',
    linkProps: {
      name: 'FirstStepsPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'HelpCenter.GuidebookForProvidersTabTitle' }),
    selected: selected === 'GuidebookForProvidersPage',
    linkProps: {
      name: 'GuidebookForProvidersPage',
    },
  },
];
