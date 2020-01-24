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
            body: this.props.body
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        // If all fields are filled out but user is not logged in, open modal
        // and send message that they need to sign up / log in
        let { currentUser } = this.props;
        if (!currentUser.id) {
            let message = (
                <div>
                    <div id="sign-up-to-review">Sign up or log in to leave a review</div>
                </div>
            );
            this.props.openModal('Sign up', message)
        } else {
            // If all fields are filled out and user is logged in, send the booking request
            let treehouse_id = this.props.match.params.treehouseId;
            let newReview = {
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

        const emptyStars = (
            <div className={`review-score-stars-container`}>
                <i class="far fa-star star-1" onClick={updateScore(1)}></i>
                <i class="far fa-star star-2" onClick={updateScore(2)}></i>
                <i class="far fa-star star-3" onClick={updateScore(3)}></i>
                <i class="far fa-star star-4" onClick={updateScore(4)}></i>
                <i class="far fa-star star-5" onClick={updateScore(5)}></i>
            </div>
        )
        return emptyStars;
    }

    updateBody() {
        return e => {
            this.setState({body: e.currentTarget.value})
        }
    }

    render() {
        const emptyStars = (
            <div className="review-score-stars-container">
                <i class="far fa-star star-1"></i>
                <i class="far fa-star star-2"></i>
                <i class="far fa-star star-3"></i>
                <i class="far fa-star star-4"></i>
                <i class="far fa-star star-5"></i>
            </div>
        )

        return (
            <div className="review-form-container">
                <h3>Your review</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="review-create-scores-container">
                        <div className="review-create-scores-container-left-side">
                            <div className="review-score-container">
                                <div className="review-score-label">Location</div>
                                {emptyStars}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Check-in</div>
                                {emptyStars}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Value</div>
                                {emptyStars}
                            </div>
                        </div>
                        <div className="review-create-scores-container-right-side">
                            <div className="review-score-container">
                                <div className="review-score-label">Communication</div>
                                {emptyStars}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Accuracy</div>
                                {emptyStars}
                            </div>
                            <div className="review-score-container">
                                <div className="review-score-label">Cleanliness</div>
                                {emptyStars}
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