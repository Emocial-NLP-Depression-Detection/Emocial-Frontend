// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/history.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage()
    }

    render() {
        return (
            <div>
                <div class="slide-in-onload">
                    <Menu page="/settings" />
                </div>
                <div class="fade-in-onload">
                    Lorem ipsum your mum will one day die
                </div>
            </div>
        );
    }
}

export { Settings }