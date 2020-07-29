
    import React from 'react';
    // import './App.css';
    import Register from './Register';
    import Login from './Login';
    import {Route, Link } from "react-router-dom";

    function App() {
      return (
        <div className="App">
            <Route exact path="/" component={ Login } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/register" component={ Register } />
        </div>
      );
    }

    export default App;
