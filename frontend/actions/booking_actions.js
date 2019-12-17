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

export const fetchBooking = bookingId => dispatch => {
    return BookingsApiUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking)))
}

export const createBooking = booking => dispatch => {
    return BookingsApiUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)))
}

export const updateBooking = booking => dispatch => {
    return BookingsApiUtil.updateBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)))
}

export const deleteBooking = bookingId => dispatch => {
    return BookingsApiUtil.deleteBooking(bookingId)
        .then(booking => dispatch(removeBooking(booking.Id)))
}