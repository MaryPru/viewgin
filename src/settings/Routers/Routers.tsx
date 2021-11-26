import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
}
    from "react-router-dom"

import HomePage from "../../pages/HomePage/HomePage";
import EmptyPage from "../../pages/EmptyPage/EmptyPage";

const Routers = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/error">
                        <EmptyPage/>
                    </Route>
                    <Route path="/">
                       <HomePage/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default Routers;