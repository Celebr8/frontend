import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import css from './SectionDeals.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#EB5027',
    },
    secondary: deepOrange,
  },
});

const SectionDeals = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={css.dealsContainer}>
      <div className={css.cardWrap}>
        <Card>
          <CardMedia className={[css.cardImage, css.birthdayGiftCard]} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Birthday Deal
            </Typography>
            <p>Get up to €330 when celebrating your birthday with Whichost.</p>
          </CardContent>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary" style={{ cursor: 'pointer' }}>
                Learn more
              </Button>
            </ThemeProvider>
          </CardActions>
        </Card>
      </div>
      <div className={css.cardWrap}>
        <Card>
          <CardMedia className={[css.cardImage, css.employeeBenefitCard]} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Employee Benefit
            </Typography>
            <p>Get up to €400 with each of your celebrations.</p>
          </CardContent>
          <CardActions>
            <ThemeProvider theme={theme}>
              <Button size="small" color="primary">
                Learn more
              </Button>
            </ThemeProvider>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

SectionDeals.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionDeals.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionDeals;
