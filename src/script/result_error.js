// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/result.css';
import '../css/error.css';

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
    }

    render() {
        return (
            <div>
                Oops!
            </div>
        );
    }
}

export { Error };