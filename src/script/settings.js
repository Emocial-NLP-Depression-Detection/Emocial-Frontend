// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/settings.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

// Pictures import
import avatar from '../photos/placeholder_avatar.png'
import doctor from '../photos/type_doctor.png'

class ChooseType extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage()
    }

    render() {
        return (
            <div>
                <button className="choose-type-button will-animate">
                    <div className="choose-type-img-container">
                        <img className="choose-type-img" src={doctor} alt="Doctor" />
                    </div>
                    <span className="choose-type-text">Doctor</span>
                </button>
                <button className="choose-type-button will-animate">
                    <div className="choose-type-img-container">
                        <img className="choose-type-img" src={doctor} alt="Doctor" />
                    </div>
                    <span className="choose-type-text">Patient</span>
                </button>
            </div>

        );
    }
}

class AccountManagement extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage()
        this.state = { name: props.name };
    }

    onTodoChange(value) {
        this.setState({
            name: value
        });
    }

    render() {
        return (
            <form className="account-container">
                <img className="account-avatar" src={avatar} alt="User avatar" />
                <div className="account-details">
                    <p>Username</p>
                    <input className="account-name will-animate" type="text" name="username" autocomplete="off"
                        value={this.state.name} onChange={e => this.onTodoChange(e.target.value)} />
                    <p>I'm a…</p>
                    <ChooseType />
                    <button class="account-save will-animate" type="submit">Save</button>
                </div>
            </form>
        )
    }
}

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage()
    }

    render() {
        return (
            <div class="settings-root">
                <div class="slide-in-onload">
                    <Menu page="/settings" />
                </div>
                <div class="settings-grid fade-in-onload">
                    <div class="settings-menu left-slide-in-onload">
                        <button className="settings-menu-button will-animate">Account</button>
                        <button className="settings-menu-button will-animate">Language</button>
                        <button className="settings-menu-button will-animate">Watchlist</button>
                    </div>
                    <div class="settings-content">
                        <AccountManagement name="Gotcha F. U." type="doctor" />
                    </div>
                </div>
            </div>
        );
    }
}

export { Settings }