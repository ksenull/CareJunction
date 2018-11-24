import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { getSelf, signIn } from '../API';

export let Token = "";
export let userId = 0;

class Auth extends Component {
    state = {
        redirectToReferrer: false
    };

    login = () => {
        // signIn("kitnoelka@gmail.com", "string", (token) => {
        //     Token = token;
        //     this.setState({ redirectToReferrer: true });
        // });
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        );
    }
}



export default Auth