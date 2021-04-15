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

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.title = this.props.title
        this.desc = this.props.desc
        this.lang = checkLanguage()
    }


}

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
                <center className="select-root fade-in-onload">
                    <p className="select-title">
                        Select a detection method
                    </p>
                    <p className="select-subtitle">
                        Your doctor recommends: automatically uploading your tweets
                    </p>
                </center>

            </div>
        );
    }
}

export { Select }