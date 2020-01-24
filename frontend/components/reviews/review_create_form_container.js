import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = state => {
    let currentUser = state.session.currentUser ? entities.users[session.currentUser.id] : {};

    return {
        body: '',
        currentUser,
        formType: 'Create'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: review => dispatch(createReview(review))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);