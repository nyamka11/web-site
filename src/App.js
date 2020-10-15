
    import React, { Component } from 'react';
    import  {BrowserRouter, Redirect, Route, Switch ,Link } from "react-router-dom";
    import { ProtectedRoute } from "./protected.route";


    import Register from './pages/Register';
    import Login from './pages/Login';
    import Logout from './pages/Logout';
    import ForgotPassword from './pages/ForgotPassword';
    import ResetPassword from './pages/ResetPassword';

    import Home from './pages/Home';
    import About from './pages/About';
    import Maps from './pages/Maps';
    import Contact from './pages/Contact';
    import Admin from './pages/Admin';
    import NoMatch  from './pages/NoMatch';

    function App() {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/resetpassword" component={ResetPassword} />
            <PrivateRoute exact path="/home" component={ Home } />
            <PrivateRoute exact path="/contact" component={ Contact } />
            <PrivateRoute exact path="/maps" component={ Maps } />
            <PrivateRoute exact path="/admin" component={ Admin } />
            <PrivateRoute exact path="/about" component={ About } />
            <PrivateRoute exact path="/logout" component={ Logout } />
            <Route path="*" component={ NoMatch } />
          </Switch>
        </BrowserRouter>
      );
    }
  
    const PrivateRoute = ({component: Component, path, ...rest}) => {
      let isAuthenticated = false;
      if(localStorage.getItem("token") == "fkcnewproject")  {
        isAuthenticated = true;
      }

      return <Route {...rest} path={path} render={props=> isAuthenticated ? <Component {...props} /> : <Redirect to={"/"}/>} />
    }

    export default App;

