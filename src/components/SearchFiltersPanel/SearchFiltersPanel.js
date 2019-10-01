/**
 * SearchFiltersPanel can be used to add extra filters to togglable panel in SearchPage.
 * Using this component will need you to enable it in SearchPage and passing needed props to
 * SearchFilters component (which is the default place for SearchFilters).
 *
 *
 * An example how to render MultiSelectFilter for a filter that has it's config passed in
 * the props as newFilter:
 *
 * initialValue for a filter can be resolved with the initialValue and initialValues
 * methods.
 *
 * const initialNewFilterValues = this.initialValues(newFilter.paramName);
 *
 * const newFilterElement = newFilter ? (
 * <SelectMultipleFilter
 *     id="SearchFiltersPanel.newFilter"
 *     name="newFilter"
 *     urlParam={newFilter.paramName}
 *     label={this.props.intl.formatMessage({ id: 'SearchFiltersPanel.newFilterLabel' })}
 *     onSubmit={this.handleSelectMultiple}
 *     liveEdit
 *     options={multiSelectFilterXFromProps}
 *     initialValues={initialNewFilterValues}
 *  />
 * ) : null;
 */

import classNames from 'classnames';
import omit from 'lodash/omit';
import { array, func, object, shape, string } from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InlineTextButton } from '../../components';
import routeConfiguration from '../../routeConfiguration';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { createResourceLocatorString } from '../../util/routes';
import css from './SearchFiltersPanel.css';

class SearchFiltersPanelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQueryParams: props.urlQueryParams };

    this.applyFilters = this.applyFilters.bind(this);
    this.cancelFilters = this.cancelFilters.bind(this);
    this.resetAll = this.resetAll.bind(this);
    this.handleSelectSingle = this.handleSelectSingle.bind(this);
    this.handleSelectMultiple = this.handleSelectMultiple.bind(this);
    this.initialValue = this.initialValue.bind(this);
    this.initialValues = this.initialValues.bind(this);
  }

  // Apply the filters by redirecting to SearchPage with new filters.
  applyFilters() {
    const { history, urlQueryParams, onClosePanel } = this.props;

    history.push(
      createResourceLocatorString(
        'SearchPage',
        routeConfiguration(),
        {},
        { ...urlQueryParams, ...this.state.currentQueryParams }
      )
    );

    // Ensure that panel closes (if now changes have been made)
    onClosePanel();
  }

  // Close the filters by clicking cancel, revert to the initial params
  cancelFilters() {
    this.setState({ currentQueryParams: {} });
    this.props.onClosePanel();
  }

  // Reset all filter query parameters
  resetAll(e) {
    const { urlQueryParams, history, onClosePanel, filterParamNames } = this.props;

    const queryParams = omit(urlQueryParams, filterParamNames);
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, queryParams));

    // Ensure that panel closes (if now changes have been made)
    onClosePanel();

    // blur event target if event is passed
    if (e && e.currentTarget) {
      e.currentTarget.blur();
    }
  }

  handleSelectSingle(urlParam, option) {
    const urlQueryParams = this.props.urlQueryParams;
    this.setState(prevState => {
      const prevQueryParams = prevState.currentQueryParams;
      const mergedQueryParams = { ...urlQueryParams, ...prevQueryParams };

      // query parameters after selecting the option
      // if no option is passed, clear the selection for the filter
      const currentQueryParams = option
        ? { ...mergedQueryParams, [urlParam]: option }
        : omit(mergedQueryParams, urlParam);

      return { currentQueryParams };
    });
  }

  handleSelectMultiple(urlParam, options) {
    const urlQueryParams = this.props.urlQueryParams;
    this.setState(prevState => {
      const prevQueryParams = prevState.currentQueryParams;
      const mergedQueryParams = { ...urlQueryParams, ...prevQueryParams };

      // query parameters after selecting options
      // if no option is passed, clear the selection from state.currentQueryParams
      const currentQueryParams =
        options && options.length > 0
          ? { ...mergedQueryParams, [urlParam]: options.join(',') }
          : { ...mergedQueryParams, [urlParam]: null };

      return { currentQueryParams };
    });
  }

  // resolve initial value for a single value filter
  initialValue(paramName) {
    const currentQueryParams = this.state.currentQueryParams;
    const urlQueryParams = this.props.urlQueryParams;

    // initialValue for a select should come either from state.currentQueryParam or urlQueryParam
    const currentQueryParam = currentQueryParams[paramName];

    return typeof currentQueryParam !== 'undefined' ? currentQueryParam : urlQueryParams[paramName];
  }

  // resolve initial values for a multi value filter
  initialValues(paramName) {
    const currentQueryParams = this.state.currentQueryParams;
    const urlQueryParams = this.props.urlQueryParams;

    const splitQueryParam = queryParam => (queryParam ? queryParam.split(',') : []);

    // initialValue for a select should come either from state.currentQueryParam or urlQueryParam
    const hasCurrentQueryParam = typeof currentQueryParams[paramName] !== 'undefined';

    return hasCurrentQueryParam
      ? splitQueryParam(currentQueryParams[paramName])
      : splitQueryParam(urlQueryParams[paramName]);
  }

  render() {
    const { rootClassName, className } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    return (
      <div className={classes}>
        <div className={css.filtersWrapper}>{/* Add filters here */}</div>
        <div className={css.footer}>
          <InlineTextButton rootClassName={css.resetAllButton} onClick={this.resetAll}>
            <FormattedMessage id={'SearchFiltersPanel.resetAll'} />
          </InlineTextButton>
          <InlineTextButton rootClassName={css.cancelButton} onClick={this.cancelFilters}>
            <FormattedMessage id={'SearchFiltersPanel.cancel'} />
          </InlineTextButton>
          <InlineTextButton rootClassName={css.applyButton} onClick={this.applyFilters}>
            <FormattedMessage id={'SearchFiltersPanel.apply'} />
          </InlineTextButton>
        </div>
      </div>
    );
  }
}

SearchFiltersPanelComponent.defaultProps = {
  rootClassName: null,
  className: null,
  filterParamNames: [],
};

SearchFiltersPanelComponent.propTypes = {
  rootClassName: string,
  className: string,
  urlQueryParams: object.isRequired,
  onClosePanel: func.isRequired,
  filterParamNames: array,

  // from injectIntl
  intl: intlShape.isRequired,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
};

const SearchFiltersPanel = injectIntl(withRouter(SearchFiltersPanelComponent));

export default SearchFiltersPanel;
