import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case REMOVE_REVIEWS:
            return merge({}, state, action.reviews)
        case RECEIVE_REVIEW:
            return merge({}, state, { [action.review.id]: action.review })
        case REMOVE_REVIEW:
            let newState = merge({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default ReviewsReducer;