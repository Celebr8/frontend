import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
	NamedLink
} from '../../components';

import css from './AboutPage.css';
import image from './about_page_image.png';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Whichost',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About our Whichost Community</h1>
          <img className={css.coverImage} src={image} alt="Whichost celebrate anywhere." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Whichost is the easiest way for customers to book pubs to celebrate their parties. Find the best pubs, schedule time, and pay securely with a few clicks. We take care of the rest so you can focus on celebrating! </p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Whichost is an online marketplace built on the foundation of trust, the best interest of the community, and thus we do have Community Guidelines that we’ve created and actively enforce. We take violations of these Community Guidelines seriously and may suspend or terminate an Account for ongoing or serious violations. Fraudulent or illegal activity may also be subject to legal action taken. We reserve the right to also edit or remove content on our site that violates these Community Guidelines or if we believe it adversely affects the integrity of the Whichost marketplace or its users.
              </h2>

              <p>
								These Community Guidelines are part of and use words and phrases that are identified in our Terms of Service (Services Agreement). If you have any questions about these Community Guidelines or if you believe that a user has violated these Community Guidelines, please email us immediately <NamedLink name="ContactUsPage">here</NamedLink> or at <a href="mailto:support@whichost.com">support@whichost.com</a>.
              </p>
			  
			  <h2 className={css.usersMust}>
			  PUBS MUST
			  </h2>
              <h3 className={css.subtitle}>1. Comply with local laws, local zoning ordinances, and tax laws at all times.</h3>

              <p>
                Whichost is not liable for ensuring compliance and it is the responsibility of pubs and each listing owner to ensure all local laws, zoning ordinance, and also tax compliance is met. You must also legally report income generated from Whichost to your business and it is your responsibility to do so. If you are responsible for charging local taxes on services, you must also comply with these regulations.
              </p>

              <h3 className={css.subtitle}>
                2. Accurate representation of the pubs, pricing, and services of each pub.
              </h3>
              <p>
                Most customers and those looking to book your space have not seen the pub in person, so be honest and clearly represent the pub and the services that you are offering. Do not misrepresent pricing or dishonestly make claims by any means. We will take proactive action if it is reported or discovered that you are misrepresenting your pub or the services that you offer.
              </p>
              <h3 className={css.subtitle}>
                3. Only list and offer a pub that you are permitted to offer.
              </h3>
              <p>
                Only list the pub that you are permitted to offer and have the authority to do so for. If you are subletting a space and are not permitted to then further offer it, do not offer it on Whichost without consent by the owner to do so. If it is discovered that you are offering a pub on Whichost that you do not have permission to offer, the listing will be immediately removed and your account is subject to be removed from our site.
                </p>
                
                <h2 className={css.usersMust}>
			  CUSTOMERS MUST
			  </h2>
              <h3 className={css.subtitle}>
              1. Comply with all pub rules, policies, and booking agreement.
              </h3>

              <p>
                All customers and those that have booked a pub through Whichost must only use the pub as described by the pub listing owner, and as agreed upon in the booking agreement. Pubs take pride in their space, the amenities, and their business and will be expecting the same professional respect and courtesy that they are providing.
              </p>

              <h3 className={css.subtitle}>
                2. Never engage in illegal or prohibited activity on pub premises.
              </h3>
              <p>
                All local laws are enforceable and pub owners can notify authorities if laws are being broken on their property or on their pub premises. Never engage in any illegal activity on pub property or premises.
              </p>

			  <h2 className={css.usersMust}>
			  EVERYONE MUST
			  </h2>
              <h3 className={css.subtitle}>
              1. Communicate honestly with others.
              </h3>

              <p>
                Whichost is not liable for ensuring compliance and it is the responsibility of pubs and each listing owner to ensure all local laws, zoning ordinance, and also tax compliance is met. You must also legally report income generated from Whichost to your business and it is your responsibility to do so. If you are responsible for charging local taxes on services, you must also comply with these regulations.
              </p>

              <h3 className={css.subtitle}>
                2. Transact honestly and with the intended use of Whichost.
              </h3>
              <p>
                Whichost is intended to be a marketplace for customers to book pubs and pubs to offer their spaces. Any transactions that are not intended for this purpose, are misrepresented, have fraudulent intent, or otherwise deemed harmful to either user will be immediately reviewed and if fraudulent, legal action will be taken by Whichost if deemed necessary. All users and transactions are also applicable to the Terms of Service that is agreed upon by using the platform.
              </p>
              <h3 className={css.subtitle}>
                3. Respect others privacy and information.
              </h3>
              <p>
                Many pubs are owned and operated by respected professionals. Some pubs may also have well-known customers present at the pub during your booking. It is professional and common courtesy to respect the privacy of the pubs, others on the premise, and the information of both the pubs and professionals that may be offering pub services. In some cases, pubs may require customers to sign a agreement at the pub prior to their booking. If there is ever an issue with privacy, pub security, or pub rules, please send us an email immediately at <a href="mailto:support@whichost.com">support@whichost.com</a>.
                </p>


              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
