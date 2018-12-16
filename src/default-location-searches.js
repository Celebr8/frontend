import { types as sdkTypes } from './util/sdkLoader';
import { mainLocationsData } from './locals';

const { LatLng, LatLngBounds } = sdkTypes;


// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.

const locationToLatLngBounds = (location) => new LatLngBounds(
	new LatLng(location.bounds[0], location.bounds[1]),
	new LatLng(location.bounds[2], location.bounds[3]))

export default mainLocationsData.map( (location) => ({
	id: `default-${location.intl}`,
	predictionPlace: {
		address: location.address,
		origin: new LatLng(...location.origin),
		bounds: locationToLatLngBounds(location)
	}
}))

// export default [
// 	{
// 		id: 'default-helsinki',
// 		predictionPlace: {
// 			address: 'Helsinki, Finland',
// 			origin: new LatLng(60.16985, 24.93837),
// 			bounds: new LatLngBounds(new LatLng(60.29783, 25.25448), new LatLng(59.92248, 24.78287)),
// 		},
// 	},
