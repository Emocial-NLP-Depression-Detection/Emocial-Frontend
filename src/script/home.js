// ReactJS import
import React from 'react';
import { Redirect } from "react-router-dom";

// Style sheet import
import '../css/global.css'
import '../css/home.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

// Pictures
import depression_pic from '../photos/depression.png'
import help_pic from '../photos/help.png'

var content;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage()
        this.state = { redirect: null };
        this.menu_ref = React.createRef();
        this.content_ref = React.createRef();
    }

    async handleClick() {
        console.log("User requests redirect to /select")
        const menu = this.menu_ref.current;
        content = this.content_ref.current;
        menu.classList.add('slide-out')
        content.classList.add('disappear')
        console.log("Redirecting to /select")
        await new Promise(r => setTimeout(r, 600));
        this.setState({ redirect: "/select" });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div lang={this.lang}>
                <div ref={this.menu_ref} id="top" className="slide-in-onload will-animate">
                    <Menu page="/home" />
                </div>
                <div ref={this.content_ref} className="fade-in-onload will-animate">
                    <div className="welcome-section centre-in-screen">
                        <center>
                            <div className="welcome-title">
                                {translation.home.welcome.title[this.lang]}
                            </div>
                            <div className="welcome-desc">
                                {translation.home.welcome.desc[this.lang]}
                            </div>
                            <div>
                                <button className="welcome-button will-animate" onClick={() => this.handleClick()}>
                                    {translation.home.welcome.button[this.lang]}
                                </button>
                            </div>
                            <div className="link-float will-animate">
                                <a className="link-float-text will-animate" href="/home#about">
                                    <div>
                                        {translation.home.welcome.link[this.lang]}
                                        <div width="37.5px" height="75px">
                                            <svg id="triangles" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M56.9282 73C53.849 78.3333 46.151 78.3333 43.0718 73L7.56476 11.5C4.48556 6.16669 8.33456 -0.499991 14.493 -0.499992L85.507 -0.499998C91.6654 -0.499999 95.5144 6.16667 92.4352 11.5L56.9282 73Z" fill="#5271FF" fillOpacity="0.5" id="triangle-1" className="will-animate" />
                                                    <path d="M56.9282 97C53.849 102.333 46.151 102.333 43.0718 97L7.56476 35.5C4.48556 30.1667 8.33456 23.5 14.493 23.5L85.507 23.5C91.6654 23.5 95.5144 30.1667 92.4352 35.5L56.9282 97Z" fill="#4062FF" fillOpacity="0.5" id="triangle-2" className="will-animate" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </center>
                    </div>
                    <div id="about" className="depression-section" style={{ backgroundColor: "#e5faff" }} >
                        <div className="depression-text">
                            <div className="about-title">{translation.home.depression.title[this.lang]}</div>
                            <div className="about-desc">{translation.home.depression.desc[this.lang]}</div>
                            <a href="/home#next" className="link-float-text about-next will-animate" >
                                {translation.home.depression.link[this.lang]} ▶
                            </a>
                        </div>
                        <div className="depression-img-container">
                            <img className="about-img" src={depression_pic} alt={translation.img_alt.depression[this.lang]} />
                        </div>
                    </div>
                    <div id="next" className="help-section">
                        <div className="help-img-container">
                            <img className="about-img help-img" src={help_pic} alt={translation.img_alt.help[this.lang]} />
                        </div>
                        <div className="help-text">
                            <div className="about-title">{translation.home.help.title[this.lang]}</div>
                            <div className="about-desc">{translation.home.help.desc[this.lang]}</div>
                            <a href="/home#top" className="link-float-text about-next about-back will-animate">
                                ◀ {translation.home.help.link[this.lang]}
                            </a>
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export { Home }