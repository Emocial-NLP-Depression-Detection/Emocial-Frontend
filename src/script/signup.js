// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/account.css';
import '../css/signup.css';

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
                    <label htmlFor="email">Name:</label>
                    <input className="will-animate" name="name" type="text" autoFocus={true} /><br />
                    <label htmlFor="email">{translation.account.email[this.lang]}:</label>
                    <input className="will-animate" name="email" type="email" /><br />
                    <label htmlFor="password">{translation.account.password[this.lang]}:</label>
                    <input className="will-animate" name="password" type="password" />
                </div>
            </div>
        );
    }
}

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
    }

    render() {
        return (
            <div className="account-root">
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="fade-in-onload">

                </div>
            </div>
        );
    }
}

export { SignUp };