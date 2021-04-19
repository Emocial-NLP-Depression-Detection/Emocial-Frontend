// ReactJS import
import React from 'react';

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
import patient from '../photos/type_patient.png'

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
                    <span className="choose-type-text">{translation.settings.account.type.doctor[this.lang]}</span>
                </button>
                <button className="choose-type-button will-animate">
                    <div className="choose-type-img-container">
                        <img className="choose-type-img" src={patient} alt="Nondescript male person" />
                    </div>
                    <span className="choose-type-text">{translation.settings.account.type.patient[this.lang]}</span>
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
                    <p>{translation.settings.account.name[this.lang]}</p>
                    <input className="account-name will-animate" type="text" name="username" autocomplete="off"
                        value={this.state.name} onChange={e => this.onTodoChange(e.target.value)} />
                    <p>{translation.settings.account.type.title[this.lang]}</p>
                    <ChooseType />
                    <button class="account-save will-animate" type="submit">{translation.settings.account.save[this.lang]}</button>
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
                        <button className="settings-menu-button will-animate">{translation.settings.menu.account[this.lang]}</button>
                        <button className="settings-menu-button will-animate">{translation.settings.menu.language[this.lang]}</button>
                        <button className="settings-menu-button will-animate">{translation.settings.menu.watchlist[this.lang]}</button>
                    </div>
                    <div class="settings-content">
                        <AccountManagement name="Hugh Jass" type="doctor" />
                    </div>
                </div>
            </div>
        );
    }
}

export { Settings }