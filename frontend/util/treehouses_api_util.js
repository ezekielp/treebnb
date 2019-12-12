export const fetchTreehouses = () => {
    return $.ajax({
        type: "GET",
        url: "/api/treehouses"
    })
}

export const fetchTreehouse = treehouseId => {
    return $.ajax({
        type: "GET",
        url: `/api/treehouses${treehouseId}`
    })
}

