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
        this.lang = this.props.lang
    }

    render() {
        return (
            <div className="form-section">
                <div>
                    <label htmlFor="email">{translation.account.email[this.lang]}:</label>
                    <input className="will-animate" name="email" type="email" autoFocus={true} /><br />
                    <label htmlFor="password">{translation.account.password[this.lang]}:</label>
                    <input className="will-animate" name="password" type="password" />
                </div>
                <div className="account-submit-container">
                    <button className="account-submit will-animate">{translation.account.login_submit[this.lang]}</button>
                </div>
            </div>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
    }

    render() {
        return (
            <div className="account-root">
                <div className="slide-in-onload">
                    <Menu path="/settings" />
                </div>
                <div className="fade-in-onload login-flex">
                    <div>
                        <h1 className="account-header">{translation.account.login_title[this.lang]}</h1>
                        <Form lang={this.lang} />
                        <div className="bottom-text">
                            {translation.account.login_bottom[this.lang]}
                            <span className="account-link will-animate">
                                {translation.account.signup_submit[this.lang]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Login }