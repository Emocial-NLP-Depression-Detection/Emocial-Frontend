// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/settings.css';

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
            <div class="settings-root">
                <div class="slide-in-onload">
                    <Menu page="/settings" />
                </div>
                <div class="settings-grid fade-in-onload">
                    <div class="settings-menu">
                        waehh
                    </div>
                    <div class="settings-content">
                        nhiaoooh
                    </div>
                </div>
            </div>
        );
    }
}

export { Settings }