// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/select.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import (temporarily disabled)
import { checkLanguage, translation } from './translation.js';

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.type = this.props.type
        this.lang = checkLanguage()
    }

    renderBottom(type) {
        if (type === "upload") { return (<input type="text" />); }
        else { return (<button>Start</button>); }
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
        this.lang = checkLanguage()
    }

    render() {
        return (
            <div>
                <div className="slide-in-onload">
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
                            <Choice type="upload" />
                            <Choice type="compose" />
                            <Choice type="questionare" />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export { Select }