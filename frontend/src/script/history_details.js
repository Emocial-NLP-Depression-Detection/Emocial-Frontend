// ReactJS import
import React from 'react';
import { Redirect } from 'react-router-dom';

// Style sheet import
import '../css/global.css'
import '../css/history.css';

// Menu bar import
import { Menu } from './menu.js'

// Translation keys import
import { checkLanguage, translation } from './translation.js';

class HandleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.props.location.pathname.split("/")[2]
        this.lang = checkLanguage();
        this.state = { redirect: null };
        this.menu_ref = React.createRef();
        this.bar_ref = React.createRef();
    }

    async handleClick() {
        console.log("User requests redirect to /history");
        this.menu_ref.current.classList.add('slide-out');
        this.bar_ref.current.classList.add('left-slide-out');
        document.getElementById("root").classList.add('disappear');
        console.log("Redirecting to /history");
        await new Promise(r => setTimeout(r, 600));
        document.getElementById('root').classList.remove('disappear');
        this.setState({ redirect: "/history" });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <div ref={this.menu_ref} className="slide-in-onload will-animate">
                    <Menu page="/history" />
                </div>
                <div className="fade-in-onload">
                    <div ref={this.bar_ref} className="date-bar left-slide-in-onload will-animate">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="left-triangle will-animate"
                                onClick={() => this.handleClick()}>
                                <path d="M5.00001 56.2917C-0.333322 53.2125 -0.333332 45.5144 5 42.4352L66.5 6.92821C71.8333 3.84901 78.5 7.69801 78.5 13.8564L78.5 84.8705C78.5 91.0289 71.8333 94.8779 66.5 91.7987L5.00001 56.2917Z" />
                            </svg>
                            @{this.handle}
                        </p>
                    </div>
                    <div className="details-root">
                        <div className="details-container">
                            <div className="details-content">
                                <p>
                                    {translation.details.total[this.lang]}: 100 {translation.details.qual_noun[this.lang]}
                                </p>
                                <p>
                                    {translation.details.positive[this.lang]}: 60 {translation.details.qual_noun[this.lang]} ({translation.details.increased[this.lang]}7{translation.details.from_prev[this.lang]})
                                    </p>
                                <p>
                                    {translation.details.negative[this.lang]}: 40 {translation.details.qual_noun[this.lang]} ({translation.details.decreased[this.lang]}1{translation.details.from_prev[this.lang]})
                                    </p>
                                <p>
                                    <center className="text-positive">
                                        {translation.history.overall[this.lang]}{translation.history.positive[this.lang]}
                                    </center>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export { HandleDetails }
