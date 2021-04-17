// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/compose.css';

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
                    hey there
                </div>
            </div>

        );
    }

}

export { Questionnaire }