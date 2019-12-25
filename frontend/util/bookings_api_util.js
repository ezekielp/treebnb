export const fetchBooking = bookingId => {
    return $.ajax({
        type: "GET",
        url: `/api/bookings/${bookingId}`
    })
}

export const fetchCurrentUserBookings = () => {
    return $.ajax({
        type: 'GET',
        url: `api/bookings`
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