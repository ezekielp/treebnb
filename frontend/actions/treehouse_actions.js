import * as TreehousesAPIUtil from '../util/treehouses_api_util';
import { fetchBooking } from '../actions/booking_actions';

export const RECEIVE_TREEHOUSES = "RECEIVE_TREEHOUSES";
export const RECEIVE_TREEHOUSE = "RECEIVE_TREEHOUSE";
export const CLEAR_TREEHOUSE_STATE = "CLEAR_TREEHOUSE_STATE";

const receiveTreehouses = treehouses => ({
    type: RECEIVE_TREEHOUSES,
    treehouses
});

const receiveTreehouse = treehouse => ({
    type: RECEIVE_TREEHOUSE,
    treehouse
});

export const clearTreehouseState = () => ({
    type: CLEAR_TREEHOUSE_STATE
})

export const fetchTreehouses = () => dispatch => {
    return TreehousesAPIUtil.fetchTreehouses()
        .then(treehouses => dispatch(receiveTreehouses(treehouses)));
};

export const fetchTreehouse = treehouseId => dispatch => {
    return TreehousesAPIUtil.fetchTreehouse(treehouseId)
        .then(treehouse => {
            dispatch(receiveTreehouse(treehouse));
            treehouse.bookingIds.forEach(bookingId => {
                dispatch(fetchBooking(bookingId));
            });
        });
};

export const fetchTreehouseSearchResults = searchTerm => dispatch => {
    return TreehousesAPIUtil.fetchSearchResults(searchTerm)
        .then(treehouses => dispatch(receiveTreehouses(treehouses)));
};