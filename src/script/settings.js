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
                    <input className="account-name will-animate" type="text" name="username" autoComplete="off"
                        value={this.state.name} onChange={e => this.onTodoChange(e.target.value)} />
                    <p>{translation.settings.account.type.title[this.lang]}</p>
                    <ChooseType />
                    <button className="account-save will-animate" type="submit">{translation.settings.account.save[this.lang]}</button>
                </div>
            </form>
        )
    }
}

class SelectLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.drop_button_ref = React.createRef();
        this.dropdown_ref = React.createRef();
        this.state = { "show": false };
    }

    showDropdown() {
        if (this.state.show === true) {
            this.setState({ "show": false });
            this.drop_button_ref.current.classList.remove("drop-button-focused");
            this.dropdown_ref.current.classList.add("dropdown-content-hidden");
        }
        else if (this.state.show === false) {
            this.setState({ "show": true });
            this.drop_button_ref.current.classList.add("drop-button-focused");
            this.dropdown_ref.current.classList.remove("dropdown-content-hidden");
        }
    }

    render() {
        return (
            <div>
                <p className="language-header">Language:</p>
                <div className="dropdown">
                    <button ref={this.drop_button_ref} className="drop-button will-animate" onClick={() => this.showDropdown()}>
                        <span className="drop-button-text">
                            ภาษาไทย
                        </span>
                        <span className="dropdown-triangle">
                            <svg viewBox="0 0 100 100" height="3.5vh" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.9282 97C53.849 102.333 46.151 102.333 43.0718 97L7.56476 35.5C4.48556 30.1667 8.33456 23.5 14.493 23.5L85.507 23.5C91.6654 23.5 95.5144 30.1667 92.4352 35.5L56.9282 97Z" fill="#000000" fillOpacity="0.5" />
                            </svg>
                        </span>

                    </button>
                    <div ref={this.dropdown_ref} className="dropdown-content dropdown-content-hidden will-animate">English</div>
                </div>
            </div>
        );
    }
}

class Watchlist extends React.Component {
    render() {
        return (
            <div>
                Watchlist wow
            </div>
        );
    }
}

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.state = { "page": "account" };
    }

    renderPage(type) {
        if (type === "account") { return <AccountManagement name="Doe John" /> }
        else if (type === "language") { return <SelectLanguage /> }
        else if (type === "watchlist") { return <Watchlist /> }
    }

    render() {
        return (
            <div className="settings-root">
                <div className="slide-in-onload">
                    <Menu page="/settings" />
                </div>
                <div className="settings-grid fade-in-onload">
                    <div className="settings-menu left-slide-in-onload">
                        <button className="settings-menu-button will-animate" onClick={() => this.setState({ page: "account" })}>
                            {translation.settings.menu.account[this.lang]}
                        </button>
                        <button className="settings-menu-button will-animate" onClick={() => this.setState({ page: "language" })}>
                            {translation.settings.menu.language[this.lang]}
                        </button>
                        <button className="settings-menu-button will-animate" onClick={() => this.setState({ page: "watchlist" })}>
                            {translation.settings.menu.watchlist[this.lang]}
                        </button>
                    </div>
                    <div className="settings-content">
                        {this.renderPage(this.state.page)}
                    </div>
                </div>
            </div>
        );
    }
}

export { Settings }