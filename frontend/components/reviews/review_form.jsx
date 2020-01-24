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
            emptyStarClass: "far fa-star",
            filledStarClass: "fas fa-star",
            accuracyStar1Active: false,
            accuracyStar2Active: false,
            accuracyStar3Active: false,
            accuracyStar4Active: false,
            accuracyStar5Active: false,
            checkInStar1Active: false,
            checkInStar2Active: false,
            checkInStar3Active: false,
            checkInStar4Active: false,
            checkInStar5Active: false,
            cleanlinessStar1Active: false,
            cleanlinessStar2Active: false,
            cleanlinessStar3Active: false,
            cleanlinessStar4Active: false,
            cleanlinessStar5Active: false,
            communicationStar1Active: false,
            communicationStar2Active: false,
            communicationStar3Active: false,
            communicationStar4Active: false,
            communicationStar5Active: false,
            locationStar1Active: false,
            locationStar2Active: false,
            locationStar3Active: false,
            locationStar4Active: false,
            locationStar5Active: false,
            valueStar1Active: false,
            valueStar2Active: false,
            valueStar3Active: false,
            valueStar4Active: false,
            valueStar5Active: false,
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
        let { emptyStarClass } = this.state;

        // I think you probably move this to become another component method??
        const updateScore = score => {
            return e => {
                this.setState({[scoreName]: score })
            }
        }

        // You want to check whether the star with the given scoreName and idx
        // is active — if it is, give it the filled-star class; if not, give it
        // the empty star class
        let idxs = [1, 2, 3, 4, 5];
        let starLis = idxs.map(idx => {
            return <li>

            </li>
        })

        // Revise the below the rener the starLis inside the container ul
        const stars = (
            <ul className={`review-score-stars-container`}>
                <i id={`${scoreName}-star-1`} className={emptyStarClass} onClick={updateScore(1)}></i>
                <i id={`${scoreName}-star-2`} className={emptyStarClass} onClick={updateScore(2)}></i>
                <i id={`${scoreName}-star-3`} className={emptyStarClass} onClick={updateScore(3)}></i>
                <i id={`${scoreName}-star-4`} className={emptyStarClass} onClick={updateScore(4)}></i>
                <i id={`${scoreName}-star-5`} className={emptyStarClass} onClick={updateScore(5)}></i>
            </ul>
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
                                {this.renderStars('location')}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Check-in</div>
                                {this.renderStars('checkin')}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Value</div>
                                {this.renderStars('value')}
                            </div>
                        </div>
                        <div className="review-create-scores-container-right-side">
                            <div className="review-score-container">
                                <div className="review-score-label">Communication</div>
                                {this.renderStars('communication')}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Accuracy</div>
                                {this.renderStars('accuracy')}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Cleanliness</div>
                                {this.renderStars('cleanliness')}
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