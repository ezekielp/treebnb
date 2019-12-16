import React from 'react';

const reactDates = require('react-dates/initialize');
import 'react-dates/lib/css/_datepicker.css';
import './treehouse_show.css';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';
import moment from 'moment';


class TreehouseShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            kidsCount: 0,
            petsCount: 0,
            parentsCount: 0,
            startDate: null,
            endDate: null,
            focusedInput: null,
            focusedInputLeftCol: START_DATE
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.makeSingleGuestsInputString = this.makeSingleGuestsInputString.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchTreehouse(this.props.match.params.treehouseId);
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
        if (this.state[type] > 0) {
            this.setState({ [type]: newVal })
        }
    }
    
    makeSingleGuestsInputString(type, stateName) {
        let num = this.state[stateName];
        if (num === 0) return null;
        if (num === 1) {
            return `${num} ${type}`
        } else {
            return `${num} ${type}s`
        }
    }

    onFocusChange() {
        this.setState({
            // Force the focusedInput to always be truthy so that dates are always selectable
            focusedInputLeftCol: this.state.focusedInputLeftCol === START_DATE ? END_DATE : START_DATE
        });
    }

    render() {
        console.log(this.state.startDate);
        console.log(this.props.currentUser);

        let kidsMinusSignColorClass = (this.state.kidsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
        let petsMinusSignColorClass = (this.state.petsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";
        let parentsMinusSignColorClass = (this.state.parentsCount === 0) ? "search-box-minus-circle" : "search-box-plus-circle";

        // Create Guests input string
        let guestsInputContent = [
            this.makeSingleGuestsInputString("kid", "kidsCount"),
            this.makeSingleGuestsInputString("pet", "petsCount"),
            this.makeSingleGuestsInputString("parent", "parentsCount")
        ].filter(type => type).join(", ");

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
                // initialVisibleMonth={() => moment().add(2, "M")}
            />
        )

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
                <div className="treehouse-photos-container">
                    <div className="treehouse-photo-1">
                        BIG PHOTO GOES HERE
                    </div>
                    <div className="treehouse-right-side-photos-container">
                        <div className="treehouse-photo-2">
                            PHOTO #2 GOES HERE
                        </div>
                        <div className="treehouse-photo-3">
                            PHOTO #3 GOES HERE
                        </div>
                        <div className="treehouse-photo-4">
                            PHOTO #4 GOES HERE
                        </div>
                        <div className="treehouse-photo-5">
                            PHOTO #5 GOES HERE
                        </div>
                    </div>
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
                        </div>
                    </div>
                    <div className="treehouse-booking-box">
                        <div className="treehouse-show-price-container">
                            <div>${treehouse.price}</div>
                            <div>per night</div>
                        </div>
                        <hr className="treehouse-booking-box-hr"/>
                        <form>
                            <div className="check_-labels-container">
                                <span className="search-box-label">
                                    Dates
                                </span>
                            </div>
                            {dateRangePicker}
                            <span className="search-box-label">
                                    Guests
                            </span>
                            <input
                                className="search-box-input"
                                id="treehouse-show-guests-input"
                                type="text"
                                placeholder="Guests"
                                readOnly
                                value={guestsInputContent}
                                onMouseDown={() => this.toggleDropdown()}
                                onBlur={() => this.closeDropdown()} />
                            <div
                                onFocus={() => this.openDropdown()}
                                onBlur={() => this.closeDropdown()}
                                tabIndex="0"
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
                </div>
            </div>
        )
    }
}

export default TreehouseShow;