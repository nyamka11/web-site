import  React, { useState  } from 'react'; 
import axios from 'axios';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [resMsg, setResMsg] = useState("");

    const basicURL = "http://127.0.0.1/back_end_service/";
    const sendData = (url, data, onSuccess) => {
        axios.post(basicURL+url, data)
        .then(response => {
            console.log(response);
            onSuccess(response);
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    const getEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const onClick = () => {
        sendData("users/forgotpassword", "&email="+email, function(response)  {
            let responce = response.data.res;
            setResMsg(responce.msg);
        });
    }

    return(
        <div className="row">
            <div className="col-md-4 offset-md-4">
                {resMsg !="" ? <div className="alert alert-success" role="alert">{resMsg}</div> : ""}
                <div className="card mt-5">
                    <h3 className="card-header">Forgot Password</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label className="form-control-label">Email:</label>
                                <input type="text" name="email" className="registerinput form-control form-control-lg" onChange={getEmailHandler}/>
                            </div>
                            <input type="button" value="Get New Password" onClick={onClick} className="btn btn-primary"/>
                            <a href="/">
                                <input type="button" value="Login" className="btn btn-success float-right"/>
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword;
