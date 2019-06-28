export const legalsTabs = (intl, selected) => [
  {
    text: intl.formatMessage({ id: 'LegalsPages.privacyTabTitle' }),
    selected: selected == 'PrivacyPolicyPage',
    linkProps: {
      name: 'PrivacyPolicyPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'LegalsPages.tosTabTitle' }),
    selected: selected == 'TermsOfServicePage',
    linkProps: {
      name: 'TermsOfServicePage',
    },
  },
  {
    text: intl.formatMessage({ id: 'LegalsPages.legalsDealsTabTitle' }),
    selected: selected == 'LegalsDealsPage',
    linkProps: {
      name: 'LegalsDealsPage',
    },
  },
  {
    text: intl.formatMessage({ id: 'LegalsPages.communityGuidelinesTabTitle' }),
    selected: selected == 'CommunityGuidelinesPage',
    linkProps: {
      name: 'CommunityGuidelinesPage',
    },
  },
];
