// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/compose.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
    }

    render() {
        return (
            <div className="compose-root">
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="fade-in-onload compose-container">
                    <form className="compose-form" action="result">
                        <label className="compose-label" htmlFor="composed-tweet">{translation.compose.label[this.lang]}</label><br />
                        <textarea className="compose-textarea will-animate" id="composed-tweet" name="composed-tweet" autoFocus={true} /><br />
                        <button className="compose-submit will-animate" type="submit">{translation.compose.submit[this.lang]}</button>
                    </form>
                </div>
            </div>

        );
    }

}

export { Compose }