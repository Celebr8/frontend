import classNames from 'classnames';
import omit from 'lodash/omit';
import { bool, func, number, object, shape, string } from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import emptySearchImage from '../../assets/empty.svg';
import { BookingDateRangeFilter, PriceFilter, SelectMultipleFilter, SelectSingleFilter } from '../../components';
import routeConfiguration from '../../routeConfiguration';
import { parseDateFromISO8601, stringifyDateToISO8601 } from '../../util/dates';
import { createResourceLocatorString } from '../../util/routes';
import { propTypes } from '../../util/types';
import css from './SearchFilters.css';

// Dropdown container can have a positional offset (in pixels)
const FILTER_DROPDOWN_OFFSET = -14;
const RADIX = 10;

// resolve initial value for a single value filter
const initialValue = (queryParams, paramName) => {
  return queryParams[paramName];
};

// resolve initial values for a multi value filter
const initialValues = (queryParams, paramName) => {
  return !!queryParams[paramName] ? queryParams[paramName].split(',') : [];
};

const initialPriceRangeValue = (queryParams, paramName) => {
  const price = queryParams[paramName];
  const valuesFromParams = !!price ? price.split(',').map(v => Number.parseInt(v, RADIX)) : [];

  return !!price && valuesFromParams.length === 2
    ? {
        minPrice: valuesFromParams[0],
        maxPrice: valuesFromParams[1],
      }
    : null;
};

const initialDateRangeValue = (queryParams, paramName) => {
  const dates = queryParams[paramName];
  const rawValuesFromParams = !!dates ? dates.split(',') : [];
  const valuesFromParams = rawValuesFromParams.map(v => parseDateFromISO8601(v));
  const initialValues =
    !!dates && valuesFromParams.length === 2
      ? {
          dates: { startDate: valuesFromParams[0], endDate: valuesFromParams[1] },
        }
      : { dates: null };

  return initialValues;
};

const SearchFiltersComponent = props => {

  const {
    rootClassName,
    className,
    urlQueryParams,
    listingsAreLoaded,
    resultsCount,
    searchInProgress,
    amenitiesFilter,
    groupSizeFilter,
    regularlyOpenOnFilter,
    listingTypeFilter,
    priceFilter,
    dateRangeFilter,
    isSearchFiltersPanelOpen,
    toggleSearchFiltersPanel,
    searchFiltersPanelSelectedCount,
    history,
    intl,
  } = props;

  /*
   * This implement the redirection toward Recommend Deal page
   */
  const recommendDealActive = true;

  const searchRes = props.urlQueryParams.address.split(', ');
  const town = searchRes[0];

  const hasNoResult = listingsAreLoaded && resultsCount === 0;
  const classes = classNames(rootClassName || css.root, { [css.longInfo]: hasNoResult }, className);

  const amenitiesLabel = intl.formatMessage({
    id: 'SearchFilters.amenitiesLabel',
  });

  const groupSizeLabel = intl.formatMessage({
    id: 'SearchFilters.groupSizeLabel',
  });

  const regularlyOpenOnLabel = intl.formatMessage({
    id: 'SearchFilters.regularlyOpenOnLabel',
  });

  const listingTypeLabel = intl.formatMessage({
    id: 'SearchFilters.listingTypeLabel',
  });

  const initialAmenities = amenitiesFilter
    ? initialValues(urlQueryParams, amenitiesFilter.paramName)
    : null;

  const initialGroupSize = groupSizeFilter
    ? initialValue(urlQueryParams, groupSizeFilter.paramName)
    : null;

  const initialRegularlyOpenOn = regularlyOpenOnFilter
    ? initialValue(urlQueryParams, regularlyOpenOnFilter.paramName)
    : null;

  const initialListingType = listingTypeFilter
    ? initialValue(urlQueryParams, listingTypeFilter.paramName)
    : null;

  const initialDateRange = dateRangeFilter
    ? initialDateRangeValue(urlQueryParams, dateRangeFilter.paramName)
    : null;

  const initialPriceRange = priceFilter
    ? initialPriceRangeValue(urlQueryParams, priceFilter.paramName)
    : null;


  const handleSelectOptions = (urlParam, options) => {
    const queryParams =
      options && options.length > 0
        ? { ...urlQueryParams, [urlParam]: options.join(',') }
        : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };

  const handleSelectOption = (urlParam, option) => {
    // query parameters after selecting the option
    // if no option is passed, clear the selection for the filter
    const queryParams = option
      ? { ...urlQueryParams, [urlParam]: option }
      : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };

  const handlePrice = (urlParam, range) => {
    const { minPrice, maxPrice } = range || {};
    const queryParams =
      minPrice != null && maxPrice != null
        ? { ...urlQueryParams, [urlParam]: `${minPrice},${maxPrice}` }
        : omit(urlQueryParams, urlParam);

    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };

  const handleDateRange = (urlParam, dateRange) => {
    const hasDates = dateRange && dateRange.dates;
    const { startDate, endDate } = hasDates ? dateRange.dates : {};

    const start = startDate ? stringifyDateToISO8601(startDate) : null;
    const end = endDate ? stringifyDateToISO8601(endDate) : null;

    const queryParams =
      start != null && end != null
        ? { ...urlQueryParams, [urlParam]: `${start},${end}` }
        : omit(urlQueryParams, urlParam);
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));
  };

  const priceFilterElement = priceFilter ? (
    <PriceFilter
      id="SearchFilters.priceFilter"
      urlParam={priceFilter.paramName}
      onSubmit={handlePrice}
      showAsPopup
      {...priceFilter.config}
      initialValues={initialPriceRange}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

  const amenitiesFilterElement = amenitiesFilter ? (
    <SelectMultipleFilter
      id={'SearchFilters.amenitiesFilter'}
      name="amenities"
      urlParam={amenitiesFilter.paramName}
      label={amenitiesLabel}
      onSubmit={handleSelectOptions}
      showAsPopup
      options={amenitiesFilter.options}
      initialValues={initialAmenities}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
			showAsPopup
    />
  ) : null;

  const regularlyOpenOnFilterElement = regularlyOpenOnFilter ? (
    <SelectSingleFilter
      urlParam={regularlyOpenOnFilter.paramName}
      label={regularlyOpenOnLabel}
      onSelect={handleSelectOption}
      options={regularlyOpenOnFilter.options}
      initialValue={initialRegularlyOpenOn}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
			showAsPopup
    />
  ) : null;

  const groupSizeFilterElement = groupSizeFilter ? (
    <SelectSingleFilter
      urlParam={groupSizeFilter.paramName}
      label={groupSizeLabel}
      onSelect={handleSelectOption}
      options={groupSizeFilter.options}
      initialValue={initialGroupSize}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
			showAsPopup
    />
  ) : null;

  const listingTypeElement = listingTypeFilter ? (
    <SelectSingleFilter
      urlParam={listingTypeFilter.paramName}
      label={listingTypeLabel}
      onSelect={handleSelectOption}
      options={listingTypeFilter.options}
      initialValue={initialListingType}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
			showAsPopup
    />
  ) : null;

  const dateRangeFilterElement =
    dateRangeFilter && dateRangeFilter.config.active ? (
      <BookingDateRangeFilter
        id="SearchFilters.dateRangeFilter"
        urlParam={dateRangeFilter.paramName}
        onSubmit={handleDateRange}
        showAsPopup
        contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
        initialValues={initialDateRange}
      />
    ) : null;

  const toggleSearchFiltersPanelButtonClasses =
    isSearchFiltersPanelOpen || searchFiltersPanelSelectedCount > 0
      ? css.searchFiltersPanelOpen
      : css.searchFiltersPanelClosed;
  const toggleSearchFiltersPanelButton = toggleSearchFiltersPanel ? (
    <button
      className={toggleSearchFiltersPanelButtonClasses}
      onClick={() => {
        toggleSearchFiltersPanel(!isSearchFiltersPanelOpen);
      }}
    >
      <FormattedMessage
        id="SearchFilters.moreFiltersButton"
        values={{ count: searchFiltersPanelSelectedCount }}
      />
    </button>
  ) : null;
  return (
    <div className={classes}>
      <div className={css.filters}>
        {amenitiesFilterElement}

        {groupSizeFilterElement}
        {regularlyOpenOnFilterElement}
        {listingTypeElement}

        {priceFilterElement}
        {dateRangeFilterElement}

        {toggleSearchFiltersPanelButton}
      </div>

      {listingsAreLoaded && resultsCount > 0 ? (
        <div className={css.searchResultSummary}>
          <span className={css.resultsFound}>
            <FormattedMessage id="SearchFilters.foundResults" values={{ count: resultsCount }} />
          </span>
        </div>
      ) : null}

      {hasNoResult ? (
        <div className={css.noSearchResults}>
          <p>Whoops! No pubs listed in {town} yet.</p>
          <img width="300" src={emptySearchImage}/>
          <div className={css.guideWrap}>

            <h3><FormattedMessage id="SearchFilters.noResultsGuideTitle"/></h3>
            
            <ol style={{marginBottom: '1rem'}}>
              <li><a style={{textDecoration: 'underline'}} href={"https://www.google.ie/maps/search/pubs+in+" + town} target="_blank">Find a pub in {town}</a></li>
              <li><FormattedMessage id="SearchFilters.noResultsStep2"/></li>
              <li><FormattedMessage id="SearchFilters.noResultsReward"/></li>
            </ol>

            <a className={css.findOutMore} href="/benefits/recommend-gift">Find out more</a>

          </div>
        </div>
      ) : null}

      {searchInProgress ? (
        <div className={css.loadingResults}>
          <FormattedMessage id="SearchFilters.loadingResults" />
        </div>
      ) : null}
    </div>
  );
};

SearchFiltersComponent.defaultProps = {
  rootClassName: null,
  className: null,
  resultsCount: null,
  searchingInProgress: false,
  amenitiesFilter: null,
  listingTypeFilter: null,
  priceFilter: null,
  dateRangeFilter: null,
  isSearchFiltersPanelOpen: false,
  toggleSearchFiltersPanel: null,
  searchFiltersPanelSelectedCount: 0,
};

SearchFiltersComponent.propTypes = {
  rootClassName: string,
  className: string,
  urlQueryParams: object.isRequired,
  listingsAreLoaded: bool.isRequired,
  resultsCount: number,
  searchingInProgress: bool,
  onManageDisableScrolling: func.isRequired,
  categoriesFilter: propTypes.filterConfig,
  amenitiesFilter: propTypes.filterConfig,
  priceFilter: propTypes.filterConfig,
  dateRangeFilter: propTypes.filterConfig,
  isSearchFiltersPanelOpen: bool,
  toggleSearchFiltersPanel: func,
  searchFiltersPanelSelectedCount: number,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SearchFilters = compose(
  withRouter,
  injectIntl
)(SearchFiltersComponent);

export default SearchFilters;
