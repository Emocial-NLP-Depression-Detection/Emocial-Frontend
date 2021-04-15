// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/select.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import (temporarily disabled)
// eslint-disable-next-line
import { checkLanguage, translation } from './translation.js';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage()
    }

    render() {
        return (
            <div>
                <div className="slide-in-onload">
                    <Menu page="/select" />
                </div>
                <center className="fade-in-onload">
                    Placeholder text
                </center>

            </div>
        );
    }
}

export { Select }