// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/welcome.css';

// Translation keys import
import { checkLanguage, translation } from './translation.js';

// Pictures
import icon from '../photos/icon.png';
import en_flag from '../photos/en_flag.png';
import th_flag from '../photos/th_flag.png';


class WelcomeText extends React.Component {
    checkLanguage() {
        if (document.cookie.split(';').some((item) => item.includes('lang=th'))) {
            return ('th');
        } else if (document.cookie.split(';').some((item) => item.includes('lang=en'))) {
            return ('en');
        } else {
            return (null);
        }
    }

    checkUser() {
        // loggedIn cookie is a placeholder for the log in system that I'm definitely not doing myself
        if (document.cookie.split(';').some((item) => item.trim().startsWith('loggedIn='))) {
            return (true);
        }
    }

    render() {
        return (
            <div className='welcome-text will-animate'>
                <div className="welcome-en">{translation.index.welcome.en}</div>
                <div className="welcome-th">{translation.index.welcome.th}</div>
            </div>
        );
    }

}

class LanguageSelector extends React.Component {
    constructor(props) {
        super(props);
        this.language_select_ref = React.createRef();
        this.state = { redirect: null };
    }

    renderButton(text, image, cookie_value) {
        return (
            <button className="language-button will-animate" onClick={() => this.setLanguageCookie(cookie_value)}>
                <img src={image} alt="" />{text}
            </button>
        )
    }

    async setLanguageCookie(lang) {
        if (lang === "th") {
            document.cookie = "lang=th; expires=Fri, 31 Dec 9999 23:59:59 UTC";
            console.log("User chooses Thai");
        } else if (lang === "en") {
            document.cookie = "lang=en; expires=Fri, 31 Dec 9999 23:59:59 UTC";
            console.log("User chooses English");
        }
        await new Promise(r => setTimeout(r, 500));
        const language_select = this.language_select_ref.current;
        language_select.classList.add('slide-out');
        console.log("Uses empty page, waiting for redirect");
        await new Promise(r => setTimeout(r, 1000));
        console.log("Redirecting to /home with new language")
        this.setState({ redirect: "/home" });
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div ref={this.language_select_ref} className='welcome-cover will-animate centre-in-screen' style={{ zIndex: "0", backgroundColor: "#0c0644" }}>
                <center>
                    <div className='language-text'>
                        <div className="welcome-en">{translation.index.language_select.title.en}</div>
                        <div className="welcome-th">{translation.index.language_select.title.th}</div>
                    </div>
                    <div>
                        {this.renderButton(translation.index.language_select.choice.th, th_flag, "th")}
                        {this.renderButton(translation.index.language_select.choice.en, en_flag, "en")}
                    </div>
                </center>
            </div>
        );
    }
}

class CoverHappilyAfter extends React.Component {
    constructor(props) {
        super(props);
        this.WelcomeText = new WelcomeText();
    }

    render() {
        if (this.WelcomeText.checkLanguage() == null) {
            console.log("User has not chosen a language")
            return (<div><LanguageSelector /></div>)
        } else {
            console.log("Uses empty page, waiting for redirect")
            return (<div></div>)
        }
    }
}

class WelcomeCover extends React.Component {
    constructor(props) {
        super(props);
        this.welcome_ref = React.createRef();
        this.welcome_text = WelcomeText;
        this.state = { redirect: null };

    }

    async handleClick() {
        const welcome = this.welcome_ref.current;
        welcome.classList.add('slide-out')
        if (checkLanguage() != null) {
            await new Promise(r => setTimeout(r, 1000));
            console.log("Redirecting to /home");
            this.setState({ redirect: "/home" });
        }

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>

                <div ref={this.welcome_ref} className="welcome-cover will-animate centre-in-screen" style={{ zIndex: "1", backgroundColor: "#04002e" }} onClick={() => this.handleClick()}>
                    <center>
                        <img src={icon} style={{ marginTop: "100px" }} alt="A crying face with a mask onto its left" />
                        <WelcomeText />
                        <input className="a11y-any-key" type="text" onKeyDown={() => this.handleClick()} autoFocus={true} />
                    </center>
                </div>
                <CoverHappilyAfter />

            </div>
        )
    }
}

// Page export
export { WelcomeCover }