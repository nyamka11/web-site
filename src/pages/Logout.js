import  React, { useState  } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';

const sendData = (url, data, onSuccess) => {
    const basicURL = "http://127.0.0.1/backEnd/";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(basicURL+url, data)
    .then(response => {
        console.log(response);
        onSuccess(response);
    })
    .catch(error => {
        console.log(error.response)
    });
}

const Logout = () => {
    // const [isLogOut, setIsLogOut] = useState(false);
    // sendData("users/logout", "", function(response)  {
    //     // console.log(response);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("name");
        localStorage.removeItem("userName");
        return <Redirect to="/" />;
        // setIsLogOut(true);
    // });
}

export default Logout;