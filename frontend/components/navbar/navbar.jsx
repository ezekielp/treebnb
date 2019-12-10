import React from 'react';

const Navbar = ({currentUser, openModal, logoutUser}) => {
    // debugger;

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
    const loggedInLinks = (
        <ul className="nav-links">
            <li>Trips</li>
            <li onClick={() => logoutUser()} >Log Out</li>
            <li className="profile-image-circle"></li>
        </ul>
    );
    const linksToRender = currentUser.id ? loggedInLinks : sessionLinks;


    return (
        <nav className="nav-container">
            <div className="treebnb-symbol"></div>
            {linksToRender}
        </nav>
    )
}

export default Navbar;