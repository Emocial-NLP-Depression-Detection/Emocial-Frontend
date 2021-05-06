// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/account.css';
import '../css/login.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.language = this.props.language
    }

    render() {
        return (
            <div>
                Email addres:<br />
                <input type="text" /><br />
                Password:<br />
                <input type="text" />
            </div>
        );
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.language = checkLanguage();
    }

    render() {
        return (
            <div>
                <div class="slide-in-onload">
                    <Menu path="/settings" />
                </div>
                <div class="fade-in-onload">
                    <Form />
                    Don't have an account? Sign up
                </div>
            </div>
        );
    }
}