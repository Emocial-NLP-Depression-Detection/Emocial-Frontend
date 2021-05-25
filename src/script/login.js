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

// Error page import
import { DisplayError } from './result.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
        this.state = { name: null, password: null, loading: false, error: null, redirect: null };
    }

    handleClick() {
        this.to_post = {
            "username": this.state.name,
            "password": this.state.password
        }
        console.log("POST", this.to_post, "to /login")
        this.setState({loading: true});
        axios.post("http://localhost:8000/login", this.to_post)
            .then((res) => this.handleResponse(res))
            .catch((err) => this.setState({error: String(err)}));
    }

    async handleResponse(res) {
        console.log("Server responded with", res.status, res.statusText);
        document.cookie = "token=" + res.data.token;
        console.log("Session account token stored as token=" + res.data.token);
        document.getElementById("root").classList.add("disappear");
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("root").classList.remove("disappear");
        this.setState({ redirect: "/settings" })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } else if (this.state.error) {
            return (
                <div className="error-container">
                    <DisplayError error={this.state.error} lang={this.lang} />
                </div>
            );
        } else if (this.state.loading) {
            return (
                <div className="error-container">
                    <div className="spinner-container">
                        <div className="spinner">
                            <svg className="circular" viewBox="25 25 50 50">
                                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>
                        </div>
                    </div>
                </div>
            );
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