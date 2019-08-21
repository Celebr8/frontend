/**
 * Import reducers from shared ducks modules (default export)
 * We are following Ducks module proposition:
 * https://github.com/erikras/ducks-modular-redux
 */

import Auth from './Auth.duck';
import EmailVerification from './EmailVerification.duck';
import FlashNotification from './FlashNotification.duck';
import LocationFilter from './LocationFilter.duck';
import marketplaceData from './marketplaceData.duck';
import Routing from './Routing.duck';
import stripe from './stripe.duck';
import UI from './UI.duck';
import user from './user.duck';

export { Auth, EmailVerification, FlashNotification, LocationFilter, Routing, UI, marketplaceData, stripe, user, };

