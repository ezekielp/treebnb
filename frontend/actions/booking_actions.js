import * as BookingsApiUtil from '../util/bookings_api_util';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

export const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

export const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})

export const fetchBookings  = userId => dispatch => {
    return BookingsApiUtil.fetchBookings(userId)
        .then(bookings => dispatch(receiveBookings(bookings)))
}

export const fetchBooking = (userId, bookingId) => dispatch => {
    return BookingsApiUtil.fetchBooking(userId, bookingId)
        .then(booking => dispatch(receiveBooking(booking)))
}

export const createBooking = (treehouseId, booking) => dispatch => {
    return BookingsApiUtil.createBooking(treehouseId, booking)
        .then(booking => dispatch(receiveBooking(booking)))
}

export const updateBooking = (userId, booking) => dispatch => {
    return BookingsApiUtil.updateBooking(userId, booking)
        .then(booking => dispatch(receiveBooking(booking)))
}

export const deleteBooking = (userId, bookingId) => dispatch => {
    return BookingsApiUtil.deleteBooking(userId, bookingId)
        .then(booking => dispatch(removeBooking(booking.Id)))
}
