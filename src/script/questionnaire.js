// ReactJS import
import React from 'react';

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
                                <p>1.</p>
                                <div className="question-content">
                                    <label htmlFor="composed-tweet">{translation.compose.label[this.lang]}</label><br />
                                    <textarea className="will-animate" id="composed-tweet" name="composed-tweet" autoFocus={true} /><br />
                                    <button className="will-animate" type="submit">{translation.compose.submit[this.lang]}</button>
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