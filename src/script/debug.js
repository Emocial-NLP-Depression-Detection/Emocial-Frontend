// Temporary page for integration
import React from 'react';
import axios from 'axios';

class Debug extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 'account': null }
    }

    getAccount() {
        axios.get("http://localhost:8000/gettwitter/@17Ginono")
            .then((res) => this.setState({ "account": res.data }));
    }

    render() {
        if (this.state.account === null) {
            this.getAccount()
            return (
                <div></div>
            )
        } else {
            return (
                <div>
                    id: {this.state.account.id}<br />
                    profile_name: {this.state.account.profile_name}<br />
                    twitter_username: {this.state.account.twitter_username}<br />
                    profile: <img src={this.state.account.profile} alt="profile" /><br />
                </div>
            );
        }
    }
}

export { Debug }