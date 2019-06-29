import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Footer, LayoutSingleColumnWithHero, LayoutWrapperFooter, LayoutWrapperHero, LayoutWrapperMain, LayoutWrapperTopbar, Page } from '../../components';
import config from '../../config';
import { TopbarContainer } from '../../containers';
import { isScrollingDisabled } from '../../ducks/UI.duck';
import css from './CareersPage.css';


const CareersPageComponent = props => {

	const { scrollingDisabled, intl } = props;

	const siteTitle = config.siteTitle;
	const schemaTitle = intl.formatMessage({ id: 'CareersPage.schemaTitle' }, { siteTitle });
	const schema = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		name: schemaTitle,
	};
	return (
		<Page title={schemaTitle} scrollingDisabled={scrollingDisabled} schema={schema}>
			<LayoutSingleColumnWithHero>
				<LayoutWrapperTopbar>
					<TopbarContainer currentPage="CareersPage" />
				</LayoutWrapperTopbar>
				<LayoutWrapperHero className={css.hero}>
					<div className={css.heroContent}>
						<h3 className={css.heroMainTitle}>
							<FormattedMessage id="CareersPage.title" />
						</h3>
					</div>
				</LayoutWrapperHero>
				<LayoutWrapperMain>
				<section>
                    <h1>Shape the future of Whichost</h1>
						{/* <b>Position:</b> Frontend Engineer (Co-Founder)
						<br/>
						<b>Department:</b> Founding team
						<br/>
						<b>Location:</b> Cork / Ireland */}
				</section>
				<section>
					<br/>
					<h2>About the company</h2>
					<p> At Whichost, we aim to leave this world better than we found it. To achieve this we work with talented people and go above and beyond for our users. <b>We are an early stage startup with initial revenue</b> and a self-funded business with no investors or outside influences except one: our users and what's best for them. We are a startup of execution, full of triers and doers: we try things, we make mistakes, and we learn from them.</p>
					<p>Starting this company in Cork is an amazing journey to be a part of. As an early stage startup we don't have fancy offices. However, we do work in fancy coffee shops.</p>
					<p>We are seeking a Frontend Engineer Co-founder for our company to accelerate the improvement of our platform, so you won’t have to start from zero! You will be assigned significant equity participation in the company. You will not be required to leave your day job (if you have one) for the time being until we have enough revenue or resources to pay ourselves a living wage. You will also not be required to relocate to Cork in case you are located in a different location. However, after 6 PM we do live and breathe Whichost, including weekends and holidays (keeping a healthy balance with our personal lives).</p>
					<p>Your responsibilities will be define together with the team, once you are selected!</p>
					<br/>
					<ol><p>Meet the Whichost team:</p>
						<li><b>Loic C.:</b> Frontend Engineer with a major in Psychology. Joined Whichost in November 2018. <a href="https://angel.co/loic-coenen" target="_blank">AngelList profile</a></li>
						<li><b>Radu S.:</b> Electrical Engineer with 3 startups under his belt. Joined Whichost in July 2018. <a href="https://angel.co/radu-sighencea" target="_blank">AngelList profile</a></li>
						<li><b>Carlos R.:</b> Industrial Engineer with 4 startups under his belt. Founded Whichost in November 2017. <a href="https://angel.co/carloswhichost" target="_blank">AngelList profile</a></li>
					</ol>
				</section>
				{/* <section>
					<br/>
					<h2>Specs</h2>
					<p>The outcome of starting a company as an entrepreneur is not binary. Building a startup is a long-term game with tons of hard work required from lots of people and the right things happening at right time hence most of the short-term thinking/judgements do not apply.</p>
					<p>In the last 5-10 years of our startup life, we have been involved in different startups and early ventures. Either by founding them or joining afterwards. We've had successes and failures and in all cases, we have learned an enormous amount of lessons.</p>
					<p>We have observed a few traits that make a good founding team, hence mentioning them below. Please feel free to disagree:</p>
					<ol>
						<li>You are aware that execution is king.</li>
						<li>You are willing to increase your knowledge/skills just as fast as you dream of growing up your startup.</li>
						<li>You want to live an independent life; you should not have any intention of going back to a job or getting an early exit unless the situation demands so.</li>
						<li>You are willing to learn anything needed to make the startup grow.</li>
						<li>You don't wait to have time to work on your startup, you allocate time.</li>
						<li>You are willing to sacrifice weekends, holidays and time off to dedicate to your startup growth and development.</li>
						<li>If you have not founded a company previously, you must have at least one story of courage so far.</li>
						<li>You have respect for every stakeholder involved.</li>
						<li>You have respect for deadlines and understand that not achieving them can have a serious impact on the startup growth and development.</li>
						<li>You're comfortable with being uncomfortable.</li>
						<li>You're able to work well in a fast-paced environment, communicate effectively, and remain open to feedback and change.</li>
						<li>Skills: taking ownership, taking initiative, taking care of people be it employees or users or vendors and being very careful with the use of resources.</li>
					</ol>
					<p>Our current platform is built with (and the skills we are looking for):</p>
					<ol>
						<li>Java Script</li>
						<li>React.js</li>
						<li>Node.js</li>
						<li>HTML5</li>
						<li>CSS3</li>
					</ol>
				</section>
				<section>
					<br/>
					<h2>What you can expect</h2>
					<p>Being part of Whichost isn't like a normal job. We are a startup! We believe in bringing onboard only the best, and as co-founders, we will make all the necessary sacrifices to make Whichost as big as possible.</p>
					<p>Whichost was born out of a dream. A dream to make finding spaces to host your parties a breeze for everyone, and when we achieve it, we will not stop there. Whichost is a stepping-stone towards bigger dreams, more solutions for everyday issues, and better quality of life for every user around the world that we can reach.</p>
					<p>As co-founders and entrepreneurs, we will continuously work to leave this world better than we found it!</p>
					<section className={css.getInTouch}>
					<h3>Sounds epic?</h3>
						<div className={css.btnGroup + ' ' + css.containerButton}>
							<section className={css.centerButtons}>
								<form action="https://docs.google.com/forms/d/e/1FAIpQLSdtm06qPOY43w8fY7-BCfsLa1y6NLPqGijoRDGijEYYBMLokQ/viewform" method="get" target="_blank">
									<button type="submit">Apply now</button>
								</form>
								<form action="https://docs.google.com/forms/d/e/1FAIpQLSfLafaWAW8blKVi99wMeUpUznN6_cmUoDNo3qy58VnXLuo7JA/viewform" method="get" target="_blank">
									<button type="submit">Refer a friend</button>
								</form>
							</section>
						</div>
					</section>
				</section> */}
				</LayoutWrapperMain>
				<LayoutWrapperFooter>
					<Footer />
				</LayoutWrapperFooter>
			</LayoutSingleColumnWithHero>
		</Page>
	);
};

const { bool } = PropTypes;

CareersPageComponent.propTypes = {
	scrollingDisabled: bool.isRequired,

	// from injectIntl
	intl: intlShape.isRequired,
};

const mapStateToProps = state => {
	return {
		scrollingDisabled: isScrollingDisabled(state),
	};
};

const CareersPage = compose(
	connect(mapStateToProps),
	injectIntl
)(CareersPageComponent);

export default CareersPage;;
