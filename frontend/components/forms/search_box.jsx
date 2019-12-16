import React from 'react';

// import 'react-dates/initialize';
const reactDates = require('react-dates/initialize');
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            kidsCount: 0,
            petsCount: 0,
            parentsCount: 0,
            startDate: null,
            endDate: null,
            focusedInput: null
        };

        this.inputNode = React.createRef();
        this.dropdownNode = React.createRef();
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.makeSingleGuestsInputString = this.makeSingleGuestsInputString.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        // debugger;
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentDidMount() {
        // debugger;
        document.addEventListener('mousedown', this.handleClick, false)
    }
    
    componentWillUnmount() {
        // debugger;
        document.removeEventListener('mousedown', this.handleClick, false)
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
        // if (this.state.dropdownOpen === false) {
        //     this.openDropdown();
        // } else {
        //     this.closeDropdown();
        // }
        this.setState({ dropdownOpen: !this.state.dropdownOpen});
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
        // console.log("Increase");
    }
    
    decreaseCount(type) {
        // e.stopPropagation();
        let newVal = this.state[type] - 1;
        if (this.state[type] > 0 ) {
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
    };

    render() {
        // console.log(this.state.dropdownOpen);
        // Conditional to toggle color of minus sign on Guests dropdown
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
            />
        )

        const dropdownMenu = (
            <div className="search-box-dropdown-container">
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
                                onClick={() => {
                                    this.increaseCount("kidsCount");
                                    }} >+</div>
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
        )

        let dropdownComponent = this.state.dropdownOpen ? dropdownMenu : <></>;

        return (
            <div className="splash-image-container">
                <div className="search-box-container">
                    <div className="search-box-header">
                        <h1>Branch out — book a unique treehouse to stay in.</h1>
                    </div>
                    <form>
                        <span className="search-box-label">
                            WHERE
                        </span>
                        <input
                            className="search-box-input"
                            type="text"
                            placeholder="Anywhere" />
                        <div className="check_-labels-container">
                            <span className="search-box-label checkin-label">
                                CHECK-IN
                            </span>
                            <span className="search-box-label checkout-label">
                                CHECKOUT
                            </span>
                        </div>
                        <div className="check_-inputs-container">
                            {dateRangePicker}
                        </div>
                        <span className="search-box-label">
                            GUESTS
                        </span>
                        <input
                            ref={this.inputNode}
                            className="search-box-input"
                            type="text"
                            placeholder="Guests" 
                            readOnly
                            value={guestsInputContent}
                            />
                        <div
                            ref={this.dropdownNode}
                        >{dropdownComponent}</div>
                        <input
                            className="search-box-submit-btn"
                            type="submit"
                            value="Search"/>
                    </form>
                </div>
            </div>
        )
    }

}

export default SearchBox;