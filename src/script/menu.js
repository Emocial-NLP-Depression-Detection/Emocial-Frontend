// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// Stylesheet import
import '../css/menu.css'
import { checkLanguage, translation } from './translation.js';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.page = this.props.page;
        this.state = { redirect: null };
        this.menu_ref = React.createRef();
    }

    async handleClick(link_to) {
        console.log("User requests redirect to", link_to)
        this.menu_ref.current.classList.add('slide-out');
        document.getElementById("root").classList.add("disappear");
        console.log("Redirecting to", link_to);
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("root").classList.remove("disappear");
        this.setState({ redirect: link_to });
    }

    async changeLanguageOpposite() {
        console.log("User requests language change");
        document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        this.handleClick("/");
    }

    renderButton(text, link_to) {
        if (link_to === this.page) {
            return (
                <button className="menu-button will-animate menu-active">
                    {translation.menu[text][this.lang]}
                </button>
            );
        } else {
            return (
                <button className="menu-button will-animate" onClick={() => this.handleClick(link_to)}>
                    {translation.menu[text][this.lang]}
                </button>
            );
        }
    }

    renderMenuSpan() {
        // Placeholder condition (issue#9)
        if (true) {
            return (
                <span className="menu-buttons-container">
                    {this.renderButton('home', '/home')}
                    {this.renderButton('test', '/select')}
                    <Link to="/home#about" tabIndex="-1">
                        <button className="menu-button will-animate">
                            {translation.menu.about[this.lang]}
                        </button>
                    </Link>
                    {this.renderButton('history', '/history')}
                    <button className={"menu-button will-animate"} onClick={() => this.changeLanguageOpposite()}>
                        {translation.menu.change_lang[this.lang]}
                    </button>
                </span>
            );
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div ref={this.menu_ref} className="menu will-animate">
                {this.renderMenuSpan()}
            </div>
        );
    }
}

export { Menu }