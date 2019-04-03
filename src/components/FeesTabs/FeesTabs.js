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
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis ante quis turpis maximus, quis faucibus eros bibendum. Sed mollis dui in purus dictum porta. Nullam sed condimentum neque. Duis pulvinar lacus porta ante hendrerit consectetur. Suspendisse consequat molestie nulla nec hendrerit. Sed id augue vel velit hendrerit scelerisque. Mauris mollis bibendum auctor. Proin vitae turpis neque. Nullam condimentum purus sit amet rutrum suscipit. Aenean eleifend lectus feugiat orci mattis, et tempus metus condimentum.
	</TabContainer>
)

const ItemTwoPleaseChangeMyName = () => (
	<TabContainer>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis ante quis turpis maximus, quis faucibus eros bibendum. Sed mollis dui in purus dictum porta. Nullam sed condimentum neque. Duis pulvinar lacus porta ante hendrerit consectetur. Suspendisse consequat molestie nulla nec hendrerit. Sed id augue vel velit hendrerit scelerisque. Mauris mollis bibendum auctor. Proin vitae turpis neque. Nullam condimentum purus sit amet rutrum suscipit. Aenean eleifend lectus feugiat orci mattis, et tempus metus condimentum.
	</TabContainer>
)

const ItemThreePleaseChangeMyName = () => (
	<TabContainer>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis ante quis turpis maximus, quis faucibus eros bibendum. Sed mollis dui in purus dictum porta. Nullam sed condimentum neque. Duis pulvinar lacus porta ante hendrerit consectetur. Suspendisse consequat molestie nulla nec hendrerit. Sed id augue vel velit hendrerit scelerisque. Mauris mollis bibendum auctor. Proin vitae turpis neque. Nullam condimentum purus sit amet rutrum suscipit. Aenean eleifend lectus feugiat orci mattis, et tempus metus condimentum.
	</TabContainer>
)

class FeesTabs extends React.Component {
	
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

		const tabs = {
			0: <ItemOnePleaseChangeMyName />,
			1: <ItemTwoPleaseChangeMyName />,
			2: <ItemThreePleaseChangeMyName />
		}

		const selectedTab = tabs[this.state.value];

    return (
			<div style={{flexGrow: 1}}> 
				<Tabs
					value={this.state.value}
					onChange={this.handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Item One" />
					<Tab label="Item Two" />
					<Tab label="Item Three" />
				</Tabs>
				{selectedTab}
			</div>
    );
  }
}

export default FeesTabs;
