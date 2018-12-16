import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import dublinImage from './images/location_dublin.jpg';
import corkImage from './images/location_cork.jpg';
import galwayImage from './images/location_galway.jpg';

const mainLocationsData = [
	{
		address: 'Dublin, Ireland',
		img: dublinImage,
		bounds: ['53.4104', '-6.0899', '53.2915', '-6.3837'],
		origin: ['53.3477', '-6.254']
	},
	{
		address: 'Cork, Ireland',
		img: corkImage,
		bounds: ['51.918', '-8.3934', '51.8654', '51.9035'],
		origin: ['51.8985','-8.4711']
	},
	{
		address: 'Galway, Ireland',
		img: galwayImage,
		bounds: ['53.3109', '-8.9588', '53.253', '53.276'],
		origin: ['53.2748', '-9.0488']
	}
]

const joinAndEncode = (array) => encodeURIComponent(array.join(','))

const locationToLink = (location) =>
	locationLink(
		location.address,
		location.img,
		`?address=${encodeURIComponent(location.address)}&bounds=${joinAndEncode(location.bounds)}&origin=${joinAndEncode(location.origin)}`
	)

class LocationImage extends Component {
	render() {
		const { alt, ...rest } = this.props;
		return <img alt={alt} {...rest} />;
	}
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
	const nameText = <span className={css.locationName}>{name}</span>;
	return (
		<NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
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
	const locations = mainLocationsData.map( (location) => locationToLink(location))

	return (
		<div className={classes}>
			<div className={css.title}>
				<FormattedMessage id="SectionLocations.title" />
			</div>
			<div className={css.locations}>
				{locations}
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
