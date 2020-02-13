import * as TreehousesAPIUtil from '../util/treehouses_api_util';

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
        });
};

export const fetchTreehouseSearchResults = (searchTerm, startDate, endDate) => dispatch => {
    return TreehousesAPIUtil.fetchSearchResults(searchTerm, startDate, endDate)
        .then(treehouses => dispatch(receiveTreehouses(treehouses)));
};