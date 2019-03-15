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

import css from './CommunityGuidelinesPage.css';

import { legalsTabs } from '../tabs';

const CommunityGuidelinesPageComponent = props => {
  const { scrollingDisabled, intl } = props;

	const tabs = legalsTabs(intl, 'PrivacyPolicyPage');

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
          <TopbarContainer currentPage="CommunityGuidelinesPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="CommunityGuidelinesPage.heading" />
            </h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies mi a volutpat auctor. In ut egestas nunc. Donec pretium ex velit, non euismod nunc elementum sit amet. In vehicula cursus nibh sit amet maximus. Suspendisse vel tortor vitae sem aliquet dictum at at nibh. Integer libero velit, consequat ac quam a, vehicula rhoncus nisl. Curabitur vestibulum pellentesque dui, nec porta erat tempus vel. Aenean felis nunc, ullamcorper ac vestibulum nec, commodo at magna. Duis a libero in erat viverra malesuada. Proin eros mauris, tristique quis aliquam in, cursus et purus.</p>

Fusce risus ipsum, ultricies a molestie a, tincidunt id lacus. Nulla nec hendrerit dolor, vitae pharetra orci. Sed quis urna mi. Donec fringilla porttitor tristique. Ut sed leo est. Nam et justo viverra, efficitur mi id, sollicitudin ante. In at porta diam. Pellentesque gravida imperdiet odio, in convallis diam laoreet sit amet. Donec vitae sagittis ex. Nam euismod suscipit dolor, sed dictum mauris congue vel. Donec ut turpis ac ligula malesuada posuere in et felis. Pellentesque in vulputate ante, nec tempus eros. Donec placerat accumsan orci, ac gravida neque vehicula a. Quisque at tristique metus. Morbi condimentum commodo neque. Quisque et nunc in leo efficitur euismod.

Phasellus convallis porttitor egestas. Cras pharetra suscipit feugiat. Sed at ex ac tortor lobortis maximus at fringilla ipsum. Morbi diam dui, elementum eget metus quis, suscipit dignissim ex. Suspendisse id tortor vel arcu sodales aliquet a in magna. Suspendisse id ante interdum quam consequat vehicula. Duis volutpat at ex vitae porta. Ut in tempor quam, eget laoreet tellus. Phasellus ac quam a ante auctor fermentum ac et orci. In faucibus, enim nec suscipit viverra, felis enim lobortis sem, sit amet tempus sapien dolor in libero. In viverra egestas tortor, nec cursus libero fringilla molestie. Nullam malesuada, nunc a sodales lobortis, neque sem venenatis quam, vitae pulvinar est leo in ipsum. Donec feugiat lectus ac viverra euismod. Fusce blandit erat nec nunc iaculis, non sagittis purus pellentesque.
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

CommunityGuidelinesPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const CommunityGuidelinesPage = compose(
  connect(mapStateToProps),
  injectIntl
)(CommunityGuidelinesPageComponent);

export default CommunityGuidelinesPage;
