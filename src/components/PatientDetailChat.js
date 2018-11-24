import React, { Component } from 'react';
import { MessageList, Input, Button } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import '../styles/PatientDetail.css';

export class PatientChat extends Component {
    render() {
        return (
            <div className="patientchat">
                <div>
                    <MessageList className='message-list'
                        dataSource={[
                            {
                                position: 'right',
                                type: 'text',
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
                                date: new Date(),
                            },
                            {
                                position: 'left',
                                type: 'text',
                                text: 'Yes',
                                date: new Date(),
                            }
                        ]}
                    />
                </div>
                <div className="patientchat_input">
                <Input
                    placeholder="Type here..."
                    multiline={true}
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