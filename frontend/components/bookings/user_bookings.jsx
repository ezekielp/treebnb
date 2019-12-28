import React from 'react';
import { Link } from 'react-router-dom';
import NavbarWithSearchContainer from '../navbar/navbar_with_search_container';
import UserBookingsItem from './user_bookings_item';

class UserBookings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: this.props.success,
            successMessageClasses: ['reservation-successful-msg-visible'],
            // bookings: []
        }
    }

    componentDidMount() {
        let { currentUser, fetchBooking } = this.props;

        this.props.bookings.forEach(booking => {
            if (booking.guest_id === currentUser.id) {
                fetchBooking(booking.id);
            }
        });
        this.props.fetchCurrentUserBookings();
    }

    componentDidUpdate() {
        if (this.props.success[0]) {
            window.setTimeout(() => {
                this.setState({
                    successMessageClasses: ['reservation-successful-msg-visible', 'reservation-successful-msg-hidden']
                })
            }, 2000)
            window.setTimeout(() => {
                this.props.removeBookingSuccessMessage();
                this.setState({
                    successMessageClasses: ['reservation-successful-msg-visible']
                })
            }, 5000)
        }
    }

    componentWillUnmount() {
        // this.props.removeBookingSuccessMessage();
    }
    
    render() {
        // Return null before bookings have loaded
        if (!this.props.bookings) return null;

        // Conditional for the success message when having made a booking
        let successMessage;
        let { success } = this.props;
        if (success[0]) {
            successMessage = 
                <div className={this.state.successMessageClasses.join(' ')}>{success[0]}</div>;
            // window.setTimeout(() => {
            //     this.props.removeBookingSuccessMessage();
            //     this.setState({
            //         successMessageClasses: ['reservation-successful-msg-visible']
            //     })
            // }, 5000)
        } else {
            successMessage = <div className="empty-success-msg-div"></div>;
        }

        // if (success[0]) {
        //     window.setTimeout(() => {
        //         this.setState({ successMessageClasses: ['reservation-successful-msg-visible', 'reservation-successful-msg-hidden'] })
        //     }, 2000);
        // }

        // debugger;
        let { bookings } = this.props;
        let bookingsLis, noBookingsmessage;
        if (bookings[0] === undefined) {
            noBookingsmessage = 
                <div>
                    <div className="no-upcoming-plans-message">
                        You have no upcoming plans. Start exploring ideas for your next trip.
                    </div>
                    <Link to="/">
                        <button className="explore-treebnb-btn">
                            Explore Treebnb
                        </button>
                    </Link>
                </div>
        } else {
            bookingsLis = bookings.map((booking, idx) => {
                return <UserBookingsItem
                    booking={booking}
                    deleteBooking={this.props.deleteBooking}
                    openModal={this.props.openModal}
                    key={idx} />;
            });
            noBookingsmessage = <></>;
        }    
        
        return (
            <div className="outer-user-bookings-container">
                <NavbarWithSearchContainer />
                {successMessage}
                <div className="inner-user-bookings-container">
                    <h1 className="user-bookings-header">
                        Upcoming plans
                    </h1>
                    {noBookingsmessage}
                    <ul
                        id="user-bookings-ul" >
                        {bookingsLis}
                    </ul>
                    <img
                        className="upcoming-plans-drawing"
                        src={window.upcomingPlansSvg}
                        alt="Tree drawing" />
                </div>
            </div>
        )
    }

}

export default UserBookings;