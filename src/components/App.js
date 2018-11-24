// import logo from '../logo.svg';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }
//
// export default App;

import React, { Component } from 'react';
import '../styles/App.css';
import { Link, Redirect, Route, withRouter } from 'react-router-dom';
// import Auth, { Token } from './Auth';
import Patients from './Patients';
import Settings from './Settings';
import PatientDetail from './PatientDetail';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            // Token !== ""? (
                <Component {...props} />
            // ) : (
            //     <Redirect
            //         to={{
            //             pathname: "/login",
            //             state: { from: props.location }
            //         }}
            //     />
            // )
        }
    />
);


class App extends Component {

    getColor(page) {
        if (page === this.props.location.pathname) {
            return '#405173';
        }
        return '#a9b9d9';
    }

    render() {
        return (
            <div className="app">
                <div className="title">
                    <img
                        src={window.location.origin + '/img/care-ico_brown.png'}
                        alt="logo"
                        className="title_logo"
                    />
                    <div className="title_name">
                        cARe
                    </div>
                </div>
                <div className="navbar">
                    <Link to="/">
                        <button className="navtab" style={{ background : this.getColor('/') }}>
                            Patients
                        </button>
                    </Link>
                    <Link to="/p">
                        <button className="navtab" style={{ background : this.getColor('/p') }}>
                            Details
                        </button>
                    </Link>
                    <Link to="/settings">
                        <button className="navtab" style={{ background : this.getColor('/settings') }}>
                            Settings
                        </button>
                    </Link>
                </div>
                <div className="content">
                    {/*<Route Route path="/login" component={Auth}/>*/}
                    <PrivateRoute exact path="/" component={Patients}/>
                    {/*<PrivateRoute path="/" component={Hover}/>*/}
                    <PrivateRoute path="/p" component={PatientDetail}/>
                    <PrivateRoute path="/settings" component={Settings}/>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
