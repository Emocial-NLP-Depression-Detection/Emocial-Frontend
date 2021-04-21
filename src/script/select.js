// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/select.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import (temporarily disabled)
import { checkLanguage, translation } from './translation.js';

import search_icon from '../photos/search_icon.png'

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.type = this.props.type;
        this.lang = checkLanguage();
    }

    renderBottom(type) {
        if (type === "upload") {
            return (
                <form className="handle-search-container" action="/upload">
                    <input className="will-animate" type="text" placeholder={translation.select.handle[this.lang]} />
                    <button className="search-button will-animate" type="submit"><img src={search_icon} height="15vh" alt="" /></button>
                </form>
            );
        } else {
            this.has_cursor = "choice-background-with-pointer";
            return (<button className="bottom-button will-animate">{translation.select.start[this.lang]}</button>);
        }
    }

    render() {
        return (
            <div className="choice-background will-animate">
                <div className="choice-header">
                    {translation.select[this.type].title[this.lang]}
                </div>
                <div className="choice-desc">
                    {translation.select[this.type].desc[this.lang]}
                    <div className="choice-bottom">
                        {this.renderBottom(this.type)}
                    </div>
                </div>
            </div>
        );
    }
}

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: null };
        this.menu_ref = React.createRef();
        this.lang = checkLanguage()
    }

    async handleClick(link_to) {
        console.log("User requests redirect to /", link_to)
        this.menu_ref.current.classList.add('slide-out');
        document.getElementById("root").classList.add("disappear");
        console.log("Redirecting to /", link_to);
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("root").classList.remove("disappear");
        this.setState({ redirect: "/test/" + link_to });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="select-root">
                <div ref={this.menu_ref} className="slide-in-onload will-animate">
                    <Menu page="/select" />
                </div>
                <div className="select-content fade-in-onload">
                    <div>
                        <center>
                            <p className="select-title">
                                {translation.select.title[this.lang]}
                            </p>
                            <p className="select-subtitle">
                                {translation.select.recommend[this.lang]} {translation.select.upload.title[this.lang]}
                            </p>
                        </center>
                        <div className="choice-section">
                            <div><Choice type="upload" /></div>
                            <div onClick={() => this.handleClick("compose")}><Choice type="compose" /></div>
                            <div onClick={() => this.handleClick("questionnaire")}><Choice type="questionnaire" /></div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export { Select }