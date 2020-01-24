import React from 'react';

class ReviewForm extends React.Component {
    constructor() {
        super(props);

        this.state = this.props.review;
    }


    render() {
        const emptyStars = (
            <div className="review-score-stars-container">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        )

        return (
            <div className="review-form-container">
                <h4>Your review</h4>
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
            </div>
        )
    }
}

export default ReviewForm;