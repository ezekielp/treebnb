import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import Modal from './modal';

const App = (props) => {
    return (
        <div className="app-container">
            <Modal />
            <header>
                <NavbarContainer />
            </header>
            <div className="splash-image-container">
            </div>
        </div>
    )
}

export default App;