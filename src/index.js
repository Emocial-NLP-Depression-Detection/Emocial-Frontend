// ReactJS import
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// All pages import
import { WelcomeCover } from './script/welcome.js';
import { Home } from './script/home.js';
import { Select } from './script/select.js';
import { Compose } from './script/compose.js';
import { Questionnaire } from './script/questionnaire.js';
import { Result } from './script/result.js';
import { History } from './script/history.js';
import { HandleDetails } from './script/history_details.js';
import { Settings } from './script/settings.js';
import { Login } from './script/login.js';
import { SignUp } from './script/signup.js';
import { Debug } from './script/debug.js';
import { NotFound } from './script/not_found.js';

// Switchboard
function App() {
    return (
        <Switch>
            <Route exact path="/" component={WelcomeCover} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/test/select" component={Select} />
            <Route exact path="/test/compose" component={Compose} />
            <Route exact path="/test/questionnaire" component={Questionnaire} />
            <Route exact path="/test/result" component={Result} />
            <Route path="/test/" component={Select} />
            <Route exact path="/history" component={History} />
            <Route path="/history/" component={HandleDetails} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/account/login" component={Login} />
            <Route exact path="/account/signup" component={SignUp} />
            <Route exact path="/debug" component={Debug} />
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