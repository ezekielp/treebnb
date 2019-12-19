export const fetchTreehouses = () => {
    return $.ajax({
        type: "GET",
        url: "/api/treehouses"
    })
}

export const fetchTreehouse = treehouseId => {
    return $.ajax({
        type: "GET",
        url: `/api/treehouses/${treehouseId}`
    })
}

export const fetchSearchResults = searchTerm => {
    return $.ajax({
        type: "GET",
        url: `/api/search`,
        data: { search_term: searchTerm }
    })
}