import difference from 'lodash/difference';
import mapValues from 'lodash/mapValues';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
// react-dates needs to be initialized before using any react-dates component
// https://github.com/airbnb/react-dates#initialize
// NOTE: Initializing it here will initialize it also for app.test.js
import 'react-dates/initialize';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import config from './config';
import routeConfiguration from './routeConfiguration';
import Routes from './Routes';
import configureStore from './store';
// Flex template application uses English translations as default.
import defaultMessages from './translations/en.json';
// Step 3:
// If you are using a non-english locale with moment library,
// you should also import time specific formatting rules for that locale
// e.g. for French: import 'moment/locale/fr';
// Step 4:
// If you are using a non-english locale, point `messagesInLocale` to correct .json file
import messagesInLocale from './translations/fr.json';
import { IntlProvider } from './util/reactIntl';

// Note that there is also translations in './translations/countryCodes.js' file
// This file contains ISO 3166-1 alpha-2 country codes, country names and their translations in our default languages
// This used to collect billing address in StripePaymentAddress on CheckoutPage

// If translation key is missing from `messagesInLocale` (e.g. fr.json),
// corresponding key will be added to messages from `defaultMessages` (en.json)
// to prevent missing translation key errors.
const addMissingTranslations = (sourceLangTranslations, targetLangTranslations) => {
  const sourceKeys = Object.keys(sourceLangTranslations);
  const targetKeys = Object.keys(targetLangTranslations);
  const missingKeys = difference(sourceKeys, targetKeys);

  const addMissingTranslation = (translations, missingKey) => ({
    ...translations,
    [missingKey]: sourceLangTranslations[missingKey],
  });

  return missingKeys.reduce(addMissingTranslation, targetLangTranslations);
};

const isDefaultLanguageInUse = config.locale === 'en';

const messages = isDefaultLanguageInUse
  ? defaultMessages
  : addMissingTranslations(defaultMessages, messagesInLocale);

const isTestEnv = process.env.NODE_ENV === 'test';

// Locale should not affect the tests. We ensure this by providing
// messages with the key as the value of each message.
const testMessages = mapValues(messages, (val, key) => key);
const localeMessages = isTestEnv ? testMessages : messages;

const setupLocale = () => {
  if (isTestEnv) {
    // Use english as a default locale in tests
    // This affects app.test.js and app.node.test.js tests
    config.locale = 'en';
    return;
  }

  // Set the Moment locale globally
  // See: http://momentjs.com/docs/#/i18n/changing-locale/
  moment.locale(config.locale);
};

export const ClientApp = props => {
  const { store } = props;
  setupLocale();
  return (
    <IntlProvider locale={config.locale} messages={localeMessages} textComponent="span">
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <Routes routes={routeConfiguration()} />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </IntlProvider>
  );
};

const { any, string } = PropTypes;

ClientApp.propTypes = { store: any.isRequired };

export const ServerApp = props => {
  const { url, context, store } = props;
  setupLocale();
  return (
    <IntlProvider locale={config.locale} messages={localeMessages}>
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Routes routes={routeConfiguration()} />
        </StaticRouter>
      </Provider>
    </IntlProvider>
  );
};

ServerApp.propTypes = { url: string.isRequired, context: any.isRequired, store: any.isRequired };

/**
 * Render the given route.
 *
 * @param {String} url Path to render
 * @param {Object} serverContext Server rendering context from react-router
 *
 * @returns {Object} Object with keys:
 *  - {String} body: Rendered application body of the given route
 *  - {Object} head: Application head metadata from react-helmet
 */
export const renderApp = (url, serverContext, preloadedState) => {
  // Don't pass an SDK instance since we're only rendering the
  // component tree with the preloaded store state and components
  // shouldn't do any SDK calls in the (server) rendering lifecycle.
  const store = configureStore(preloadedState);

  const body = ReactDOMServer.renderToString(
    <ServerApp url={url} context={serverContext} store={store} />
  );
  const head = Helmet.renderStatic();
  return { head, body };
};
