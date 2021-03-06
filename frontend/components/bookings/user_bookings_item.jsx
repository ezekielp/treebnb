import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingsItem = (props) => {

    let { startDateMonth, startDateDay, endDateMonth, endDateDay, endDateYear, location, photos, treehouse_id } = props.booking;

    const handleDelete = e => {
        e.preventDefault();
        props.deleteBooking(props.booking.id);
    }

    // debugger;
    let dateStringToDisplay = `${startDateMonth} ${startDateDay} - ${endDateMonth} ${endDateDay}, ${endDateYear}`;

    return (
        <li className="user-bookings-li">
            <Link to={`/treehouses/${treehouse_id}`}>
                <div className="treehouse-idx-photo">
                    <div 
                        className="treehouse-idx-photo-child"
                        style={{ backgroundImage: `url(${photos[0]})`}}>
                    </div>
                </div>
            </Link>
            <div className="booking-idx-item-month-year-container">
                <div className="booking-idx-item-month">
                    {dateStringToDisplay}
                </div>
            </div>
            <div className="booking-idx-item-location">
                {location}
            </div>
            <div 
                className="booking-idx-item-cancel-btn"
                onClick={() => props.openModal('Cancel booking', props.booking.id)}>
                Cancel reservation
            </div>
        </li>
    )
}

export default UserBookingsItem;