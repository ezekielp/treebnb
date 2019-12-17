export const fetchBooking = bookingId => {
    return $.ajax({
        type: "GET",
        url: `/api/bookings/${bookingId}`
    })
}

export const createBooking = booking => {
    // debugger;
    return $.ajax({
        type: "POST",
        url: `/api/bookings`,
        data: { booking }
    })
}

export const updateBooking = booking => {
    return $.ajax({
        type: "PATCH",
        url: `/api/bookings/${booking.id}`,
        data: { booking }
    })
}

export const deleteBooking = bookingId => {
    return $.ajax({
        type: "DELETE",
        url: `/api/bookings/${bookingId}`
    })
}

// export const fetchBookings = (userId) => {
//     return $.ajax({
//         type: "GET",
//         url: `/api/users/${userId}/bookings`
//     })
// }

// export const fetchBooking = (userId, bookingId) => {
//     return $.ajax({
//         type: "GET",
//         url: `/api/users/${userId}/bookings/${bookingId}`
//     })
// }

// export const createBooking = (treehouseId, booking) => {
//     // debugger;
//     return $.ajax({
//         type: "POST",
//         url: `/api/treehouses/${treehouseId}/bookings`,
//         data: { booking }
//     })
// }

// export const updateBooking = (userId, booking) => {
//     return $.ajax({
//         type: "PATCH",
//         url: `/api/users/${userId}/bookings/${booking.id}`,
//         data: { booking }
//     })
// }

// export const deleteBooking = (userId, bookingId) => {
//     return $.ajax({
//         type: "DELETE",
//         url: `/api/users/${userId}/bookings/${bookingId}`
//     })
// }