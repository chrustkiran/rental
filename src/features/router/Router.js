import React from "react";
import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import {Home} from "../home/Home";
import {Vehicle} from "../vehicle/Vehicle";



export default function CustomRouter() {
    return (
        <Router>
        <Switch>
            <Route path="/vehicle/:destination">
                <Vehicle />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        </Router>
    )
}