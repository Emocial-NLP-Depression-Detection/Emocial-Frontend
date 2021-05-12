// ReactJS import
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// Style sheet import
import '../css/global.css'
import '../css/compose.css';
import '../css/questionnaire.css';

// Menu bar import
import { Menu } from './menu.js'

// Result page import
import { Result } from './result.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.state = { q1: null, q2: null, to_post: null };
    }

    handleClick() {
        this.setState({ to_post: { "q1": this.state.q2, "q2": this.state.q2, "lang": this.lang } })
    }

    render() {
        if (this.state.to_post) {
            return (<Result post_type="questionnaire" to_post={this.state.to_post} />);
        } else {
            return (
                <div className="questionnaire-root">
                    <div className="slide-in-onload">
                        <Menu />
                    </div>
                    <div className="fade-in-onload">
                        <div className="questionnaire">
                            <div className="question">
                                <p className="question-number">1</p>
                                <div className="question-content">
                                    <label className="question-label" htmlFor="composed-tweet">
                                        {translation.questionnaire.one[this.lang]}
                                    </label><br />
                                    <textarea className="compose-textarea will-animate" id="question-1" name="question-1" onChange={e => this.setState({ message1: e.target.value })} autoFocus={true} /><br />
                                    <Link to="#2" className="question-next compose-submit will-animate">
                                        {translation.questionnaire.next[this.lang]}
                                    </Link>
                                </div>
                            </div>
                            <div className="question" id="2">
                                <p className="question-number">2</p>
                                <div className="question-content">
                                    <label className="question-label" htmlFor="composed-tweet">
                                        {translation.questionnaire.two[this.lang]}
                                    </label><br />
                                    <textarea className="compose-textarea will-animate" id="question-2" name="question-2" onChange={e => this.setState({ message2: e.target.value })} /><br />
                                    <button className="compose-submit will-animate" onClick={() => this.handleClick()}>
                                        {translation.questionnaire.submit[this.lang]}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export { Questionnaire }