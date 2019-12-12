import React from 'react';

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
                <li>Trips</li>
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
                <div className="treebnb-logo">
                    <i className="fas fa-tree"></i>
                    <span id="treebnb-word">treebnb</span>
                </div>
                {linksToRender}
            </nav>
        )
    }

}

export default Navbar;


// const Navbar = ({currentUser, openModal, logoutUser}) => {

//     const sessionLinks = (
//         <ul className="nav-links">
//             <li className="signup-li" onClick={() => openModal('Sign up')}>
//                 Sign up
//             </li>
//             <li className="login-li" onClick={() => openModal('Log in')}>
//                 Log in
//             </li>
//             <li><NavbarDropdown /></li>
//         </ul>
//     );
//     const loggedInLinks = (
//         <ul className="nav-links">
//             <li>Trips</li>
//             <li onClick={() => logoutUser()} >Log Out</li>
//             <li id="profile-image-circle">
//             </li>
//         </ul>
//     );
//     const linksToRender = currentUser.id ? loggedInLinks : sessionLinks;


//     return (
//         <nav className="nav-container">
//             <div className="treebnb-symbol"></div>
//             {linksToRender}
//         </nav>
//     )
// }

// export default Navbar;