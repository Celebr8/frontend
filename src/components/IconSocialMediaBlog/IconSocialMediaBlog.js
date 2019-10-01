import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BlogIcon from '../../assets/BlogIcon.png';

import css from './IconSocialMediaBlog.css';

const IconSocialMediaBlog = props => {
  const { rootClassName, className, width, height } = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div
      className={classes}
      width={width || 10}
      height={height || 17}
      viewBox="0 0 10 17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <img src={BlogIcon} height="30px" width="30px" alt="Go to blog" />
    </div>
  );
};

IconSocialMediaBlog.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

IconSocialMediaBlog.propTypes = { rootClassName: string, className: string };

export default IconSocialMediaBlog;
