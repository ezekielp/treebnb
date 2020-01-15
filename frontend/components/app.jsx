import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import NavbarWithSearchContainer from './navbar/navbar_with_search_container';
import Modal from './modal';
import SearchBoxContainer from './forms/search_box_container';
// import SearchBox from './forms/search_box';
import TreehouseIndexContainer from './treehouses/treehouse_index_container';
import TreehouseSearchIndexContainer from './treehouses/treehouse_search_index_container';
import TreehouseShowContainer from './treehouses/treehouse_show_container';
import UserBookingsContainer from './bookings/user_bookings_container';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Footer from './footer';

const App = (props) => {
    return (
        <div className="app-container">
            <Modal />
            <Switch>
                <Route exact path="/treehouses">
                    <NavbarWithSearchContainer />
                    <TreehouseIndexContainer />
                </Route>
                <Route exact path="/treehouses/search">
                    <NavbarWithSearchContainer />
                    <TreehouseSearchIndexContainer />
                </Route>
                <Route exact path="/treehouses/:treehouseId" render={(routeProps) => {
                    return (
                        <div>
                            <NavbarWithSearchContainer />
                            <TreehouseShowContainer {...routeProps} />
                        </div>
                    );
                }} />
                <AuthRoute
                    exact path="/trips"
                    component={ UserBookingsContainer } />
                <Route path="/">
                    <NavbarContainer />
                    <SearchBoxContainer />
                    <TreehouseIndexContainer />
                    <Redirect to="/" />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;


// <Redirect from="*" to="/" />
// Header should always just have the NavbarContainer
// Root route: Both the SearchBox component (into which you should put the background image) and the TreehouseIndexContainer below that
// Treehouse index route: Just the TreehouseIndexContainer