// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/result.css';

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
            <div className="loading-container">
                <div className="loading-grid">
                    <div className="spinner-container">
                        <div className="spinner">
                            <svg className="circular" viewBox="25 25 50 50">
                                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                            </svg>
                        </div>
                    </div>
                    <p className="loading-text">{translation.result.loading[this.lang]}</p>
                </div>
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