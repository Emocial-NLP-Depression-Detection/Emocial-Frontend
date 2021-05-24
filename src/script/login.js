// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
        this.lang = this.props.lang;
        this.state = { name: null, password: null };
    }

    handleClick() {
        this.to_post = {
            "username": this.state.name,
            "password": this.state.password
        }
        console.log("POST", this.to_post, "to /login")
        axios.post("http://localhost:8000/login", this.to_post)
            .then((res) => this.handleResponse(res));
    }

    handleResponse(res) {
        console.log("Server responded with", res.status, res.statusText);
        document.cookie = "token=" + res.data.token;
        console.log("Session account token stored as token=" + res.data.token);
        this.setState({ redirect: "/settings" })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } else {
            return (
                <div className="form-section">
                    <form>
                        <label htmlFor="name">{translation.account.name[this.lang]}:</label>
                        <input className="will-animate" name="name" type="text" autoComplete="username" onChange={e => this.setState({ name: e.target.value })} autoFocus={true} /><br />
                        <label htmlFor="password">{translation.account.password[this.lang]}:</label>
                        <input className="will-animate" name="password" type="password" autoComplete="current-password" onChange={e => this.setState({ password: e.target.value })} />
                    </form>
                    <div className="account-submit-container">
                        <button className="account-submit will-animate" onClick={() => this.handleClick()}>
                            {translation.account.login_submit[this.lang]}
                        </button>
                    </div>
                </div>
            );
        }
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