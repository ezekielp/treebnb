import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReview = reviewId => dispatch => {
    return ReviewsApiUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)))
}

export const fetchTreehouseReviews = treehouseId => dispatch => {
    return ReviewsApiUtil.fetchTreehouseReviews(treehouseId)
        .then(reviews => dispatch(receiveReviews(reviews)))
}

export const createReview = review => dispatch => {
    return ReviewsApiUtil.createReview(review)
        .then(review => dispatch(receiveReview(review)))
}

export const updateReview = review => dispatch => {
    return ReviewsApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review)))
}

export const deleteReview = reviewId => dispatch => {
    return ReviewsApiUtil.deleteReview(reviewId)
        .then(review => dispatch(removeReview(review.id)))
}