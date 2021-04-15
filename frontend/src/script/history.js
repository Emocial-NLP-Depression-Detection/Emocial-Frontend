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

class History extends React.Component {
    constructor(props) {
        super(props);
        this.lang = checkLanguage();
        this.menu_ref = React.createRef();
        this.bar_ref = React.createRef();
        this.state = { is_at_handle: null };
    }

    async handleClick(handle) {
        console.log("User requests detail to @" + handle)
        this.menu_ref.current.classList.add('slide-out');
        this.bar_ref.current.classList.add('left-slide-out');
        document.getElementById("root").classList.add("disappear");
        console.log("Redirecting to /history/" + handle);
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("root").classList.remove("disappear");
        this.setState({ is_at_handle: handle });
    }

    renderRow(time, handle, result) {
        return (
            <div className="history-row will-animate" onClick={() => this.handleClick(handle)}>
                <p>{time}</p>
                <p className="text-blue">@{handle}</p>
                <p className={"text-" + result}>{translation.history.overall[this.lang]}{translation.history[result][this.lang]}</p>
            </div>
        );
    }

    renderTable(array) {
        const table = [];
        for (let person of array) {
            table.push(this.renderRow(person[0], person[1], person[2]));
        }
        return table;
    }

    render() {
        if (this.state.is_at_handle) {
            return <Redirect to={"/history/" + this.state.is_at_handle} />
        } else {
            return (
                <div className="history-root">
                    <div ref={this.menu_ref} className="slide-in-onload will-animate">
                        <Menu page="/history" />
                    </div>
                    <div className="fade-in-onload">
                        <div ref={this.bar_ref} className="date-bar left-slide-in-onload will-animate">
                            <p>
                                {translation.history.today[this.lang]}
                            </p>
                        </div>
                        <center>
                            <div className="history-rows-container">
                                {this.renderTable(
                                    [["22:00", "ABC", "positive"],
                                    ["21:00", "BBC", "negative"],
                                    ["12:20", "CPR", "positive"],
                                    ["7:27", "WYSI", "negative"],
                                    ["7:00", "CBT", "positive"],
                                    ["4:20", "FAQ", "negative"]]
                                )}
                            </div>
                        </center>
                    </div>
                </div>

            );
        }
    }
}

export { History }