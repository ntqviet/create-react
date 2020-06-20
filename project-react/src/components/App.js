import React from 'react';
import styled from 'styled-components'
//import Menu from "./Menu";
import MainPage from "./MainPage";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import AddBook from "./AddBook";
import SignUp from "./reg";
import SignIn from "./Login";
import {fakeAuth} from '../Auth/Auth'
import NavBar from './NavBar'
import welcome from './Welcome'
import Welcome from './Welcome';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="/" component={Welcome}/>
                    <Route exact path="/signin" component={SignIn}/>
                    <PrivateRoute path="/home" component={MainPage}/>
                    <Route path="/addbook" component={AddBook}/>
                    <Route path="/signup" component={SignUp}/>
                </div>
            </Router>
        )
    }
}