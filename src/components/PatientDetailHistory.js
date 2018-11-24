import React, { Component } from 'react';
import { Button, ChatList, Dropdown, Input } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import "../styles/PatientDetail.css";

export class PatientHistory extends Component {
    render() {
        return (
            <div className="patienthistory">
                <div>
                <ChatList
                    className='chat-list'
                    dataSource={[
                        {
                            avatar: 'http://cdn.onlinewebfonts.com/svg/img_43515.png',
                            alt: 'pill',
                            title: 'Vicodine',
                            subtitle: '2 pills',
                            date: new Date(),
                            unread: 0,
                        },
                        {
                            avatar: 'http://cdn.onlinewebfonts.com/svg/img_43515.png',
                            alt: 'pill',
                            title: 'Vicodine',
                            subtitle: '2 pills',
                            date: new Date(),
                            unread: 0,
                        },
                        {
                            avatar: 'http://cdn.onlinewebfonts.com/svg/img_43515.png',
                            alt: 'pill',
                            title: 'Vicodine',
                            subtitle: '2 pills',
                            date: new Date(),
                            unread: 0,
                        },
                        {
                            avatar: 'http://cdn.onlinewebfonts.com/svg/img_43515.png',
                            alt: 'pill',
                            title: 'Vicodine',
                            subtitle: '2 pills',
                            date: new Date(),
                            unread: 0,
                        }
                        ]}
                />
                </div>
                <div>

                    <Input
                        placeholder="Type here..."
                        multiline={true}
                        leftButtons={
                            <Dropdown
                                buttonProps={{
                                    text: 'Dropdown',
                                }}
                                items={[
                                    'merhaba',
                                    'lorem',
                                    'ipsum',
                                    'dolor',
                                    'sit',
                                    'amet',
                                ]}/>
                        }
                        rightButtons={
                            <Button
                                color='white'
                                backgroundColor='black'
                                text='Send'/>
                        }/>
                </div>
            </div>
        );
    }
}