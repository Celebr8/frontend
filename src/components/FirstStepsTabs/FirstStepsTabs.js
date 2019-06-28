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

const ItemOnePleaseChangeMyName = () => (
  <TabContainer>
    <h2>We know more about you than you think.</h2>
    <p>
      Don't worry. We're to busy and we're serious enough not to stalk you, but here's what we
      definitely know:
      <ol>
        <li>You like spending time with your friends and you like to party;</li>
        <li>You use your phone every day;</li>
        <li>You don't really like making phone calls;</li>
        <li>When you're searching for a pub online, you waste time in most of the cases;</li>
        <li>You preffer to book and buy online, with a click/tap.</li>
      </ol>
    </p>
    <p>
      That's why you are here. You want to easily find and book the perfect pub for your next party.
    </p>
    <br />
    <p>
      <b>Here are the steps you need to start saving time</b>
    </p>
    <ol>
      <li>
        Create a profile by clicking on{' '}
        <a href="https://www.whichost.com/signup" target="_blank">
          Sign up
        </a>
        ;
      </li>
      <li>Enter the needed information and click on the button "Sign up";</li>
      <li>
        Check your emails and click on the verification link to verify your account. We want to be
        sure you've entered the correct email addres;
      </li>
      <li>
        <a
          href="https://www.whichost.com/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756"
          target="_blank"
        >
          Browse pubs
        </a>{' '}
        to find the perfect pub for your occasion;
      </li>
      <li>
        Read the details of the pub listing and contact the pub over the highlighted "Contact"
        button underneath the title of the listing, in case you have querstions for the publican,
        before you book;
      </li>
      <li>When you're ready to book, click on "Request to book" on the listing page;</li>
      <li>Done;</li>
      <li>
        <i>(optional)</i>
        <a href="https://www.whichost.com/help/contact-us" target="_blank">
          {' '}
          Contact us
        </a>{' '}
        in case you have further questions.
      </li>
    </ol>
    <br />
    <h2>Is your birthday coming up?</h2>
    <p>
      Happy birthday! We have a great gift for you! Check out our{' '}
      <a href="https://www.whichost.com/birthday-deal" target="_blank">
        Birthday Deal
      </a>{' '}
      page and have a great time on us! <i>(T&Cs apply)</i>
    </p>
    <br />
    <h2>Are you part of a corporation? Reward your colleagues!</h2>
    <p>
      We have a great deal for your corporation! Check out our{' '}
      <a href="https://www.whichost.com/employees-benefit" target="_blank">
        Corporate Benefit
      </a>{' '}
      page and reward your employees and colleagues now! <i>(T&Cs apply)</i>
    </p>
    <br />
    <h2>Contact us. We're here to help.</h2>
    <p>
      If you're ready to start saving time but you still have questions that are not covered by our{' '}
      <a href="https://www.whichost.com/help/faq" target="_blank">
        help center
      </a>
      , we invite you to{' '}
      <a href="https://www.whichost.com/help/contact-us" target="_blank">
        contact us
      </a>{' '}
      and we'll assist you personally.
    </p>
    <br />
  </TabContainer>
);

const ItemTwoPleaseChangeMyName = () => (
  <TabContainer>
    <h2>Higher income, more exposure, returning customers.</h2>
    <p>
      If you're aiming for a higher income and if you want to gain more exposure for your pub,
      you're in the right place. Keep your customers returning and strengthen your relationship with
      them by offering the option to easily find and book your pub online over Whichost.com
    </p>
    <p>
      <b>Here's what you need to start a profitable Whichost business:</b>
    </p>
    <p>
      <ol>
        <li>
          Create a profile by clicking on{' '}
          <a href="https://www.whichost.com/signup" target="_blank">
            Sign up
          </a>
          ;
        </li>
        <li>Enter the needed information and click on the button "Sign up";</li>
        <li>
          Check your emails and click on the verification link to verify your account. We want to be
          sure you've entered the correct email addres;
        </li>
        <li>
          Click on{' '}
          <a href="https://www.whichost.com/l/new" target="_blank">
            + Add your pub
          </a>
          ;
        </li>
        <li>Add content to your new listing by following the steps on the page;</li>
        <li>Share your new listing on social media platforms by using the link in the browser;</li>
        <li>Done;</li>
        <li>
          <i>(optional)</i>
          <a href="https://www.whichost.com/help/contact-us" target="_blank">
            {' '}
            Contact us
          </a>{' '}
          in case you have further questions.
        </li>
      </ol>
    </p>
    <br />
    <h2>Why should you use Whichost? Because it's a win-win-win.</h2>
    <p>
      We are on a mission. We know that the pub industry is shrinking, we know that parties are
      becomming the bigest source of income, we know that party-people nowdays are mobile and
      preffer to book online and <b>Whichost is the solution:</b>
      <br />
      <br />
      <ol>
        <li>
          <b>Your win:</b> You increase your income, gain more exposure and keep your customers
          returning;
        </li>
        <li>
          <b>Your customer's win:</b> They are happy to have the option to easily find and book your
          pub;
        </li>
        <li>
          <b>Whichost's win:</b> We are happy to see the pub industry flowrish again.
        </li>
      </ol>
    </p>
    <br />
    <h2>Contact us. We're here to help.</h2>
    <p>
      If you're ready to start but you still have questions that are not covered by our{' '}
      <a href="https://www.whichost.com/help/faq" target="_blank">
        help center
      </a>
      , we invite you to{' '}
      <a href="https://www.whichost.com/help/contact-us" target="_blank">
        contact us
      </a>{' '}
      and we'll assist you personally.
    </p>
    <br />
  </TabContainer>
);

class FirstStepsTabs extends React.Component {
  state = {
    value: false,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    setTimeout(() => this.setState({ value: 0 }), 1000);
  }

  render() {
    const { classes } = this.props;

    const tabs = {
      0: <ItemOnePleaseChangeMyName />,
      1: <ItemTwoPleaseChangeMyName />,
    };

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
            <Tab label="Steps for users" />
            <Tab label="Steps for providers" />
          </Tabs>
        </Paper>
        {selectedTab}
      </Fragment>
    );
  }
}

export default FirstStepsTabs;
