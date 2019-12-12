import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                                placeholder="Guests" />
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