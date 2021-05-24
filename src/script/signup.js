// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Style sheet import
import '../css/global.css'
import '../css/theme.css'
import '../css/account.css';
import '../css/signup.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

// Pictures import
import doctor from '../photos/type_doctor.png'
import patient from '../photos/type_patient.png'

var input_obj;

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang
        this.state = { name: null, email: null, password: null, handle: null };
    }

    render() {
        input_obj = this.state;
        return (
            <div className="form-section">
                <div>
                    <label htmlFor="name">{translation.account.name[this.lang]}:</label>
                    <input className="will-animate" name="name" type="text" onChange={e => this.setState({ name: e.target.value })} autoFocus={true} /><br />
                    <label htmlFor="email">{translation.account.email[this.lang]}:</label>
                    <input className="will-animate" name="email" type="email" onChange={e => this.setState({ email: e.target.value })} /><br />
                    <label htmlFor="password">{translation.account.password[this.lang]}:</label>
                    <input className="will-animate" name="password" type="password" onChange={e => this.setState({ password: e.target.value })} />
                    <label htmlFor="handle">{translation.account.handle[this.lang]}:</label>
                    <input className="will-animate" name="handle" type="text" onChange={e => this.setState({ handle: e.target.value })} placeholder="@" />
                </div>
            </div>
        );
    }
}

class ChooseType extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
        this.input_obj = null;
        this.to_post = null;
        this.doctor_ref = React.createRef();
        this.patient_ref = React.createRef();
        this.state = { is_doctor: false, redirect: null };
    }

    chooseType(type) {
        if (type === "doctor") {
            this.setState({ is_doctor: true });
            this.doctor_ref.current.classList.add("secondary-light-active");
            this.patient_ref.current.classList.remove("secondary-light-active");
        } else if (type === "patient") {
            this.setState({ is_doctor: false });
            this.patient_ref.current.classList.add("secondary-light-active");
            this.doctor_ref.current.classList.remove("secondary-light-active");
        }
    }

    handleClick() {
        this.input_obj = input_obj;
        this.signup_post = {
            "username": this.input_obj.name,
            "email": this.input_obj.email,
            "password": this.input_obj.password,
            "twitterAcount": this.input_obj.handle,
            "status": this.state.is_doctor
        }
        console.log("POST", this.signup_post, "to /register")
        axios.post("http://localhost:8000/register", this.signup_post)
            .then((res) => this.handleSignUp(res))
    }

    handleSignUp(res) {
        console.log("Server responded with", res.status, res.statusText);
        this.login_post = {
            "username": this.input_obj.name,
            "password": this.input_obj.password
        }
        console.log("POST", this.login_post, "to /login")
        axios.post("http://localhost:8000/login", this.login_post)
            .then((res) => this.handleLogIn(res));
    }

    handleLogIn(res) {
        console.log("Server responded with", res.status, res.statusText);
        document.cookie = "token=" + res.data.token;
        console.log("Session account token stored as token=" + res.data.token);
        this.setState({redirect: "/settings"})
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        } else {
            return (
                <div className="choose-type-grid">
                    <div>
                        <p className="choose-type-title">{translation.settings.account.type.title[this.lang]}</p>
                        <button ref={this.doctor_ref} className="choose-type-button secondary-light will-animate" onClick={() => this.chooseType("doctor")}>
                            <div className="choose-type-img-container">
                                <img className="choose-type-img" src={doctor} alt="Doctor" />
                            </div>
                            <span className="choose-type-text">{translation.settings.account.type.doctor[this.lang]}</span>
                        </button>
                        <button ref={this.patient_ref} className="choose-type-button secondary-light will-animate" onClick={() => this.chooseType("patient")}>
                            <div className="choose-type-img-container">
                                <img className="choose-type-img" src={patient} alt="Nondescript male person" />
                            </div>
                            <span className="choose-type-text">{translation.settings.account.type.patient[this.lang]}</span>
                        </button>
                    </div>
                    <div className="account-submit-container">
                        <button className="account-submit will-animate" onClick={() => this.handleClick()}>{translation.account.signup_submit[this.lang]}</button>
                    </div>
                </div>
            );
        }
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
                <div className="fade-in-onload signup-flex">
                    <div>
                        <h1 className="signup-header">{translation.account.signup_title[this.lang]}</h1>
                        <div className="signup-grid">
                            <Form lang={this.lang} />
                            <ChooseType lang={this.lang} />
                        </div>
                        <div className="bottom-text">
                            {translation.account.signup_bottom[this.lang]}
                            <span className="account-link will-animate">
                                {translation.account.login_submit[this.lang]}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { SignUp };