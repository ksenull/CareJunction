import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import PatientDetail from './PatientDetail';
import { RecordList } from "./Record";
import '../styles/Patients.css';

class Patients extends Component {
    render() {
        return (
            <div className="patients">
                <Switch>
                    <Route exact path='/' component={RecordList}/>
                    <Route exact path='/:id' component={PatientDetail}/>
                </Switch>
            </div>
        );
    }
}
//:id will be saved in the match.params.number

export default Patients;