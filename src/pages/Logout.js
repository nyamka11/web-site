import  React, { useEffect, useState  } from 'react';
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios';

const sendData = (url, data, onSuccess) => {
    const basicURL = "http://127.0.0.1/backEnd/";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(basicURL+url, data)
    .then(response => {
        onSuccess(response);
    })
    .catch(error => {
        console.log(error.response)
    });
}

const Logout = () => {
    const [isLogOut, setIsLogOut] = useState(false);

    useEffect(() => {
        sendData("account/logout", "", function(response)  {
            console.log(response);
            setIsLogOut(true);
        });
    }, []);

    useEffect(() => {
        localStorage.removeItem("data");
    }, [isLogOut]);

    if(isLogOut) return <Redirect to="/" />;
    return false;
}

export default Logout;