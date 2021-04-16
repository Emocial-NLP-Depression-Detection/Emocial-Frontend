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
        this.lang = checkLanguage()
    }

    renderBottom(type) {
        if (type === "upload") {
            return (
                <div className="handle-search-container">
                    <input className="will-animate" type="text" placeholder="@handle" />
                    <button className="search-button will-animate"><img src={search_icon} height="15vh" alt="" /></button>
                </div>
            );
        }
        else { this.has_cursor = "choice-background-with-pointer"; return (<button className="bottom-button will-animate">Start</button>); }
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
        console.log("User requests redirect to", link_to)
        this.menu_ref.current.classList.add('slide-out');
        document.getElementById("root").classList.add("disappear");
        console.log("Redirecting to", link_to);
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("root").classList.remove("disappear");
        this.setState({ redirect: link_to });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <div ref={this.menu_ref} className="slide-in-onload">
                    <Menu page="/select" />
                </div>
                <div className="select-root fade-in-onload">
                    <div>
                        <center>
                            <p className="select-title">
                                Select a detection method
                            </p>
                            <p className="select-subtitle">
                                Your doctor recommends: automatically uploading your tweets
                            </p>
                        </center>
                        <div className="choice-section">
                            <div><Choice type="upload" /></div>
                            <div onClick={() => this.handleClick("compose")}><Choice type="compose" /></div>
                            <div onClick={() => this.handleClick("questionare")}><Choice type="questionare" /></div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export { Select }