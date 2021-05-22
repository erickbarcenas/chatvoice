import React, {Component, Fragment, useState} from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';

import Home from "../pages/home/Home";

import NoticeOfPrivacy from '../pages/NoticeOfPrivacy';
import TermsAndServices from '../pages/TermsAndServices';
import Login from '../pages/login/Login';
import Landing from '../pages/landing/Landing';
import RegisterVoice from "../pages/register/RegisterVoice";
import RegisterVideo from '../pages/register/RegisterVideo';
import {RegisterScreen} from "../components/auth/RegisterScreen";
import {LoginScreen} from "../components/auth/LoginScreen";

const RouterApp = (props: any) => {

    return (
            <Switch>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/NoticeOfPrivacy' component={NoticeOfPrivacy}/>
                <Route exact path='/TermsAndServices' component={TermsAndServices}/>
                <Route exact path="/auth/login" component={LoginScreen}/>
                <Route exact path="/auth/register" component={RegisterScreen}/>
                <Route exact path="/auth/register/create" component={RegisterVoice}/>
                <Route exact path="/auth/register/verify" component={RegisterVideo}/>
                <PrivateRoute exact path='/app' component={Home}/>
            </Switch>

    )
}




const PrivateRoute = ({ component: Component, ...rest }: any) => {

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                )
            }
        />
    )
}
;


export default RouterApp;
