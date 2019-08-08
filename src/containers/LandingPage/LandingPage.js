import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import config from '../../config';
import {
  Page,
  SectionHero,
  SectionHowItWorks,
  SectionLocations,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';
import { TopbarContainer } from '../../containers';
import { mainCountry, locationToURI } from '../../locals';
import { NamedLink } from '../../components';

import facebookImage from '../../assets/whichostFacebook-1200x630.png';
import twitterImage from '../../assets/whichostTwitter-600x314.png';
import css from './LandingPage.css';

export const LandingPageComponent = props => {
  const { history, intl, location, scrollingDisabled } = props;

  // Schema for search engines (helps them to understand what this page is about)
  // http://schema.org
  // We are using JSON-LD format
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'LandingPage.schemaTitle' }, { siteTitle });
  const schemaDescription = intl.formatMessage({ id: 'LandingPage.schemaDescription' });
  const schemaImage = `${config.canonicalRootURL}${facebookImage}`;

  return (
    <Page
      className={css.root}
      scrollingDisabled={scrollingDisabled}
      contentType="website"
      description={schemaDescription}
      title={schemaTitle}
      facebookImages={[{ url: facebookImage, width: 1200, height: 630 }]}
      twitterImages={[
        { url: `${config.canonicalRootURL}${twitterImage}`, width: 600, height: 314 },
      ]}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        description: schemaDescription,
        name: schemaTitle,
        image: [schemaImage],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>
        <LayoutWrapperMain>
          <div className={css.heroContainer}>
            <SectionHero
              history={history}
              location={location}
              title={<FormattedMessage id="SectionHero.title" />}
              subtitle={<FormattedMessage id="SectionHero.subTitle" />}
            >
              <div className={css.heroInner}>
                <h2 className={css.temporaryOffer}>
                  <FormattedMessage id="SectionHero.temporaryOffer" />
                  <NamedLink name="BirthdayDealPage" className={css.temporaryOfferLink}>
                    <FormattedMessage id="SectionHero.temporaryOfferLink" />
                  </NamedLink>
                </h2>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search: locationToURI(mainCountry),
                  }}
                  className={css.heroButton}
                >
                  <FormattedMessage id="SectionHero.browseButton" />
                </NamedLink>
              </div>
            </SectionHero>
          </div>
          <ul className={css.sections}>
            <li className={css.section}>
              <div className={css.sectionContentFirstChild}>
                <SectionLocations />
              </div>
            </li>
            <li className={css.section}>
              <div className={css.sectionContent}>
                <SectionHowItWorks />
              </div>
            </li>
          </ul>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </Page>
  );
};

const { bool, object } = PropTypes;

LandingPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from withRouter
  history: object.isRequired,
  location: object.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const LandingPage = compose(
  withRouter,
  connect(mapStateToProps),
  injectIntl
)(LandingPageComponent);

export default LandingPage;
