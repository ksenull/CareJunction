import React, { Component } from 'react';
import '../styles/PatientDetail.css';
import { PatientChat } from './PatientDetailChat';
import { PatientHistory } from './PatientDetailHistory';

class PatientDetail extends Component {
    render() {
        // console.log(this.props.users);
        return (
            <div className="patientdetail">
                <div className="patientdetail_stream">
                    <img src={window.location.origin + '/img/sleeping.png'} alt="Patient Stream" className="patientdetail_stream_img"/>
                </div>
                {/*<div className="patientdetail_info">*/}
                    <div className="patientdetail_history">
                        <PatientHistory/>
                    </div>
                    <div className="patientdetail_chat">
                        <PatientChat/>
                    </div>
                {/*</div>*/}
            </div>
        );
    }
}

export default PatientDetail;