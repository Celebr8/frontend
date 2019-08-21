import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { TopbarContainer } from '../../../containers';
import {
  Page,
  LayoutSideNavigation,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  LayoutWrapperFooter,
  Footer,
} from '../../../components';
import config from '../../../config';

import css from './CookiePolicyPage.css';

const CookiePolicyPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = [
    {
      text: intl.formatMessage({ id: 'TermsOfServicePage.privacyTabTitle' }),
      selected: true,
      linkProps: {
        name: 'CookiePolicyPage',
      },
    },
    {
      text: intl.formatMessage({ id: 'TermsOfServicePage.tosTabTitle' }),
      selected: false,
      linkProps: {
        name: 'TermsOfServicePage',
      },
    },
  ];
  const siteTitle = config.siteTitle;
  const schemaTitle = intl.formatMessage({ id: 'TermsOfServicePage.schemaTitle' }, { siteTitle });
  const schema = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    name: schemaTitle,
  };
  return (
    <Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
      <LayoutSideNavigation>
        <LayoutWrapperTopbar>
          <TopbarContainer currentPage="CookiePolicyPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="CookiePolicyPage.heading" />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies mi a volutpat
              auctor. In ut egestas nunc. Donec pretium ex velit, non euismod nunc elementum sit
              amet. In vehicula cursus nibh sit amet maximus. Suspendisse vel tortor vitae sem
              aliquet dictum at at nibh. Integer libero velit, consequat ac quam a, vehicula rhoncus
              nisl. Curabitur vestibulum pellentesque dui, nec porta erat tempus vel. Aenean felis
              nunc, ullamcorper ac vestibulum nec, commodo at magna. Duis a libero in erat viverra
              malesuada. Proin eros mauris, tristique quis aliquam in, cursus et purus.
            </p>
          </div>
        </LayoutWrapperMain>
        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSideNavigation>
    </Page>
  );
};

const { bool } = PropTypes;

CookiePolicyPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const CookiePolicyPage = compose(
  connect(mapStateToProps),
  injectIntl
)(CookiePolicyPageComponent);

export default CookiePolicyPage;
