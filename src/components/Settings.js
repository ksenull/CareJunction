import React, { Component } from 'react';
import '../styles/Settings.css';
// import { getFollowers, getSelf, getUsers } from '../API';
import { Token } from './Auth';


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {userInfo: []};
        this.getData();
    }
    getData = () => {
        // getSelf((response) => {
        //     const {id, name, info, imageUrl, birthday} = response;
        //     this.setState({userInfo: {id, name, info, imageUrl, birthday}});
        //     return id;
        // });
        // // .then((id) => {
        // //     getFollowers(this.state.userInfo.id, (response) => {
        // //         this.setState({followers: response});
        // //     })
        // // );


    };
    render() {
        const userInfo = this.state.userInfo;
        console.log(userInfo);
        return (
            <div className="settings">
            </div>
        );
    }
}

export default Settings;