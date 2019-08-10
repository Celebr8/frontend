import React from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import {
  Footer,
  LayoutSingleColumn,
  LayoutWrapperFooter,
  LayoutWrapperMain,
  LayoutWrapperTopbar,
  SectionHero,
} from '../../components';
import { StaticPage, TopbarContainer } from '../../containers';
import css from './AboutPage.css';

const AboutPage = () => {
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
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero
              className={css.hero}
              title={<FormattedMessage id="AboutPage.heroTitle" />}
              subtitle={<FormattedMessage id="AboutPage.heroSubtitle" />}
            />
          </div>
          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <h2 className={css.sectionTitle}>
                  <FormattedMessage id="AboutPage.firstSectionHeadline" />
                </h2>
                <div className={css.sectionParagraph}>
                  <FormattedHTMLMessage id="AboutPage.firstSectionBody" />
                </div>
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <h2 className={css.sectionTitle}>
                  <FormattedMessage id="AboutPage.secondSectionHeadline" />
                </h2>
                <div className={css.sectionParagraph}>
                  <FormattedHTMLMessage id="AboutPage.secondSectionBody" />
                </div>
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <h2 className={css.sectionTitle}>
                  <FormattedMessage id="AboutPage.thirdSectionHeadline" />
                </h2>
                <div className={css.sectionParagraph}>
                  <FormattedHTMLMessage id="AboutPage.thirdSectionBody" />
                </div>
                <div className={css.team}>
                  <div className={css.teamMember}>
                    <img className={css.teamMemberImage} src={require('./carlos.jpg')} alt="Carlos" />
                    <h3 className={css.teamMemberName}>Carlos R.</h3>
                    <span className={css.teamMemberTitle}>
                      <FormattedMessage id="AboutPage.carlosJobTitle" />
                    </span>
                    <span className={css.teamMemberTagline}>"Doing more than I think I can, so that I’ll always be more than I am now."</span>
                  </div>
                  <div className={css.teamMember}>
                    <img className={css.teamMemberImage} src={require('./radu.jpg')} alt="Radu" />
                    <h3 className={css.teamMemberName}>Radu S.</h3>
                    <span className={css.teamMemberTitle}>
                      <FormattedMessage id="AboutPage.raduJobTitle" />
                    </span>
                    <span className={css.teamMemberTagline}>"No risk, no fun."</span>
                  </div>
                  <div className={css.teamMember}>
                    <img className={css.teamMemberImage} src={require('./shane.jpg')} alt="Shane" />
                    <h3 className={css.teamMemberName}>Shane W.</h3>
                    <span className={css.teamMemberTitle}>
                      <FormattedMessage id="AboutPage.shaneJobTitle" />
                    </span>
                    <span className={css.teamMemberTagline}>"Live outside the comfort zone."</span>
                  </div>
                  <div className={css.teamMember}>
                    <img className={css.teamMemberImage} src={require('./scott.jpg')} alt="Scott" />
                    <h3 className={css.teamMemberName}>Scott K.</h3>
                    <span className={css.teamMemberTitle}>
                      <FormattedMessage id="AboutPage.scottJobTitle" />
                      </span>
                    <span className={css.teamMemberTagline}>"In this world you make your own luck."</span>
                  </div>
                  <div className={css.teamMember}>
                    <img className={css.teamMemberImage} src={require('./dale.jpg')} alt="Dale" />
                    <h3 className={css.teamMemberName}>Dale W.</h3>
                    <span className={css.teamMemberTitle}>
                      <FormattedMessage id="AboutPage.daleJobTitle" />
                    </span>
                    <span className={css.teamMemberTagline}>"Passionate about building products that improve lives."</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
