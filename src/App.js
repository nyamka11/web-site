
    import React, { Component } from 'react';
    import  {BrowserRouter, Redirect, Route, Switch ,Link } from "react-router-dom";
    import { ProtectedRoute } from "./protected.route";
    import Constants from "./common/constant";

    import Register from './pages/Register';
    import Login from './pages/Login';
    import Logout from './pages/Logout';
    import ForgotPassword from './pages/ForgotPassword';
    import ResetPassword from './pages/ResetPassword';

    import Home from './pages/Home';
    import About from './pages/About';
    import Contact from './pages/Contact';
    import Admin from './pages/Admin';

    import UsersControl from './pages/UsersControl';
    import AddUser from "./pages/UsersControl/AddUser";
    import EditUser from "./pages/UsersControl/EditUser";
    import User from "./pages/UsersControl/User";
    
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
            <PrivateRoute exact path="/admin" component={ Admin } />
            <PrivateRoute exact path="/about" component={ About } />
            <PrivateRoute exact path="/logout" component={ Logout } />

            <PrivateRoute exact path="/userscontrol" component={ UsersControl } />
            <PrivateRoute exact path="/userscontrol/add" component={AddUser} />
            <PrivateRoute exact path="/userscontrol/edit/:id" component={EditUser} />
            <PrivateRoute exact path="/userscontrol/:id" component={User} />
            <Route path="*" component={ NoMatch } />
          </Switch>
        </BrowserRouter>
      );
    }

    const PrivateRoute = ({component: Component, path, ...rest}) => {
      let isAuthenticated = false;
      let token = JSON.parse(localStorage.getItem("data"));

      if(token !=null && token['token'] == "fkcnewproject")  {
        isAuthenticated = true;
      }

      return <Route {...rest} path={path} render={props=> isAuthenticated ? <Component {...props} /> : <Redirect to={"/"}/>} />
    }

    export default App;

