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
        this.state = { message: null };
    }

    handleClick() {
        console.log(this.state);
    }

    render() {
        return (
            <div className="compose-root">
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="fade-in-onload compose-container">
                    <div className="compose-form">
                        <label className="compose-label" htmlFor="composed-tweet">{translation.compose.label[this.lang]}</label><br />
                        <textarea className="compose-textarea will-animate" id="composed-tweet" name="composed-tweet" onChange={e => this.setState({ message: e.target.value })} autoFocus={true} /><br />
                        <button className="compose-submit will-animate" onClick={() => this.handleClick()}>{translation.compose.submit[this.lang]}</button>
                    </div>
                </div>
            </div>

        );
    }

}

export { Compose }