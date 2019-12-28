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

export const fetchSearchResults = (searchTerm, startDate, endDate) => {
    return $.ajax({
        type: "GET",
        url: `/api/search`,
        data: { 
            search_term: searchTerm,
            start_date: startDate,
            end_date: endDate
        }
    })
}