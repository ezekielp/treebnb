import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal';
import SearchBox from './forms/search_box';

const App = (props) => {
    return (
        <div className="app-container">
            <Modal />
            <header>
                <NavbarContainer />
                <SearchBox />
            </header>
        </div>
    )
}

export default App;