// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/account.css';
import '../css/login.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.language = this.props.language
    }

    render() {
        return (
            <div className="form-section">
                <label htmlFor="email">Email address:</label>
                <input name="email" type="email" /><br />
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" />
            </div>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.language = checkLanguage();
    }

    render() {
        return (
            <div class="account-root">
                <div class="slide-in-onload">
                    <Menu path="/settings" />
                </div>
                <div class="fade-in-onload login-flex">
                    <div>
                        <Form />
                        Don't have an account? Sign up
                    </div>
                </div>
            </div>
        );
    }
}

export { Login }