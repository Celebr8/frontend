import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
};

const pubFeesTab = () => (
	<TabContainer>
  <p>Whichost is not a venture-backed startup. We’re proud to say that we are a self-funded company, which relies on the support of its marketplace members.</p>
  <p>Whichost charges according to the size of the party and it also considers if the listing is being managed by the pub or by Whichost:</p>

  <h2>FOR LISTINGS MANAGED BY THE PUB</h2>
  <p>In the case of listings managed by the pub we have two price tables. One for parties from Thursdays to Sundays, and another one for parties between Mondays to Wednesdays. Why? Because we understand that parties from Mondays to Wednesdays have a much higher value for pubs and their bottom-line.</p>
  <br/><b>Parties from Thursdays to Sundays</b>
  <br/>Up to 30 people: € 35.00
  <br/>31 to 50 people: € 90.00
  <br/>51 to 100 people: € 170.00
  <br/>101 to 200 people: € 300.00
  <br/>201 and more people: € 480.00

  <br/><br/><b>Parties from Mondays to Wednesdays</b>
  <br/>Up to 30 people: € 40.00
  <br/>31 to 50 people: € 100.00
  <br/>51 to 100 people: € 190.00
  <br/>101 to 200 people: € 380.00
  <br/>201 and more people: € 550.00

  <h2>FOR LISTINGS MANAGED BY WHICHOST</h2>
  <p>A listing being managed by Whichost means that we are the middle-man. Not only we are doing the job of being the point of contact between the pub and their customers, but we are also managing the listing itself. The price per party is higher and we do not take into consideration the day of the week.</p>
  <br/><b>Parties from Mondays to Sundays</b>
  <br/>Up to 30 people: € 40.00
  <br/>31 to 50 people: € 100.00
  <br/>51 to 100 people: € 190.00
  <br/>101 to 200 people: € 380.00
  <br/>201 and more people: € 550.00
	</TabContainer>
)

const userFeesTab = () => (
	<TabContainer>
  <p>Whichost charges a 10% fee on top of the value of the booking. This fee is paid at the same moment that the user is requesting the booking.</p>
  <p>For example: let’s say a pub’s listing is priced at €9.00 to book it for one night. As soon as the user requests a booking, they will pay €9.90, which is the original €9.00 of the listing plus the 10% of it, which is €0.90. No charge is made to the user’s credit card until the pub accepts the booking request.</p>
  <p>If the pub rejects the booking request or does not act on it within 3 days, the request is automatically cancelled and the user’s funds are immediately returned to their card.</p>
	</TabContainer>
)

const otherFeesTab = () => (
	<TabContainer>
  <h2>OVERTIME FEES</h2>
  <p>In the event that a booking exceeds the timeframe of the original booking agreement, the pub is responsible for collecting additional payment for the pub usage, pub services, or other additional fees agreed upon. Since this is outside the booking agreement on the Whichost platform, Whichost is not liable for collecting this payment or any circumstances outside the original booking agreement.</p>

  <h2>FINES FOR DAMAGE</h2>
  <p>We try to avoid all events of damage, but in the rare event that damage to the pub property, amenities, or other takes place during the time period of the booking agreement, the customer (user booking) is directly responsible for these fees. As defined in the Services Agreement, the customer is liable for this damage and Whichost may collect this if required. It is encouraged for both the pub and customer to work through this directly since it is usually best to keep it between both parties. Pubs are also encouraged and in some instances required to have their own insurance policies per our Service Agreement for this very reason. If you need to report damage to your pub, amenities, or other at any time, please take the proper action to first contact any local authorities if necessary, your insurance provider, and also <a href="https://www.whichost.com/help/contact-us">contact us</a> immediately.</p>
	</TabContainer>
)

class FeesTabs extends React.Component {

  state = {
    value: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

	componentDidMount(){

		setTimeout(() =>
			this.setState({value: 0}), 1000)

	}

  render() {
    const { classes } = this.props;

		const tabs = {
			0: <pubFeesTab />,
			1: <userFeesTab />,
			2: <otherFeesTab />
		}

		const selectedTab = tabs[this.state.value];

    return (
			<Fragment>
				<Paper>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="secondary"
						textColor="secondary"
						centered
					>
						<Tab label="Pub fees" />
						<Tab label="User fees" />
						<Tab label="Other fees" />
					</Tabs>
				</Paper>
				{selectedTab}
			</Fragment>
    );
  }
}

export default FeesTabs;
