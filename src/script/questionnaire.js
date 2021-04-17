// ReactJS import
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// Style sheet import
import '../css/global.css'
import '../css/compose.css';
import '../css/questionnaire.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
// eslint-disable-next-line
import { checkLanguage, translation } from './translation.js';

class Questionnaire extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
    }

    render() {
        return (
            <div className="questionnaire-root">
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="fade-in-onload">
                    <form action="analyze">
                        <div className="questionnaire">
                            <div className="question">
                                <p className="question-number">1</p>
                                <div className="question-content">
                                    <label className="question-label" htmlFor="composed-tweet">
                                        {translation.questionnaire.one[this.lang]}
                                    </label><br />
                                    <textarea className="compose-textarea will-animate" id="question-1" name="question-1" autoFocus={true} /><br />
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
                                    <textarea className="compose-textarea will-animate" id="question-2" name="question-2" /><br />
                                    <button className="compose-submit will-animate" type="submit">
                                        {translation.questionnaire.submit[this.lang]}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }

}

export { Questionnaire }