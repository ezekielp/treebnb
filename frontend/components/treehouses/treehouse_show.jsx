import React from 'react';

const reactDates = require('react-dates/initialize');
import 'react-dates/lib/css/_datepicker.css';
import './treehouse_show.css';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';

import { withRouter, Redirect } from 'react-router-dom';


class TreehouseShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            kidsCount: 1,
            petsCount: 0,
            parentsCount: 0,
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE,
            redirectToTrips: false,
            bookedDates: []
        };

        // debugger;
        this.inputNode = React.createRef();
        this.dropdownNode = React.createRef();
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.dayBlocked = this.dayBlocked.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.loadData
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    loadData() {
        let promise = new Promise((resolve, reject) => {
            this.props.fetchTreehouse(this.props.match.params.treehouseId);
        });
        return promise;
    }

    componentDidMount() {
        this.loadData();
            // .then((data) => {
            //     // debugger;
            //     let dates = [];
            //     this.props.bookings.forEach(booking => {
            //         booking.dates.forEach(date => {
            //             if (this.props.treehouse.id === booking.treehouse_id) {
            //                 dates.push(moment(date, "YYYY-MM-DD").valueOf());
            //             }
            //         });
            //     });
            //     this.setState({ bookedDates: dates });
            // })
        // this.props.fetchTreehouse(this.props.match.params.treehouseId);
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentDidUpdate() {
        // debugger;
        // if (!this.state.bookedDates[0]
        //         && (this.props.bookings.length === this.props.treehouse.bookingIds.length)) {
        //     let dates = [];
        //     this.props.bookings.forEach(booking => {
        //         booking.dates.forEach(date => {
        //             if (this.props.treehouse.id === booking.treehouse_id) {
        //                 dates.push(moment(date, "YYYY-MM-DD").valueOf());
        //             }
        //         });
        //     });
        //     this.setState({ bookedDates: dates });
        // }
        // let dates = [];
        // this.props.bookings.forEach(booking => {
        //     booking.dates.forEach(date => {
        //         if (this.props.treehouse.id === booking.treehouse_id) {
        //             dates.push(moment(date, "YYYY-MM-DD").valueOf());
        //         }
        //     });
        // });
        
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick(e) {
        if (this.dropdownNode.current.contains(e.target)) {
            this.openDropdown();
            return;
        } else if (this.inputNode.current.contains(e.target)) {
            this.toggleDropdown();
        } else {
            this.closeDropdown();
        }
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    openDropdown() {
        this.setState({ dropdownOpen: true });
    }

    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }

    increaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] + 1;
        this.setState({ [type]: newVal })
    }

    decreaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] - 1;
        if (type === "kidsCount") {
            if (this.state[type] > 1) {
                this.setState({ [type]: newVal })
            }
        } else {
            if (this.state[type] > 0) {
                this.setState({ [type]: newVal })
            }
        }
    }
    

    toggleOverlay(name) {
        let photos = ["photo1Overlay", "photo2Overlay", "photo3Overlay", "photo4Overlay", "photo5Overlay"];
        photos.forEach(photo => {
            if (photo !== name) {
                this.setState({ [photo]: true })
            }
        })
    }

    onFocusChange() {
        this.setState({
            // Force the focusedInput to always be truthy so that dates are always selectable
            focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
        });
    }

    dayBlocked(day) {
        let { bookings, treehouse } = this.props;

        for (let i = 0; i < bookings.length; i++) {
            if (bookings[i].treehouse_id === treehouse.id) {
                if (this.state.startDate
                        && this.state.startDate.isBefore(bookings[i].start_date, 'day')) {
                    if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day', "[]")) {
                        return true;
                    } else if (day.isAfter(bookings[i].end_date, 'day')) {
                        return true;
                    } else if (day.isSame(bookings[i].end_date, 'day')) {
                        return true;
                    };
                } else {
                    if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day', "[]")) {
                        return true;
                    };
                };
            }
        }

        // if (bookings[i].treehouse_id === treehouse.id) {
        //     if (this.state.startDate) {
        //         for (let i = 0; i < bookings.length; i++) {
        //             if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day')) {
        //                 return true;
        //             } else if (day.isAfter(bookings[i].end_date, 'day')) {
        //                 return true;
        //             };
        //         };
        //     } else {
        //         for (let i = 0; i < bookings.length; i++) {
        //             if (day.isBetween(bookings[i].start_date, bookings[i].end_date, 'day')) {
        //                 return true;
        //             };
        //         };
        //     };
        // };

        return false;
    }

    handleSubmit(e) {
        e.preventDefault();

        // If all fields are filled out but user is not logged in, open modal
        // and send message that they need to sign up / log in
        let { currentUser } = this.props;
        if (!this.state.startDate || !this.state.endDate) {
            this.setState({ focusedInput: START_DATE });
        } else  {
            if (!currentUser.id) {
            let message = (
                <div>
                    <div id="sign-up-to-book">Sign up to book</div>
                    <div id="moments-away-from-booking">You're moments away from booking your stay.</div>
                </div>
            );
            this.props.openModal('Sign up', message)
            } else {
            // If all fields are filled out and user is logged in, send the booking request
                let treehouse_id = this.props.match.params.treehouseId;
                let start_date = this.state.startDate.format('YYYY/MM/DD');
                let end_date = this.state.endDate.format('YYYY/MM/DD');
                let newBooking = {
                    guest_id: currentUser.id,
                    treehouse_id,
                    start_date,
                    end_date
                };
                this.props.createBooking(newBooking);
                this.setState({ redirectToTrips: true });
                // this.props.history.push('./trips');
            };
        };
    }

    render() {

        if (this.state.redirectToTrips) {
            return <Redirect to="/trips" />
        }

        // Conditional for the Guests input chevron
        let chevronDirection;
        if (this.state.dropdownOpen) {
            chevronDirection = "fas fa-chevron-up";
        } else {
            chevronDirection = "fas fa-chevron-down";
        }

        // Conditional to fade out the minus circle on the
        // dropdown menu
        let kidsMinusSignColorClass = (this.state.kidsCount === 1) ? "search-box-minus-circle" : "search-box-plus-circle";
        let petsMinusSignColorClass = (this.state.petsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
        let parentsMinusSignColorClass = (this.state.parentsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";

        // Create Guests input string
        let guestsInputContent = '1 guest';
        let { kidsCount, petsCount, parentsCount } = this.state;
        let numGuests = kidsCount + petsCount + parentsCount;
        if (numGuests > 1) {
            guestsInputContent = `${numGuests} guests`;
        };

        const dateRangePicker = (
            <DateRangePicker
                startDate={this.state.startDate}
                startDateId="mm/dd/yyyy"
                endDate={this.state.endDate}
                endDateId="mm/dd/yyyy"
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
                numberOfMonths={1}
                hideKeyboardShortcutsPanel={true}
                startDatePlaceholderText="Check-in"
                endDatePlaceholderText="Checkout"
                isDayBlocked={day => this.dayBlocked(day)}
                />
                )
                
            const dayPickerRangeController = (
                <DayPickerRangeController
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInputLeftCol}
                onFocusChange={this.onFocusChange}
                numberOfMonths={2}
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                hideKeyboardShortcutsPanel={true}
                isDayBlocked={day => this.dayBlocked(day)}
                // initialVisibleMonth={() => moment().add(2, "M")}
            />
        )

        // Conditional for "Clear dates" thing below calendars
        let clearDates;
        if (this.state.startDate) {
            clearDates = 
                <div
                    className="clear-dates-btn"
                    onClick={() => this.setState({
                        startDate: null,
                        endDate: null,
                        focusedInput: null,
                        focusedInputLeftCol: START_DATE })} >
                    Clear dates
                </div>;
        } else {
            clearDates = <></>;
        }

        const dropdownMenu = (
            <div className="search-box-dropdown-container" id="treehouse-booking-box-dropdown-container">
                <ul>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Kids</div>
                            <div>The young at heart</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${kidsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("kidsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.kidsCount}+</div>
                            <div
                                className="search-box-plus-circle"
                                onClick={() => this.increaseCount("kidsCount")} >+</div>
                        </div>
                    </li>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Pets</div>
                            <div>Dogs, capybaras, etc.</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${petsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("petsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.petsCount}+</div>
                            <div
                                className="search-box-plus-circle"
                                onClick={() => this.increaseCount("petsCount")} >+</div>
                        </div>
                    </li>
                    <li>
                        <div className="search-box-dropdown-label">
                            <div>Parents</div>
                            <div>Old people</div>
                        </div>
                        <div className="search-box-counter-container">
                            <div
                                className={`${parentsMinusSignColorClass}`}
                                onClick={() => this.decreaseCount("parentsCount")}>–</div>
                            <div className="search-box-dropdown-counter-num">{this.state.parentsCount}+</div>
                            <div
                                className="search-box-plus-circle"
                                onClick={() => this.increaseCount("parentsCount")}>+</div>
                        </div>
                    </li>
                </ul>
            </div>
        );

        let dropdownComponent = this.state.dropdownOpen ? dropdownMenu : <></>;

        
        // Return "null" on the first render, before the component has mounted
        if (!this.props.treehouse) return null;

        // Destructure "treehouse" prop
        let { treehouse } = this.props;

        return (
            <div>
                <div className="treehouse-photos-container-new">
                    <div className="treehouse-photo-1">
                        <div className="treehouse-photo-child" style={{backgroundImage: `url(${treehouse.photoUrls[0]})`}}>
                        </div>
                    </div>
                    {/* <div className="treehouse-right-side-photos-container"> */}
                        <div className="treehouse-photo-parent photo-2">
                            <div className="treehouse-photo-child treehouse-photo-2">
                            </div>
                        </div>
                    <div className="treehouse-photo-parent photo-3">
                            <div className="treehouse-photo-child treehouse-photo-3">
                            </div>
                        </div>
                    <div className="treehouse-photo-parent photo-4">
                            <div className="treehouse-photo-child treehouse-photo-4">
                            </div>
                        </div>
                    <div className="treehouse-photo-parent photo-5">
                            <div className="treehouse-photo-child treehouse-photo-5">
                            </div>
                        {/* </div> */}
                    </div>
                    {/* <div className="treehouse-photo-1">
                        <div className="treehouse-photo-child" style={{backgroundImage: `url(${treehouse.photoUrls[0]})`}}>
                        </div>
                    </div>
                    <div className="treehouse-right-side-photos-container">
                        <div className="treehouse-photo-parent">
                            <div className="treehouse-photo-child treehouse-photo-2">
                            </div>
                        </div>
                        <div className="treehouse-photo-parent">
                            <div className="treehouse-photo-child treehouse-photo-3">
                            </div>
                        </div>
                        <div className="treehouse-photo-parent">
                            <div className="treehouse-photo-child treehouse-photo-4">
                            </div>
                        </div>
                        <div className="treehouse-photo-parent">
                            <div className="treehouse-photo-child treehouse-photo-5">
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="treehouse-show-container">
                    <div className="treehouse-show-left-side">
                        <div className="treehouse-show-name">
                            {treehouse.name}
                        </div>
                        <div className="treehouse-show-address">
                            {treehouse.address}
                        </div>
                        <hr className="treehouse-show-hr-below-address"/>
                        <div className="treehouse-show-description">
                            {treehouse.description}
                        </div>
                        <hr className="treehouse-show-hr-below-address"/>
                        <div className="treehouse-calendar-picker-container">
                            <div className="treehouse-availability-div">Availability</div>
                            <div>
                                {dayPickerRangeController}
                            </div>
                            {clearDates}
                        </div>
                    </div>
                    <div>
                    <div className="treehouse-booking-box">
                        <div className="treehouse-show-price-container">
                            <div>${treehouse.price}</div>
                            <div>per night</div>
                        </div>
                        <hr className="treehouse-booking-box-hr"/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="check_-labels-container">
                                <span className="search-box-label">
                                    Dates
                                </span>
                            </div>
                            {dateRangePicker}
                            <span className="search-box-label">
                                    Guests
                            </span>
                            <div
                                className="search-box-input" id="treehouse-show-guests-input-container"
                                ref={this.inputNode}>
                                <input
                                    className="guests-input"
                                    type="text"
                                    placeholder="Guests"
                                    readOnly
                                    value={guestsInputContent}
                                    />
                                <i className={chevronDirection}></i>
                            </div>
                            <div
                                ref={this.dropdownNode}
                            >{dropdownComponent}</div>
                            <input
                                className="treehouse-booking-box-reserve-btn"
                                type="submit"
                                value="Reserve" />
                        </form>
                        <div className="treehouse-booking-box-bottom-text">
                            You won't be charged (ever)
                        </div>
                    </div>
                    <div id="clear-dates-right-side">{clearDates}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(TreehouseShow);