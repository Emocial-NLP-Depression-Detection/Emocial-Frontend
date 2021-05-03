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

// Pictures import
import avatar from '../photos/placeholder_avatar.png'

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
                                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
                            </svg>
                        </div>
                    </div>
                    <p className="loading-text">{translation.result.loading[this.lang]}</p>
                </div>
            </div>
        );
    }
}

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
        this.handle = this.props.handle;
        this.result = this.props.result;
    }

    render() {
        return (
            <div className="result-container">
                <div>
                    <h1 className="result-header">Result</h1>
                    <div className="result-grid">
                        <img className="result-avatar" src={avatar} />
                        <div>
                            <p className="result-handle">@{this.handle},</p>
                            <p className="result-text">{translation.result[this.result][this.lang]}</p>
                        </div>
                    </div>
                    <button className="result-button">{translation.result.back[this.lang]}</button>
                </div>
            </div>
        );
    }
}

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.content_ref = React.createRef();
        this.state = { result: 'negative' };
    }

    // placeholder function
    // async changePage() {
    //     console.log("bananas!");
    //     await new Promise(r => setTimeout(r, 9000));
    //     this.content_ref.current.classList.add("disappear");
    //     await new Promise(r => setTimeout(r, 600));
    //     this.setState({ result: 'positive' })
    //     await new Promise(r => setTimeout(r, 600));
    //     this.content_ref.current.classList.remove("disappear");
    // }

    getContent() {
        if (this.state.result == null) {
            return (<LoadingScreen lang={this.lang} />);
        } else if (this.state.result === 'positive' || this.state.result === 'negative') {
            return (<ResultPage lang={this.lang} handle="ABC" result={this.state.result} />);
        }
    }

    render() {
        // this.changePage();
        return (
            <div className="result-root">
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div ref={this.content_ref} className="fade-in-onload will-animate">
                    {this.getContent()}
                </div>
            </div>
        );
    }
}

export { Result }