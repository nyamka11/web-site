import  React, { useState  } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';
import Constants from "../common/constant";

const sendData = (url, data, onSuccess) => {
    axios.post(Constants.backEndURL + url, data)
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
        localStorage.removeItem("data");
        return <Redirect to="/" />;
        // setIsLogOut(true);
    // });
}

export default Logout;