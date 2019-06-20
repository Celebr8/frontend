import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import css from './UserFeeDonation.css';





const UserFeeDonation = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  const termsAndConditionsTitle = <h2>Terms and conditions</h2>;
  const examplesTitle = <h2>Examples</h2>;

  // prettier-ignore
  return (

		<div className={css.container}>
			<div className={classes}>
				<h2>The user's 10% fee when booking a pub, Will always be donated.
                They'll be consolidated ever 3 months and donated to a non-profit organisation.</h2>
				<section className={css.getInTouch}>
					<div className={css.btnGroup + ' ' + css.containerButton}>
						<section className={css.centerButtons}>
							<a href="/s?address=Ireland&bounds=55.36%2C-5.911%2C51.427%2C-10.382&origin=53.357%2C-7.756"><button type="submit">Find a pub for your celebration</button></a>
						</section>
					</div>
				</section>
				<div className={css.steps}>
					<div>
						<p>
							When you book a pub to host your party or celebration, you will also be supporting non-profit organisations. Your 10% fee, regardless of the value of the booking price, will always be donated. It will be consolidated every three months and given to a non-profit organisation which is doing its part to make the world a better place for everyone.
						</p>
					</div>
				</div>
			</div>
		</div>

	);
};

UserFeeDonation.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

UserFeeDonation.propTypes = {
  rootClassName: string,
  className: string,
};

export default UserFeeDonation;
