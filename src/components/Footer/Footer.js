import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.css';

import { mainLocationsData, locationToURI } from '../../locals';

const renderSocialMediaLinks = intl => {

	return null;

  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  // const twitterLink = siteTwitterPage ? (
  //   <ExternalLink
  //     key="linkToTwitter"
  //     href={siteTwitterPage}
  //     className={css.icon}
  //     title={goToTwitter}
  //   >
  //     <IconSocialMediaTwitter />
  //   </ExternalLink>
  // ) : null;

	const twitterLink = null;
	const instragramLink = null;

  // const instragramLink = siteInstagramPage ? (
  //   <ExternalLink
  //     key="linkToInstagram"
  //     href={siteInstagramPage}
  //     className={css.icon}
  //     title={goToInsta}
  //   >
  //     <IconSocialMediaInstagram />
  //   </ExternalLink>
  // ) : null;
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const renderFavoriteLocation = (location) =>
	<li>
		<NamedLink
			name="SearchPage"
			to={{
				search: locationToURI(location)
			}}
			className={css.link}
		>
			<FormattedMessage id={`Footer.search${location.intl}`} />
		</NamedLink>
	</li>

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLiksMobile}>{socialMediaLinks}</div>
          <div className={css.links}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <div className={css.organizationInfo}>
                <p className={css.organizationDescription}>
                  <FormattedMessage id="Footer.organizationDescription" />
                </p>
                <p className={css.organizationCopyright}>
                  <NamedLink name="LandingPage" className={css.copyrightLink}>
                    <FormattedMessage id="Footer.copyright" />
                  </NamedLink>
                </p>
              </div>
            </div>
             <div className={css.infoLinks}>
              <ul className={css.list}>
              	<li className={css.listCustomer}>
              		Customer
              	</li>
                <li className={css.listItem}>
                  <a href="/login" className={css.link}>Log in</a>
                </li>
                <li className={css.listItem}>
                  <a href="/signup" className={css.link}>Sign up</a>
                </li>
                <li className={css.listItem}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIG7NR-ixq6CFydZ_955OyNyhI1-1iS4UfkRdV7knFxnFlqA/viewform" target="_blank" className={css.link}>Invite a friend</a>
                </li>
                <li className={css.listItem}>
                  <a href="/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756" className={css.link}>Find a pub</a>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="DealsPage" className={css.link}>
                    <FormattedMessage id="Footer.toDealsPage" />
                  </NamedLink>
                </li>
              </ul>
            </div>
             <div className={css.infoLinks}>
              <ul className={css.list}>
              	<li className={css.listPublican}>
              		Publican
              	</li>
              	<li className={css.listItem}>
                  <a href="/login" className={css.link}>Log in</a>
                </li>
                <li className={css.listItem}>
                  <a href="/signup" className={css.link}>Sign up</a>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <a href="https://docs.google.com/document/d/1KtFBwGkdd79Sabjt1s4PBzpKkZtY0rDy3Wqkq0k8ED8/edit" target="_blank" className={css.link}>Guidebook</a>
                </li>
              </ul>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
              	<li className={css.listWhichost}>
              		Whichost
              	</li>
                <li className={css.listItem}>
                  <a href="https://info.whichost.com/join-the-team/" target="_blank" className={css.link}>We're hiring</a>
                </li>
                <li className={css.listItem}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIG7NR-ixq6CFydZ_955OyNyhI1-1iS4UfkRdV7knFxnFlqA/viewform" target="_blank" className={css.link}>Invite a friend</a>
                </li>
                  <li className={css.listItem}>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSejVl35N8A1lu_W99QkvovqLXn1ODOKBp35NZ524XHJnpdOeg/viewform" target="_blank" className={css.link}>Recommend a pub</a>
                </li>
                <li className={css.listItem}>
                  <a href="https://info.whichost.com/eng/legal#guidelines-section" target="_blank" className={css.link}>Guidelines</a>
                </li>
                <li className={css.listItem}>
                  <a href="https://info.whichost.com/eng/faq" target="_blank" className={css.link}>Help centre</a>
                </li>
                <li className={css.listItem}>
                  <a href="https://info.whichost.com/eng/legal#fees-section" target="_blank" className={css.link}>Fees</a>
                </li>
              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
              	<li className={css.listSearches}>
              		Top cities
              	</li>
                <li className={css.listItem}>
									{mainLocationsData.map((location) => renderFavoriteLocation(location))}
                </li>
              </ul>
            </div>
            <div className={css.searchesExtra}>
              <ul className={css.list}>
              </ul>
            </div>

            </div>
            <div className={css.extraLinks}>

              <div className={css.legalMatters}>
                <div className={css.tosAndPrivacy}>
									<a className={css.someLinks}>{socialMediaLinks}</a>

                  <NamedLink name="AboutPage" className={css.legalLink}>
                    <FormattedMessage id="Footer.toAboutPage" />&nbsp;&nbsp;|&nbsp;&nbsp;
                  </NamedLink>
                  <a href="mailto:support@whichost.com?subject=General inquiry" className={css.legalLink}>
                    Contact&nbsp;&nbsp;|&nbsp;&nbsp;
                  </a>
                    <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                    <FormattedMessage id="Footer.termsOfUse" />&nbsp;&nbsp; |&nbsp;&nbsp;
                    </NamedLink>
                    <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                      <FormattedMessage id="Footer.privacyPolicy" />&nbsp;&nbsp; |&nbsp;&nbsp;
                    </NamedLink>
                  <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                    Legal&nbsp;&nbsp; |&nbsp;&nbsp;
                  </NamedLink>
              		<FormattedMessage id="Footer.companyRegistration" />
                </div>
              </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <NamedLink name="LandingPage" className={css.organizationCopyrightMobile}>
              <FormattedMessage id="Footer.copyright" />
            </NamedLink>
            <div className={css.tosAndPrivacyMobile}>
            	<NamedLink name="AboutPage" className={css.privacy}>
                <FormattedMessage id="Footer.about" />
              </NamedLink>
              <a href="mailto:support@whichost.com?subject=General%20inquiry" className={css.privacy}>
                    Contact
                  </a>

              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.privacy}>
              	Legal
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>

              <FormattedMessage id="Footer.companyRegistration" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
