import  React, { useState  } from 'react';
import { Redirect, Link } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("token");
    return <Redirect to="/" />;
}

export default Logout;