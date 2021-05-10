// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
                    <div className="loading-text">{translation.result.loading[this.lang]}</div>
                </div>
            </div>
        );
    }
}

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.lang = this.props.lang;
        this.result = this.props.result;
        this.state = { redirect: null, 'account': null }
    }

    async handleClick() {
        console.log("User requests redirect to /")
        document.getElementById("root").classList.add("disappear");
        console.log("Redirecting to /");
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("root").classList.remove("disappear");
        this.setState({ redirect: "/" });
    }

    getAvatar() {
        if (this.state.account === null) {
            axios.get("http://localhost:8000/gettwitter/@17Ginono")
                .then((res) => this.setState({ 'account': res.data }));
            return (avatar);
        } else {
            return (this.state.account.profile);
        }
    }

    getHandle() {
        if (this.state.account === null) {
            return (null);
        } else {
            return (this.state.account.twitter_username);
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="result-container">
                <div>
                    <h1 className="result-header">{translation.result.title[this.lang]}</h1>
                    <div className="result-grid">
                        <img className="result-avatar" src={this.getAvatar()} alt={translation.img_alt.avatar[this.lang]} />
                        <div>
                            <p className="result-handle">{this.getHandle()},</p>
                            <p className="result-text">{translation.result[this.result][this.lang]}</p>
                        </div>
                    </div>
                    <button className="result-button will-animate" onClick={() => this.handleClick()}>{translation.result.back[this.lang]}</button>
                </div>
            </div>
        );
    }
}

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.post_type = this.props.post_type;
        this.to_post = this.props.to_post;
        this.lang = checkLanguage();
        this.content_ref = React.createRef();
        this.state = { result: null };
    }

    getContent() {
        if (this.state.result == null) {
            console.log("POST", this.to_post, "to /analysis-text")
            if (this.post_type === "compose") {
                axios.post("http://localhost:8000/analysis-text", this.to_post)
                    .then((res) => this.setState({ result: res }));
            } else if (this.post_type === "questionnaire") {
                ;
            }
            return (<LoadingScreen lang={this.lang} />);
        } else if (this.state.result.data.result > 0.5) {
            return (<ResultPage lang={this.lang} result="positive" />);
        } else if (this.state.result.data.result <= 0.5) {
            return (<ResultPage lang={this.lang} result="negative" />);
        }
    }

    render() {
        return (
            <div className="result-root">
                <div>
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