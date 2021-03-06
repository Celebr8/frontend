import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NamedLink } from '../../components';
import { locationToURI, mainCountry, mainLocationsData } from '../../locals';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import css from './SectionLocations.css';
const locationToLink = (location, i) =>
  locationLink(location.address, location.img, locationToURI(location), i);

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery, i) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink key={i} name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const locations = mainLocationsData.map((location, i) => locationToLink(location, i));

  return (
    <div className={classes}>
      <div>
        <h2 style={{ color: '#ff3f00' }}>Try something new!</h2>
      </div>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>{locations}</div>
      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <NamedLink
          name="SearchPage"
          to={{ search: locationToURI(mainCountry) }}
          className={css.mapLink}
        >
          <FormattedMessage id="SectionLocations.morePubs" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
