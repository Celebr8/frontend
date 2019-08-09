import classNames from 'classnames';
import { func, string } from 'prop-types';
import React, { Component } from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { NamedLink, ResponsiveImage, Reviews, ReviewRating } from '../../components';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';
import ReviewData from '../../util/externalReviews';
import { ensureListing, ensureUser } from '../../util/data';
import { richText } from '../../util/richText';
import { propTypes } from '../../util/types';
import { createSlug } from '../../util/urlHelpers';
import css from './ListingCard.css';
const MIN_LENGTH_FOR_LONG_WORDS = 10;

class ListingImage extends Component {
  render() {
    return <ResponsiveImage {...this.props} />;
  }
}
const LazyImage = lazyLoadWithDimensions(ListingImage, { loadAfterInitialRendering: 3000 });

export const ListingCardComponent = props => {
  const {
    className,
    rootClassName,
    listing,
    renderSizes,
    setActiveListing,
    reviews,
    fetchReviewsError,
  } = props;

  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);
  const id = currentListing.id.uuid;
  const { title = '' } = currentListing.attributes;
  const listingType = currentListing.attributes.publicData.type;
  const slug = createSlug(title);
  const author = ensureUser(listing.author);
  const authorName = author.attributes.profile.displayName;
  const firstImage =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images[0] : null;

  const reviewsError = (
    <h2 className={css.errorText}>
      <FormattedMessage id="ListingPage.reviewsError" />
    </h2>
  );

  const listingTypeTranslation =
    listingType === 'common' ? 'ListingCard.commonSpace' : 'ListingCard.privateSpace';

  let rating = [];
  let ratingArray = [];
  let reviewCount = 0;
  let mode = 0;

  function mostCommonNumber(numbers) {
    let map = new Map()
    for (let num of numbers) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let mostCommonNumber = NaN
    let maxCount = -1
    for (let [num, count] of map.entries()) {
        if (count > maxCount) {
            maxCount = count
            mostCommonNumber = num
        }
    }
    return mostCommonNumber
}

  return (
    <NamedLink className={classes} name="ListingPage" params={{ id, slug, rating, ratingArray, mode}}>
      <div
        className={css.threeToTwoWrapper}
        onMouseEnter={() => setActiveListing(currentListing.id)}
        onMouseLeave={() => setActiveListing(null)}
      >
        <div className={css.aspectWrapper}>
          <LazyImage
            rootClassName={css.rootForImage}
            alt={title}
            image={firstImage}
            variants={['landscape-crop', 'landscape-crop2x']}
            sizes={renderSizes}
          />
        </div>
      </div>
      <div className={css.info}>
        <div className={css.mainInfo}>
          <div className={css.title}>
            {richText(title, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
              longWordClass: css.longWord,
            })}
          </div>
          <div>
            {fetchReviewsError ? reviewsError : null}
            <Reviews reviews={reviews} />
          </div>
          <div className={css.authorInfo}>
            <FormattedMessage id="ListingCard.hostedBy" values={{ authorName }} />
          </div>
          <div className={css.listingTypeInfo}>
            <FormattedMessage
              className={css.listingType}
              id={listingTypeTranslation}
              values={{ authorName }}
            />
          </div>
          {ReviewData.map((review) => {
            if (id === review.pub ) {              
              rating = review.data.attributes.rating
              ratingArray.push(rating);
              mode = mostCommonNumber(ratingArray); 
              reviewCount++;                         
            } 
          })}          
          <ReviewRating rating={mode} /><h5>Count: {reviewCount} </h5>
        </div>
      </div>
    </NamedLink>
  );
};

ListingCardComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  setActiveListing: () => null,
};

ListingCardComponent.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

export default injectIntl(ListingCardComponent);
