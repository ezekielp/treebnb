import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import { Redirect, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => {

    return (
        <Provider store={ store }>
            <HashRouter>
                <Switch>
                    <Route path="/">
                        <App />
                        <Redirect from="*" to="/" />
                    </Route>
                </Switch>
            </HashRouter>
        </Provider>
    )
}

export default Root;