import React from 'react';
import { Link } from 'react-router-dom';

const UserBookingsItem = ({booking}) => {

    let { startDateMonth, startDateYear, location, photos } = booking;

    return (
        <li className="treehouse-li">
            <Link>
                <div className="treehouse-idx-photo">
                    <div 
                        className="treehouse-idx-photo-child"
                        style={{ backgroundImage: `url(${photos[0]})`}}>
                    </div>
                </div>
            </Link>
            <div className="booking-idx-item-month-year-container">
                <div>{startDateMonth}</div>
                <div>{startDateYear}</div>
            </div>
            <div className="booking-idx-item-location">
                {location}
            </div>
        </li>
    )
}

export default UserBookingsItem;