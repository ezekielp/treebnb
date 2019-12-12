import React from 'react';

class TreehouseShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTreehouse(this.props.match.params.treehouseId);
    }

    render() {
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
                    </div>
                    <div className="treehouse-booking-box">
                        <div className="treehouse-show-price">
                            {treehouse.price}
                        </div>
                        <form>
                            <div className="check_-labels-container">
                                <span className="search-box-label checkin-label">
                                    Dates
                                </span>
                            </div>
                            <div className="check_-inputs-container">
                                <input
                                    className="search-box-input check_-input checkin-input"
                                    type="text"
                                    placeholder="Check-in" />
                                <input
                                    className="search-box-input check_-input checkout-input"
                                    type="text"
                                    placeholder="Checkout" />
                            </div>
                            <label>
                                <span className="search-box-label">
                                    Guests
                            </span>
                                <input
                                    className="search-box-input"
                                    type="text"
                                    placeholder="1 guest" />
                            </label>
                            <input
                                className="search-box-submit-btn"
                                type="submit"
                                value="Reserve" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default TreehouseShow;