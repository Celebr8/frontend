import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last updated: April 14, 2018</p>

      <p>
        This Privacy Policy explains how Whichost Ltd (“Whichost” or “we”) collects, uses, and shares personal information. As used in this Privacy Policy, “you” may refer to either a user of Whichost’s products or services (“Services”); or a person providing visiting our website, using our apps, or interacting with us. This Privacy Policy describes our use of information that identifies or might reasonably identify you (“personal information”).
      </p>
      
      <p>
      We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy. In some cases, we may provide you with additional notice, such as sending you an email notification. We encourage you to review the Privacy Policy whenever you use our Services or apps or visit our website to understand how we use personal information and the ways you can help protect your privacy.
      </p>
      
      <p>
				If you have questions about this Privacy Policy or our use of personal information, please <NamedLink name="ContactUsPageEnquiry" params={{enquiry: "privacy"}}>contact us</NamedLink>. Your use of the website or Services constitutes your acceptance of our use of your personal information as described in this Privacy Policy.
      </p>

      <h2>COLLECTION OF INFORMATION</h2>
      <h3>Information you provide to us</h3>
      <p>
        We may collect and use personal information that you provide directly to us. The types of personal information we may collect when you provide it to us include your name, email or physical address, company information, payment information, pictures, descriptions of properties, and other information you choose to provide.
      </p>

      <h3>Not for use for people under the age of 18 years old</h3>
      <p>
				The Services are not intended for people under 18 years of age. If you are under 18, do not use or provide any personal information on or through the Services or about yourself to us. If you believe that we might have personal information from or about a child under 18, please <NamedLink name="ContactUsPageEnquiry" params={{enquiry: "privacy"}}>contact us</NamedLink>.</p>

      <h3>Information we collect automatically when you use our services</h3>
      <p>
        When you access or use our Services, we automatically collect personal information and other information that may include:
		</p>
		<p>
<strong>Log Information:</strong> We log personal information during use of our Services, including browser information, page views, IP addresses, and the website visited before navigating to our website to help us to improve our website and Services.
		</p>
		<p>
<strong>Information Collected by Cookies and Other Tracking Technologies:</strong> we may use various technologies to collect information, including cookies. Cookies are small data files stored in device memory that help us to improve our users’ experience of our website and Services, identify popular features, and count visits. We may also collect information using web beacons (also known as “tracking pixels”). Web beacons are electronic images that may be used in our Services or emails to help deliver cookies, count visits, understand usage, and campaign effectiveness and determine whether an email has been opened and acted upon. If your browser is set not to accept cookies, you may not be able to use the website or Services.
      </p>
      <h3>Information we collect from other sources</h3>
      <p>
        We may also obtain information from other sources and combine that with the information we collect through our website or Services. For example, when you create or log into your account through a social media site, we will have access to certain information from that site, such as your name and account information, in accordance with the authorisation procedures determined by such social media sites except to the extent that your chosen social media platform allows you to disable this functionality. We may use publicly available tools, such as a Google Analytics, to better understand users’ preferences. Collection of data by third-party tools are subject to their respective privacy policies.
		</p>
		<h3>Use of information</h3>
      <p>
        We may use personal information for various purposes, including to do the following:
		</p>
		<p>
		<ul>
			<li>Provide and deliver the Services, process transactions, and send you Service-related information, including confirmations and invoices;</li>
			<li>Send you technical notices, updates, security alerts, support messages, and administrative messages;</li>
			<li>Respond to your comments, questions, and requests, and provide customer service;</li>
			<li>Provide, maintain, advertise, promote and improve our Services;</li>
			<li>Facilitate communication among users of our Services;</li>
			<li>Communicate with you about products, services, offers, promotions, and more about Whichost and others;</li>
			<li>Monitor and analyze trends, usage, and activities in connection with our Services; Personalize and improve our Services and provide content or features through the Service that match user profiles or interests;</li>
			<li>Link or combine with information we get from others to help understand your needs and provide you with better service; and</li>
			<li>Carry out any other purpose for which the information was collected.</li>
		</ul>
		</p>
		<p>
		Whichost is based in Ireland, and the information we collect is governed by Irish law and the laws of the other countries in which we operate. By accessing or using our Services or otherwise providing information to us, you understand and consent to the processing and transfer of information in Ireland and other countries for the purposes set out in this Privacy Policy.
		</p>
		<h3>Sharing of information</h3>
		<p>
			We may share personal information as follows or as otherwise described in this Privacy Policy:
		</p>
		<p>
			<ul>
				<li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf as requested through the Services;</li>
				<li>With third parties to provide marketing and promotional purposes on our behalf, provided that they have agreed to handle personal information in a manner consistent with this Privacy Policy;</li>
				<li>In response to a request for information, if we believe disclosure is in required by applicable law, regulation, or rule; or administrative, judicial, or other governmental order;</li>
				<li>In connection with, or during negotiations of, any merger, sale of company assets, financing or acquisition of all or a portion of our business to another company.</li>
			</ul>
		</p>
		<h3>Anonymised, pseudonymised and aggregated data</h3>
		<p>
We may also anonymise or pseudonymise to remove any identifying attributes, or aggregate personal information with a sufficiently large number of other information such that it cannot reasonably be linked to you (“anonymised data”). We may use this anonymised data for both internal or public analyses or reporting, but will not identify you in the anonymised data without your consent.
		</p>
		<h3>Analytics services provided by others</h3>
		<p>
We may allow others to provide analytics services. These entities may use cookies, web beacons, and other technologies to collect personal information use of our Services and other websites, including your IP address, web browser, pages viewed, time spent on pages, links clicked, and conversion information. Whichost and others may use this information to, among other things, analyse and track data, determine the popularity of certain content, and better understand user online activity.
		</p>
		<h3>Security</h3>
		<p>
Whichost takes reasonable measures to help protect personal information from loss, theft, misuse, and unauthorised access, disclosure, alteration, and destruction.
		</p>
		<h2>YOUR CHOICES</h2>
		<h3>Account information</h3>
		<p>
			You may update, correct or delete personal information at any time by <NamedLink name="ContactUsPageEnquiry" params={{enquiry: "privacy"}}>clicking here</NamedLink>. If you wish to delete or deactivate your account, you can do so by emailing us, but we may retain certain personal information as required by law or for legitimate business purposes. We may also retain cached or archived copies of your personal information until purged during our normal course of business.
		</p>
		<h3>Cookies</h3>
		<p>
Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Removing or rejecting browser cookies does not necessarily affect third party flash cookies used in connection with our Services. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services.
		</p>
		<h3>Promotional communications</h3>
		<p>
			You may opt out of receiving promotional communications from Whichost by following the unsubscribe instructions in those communications or by <NamedLink name="ContactUsPageEnquiry" params={{enquiry: 'privacy'}}>clicking here</NamedLink>. If you opt out, we may still send you non-promotional communications, including those about your account or transactions.
		</p>
		<h3>Contact information</h3>
		<p>
			Please <NamedLink name="ContactUsPageEnquiry" params={{enquiry: "privacy"}}>contact us</NamedLink> with any questions or comments about this Privacy Policy.
		</p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
