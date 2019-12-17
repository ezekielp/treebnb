import React from 'react';

class UserBookings extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { currentUser, fetchBookings } = this.props;
        fetchBookings(currentUser.id);
    }
    
    render() {
        // Return null before bookings have loaded
        if (!this.props.bookings) return null;

        let { bookings } = this.props;
        let bookingsLis, noBookingsmessage;
        if (bookings === {}) {
            noBookingsmessage = 
                <div>
                    <div>
                        "You have no upcoming plans. Start exploring ideas for your next trip."
                    </div>
                    <button className="explore-treebnb-btn">
                        Explore Treebnb
                    </button>
                </div>
        } else {
            bookingsLis = bookings.map((booking, idx) => {
                return <UserBookingsItem booking={booking} key={idx} />;
            });
        }    
        
        return (
            <div className="user-bookings-container">
                <h1 className="user-bookings-header">
                    Upcoming plans
                </h1>
                {noBookingsmessage}
                <ul className="treehouses-ul">
                    {bookingsLis}
                </ul>
            </div>
        )
    }

}

export default UserBookings;