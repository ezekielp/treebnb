export const fetchReview = reviewId => {
    return $.ajax({
        type: "GET",
        url: `/api/reviews/${reviewId}`
    })
}

export const fetchTreehouseReviews = treehouseId => {
    return $.ajax({
        type: "GET",
        url: '/api/reviews',
        data: {
            treehouse_id: treehouseId
        }
    })
}

export const createReview = review => {
    return $.ajax({
        type: "POST",
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
}

export const updateReview = review => {
    return $.ajax({
        type: "PATCH",
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
}

export const deleteReview = reviewId => {
    return $.ajax({
        type: "DELETE",
        url: `/api/reviews/${reviewId}`
    })
}
