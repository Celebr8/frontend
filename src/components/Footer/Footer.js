import classNames from 'classnames';
import { string } from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import {
  ExternalLink,
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  NamedLink,
} from '../../components';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook width="30" height="30" />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter width="30" height="30" />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram width="30" height="30" />
    </ExternalLink>
  ) : null;

  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.wrapper}>
        <div className={css.content}>
          <div className={css.firstSection}>
            <ul className={css.list}>
              <li className={css.listTitle}>Customers</li>
              <li className={css.listItem}>
                <a
                  href="/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756"
                  className={css.link}
                >
                  Find a pub
                </a>
              </li>
              <li className={css.listItem}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfIG7NR-ixq6CFydZ_955OyNyhI1-1iS4UfkRdV7knFxnFlqA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.link}
                >
                  Invite a friend
                </a>
              </li>
              <li className={css.listItem}>
                <NamedLink name="DealsPage" className={css.link}>
                  <FormattedMessage id="Footer.toDealsPage" />
                </NamedLink>
              </li>
            </ul>
            <ul className={css.list}>
              <li className={css.listTitle}>Publicans</li>
              <li className={css.listItem}>
                <NamedLink name="NewListingPage" className={css.link}>
                  <FormattedMessage id="Footer.toNewListingPage" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="GuidebookForProvidersPage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.link}
                >
                  Guidebook
                </NamedLink>
              </li>
            </ul>
            <ul className={css.list}>
              <li key="whichost" className={css.listTitle}>
                Whichost
              </li>
              <li key="fees" className={css.listItem}>
                <NamedLink name="FeesPage" target="_blank" className={css.link}>
                  <FormattedMessage id="Footer.toPricing" />
                </NamedLink>
              </li>
              <li key="helpCenter" className={css.listItem}>
                <NamedLink name="FAQPage" target="_blank" className={css.link}>
                  <FormattedMessage id="Footer.toFAQPage" />
                </NamedLink>
              </li>
              <li key="guidelines" className={css.listItem}>
                <NamedLink name="CommunityGuidelinesPage" className={css.link}>
                  <FormattedMessage id="Footer.toCommunityGuidelines" />
                </NamedLink>
              </li>
              <li key="recommendAPub" className={css.listItem}>
                <NamedLink
                  name="ContactUsPage"
                  className={css.link}
                  params={{ enquiry: 'recommandAPub' }}
                >
                  Recommend a pub
                </NamedLink>
              </li>
            </ul>
            <ul className={css.list}>
              <li key="whichost" className={css.listTitle}>
                Policy
              </li>
              <li key="privacy" className={css.listItem}>
                <NamedLink name="PrivacyPolicyPage" className={css.link}>
                  <FormattedMessage id="Footer.privacy" />
                </NamedLink>
              </li>
              <li key="legal" className={css.listItem}>
                <NamedLink name="TermsOfServicePage" className={css.link}>
                  Legal
                </NamedLink>
              </li>
              <li key="terms" className={css.listItem}>
                <NamedLink name="TermsOfServicePage" className={css.link}>
                  <FormattedMessage id="Footer.termsOfUse" />
                </NamedLink>
              </li>
            </ul>
          </div>
          <div className={css.middleSection}>
            <div className={css.organization} id="organization">
              <NamedLink name="LandingPage" className={css.logoLink}>
                <Logo format="desktop" className={css.logo} />
              </NamedLink>
              <p className={css.organizationDescription}>
                <FormattedMessage id="Footer.organizationDescription" />
              </p>
            </div>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NamedLink name="AboutPage" className={css.link}>
                  <FormattedMessage id="Footer.toAboutPage" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink name="ContactUsPage" className={css.link}>
                  <FormattedMessage id="Footer.toContactPage" />
                </NamedLink>
              </li>
            </ul>
          </div>
          <div className={css.lastSection}>
            <div className={css.organizationCopyright}>
              <FormattedMessage id="Footer.copyright" />
            </div>
            <div className={css.socialIcons}>{socialMediaLinks}</div>
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
