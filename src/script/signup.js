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

// Pictures import
import doctor from '../photos/type_doctor.png'
import patient from '../photos/type_patient.png'

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

class ChooseType extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
    }

    render() {
        return (
            <div className="choose-type-grid">
                <div>
                    <p className="choose-type-title">{translation.settings.account.type.title[this.lang]}</p>
                    <button className="choose-type-button will-animate">
                        <div className="choose-type-img-container">
                            <img className="choose-type-img" src={doctor} alt="Doctor" />
                        </div>
                        <span className="choose-type-text">{translation.settings.account.type.doctor[this.lang]}</span>
                    </button>
                    <button className="choose-type-button will-animate">
                        <div className="choose-type-img-container">
                            <img className="choose-type-img" src={patient} alt="Nondescript male person" />
                        </div>
                        <span className="choose-type-text">{translation.settings.account.type.patient[this.lang]}</span>
                    </button>
                </div>
                <div className="account-submit-container">
                    <button className="account-submit will-animate">{translation.account.signup_submit[this.lang]}</button>
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