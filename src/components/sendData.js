import React, { useState } from "react";
import axios from "axios";

export const sendData  = (url, data) => {
    const {state, setState } = useState({ data: null, loading: true });
    const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios.post(proxyurl + basicURL + url, data).then((response) => {
        setState({ data: response, loading: false });
    });

    return state
};