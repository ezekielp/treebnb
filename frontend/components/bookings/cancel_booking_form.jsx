import React from 'react';

class CancelBookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleGoBack = this.handleGoBack.bind(this);
        this.handleConfirmation = this.handleConfirmation.bind(this);
    }

    handleGoBack(e) {
        e.preventDefault();
        this.props.closeModal();
    }
    
    handleConfirmation(e) {
        e.preventDefault();
        debugger;
        this.props.deleteBooking(this.props.bookingId)
            .then(() => this.props.closeModal());
    }

    render() {
        return (
            <div>
                <h2 className="cancel-booking-form-header">
                    Are you sure you want to cancel this booking?
                </h2>
                <div className="cancel-booking-form-btns-container">
                    <div onClick={this.handleGoBack}
                        className="cancel-booking-form-no-btn">
                        No, take me back
                    </div>
                    <div onClick={this.handleConfirmation}
                     className="cancel-booking-form-yes-btn">
                        Yes, confirm
                    </div>
                </div>
            </div>
        )
    }

}

export default CancelBookingForm;