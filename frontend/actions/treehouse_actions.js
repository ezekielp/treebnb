import * as TreehousesAPIUtil from '../util/treehouses_api_util';

export const RECEIVE_TREEHOUSES = "RECEIVE_TREEHOUSES";
export const RECEIVE_TREEHOUSE = "RECEIVE_TREEHOUSE";

const receiveTreehouses = treehouses => ({
    type: RECEIVE_TREEHOUSES,
    treehouses
});

const receiveTreehouse = treehouse => ({
    type: RECEIVE_TREEHOUSE,
    treehouse
});

export const fetchTreehouses = () => dispatch => {
    return TreehousesAPIUtil.fetchTreehouses()
        .then(treehouses => dispatch(receiveTreehouses(treehouses)));
};

export const fetchTreehouse = treehouseId => dispatch => {
    return TreehousesAPIUtil.fetchTreehouse(treehouseId)
        .then(treehouse => dispatch(receiveTreehouse(treehouse)));
};