export const legalsTabs = (intl, selected) => [
	{
		text: intl.formatMessage({ id: 'LegalsPages.privacyTabTitle' }),
		selected: (selected == 'PrivacyPolicyPage'),
		linkProps: {
			name: 'PrivacyPolicyPage',
		},
	},
	{
		text: intl.formatMessage({ id: 'LegalsPages.tosTabTitle' }),
		selected: (selected == 'TermsOfServicePage'),
		linkProps: {
			name: 'TermsOfServicePage',
		},
	}
]
