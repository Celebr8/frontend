/*

 __     __  __  __  __  ______  __  __  ______  ______  ______  
/\ \  _ \ \/\ \_\ \/\ \/\  ___\/\ \_\ \/\  __ \/\  ___\/\__  _\ 
\ \ \/ ".\ \ \  __ \ \ \ \ \___\ \  __ \ \ \/\ \ \___  \/_/\ \/ 
 \ \__/".~\_\ \_\ \_\ \_\ \_____\ \_\ \_\ \_____\/\_____\ \ \_\ 
	\/_/   \/_/\/_/\/_/\/_/\/_____/\/_/\/_/\/_____/\/_____/  \/_/ 

This file is specific to the Whichost frontend. 

It will contains datas relative to internationalisation (favorite operating cities).

*/

import dublinImage from './images/location_dublin.png';
import corkImage from './images/location_cork.png';
import galwayImage from './images/location_galway.png';

export const mainLocationsData = [
  {
    address: 'Dublin, Ireland',
    img: dublinImage,
    bounds: ['53.4104', '-6.0899', '53.2915', '-6.3837'],
    origin: ['53.3477', '-6.254'],
    intl: 'Dublin',
  },
  {
    address: 'Cork, Ireland',
    img: corkImage,
    bounds: ['51.918', '-8.3934', '51.8654', '-8.54181'],
    origin: ['51.8985', '-8.4711'],
    intl: 'Cork',
  },
  {
    address: 'Galway, Ireland',
    img: galwayImage,
    bounds: ['53.3109', '-8.9588', '53.253', '-9.237719'],
    origin: ['53.2748', '-9.0488'],
    intl: 'Galway',
  },
];

export const mainCountry = {
  address: 'Ireland',
  bounds: ['55.36', '-5.911', '51.427', '-10.382'],
  origin: ['53.357', '-7.756'],
  intl: 'Ireland',
};

const joinAndEncode = array => encodeURIComponent(array.join(','));

export const locationToURI = location =>
  `?address=${encodeURIComponent(location.address)}&bounds=${joinAndEncode(
    location.bounds
  )}&origin=${joinAndEncode(location.origin)}`;
