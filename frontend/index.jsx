import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
