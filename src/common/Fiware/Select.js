import axios from "axios";
import Constants from "../constant";
/**
    Select (
        {
            id: "123",
            params: {
                "type": "food",
                "options": "keyValues"
            }
        }
    );
*/

const Select = (data) => { 
    axios({
        method: 'get',
        url: Constants.PROXY_URL+'https://ori-project.smartcity-open-platform.jp/orion/v2.0/entities/' + data.id,
        headers: {
            "Authorization": Constants.FIWARE_ACCESS_TOKEN,
            "Accept": "application/json",
            "Fiware-Service": "ori005",
            "Fiware-ServicePath": "/"
        },
        params: data.params || ""

    }).then((responce) => {
        console.log(responce);
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

export default Select;