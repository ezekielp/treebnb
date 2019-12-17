import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        let { currentUser, openModal, logoutUser } = this.props;

        const sessionLinks = (
            <ul className="nav-links">
                <li className="signup-li" onClick={() => openModal('Sign up')}>
                    Sign up
                </li>
                <li className="login-li" onClick={() => openModal('Log in')}>
                    Log in
                </li>
            </ul>
        );

        const dropdownMenu = (
            <div className="profile-dropdown-container">
                <ul>
                    <li>Profile</li>
                    <li onClick={() => {
                        logoutUser();
                        this.toggleDropdown()
                    }}>
                        Log Out
                        </li>
                </ul>
            </div>
        );

        let dropdownComponent = this.state.dropdownOpen ? dropdownMenu : <></>;

        const loggedInLinks = (
            <ul className="nav-links">
                <Link to="/trips">
                    <li>Trips</li>
                </Link>
                <li id="profile-image-circle"
                    onFocus={() => this.toggleDropdown()}
                    onBlur={() => this.toggleDropdown()}
                    tabIndex="0">
                    {dropdownComponent}
                </li>
            </ul>
        );
        const linksToRender = currentUser.id ? loggedInLinks : sessionLinks;
    
        return (
            <nav className="nav-container">
                <Link to="/">
                    <div className="treebnb-logo">
                        <i className="fas fa-tree"></i>
                        <span id="treebnb-word">treebnb</span>
                    </div>
                </Link>
                {linksToRender}
            </nav>
        )
    }

}

export default Navbar;