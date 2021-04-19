// React import
import React from 'react';
import { Link } from "react-router-dom";

// Stylesheet import
import '../css/global.css'
import '../css/not_found.css'

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class NotFound extends React.Component {
    constructor(props) {
        super(props)
        this.lang = checkLanguage()
    }

    render() {
        return (
            <div>
                <div className="slide-in-onload">
                    <Menu />
                </div>
                <div className="content fade-in-onload centre-in-screen">
                    <center>
                        <div className="not-found-title">
                            404 {translation.not_found.title[this.lang]}
                        </div>
                        <div className="not-found-desc">
                            {translation.not_found.desc[this.lang]}
                            <div className="back-link will-animate">
                                <Link to="/" className="back-link will-animate">
                                    {translation.not_found.link[this.lang]}
                                </Link>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

export { NotFound }