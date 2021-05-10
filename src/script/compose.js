// ReactJS import
import React from 'react';

// Style sheet import
import '../css/global.css'
import '../css/compose.css';

// Menu bar import
import { Menu } from './menu.js'

// Result page import
import { Result } from './result.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.menu_ref = React.createRef();
        this.content_ref = React.createRef();
        this.state = { message: null, to_post: null };
    }

    handleClick() {
        this.setState({ to_post: { "message": this.state.message, "lang": this.lang } });
    }

    render() {
        if (this.state.to_post) {
            return (<Result post_type="compose" to_post={this.state.to_post} />);
        } else {
            return (
                <div className="compose-root">
                    <div ref={this.menu_ref} className="slide-in-onload will-animate">
                        <Menu />
                    </div>
                    <div ref={this.content_ref} className="fade-in-onload will-animate compose-container">
                        <div className="compose-form">
                            <label className="compose-label" htmlFor="composed-tweet">{translation.compose.label[this.lang]}</label><br />
                            <textarea className="compose-textarea will-animate" id="composed-tweet" name="composed-tweet" onChange={e => this.setState({ message: e.target.value })} autoFocus={true} /><br />
                            <button className="compose-submit will-animate" onClick={() => this.handleClick()}>{translation.compose.submit[this.lang]}</button>
                        </div>
                    </div>
                </div>
            );
        }
    }

}

export { Compose };