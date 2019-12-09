import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar'; 

const App = (props) => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
        </div>
    )
}

export default App;