
    import React from 'react';
    import {Route, Switch ,Link } from "react-router-dom";
    import Register from './pages/Register';
    import Login from './pages/Login';
    import Logout from './pages/Logout';
    import Admin from './pages/Admin';
    
    function App() {
      return (
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/logout" component={ Logout } />
          <Route exact path="/admin" component={ Admin } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      );
    }

    export default App;
