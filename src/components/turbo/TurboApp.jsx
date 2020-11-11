import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticationRoute from './AuthenticationRoute';
import LoginComponent from './LoginComponent';
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import AboutComponent from "./AboutComponent";
import ErrorComponent from "./ErrorComponent";
import TurboComponent from "./TurboComponent";
import ContactComponent from "./ContactComponent";
import ListTurbosComponent from "./ListTurbosComponent";
import ListPartsComponent from "./ListPartsComponent";
import ListReasonsComponent from "./ListReasonsComponent";
import PartComponent from "./PartComponent";

class TurboApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/about" component={AboutComponent}/>
                            <AuthenticationRoute path="/turbos/:id" component={TurboComponent}/>
                            <AuthenticationRoute path="/turbos" component={ListTurbosComponent}/>
                            <AuthenticationRoute path="/parts/:id" component={PartComponent}/>
                            <AuthenticationRoute path="/parts" component={ListPartsComponent}/>
                            <AuthenticationRoute path="/reasons" component={ListReasonsComponent}/>
                            <Route path="/contact" component={ContactComponent}/>
                            <AuthenticationRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        );
    }
}

export default TurboApp;