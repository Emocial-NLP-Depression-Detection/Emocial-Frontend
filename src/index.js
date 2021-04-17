// ReactJS import
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// All pages import
import { WelcomeCover } from './script/welcome.js';
import { Home } from './script/home.js';
import { Select } from './script/select.js';
import { Compose } from './script/compose.js';
import { History } from './script/history.js';
import { HandleDetails } from './script/history_details.js';
import { NotFound } from './script/not_found.js';

// Switchboard
function App() {
    return (
        <Switch>
            <Route exact path="/" component={WelcomeCover} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/select" component={Select} />
            <Route exact path="/compose" component={Compose} />
            <Route exact path="/history" component={History} />
            <Route path="/history/" component={HandleDetails} />
            <Route path="/" component={NotFound} />
        </Switch>
    );
}

// Render the switchboard
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);