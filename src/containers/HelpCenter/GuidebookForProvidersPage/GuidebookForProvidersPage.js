import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';
import { helpCenterTabs } from '../tabs';
import {
  Page,
  LayoutSideNavigationWithHero,
  LayoutWrapperMain,
  LayoutWrapperHero,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
	NamedLink
} from '../../../components';
import config from '../../../config';

import css from './GuidebookForProvidersPage.css';

const GuidebookForProvidersPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = helpCenterTabs(intl, 'GuidebookForProvidersPage');

  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage(
    { id: 'GuidebookForProvidersPage.schemaTitle' },
    { siteTitle }
  );
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigationWithHero>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="GuidebookForProvidersPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperHero className={css.hero}>
          <div className={css.heroContent}>
            <h1 className={css.heroMainTitle}>
              <FormattedMessage id="GuidebookForProvidersPage.title" />
            </h1>
          </div>
        </LayoutWrapperHero>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <h2>Guide Documentation for Publicans</h2>
          <p>
            Using Whichost is very straightforward. However, if you ever need guidance you can{' '}
            <a
              href="https://docs.google.com/document/d/1KtFBwGkdd79Sabjt1s4PBzpKkZtY0rDy3Wqkq0k8ED8/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              open the Whichost Guide for Publicans
            </a>
            . This document contains all the basic information you need to properly manage your
            listing(s).
          </p>
          <p>
            On our <NamedLink name="FirstStepsPage">First Steps</NamedLink> page you can read about
            the first steps you need to make, to start listing your pub on Whichost.
          </p>
          <br />
          <h2>Contact us. We're here to help.</h2>
          <p>
            If you still have questions that are not covered by our{' '}
            <NamedLink name="FAQPage">help center</NamedLink>, we invite you to{' '}
            <NamedLink name="ContactUsPage">contact us</NamedLink> and we'll assist you personally.
          </p>
          <br />
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigationWithHero>
    </Page>
  );
};

const { bool } = PropTypes;

GuidebookForProvidersPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const GuidebookForProvidersPage = compose(
  connect(mapStateToProps),
  injectIntl
)(GuidebookForProvidersPageComponent);

export default GuidebookForProvidersPage;
