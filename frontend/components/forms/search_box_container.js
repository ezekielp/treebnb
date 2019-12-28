import { connect } from 'react-redux';
import { clearTreehouseState, fetchTreehouseSearchResults } from '../../actions/treehouse_actions';
import SearchBox from './search_box';

const msp = state => {
    return {

    }
}

const mdp = dispatch => {
    return {
        fetchTreehouseSearchResults: (searchTerm, startDate, endDate) => dispatch(fetchTreehouseSearchResults(searchTerm, startDate, endDate)),
        clearTreehouseState: () => dispatch(clearTreehouseState())
    }
}

export default connect(msp, mdp)(SearchBox);