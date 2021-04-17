// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

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
    }

    render() {
        return (
            <div className="compose-root">
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="fade-in-onload compose-container">
                    <form className="compose-form" action="analyze">
                        <label for="composed-tweet">Tell us your story</label><br />
                        <textarea id="composed-tweet" name="composed-tweet" rows="4" cols="50" /><br />
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>

        );
    }

}

export { Compose }