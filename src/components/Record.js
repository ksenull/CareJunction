import React, { Component } from 'react';
// import { addPost, getPosts, getSelf } from '../API';
import '../styles/Record.css';
import { Button, ChatList, Input, Navbar } from 'react-chat-elements';
// import {Token, userId} from './Auth';

export class RecordList extends Component {
    constructor(props) {
        super(props);
        this.state = {text : "", image: null, posts: []};
        this.getMyPosts();
    }

    getMyPosts = () => {
        // getSelf((response) => {
        //     console.log(response);
        //     const {id, name, info, imageUrl, birthday} = response;
        //     // this.setState({userInfo: {id, name, info, imageUrl, birthday}});
        //
        //     console.log('GetMyPosts:' + id);
        //     // getPosts(id, (posts) => {
        //     //     console.log(posts)
        //     //     this.setState({posts: posts})
        //     // });
        //     return id;
        // });
    };

    handleTextChange = (e) => {
        this.setState({text: e.target.value})
    };
    handleFileChange = (e) => {
        this.setState({image: e.target.value})
    };


    add = () => {
        console.log(this.state.text);
        // addPost(this.state.text, (response) => {
        //     console.log(response);
        //     // const {id, name, info, imageUrl, birthday} = response;
        //     // this.setState({userInfo: {id, name, info, imageUrl, birthday}});
        //     // return id;
        // })
    };
    render () {
        return (
            <div>
                <Input
                    placeholder="Type here..."
                    multiline={true}
                    rightButtons={
                        <i className="fas fa-stroopwafel"></i>
                        // <Button
                        //     color='white'
                        //     backgroundColor='black'
                        //     text='Send'/>
                    }/>
                <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                            avatar: 'https://i.pinimg.com/564x/7b/50/a7/7b50a7fc8ed2984fab9666d4a49eb5c7.jpg',
                            alt: 'pill',
                            title: 'Mariia Smith',
                            subtitle: '01.04.1950',
                            unread: 1,
                        },
                        {
                            avatar: 'https://i.pinimg.com/564x/7b/50/a7/7b50a7fc8ed2984fab9666d4a49eb5c7.jpg',
                            alt: 'pill',
                            title: 'Mariia Smith',
                            subtitle: '01.04.1950',
                            unread: 0,
                        },
                        {
                            avatar: 'https://i.pinimg.com/564x/7b/50/a7/7b50a7fc8ed2984fab9666d4a49eb5c7.jpg',
                            alt: 'pill',
                            title: 'Mariia Smith',
                            subtitle: '01.04.1950',
                            unread: 0,
                        }
                    ]}
                />
                {/*<form onSubmit={this.add}>*/}
                    {/*<input type="text" value={this.state.text} onChange={this.handleTextChange}/>*/}
                    {/*<input type="file" onChange={this.handleFileChange}/>*/}
                    {/*<input type="submit"/>*/}
                {/*</form>*/}
                {/*/!*<button onClick={ this.add }>Add post</button>*!/*/}
            </div>
        );
    }
}