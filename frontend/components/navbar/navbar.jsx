import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            justLoggedOut: false,
            redirectToSearchIdx: false,
            searchTerm: ''
        }

        this.profileCircleNode = React.createRef();
        this.profileDropdownNode = React.createRef();
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
        this.navbarHandleClick = this.navbarHandleClick.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
        this.renderNavbarSearchField = this.renderNavbarSearchField.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.navbarHandleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.navbarHandleClick, false);
    }

    toggleDropdown() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    closeDropdown() {
        this.setState({ dropdownOpen: false });
    }

    navbarHandleClick(e) {
        if (this.props.currentUser.id) {
            if (this.profileDropdownNode.current.contains(e.target)) {
                return;
            } else if (this.profileCircleNode.current.contains(e.target)) {
                this.toggleDropdown();
            } else {
                this.closeDropdown();
            }
        }
    }

    handleLogout() {
        this.props.logoutUser();
        this.toggleDropdown();
        this.setState({
            justLoggedOut: true
        });
    }

    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.fetchTreehouseSearchResults(this.state.searchTerm);
        this.setState({ redirectToSearchIdx: true })
    }

    handleSearchUpdate() {
        return (e) => {
            this.setState({
                searchTerm: e.currentTarget.value
            });
        };
    }

    renderLogo() {
        if (this.props.navbarType === 'With search') {
            return (
                <div>

                </div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
    }

    renderNavbarSearchField() {
        if (this.props.navbarType === 'With search') {
            return (
                <div className="navbar-search-form-container" >
                    <i class="fas fa-search"></i>
                    <form className="navbar-search-form" onSubmit={this.handleSearchSubmit}>
                        <div className="navbar-search-input-container">
                            <input
                                className="navbar-search-input"
                                type="text"
                                placeholder="Search"
                                value={this.state.searchTerm}
                                onChange={this.handleSearchUpdate()}
                                />
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        if (this.state.justLoggedOut) {
            this.setState({ justLoggedOut: false});
            return <Redirect to="/" />;
        }

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
                    <li onClick={() => this.handleLogout()}>
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
                <li 
                    ref={this.profileCircleNode}
                    id="profile-image-circle"
                    >
                </li>
                <div
                    ref={this.profileDropdownNode}
                    >
                    {dropdownComponent}
                </div>
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
                {this.renderNavbarSearchField()}
                {linksToRender}
            </nav>
        )
    }

}

export default Navbar;