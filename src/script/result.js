// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/home.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
    }

    render() {
        return (
            <div>
                loading in {this.lang}
            </div>
        );
    }
}

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
    }

    render() {
        return (
            <div>
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="fade-in-onload">
                    <LoadingScreen lang={this.lang} />
                </div>
            </div>
        );
    }
}

export { Result }