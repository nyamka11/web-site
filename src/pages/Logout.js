import  React, { useEffect, useState  } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Constants from "../common/constant";

const sendData = (url, data, onSuccess) => {
    axios.post(Constants.backEndURL + url, data)
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