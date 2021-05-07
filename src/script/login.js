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
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input className="will-animate" name="email" type="email" /><br />
                    <label htmlFor="password">Password:</label>
                    <input className="will-animate" name="password" type="password" />
                </div>
                <div className="account-submit-container">
                    <button className="account-submit will-animate">Log in</button>
                </div>

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
            <div className="account-root">
                <div className="slide-in-onload">
                    <Menu path="/settings" />
                </div>
                <div className="fade-in-onload login-flex">
                    <div>
                        <h1 className="account-header">Log in to Emocial</h1>
                        <Form />
                        <p className="bottom-text">Don't have an account? Sign up</p>
                    </div>
                </div>
            </div>
        );
    }
}

export { Login }