import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingsItem = ({booking}) => {

    let { startDateMonth, startDateYear, location, photos, treehouse_id } = booking;

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
                <div className="">{startDateMonth}</div>
                <div className="booking-idx-item-month">{startDateYear}</div>
            </div>
            <div className="booking-idx-item-location">
                {location}
            </div>
        </li>
    )
}

export default UserBookingsItem;