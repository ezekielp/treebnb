import React from 'react';

class ReviewForm extends React.Component {
    constructor() {
        super(props);

        this.state = {
            accuracyRating: null,
            checkInRating: null,
            cleanlinessRating: null,
            communicationRating: null,
            locationRating: null,
            valueRating: null,
            body: this.props.body,
            emptyStarClass: "far"
        };

        this.renderStars = this.renderStars.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // If all fields are filled out but user is not logged in, open modal
        // and send message that they need to sign up / log in
        let { currentUser } = this.props;
        if (!currentUser.id) {
            let message = (
                <div>
                    <div id="sign-in-to-review">Sign up or log in to leave a review</div>
                </div>
            );
            this.props.openModal('Sign up', message)
        } else {
            // If all fields are filled out and user is logged in, send the booking request
            let treehouse_id = this.props.match.params.treehouseId;
            let newReview = {
                reviewer_id: currentUser.id,
                treehouse_id,
                accuracy_rating: this.state.accuracyRating,
                check_in_rating: this.state.checkInRating,
                cleanliness_rating: this.state.cleanlinessRating,
                communication_rating: this.state.communicationRating,
                location_rating: this.state.locationRating,
                value_rating: this.state.valueRating,
            };
            this.props.action(newReview);
        };

    }

    renderStars(scoreName) {
        const updateScore = score => {
            return e => {
                this.setState({[scoreName]: score })
            }
        }

        const stars = (
            <div className={`review-score-stars-container`}>
                <i className="far fa-star star-1" onClick={updateScore(1)}></i>
                <i className="far fa-star star-2" onClick={updateScore(2)}></i>
                <i className="far fa-star star-3" onClick={updateScore(3)}></i>
                <i className="far fa-star star-4" onClick={updateScore(4)}></i>
                <i className="far fa-star star-5" onClick={updateScore(5)}></i>
            </div>
        )
        return stars;
    }

    updateBody() {
        return e => {
            this.setState({body: e.currentTarget.value})
        }
    }

    render() {

        return (
            <div className="review-form-container">
                <h3>Your review</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="review-create-scores-container">
                        <div className="review-create-scores-container-left-side">
                            <div className="review-score-container">
                                <div className="review-score-label">Location</div>
                                {this.renderStars()}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Check-in</div>
                                {this.renderStars()}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Value</div>
                                {this.renderStars()}
                            </div>
                        </div>
                        <div className="review-create-scores-container-right-side">
                            <div className="review-score-container">
                                <div className="review-score-label">Communication</div>
                                {this.renderStars()}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Accuracy</div>
                                {this.renderStars()}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Cleanliness</div>
                                {this.renderStars()}
                            </div>
                        </div>
                    </div>
                    <div className="review-text-form-container">
                        <textarea onChange={this.updateBody()} value={this.state.body} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default ReviewForm;