import  React, { useState  } from 'react';
import { Link } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("token");
    return (
        <div>
            <h1>Yout have been logged out!!!</h1>
            <Link to="/">Login Again</Link>
        </div>
    )
}

export default Logout;