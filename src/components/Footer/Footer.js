import React, { Fragment } from 'react';
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

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;

  return [fbLink, twitterLink, instragramLink].filter(v => v != null);

};

const renderFavoriteLocation = location => (
  <li>
    <NamedLink
      name="SearchPage"
      to={{
        search: locationToURI(location),
      }}
      className={css.link}
    >
      <FormattedMessage id={`Footer.search${location.intl}`} />
    </NamedLink>
  </li>
);

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);
  const separator = <Fragment>&nbsp;&nbsp;|&nbsp;&nbsp;</Fragment>;

  return (
    <div className={classes}>
      <div className={css.topBorderWrapper}>
        <div className={css.content}>
          <div className={css.someLinksMobile}>{socialMediaLinks}</div>
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
                <li className={css.listCustomer}>Customer</li>
                <li className={css.listItem}>
                  <NamedLink name="LoginPage" className={css.link}>
                    Log in
                  </NamedLink>
                </li>
                <li className={css.listItem}>
									<NamedLink name="SignupPage" className={css.link}>
                    Sign up
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfIG7NR-ixq6CFydZ_955OyNyhI1-1iS4UfkRdV7knFxnFlqA/viewform"
                    target="_blank"
                    className={css.link}
                  >
                    Invite a friend
                  </a>
                </li>
                <li className={css.listItem}>
                  <a
                    href="/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756"
                    className={css.link}
                  >
                    Find a pub
                  </a>
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
                <li className={css.listPublican}>Publican</li>
                <li className={css.listItem}>
                  <NamedLink name="LoginPage" className={css.link}>
                    Log in
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="SignupPage" className={css.link}>
                    Sign up
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink name="NewListingPage" className={css.link}>
                    <FormattedMessage id="Footer.toNewListingPage" />
                  </NamedLink>
                </li>
                <li className={css.listItem}>
                  <NamedLink
                    name="GuidebookForProvidersPage"
                    target="_blank"
                    className={css.link}
                  >
                    Guidebook
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.infoLinks}>
              <ul className={css.list}>
                <li key="whichost" className={css.listWhichost}>
                  Whichost
                </li>
                <li className={css.listItem}>
                  <NamedLink name="CareersPage" className={css.link}>
                    <FormattedMessage id="Footer.careersPage" />
                  </NamedLink>
                </li>
                <li key="inviteAFriend" className={css.listItem}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfIG7NR-ixq6CFydZ_955OyNyhI1-1iS4UfkRdV7knFxnFlqA/viewform"
                    target="_blank"
                    className={css.link}
                  >
                    Invite a friend
                  </a>
                </li>
                <li key="recommandAPub" className={css.listItem}>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSejVl35N8A1lu_W99QkvovqLXn1ODOKBp35NZ524XHJnpdOeg/viewform"
                    target="_blank"
                    className={css.link}
                  >
                    Recommend a pub
                  </a>
                </li>
                <li key="guidelines" className={css.listItem}>
                  <NamedLink name="CommunityGuidelinesPage" target="_blank" className={css.link}>
                    <FormattedMessage id="Footer.toCommunityGuidelines" />
                  </NamedLink>
                </li>
                <li key="helpCenter" className={css.listItem}>
                  <NamedLink name="FAQPage" target="_blank" className={css.link}>
                    <FormattedMessage id="Footer.toFAQPage" />
                  </NamedLink>
                </li>
                <li key="fees" className={css.listItem}>
                  <NamedLink name="FeesPage" target="_blank" className={css.link}>
                    <FormattedMessage id="Footer.toPricing" />
                  </NamedLink>
                </li>
              </ul>
            </div>
            <div className={css.searches}>
              <ul className={css.list}>
                <li className={css.listSearches}>Top cities</li>
                <li className={css.listItem}>
                  {mainLocationsData.map(location => renderFavoriteLocation(location))}
                </li>
              </ul>

            </div>
            <div className={css.searchesExtra}>
							<NamedLink name="LandingPage" 
								className={css.organizationCopyrightMobile + ' ' + css.registrationMobile}>
								<FormattedMessage id="Footer.copyright" />
							</NamedLink>
						</div>
          </div>
          <div className={css.extraLinks}>
            <div className={css.legalMatters}>
              <div className={css.tosAndPrivacy}>
                <div className={css.someLinks}>{socialMediaLinks}</div>

                <NamedLink name="AboutPage" className={css.legalLink}>
                  <FormattedMessage id="Footer.toAboutPage" />
                </NamedLink>
								{separator}
                <NamedLink
                  name="ContactUsPage"
                  className={css.legalLink}
                >
                  Contact
                </NamedLink>
								{separator}
                <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                  <FormattedMessage id="Footer.termsOfUse" />
                </NamedLink>
								{separator}
                <NamedLink name="PrivacyPolicyPage" className={css.legalLink}>
                  <FormattedMessage id="Footer.privacyPolicy" />
                </NamedLink>
								{separator}
                <NamedLink name="TermsOfServicePage" className={css.legalLink}>
                  Legal
                </NamedLink>
              </div>
            </div>
          </div>
          <div className={css.copyrightAndTermsMobile}>
            <div className={css.tosAndPrivacyMobile}>
							
              <NamedLink name="AboutPage" className={css.privacy}>
                <FormattedMessage id="Footer.about" />
              </NamedLink>

              <NamedLink 
                name="ContactUsPage"
                className={css.privacy}
              >
                Contact
              </NamedLink>

              <NamedLink name="PrivacyPolicyPage" className={css.privacy}>
                <FormattedMessage id="Footer.privacy" />
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.privacy}>
                Legal
              </NamedLink>
              <NamedLink name="TermsOfServicePage" className={css.terms}>
                <FormattedMessage id="Footer.terms" />
              </NamedLink>
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
