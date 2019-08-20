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

import { legalsTabs } from '../tabs';

import css from './NonDiscriminationPolicyPage.css';

const NonDiscriminationPolicyPageComponent = props => {
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
          <TopbarContainer currentPage="NonDiscriminationPolicyPage" />
        </LayoutWrapperTopbar>
        <LayoutWrapperSideNav tabs={tabs} />
        <LayoutWrapperMain>
          <div className={css.content}>
            <h1 className={css.heading}>
              <FormattedMessage id="NonDiscriminationPolicyPage.heading" />
            </h1>
            <h2>OUR COMMITMENT TO INCLUSION AND RESPECT</h2>
						<p>Celebr8 is, at its core, an open community dedicated to bringing the world closer together by fostering meaningful, shared celebrations among people from all parts of the world.</p>
            <p>The Celebr8 community is committed to building a world where people from every background feel welcome and respected, no matter how far they have travelled from home. This commitment rests on two foundational principles that apply both to Celebr8’s pubs and customers: inclusion and respect. Our shared commitment to these principles enables every member of our community to feel welcome on the Celebr8 platform no matter who they are, where they come from, how they worship, or whom they love. Celebr8 recognises that some jurisdictions permit, or require, distinctions among individuals based on factors such as national origin, gender, marital status or sexual orientation, and it does not require pubs to violate local laws or take actions that may subject them to legal liability. Celebr8 will provide additional guidance and adjust this inclusion policy to reflect such permissions and requirements in the jurisdictions where they exist.</p>
            <p>While we do not believe that one company can mandate harmony among all people, we do believe that the Celebr8 community can promote empathy and understanding across all cultures. We are all committed to doing everything we can to help eliminate all forms of unlawful bias, discrimination, and intolerance from our platform. We want to promote a culture within the Celebr8 community—pubs, customers and people just considering whether to use our platform—that goes above and beyond mere compliance. To that end, all of us, Celebr8 employees, hosts and customers alike, agree to read and act in accordance with the following policy to strengthen our community and realise our mission of ensuring that everyone can belong, and feels welcome, anywhere.</p>
            <h3>Inclusion</h3>
            <p>We welcome customers of all backgrounds with authentic kindness and open minds. Joining Celebr8, as a pub or customer, means becoming part of a community of inclusion. Bias, prejudice, racism, and hatred have no place on our platform or in our community. While hosts are required to follow all applicable laws that prohibit discrimination based on such factors as race, religion, national origin, and others listed below, we commit to do more than comply with the minimum requirements established by law.</p>
            <h3>Respect</h3>
            <p>We are respectful of each other in our interactions and encounters. Celebr8 appreciates that local laws and cultural norms vary around the world and expects pubs and customers to abide by local laws, and to engage with each other respectfully, even when views may not reflect their beliefs or upbringings. Celebr8’s members bring to our community an incredible diversity of background experiences, beliefs, and customs. By connecting people from different backgrounds, Celebr8 fosters greater understanding and appreciation for the common characteristics shared by all human beings and undermines prejudice rooted in misconception, misinformation, or misunderstanding.</p>
            <h2>SPECIFIC GUIDANCE FOR PUBS IN IRELAND AND EUROPEAN UNION</h2>
            <p>As a general matter, we will familiarise ourselves with all applicable local laws that apply to booking and places of public celebration. Pubs should contact Celebr8 customer service if they have any questions about their obligations to comply with this Celebr8 Inclusion Policy. Celebr8 will release further discrimination policy guidance for jurisdictions outside Ireland in the near future. Guided by these principles, our Irish and EU pub community will follow these rules when considering potential customers and hosting customers:</p>
            <p><b>Race, Colour, Ethnicity, National Origin, Religion, Sexual Orientation, Gender Identity, or Marital Status</b></p>
            <p>Celebr8 pubs may not</p>
            <ol>
              <li>Decline a customer based on race, colour, ethnicity, national origin, religion, sexual orientation, gender identity, or marital status.</li>
              <li>Impose any different terms or conditions based on race, colour, ethnicity, national origin, religion, sexual orientation, gender identity, or marital status.</li>
              <li>Post any listing or make any statement that discourages or indicates a preference for or against any customer on account of race, colour, ethnicity, national origin, religion, sexual orientation, gender identity, or marital status.</li>
            </ol>
            <p><b>Gender</b></p>
            <p>Celebr8 pubs may not</p>
            <ol>
              <li>Decline to book to a customer based on gender.</li>
              <li>Impose any different terms or conditions based on gender.</li>
              <li>Post any listing or make any statement that discourages or indicates a preference for or against any customer on account of gender.</li>
            </ol>
            <p><b>Disability</b></p>
            <p>Celebr8 pubs may not</p>
            <ol>
              <li>Decline a customer based on any actual or perceived disability.</li>
              <li>Impose any different terms or conditions based on the fact that the customer has a disability.</li>
              <li>Substitute their own judgement about whether a space meets the needs of a customer with a disability for that of the prospective customer.</li>
              <li>Inquire about the existence or severity of a customer’s disability, or the means used to accommodate any disability. If, however, a potential customer raises his or her disability, a pub may, and should, discuss with the potential customer whether the listing meets the potential customer’s needs.</li>
              <li>Prohibit or limit the use of mobility devices.</li>
              <li>Charge more in book or other fees for customers with disabilities.</li>
              <li>Post any listing or make any statement that discourages or indicates a preference for or against any customer on account of the fact that the customer has a disability.</li>
              <li>Refuse to communicate with customers through accessible means that are available, including relay operators (for people with hearing impairments) and e-mail (for people with vision impairments using screen readers).</li>
              <li>Refuse to provide reasonable spaces, including flexibility when customers with disabilities request modest changes in your business rules, such as bringing an assistance animal that is necessary because of the disability, or using an available parking space near the unit. When a customer requests such a requirement, the pub and the customer should engage in a dialogue to explore mutually agreeable ways to ensure the space meets the customer’s needs.</li>
            </ol>
            <p>Celebr8 pubs may</p>
            <ol>
              <li>Provide factually accurate information about the space’s accessibility features (or lack of them), allowing for customers with disabilities to assess for themselves whether the unit is appropriate to their individual needs.</li>
            </ol>
            <h3>Personal prefferences</h3>
            <p>Celebr8 pubs may</p>
            <ol>
              <li>Except as noted above, Celebr8 pubs may decline to book based on factors that are not prohibited by law. For example, except where prohibited by law, Celebr8 pubs may decline to book customers with pets, or to customers who smoke.</li>
              <li>Require customers to respect restrictions on foods consumed in the listing (e.g., a pub who maintains a Kosher or vegetarian kitchen may require customers to respect those restrictions).</li>
              <li>Nothing in this policy prevents a pub from turning down a customer on the basis of a characteristic that is not protected under the civil rights laws or closely associated with a protected class. For example, an Celebr8 pub may turn down a customer who wants to smoke in a space, or place limits on the number of customers in a space.</li>
            </ol>
            <h3>Turning down customers</h3>
            <p>Pubs should keep in mind that no one likes to be turned down. While a pub may have, and articulate, lawful and legitimate reasons for turning down a potential customer, it may cause that member of our community to feel unwelcome or excluded. Pubs should make every effort to be welcoming to customers of all backgrounds. Pubs who demonstrate a pattern of rejecting customers from a protected class (even while articulating legitimate reasons), undermine the strength of our community by making potential customers feel unwelcome, and Celebr8 may suspend pubs who have demonstrated such a pattern from the Celebr8 platform.</p>
            <h2>SPECIFIC GUIDANCE FOR PUBS OUTSIDE IRELAND AND EUROPEAN UNION</h2>
            <p>Outside of Ireland and the European Union, some countries or communities may allow or even require people to make celebration distinctions based on, for example, marital status, national origin, gender or sexual orientation, in violation of our general inclusion philosophy. In these cases, we do not require pubs to violate local laws, nor to accept customers that could expose the pubs to a real and demonstrable risk of arrest, or physical harm to their persons or property. Pubs who live in such areas should set out any such restriction on their ability to receive particular customers in their listing, so that prospective customers are aware of the issue and Celebr8 can confirm the necessity for such an action. In communicating any such restrictions, we expect hosts to use clear, factual, non-derogatory terms. Slurs and insults have no place on our platform or in our community.</p>
            <h2>WHAT HAPPENS WHEN A PUB DOES NOT COMPLY WITH OUR POLICIES IN THIS AREA?</h2>
            <p>If a particular listing contains language contrary to this inclusion policy, the pub will be asked to remove the language and affirm his or her understanding and intent to comply with this policy and its underlying principles. Celebr8 may also, in its discretion, take steps up to and including suspending the host from the Celebr8 platform.</p>
            <p>If the pub improperly rejects customers on the basis of protected class, or uses language demonstrating that his or her actions were motivated by factors prohibited by this policy, Celebr8 will take steps to enforce this policy, up to and including suspending the pub from the platform.</p>
            <p>As the Celebr8 community grows, we will continue to ensure that Celebr8’s policies and practices align with our most important goal: To ensure that customers and pubs feel welcome and respected in all of their interactions using the Celebr8 platform. The public, our community, and we ourselves, expect no less than this.</p>

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

NonDiscriminationPolicyPageComponent.propTypes = {
  scrollingDisabled: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const mapStateToProps = state => {
  return {
    scrollingDisabled: isScrollingDisabled(state),
  };
};

const NonDiscriminationPolicyPage = compose(
  connect(mapStateToProps),
  injectIntl
)(NonDiscriminationPolicyPageComponent);

export default NonDiscriminationPolicyPage;
