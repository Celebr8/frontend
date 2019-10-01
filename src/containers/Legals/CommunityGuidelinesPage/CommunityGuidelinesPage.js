import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  Footer,
  LayoutSideNavigation,
  LayoutWrapperFooter,
  LayoutWrapperMain,
  LayoutWrapperSideNav,
  LayoutWrapperTopbar,
  Page,
} from '../../../components';
import config from '../../../config';
import { TopbarContainer } from '../../../containers';
import { isScrollingDisabled } from '../../../ducks/UI.duck';
import { FormattedMessage, injectIntl, intlShape } from '../../../util/reactIntl';
import { legalsTabs } from '../tabs';
import css from './CommunityGuidelinesPage.css';

const CommunityGuidelinesPageComponent = props => {
  const { scrollingDisabled, intl } = props;

  const tabs = legalsTabs(intl, 'CommunityGuidelinesPage');

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
            <p>
              Celebr8 is an online marketplace built on the foundation of trust, the best interest
              of the community, and thus we do have Community Guidelines that we’ve created and
              actively enforce. We take violations of these Community Guidelines seriously and may
              suspend or terminate an Account for ongoing or serious violations. Fraudulent or
              illegal activity may also be subject to legal action taken. We reserve the right to
              also edit or remove content on our site that violates these Community Guidelines or if
              we believe it adversely affects the integrity of the Celebr8 marketplace or its users.
            </p>

            <p>
              These Community Guidelines are part of and use words and phrases that are identified
              in our Terms of Service (Services Agreement). If you have any questions about these
              Community Guidelines or if you believe that a user has violated these Community
              Guidelines, please email us immediately at{' '}
              <a href="mailto:support@celebr8.co">support@celebr8.co</a>.
            </p>

            <h2>PUBS MUST:</h2>
            <h3>1. Comply with local laws, local zoning ordinances, and tax laws at all times.</h3>

            <p>
              Celebr8 is not liable for ensuring compliance and it is the responsibility of pubs and
              each listing owner to ensure all local laws, zoning ordinance, and also tax compliance
              is met. You must also legally report income generated from Celebr8 to your business
              and it is your responsibility to do so. If you are responsible for charging local
              taxes on services, you must also comply with these regulations.{' '}
            </p>

            <h3>2. Accurate representation of the pubs, pricing, and services of each pub.</h3>
            <p>
              Most customers and those looking to book your space have not seen the pub in person,
              so be honest and clearly represent the pub and the services that you are offering. Do
              not misrepresent pricing or dishonestly make claims by any means. We will take
              proactive action if it is reported or discovered that you are misrepresenting your pub
              or the services that you offer.
            </p>

            <h3>3. Only list and offer a pub that you are permitted to offer.</h3>
            <p>
              Only list the pub that you are permitted to offer and have the authority to do so for.
              If you are subletting a space and are not permitted to then further offer it, do not
              offer it on Celebr8 without consent by the owner to do so. If it is discovered that
              you are offering a pub on Celebr8 that you do not have permission to offer, the
              listing will be immediately removed and your account is subject to be removed from our
              site.
            </p>

            <h3>4. Include booking payments as credit towards the bill of the parties.</h3>
            <p>
              Most pubs already do this and Celebr8 will continue that tradition. All booking
              payments must be used as credit towards the bill of the parties, and Celebr8 customers
              will except that.{' '}
            </p>

            <h2>CUSTOMERS MUST:</h2>
            <h3>1. Comply with all pub rules, policies, and booking agreement.</h3>

            <p>
              All customers and those that have booked a pub through Celebr8 must only use the pub
              as described by the pub listing owner, and as agreed upon in the booking agreement.
              Pubs take pride in their space, the amenities, and their business and will be
              expecting the same professional respect and courtesy that they are providing.
            </p>

            <h2>2. Never engage in illegal or prohibited activity on pub premises.</h2>
            <p>
              All local laws are enforceable and pub owners can notify authorities if laws are being
              broken on their property or on their pub premises. Never engage in any illegal
              activity on pub property or premises.
            </p>

            <h2>EVERYONE MUST:</h2>

            <h3>1. Communicate honestly with others.</h3>
            <p>
              Celebr8 is a trusted marketplace and depends on the honesty, integrity, and best
              interest of everyone that uses the platform. Only message others with the best intent
              in mind, do not make false claims, misrepresentations, do not engage in fraudulent
              activity, and do not willingly be deceitful.
            </p>

            <h3>2. Transact honestly and with the intended use of Celebr8.</h3>
            <p>
              Celebr8 is intended to be a marketplace for customers to book pubs and pubs to offer
              their spaces. Any transactions that are not intended for this purpose, are
              misrepresented, have fraudulent intent, or otherwise deemed harmful to either user
              will be immediately reviewed and if fraudulent, legal action will be taken by Celebr8
              if deemed necessary. All users and transactions are also applicable to the Terms of
              Service that is agreed upon by using the platform.
            </p>

            <h3>3. Respect others privacy and information.</h3>
            <p>
              Many pubs are owned and operated by respected professionals. Some pubs may also have
              well-known customers present at the pub during your booking. It is professional and
              common courtesy to respect the privacy of the pubs, others on the premise, and the
              information of both the pubs and professionals that may be offering pub services. In
              some cases, pubs may require customers to sign a agreement at the pub prior to their
              booking. If there is ever an issue with privacy, pub security, or pub rules, please
              send us an email immediately at{' '}
              <a href="mailto:support@celebr8.co">support@celebr8.co</a>.
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
