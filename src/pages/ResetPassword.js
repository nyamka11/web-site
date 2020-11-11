import  React, { useState  } from 'react'; 
import axios from 'axios';
import Constants from "../common/constant";

const ResetPassword = (props) => {
    const [password, setPassword] = useState("");
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

    const getNewPasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const onClick = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const mytoken = urlParams.get('mt');

        sendData("account/resetpassword", "&password="+password+"&token="+mytoken, function(response)  {
            window.location.replace('http://localhost:3000');
        });
    }

    return(
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card mt-5">
                    <h3 className="card-header">Reset Password</h3>
                    <div className="card-body">
                        {/* <form> */}
                            <div className="form-group">
                                <input type="password" name="password" className="registerinput form-control form-control-lg" onChange={getNewPasswordHandler}/>
                            </div>
                            <input type="button" value="Get New Password" onClick={onClick} className="btn btn-primary"/>
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResetPassword;
