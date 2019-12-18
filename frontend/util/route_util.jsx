import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (

    <Route 
        path={path}
        exact={exact}
        render={props => {
            if (loggedIn) {
                return <Component {...props} />;
            } else {
                return <Redirect to="/" />;
            }
        }}
    />
);

const msp = state => {
    return {
        loggedIn: Boolean(state.session.currentUser)
    };
};

export const AuthRoute = withRouter(
    connect(
        msp,
        null
    )(Auth)
);