import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ListingCard, PaginationLinks } from '../../components';
import { propTypes } from '../../util/types';
import css from './SearchResultsPanel.css';

const SearchResultsPanel = props => {
  const {
    className,
    rootClassName,
    listings,
    pagination,
    search,
    setActiveListing,
    reviews,
    fetchReviewsError,
  } = props;
  const classes = classNames(rootClassName || css.root, className);

  const paginationLinks =
    pagination && pagination.totalPages > 1 ? (
      <PaginationLinks
        className={css.pagination}
        pageName="SearchPage"
        pageSearchParams={search}
        pagination={pagination}
      />
    ) : null;

  // Panel width relative to the viewport
  const panelMediumWidth = 50;
  const panelLargeWidth = 62.5;
  const cardRenderSizes = [
    '(max-width: 767px) 100vw',
    `(max-width: 1023px) ${panelMediumWidth}vw`,
    `(max-width: 1920px) ${panelLargeWidth / 2}vw`,
    `${panelLargeWidth / 3}vw`,
  ].join(', ');

  return (
    <div className={classes}>
      <div className={css.listingCards}>
        {listings.map(l => (
          <ListingCard
            className={css.listingCard}
            key={l.id.uuid}
            listing={l}
            renderSizes={cardRenderSizes}
            setActiveListing={setActiveListing}
            reviews={reviews}
            fetchReviewsError={fetchReviewsError}
          />
        ))}
        {props.children}
      </div>
      {paginationLinks}
    </div>
  );
};

SearchResultsPanel.defaultProps = {
  children: null,
  className: null,
  listings: [],
  pagination: null,
  rootClassName: null,
  search: null,
  reviews: [],
  fetchReviewsError: null,
};

const { array, node, object, string, arrayOf } = PropTypes;

SearchResultsPanel.propTypes = {
  children: node,
  className: string,
  listings: array,
  pagination: propTypes.pagination,
  rootClassName: string,
  search: object,
  reviews: arrayOf(propTypes.review),
  fetchReviewsError: propTypes.error,
};

export default SearchResultsPanel;
