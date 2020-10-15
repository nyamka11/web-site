
import axios from "axios";
import Constants from "../constant";
/**
    Update(
       {
            "actionType": "APPEND",
            "entities": [
                {
                    "type": "shinetorol",
                    "id": "1234",
                    "temperature": {
                        "type": "qqqqqqqqqqqqqqqqqqqqqqqqq",
                        "value": 21.7
                    },
                    "humidity": {
                        "type": "Float",
                        "value": 60
                    }
                }
            ]
        }
    );
*/

const Update = (data) => { 
    axios({
        method: 'post',
        url: Constants.PROXY_URL+'https://ori-project.smartcity-open-platform.jp/orion/v2.0/op/update',
        headers: {
            "Authorization": Constants.FIWARE_ACCESS_TOKEN,
            "Accept": "application/json",
            "Fiware-Service": "ori005",
            "Fiware-ServicePath": "/"
        },
        data: data

    }).then((responce) => {
        console.log(responce);
        console.log('Error', responce.description);
    }).catch((error) => {
        // Error 😨
        if (error.response) {
            /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
            */
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            /*
                * The request was made but no response was received, `error.request`
                * is an instance of XMLHttpRequest in the browser and an instance
                * of http.ClientRequest in Node.js
            */
            console.log(error.request);
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    });
}

export default Update;

