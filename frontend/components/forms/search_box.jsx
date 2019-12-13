import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: true,
            kidsCount: 0,
            petsCount: 0,
            parentsCount: 0
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen});
    }

    openDropdown() {
        this.setState({ dropdownOpen: true });
    }
    
    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }

    render() {

        const dropdownMenu = (
            <div className="search-box-dropdown-container">
                <ul>
                    <li>
                        <span>Kids</span>
                        <div className="search-box-counter-container">
                            <div className="search-box-minus-circle">-</div>
                            <span>{this.state.kidsCount}+</span>
                            <div className="search-box-plus-circle">+</div>
                        </div>
                    </li>
                    <li>
                        <span>Pets</span>
                        <div className="search-box-counter-container">
                            <div className="search-box-minus-circle">-</div>
                            <span>{this.state.petsCount}+</span>
                            <div className="search-box-plus-circle">+</div>
                        </div>
                    </li>
                    <li>
                        <span>Parents</span>
                        <div className="search-box-counter-container">
                            <div className="search-box-minus-circle">-</div>
                            <span>{this.state.parentsCount}+</span>
                            <div className="search-box-plus-circle">+</div>
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
                        <label>
                            <span className="search-box-label">
                                WHERE
                            </span>
                            <input
                                className="search-box-input"
                                type="text"
                                placeholder="Anywhere" />
                        </label>
                        <div className="check_-labels-container">
                            <span className="search-box-label checkin-label">
                                CHECK-IN
                            </span>
                            <span className="search-box-label checkout-label">
                                CHECKOUT
                            </span>
                        </div>
                        <div className="check_-inputs-container">
                            <input
                                className="search-box-input check_-input checkin-input"
                                type="text"
                                placeholder="mm/dd/yyyy" />
                            <input
                                className="search-box-input check_-input checkout-input"
                                type="text"
                                placeholder="mm/dd/yyyy" />
                        </div>
                        <label>
                            <span className="search-box-label">
                                GUESTS
                            </span>
                            <input
                                className="search-box-input"
                                type="text"
                                placeholder="Guests" 
                                onMouseDown={() => this.toggleDropdown()}
                                onBlur={() => this.closeDropdown()}/>
                            <div
                                onFocus={() => this.openDropdown()}
                                onBlur={() => this.closeDropdown()}
                                tabIndex="0"
                            >{dropdownComponent}</div>
                        </label>
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