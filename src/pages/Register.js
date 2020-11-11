import  React, { useState  } from 'react';    
import axios from 'axios';
import Constants from "../common/constant";

const Register = () =>  {
    const [isLoading, setIsLoading] = useState(false);
    const [valueCheck, setValueCheck] = useState(false);
    const [alert, setAlert] = useState({ type: null, msg: null });
    const [userData, setUserData] = useState({
        companyName: "", guarantorName: "", postCode: "", address1: "", address2: "", 
        address3: "", guarantorPhoneNumber: "", cellPhone: "", email: ""
    });

    const {
        companyName, guarantorName, postCode, address1, address2,
        address3, guarantorPhoneNumber, cellPhone, email
    } = userData;

    const onInputChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setValueCheck(true);
        console.log(userData);

        for(const property in userData)  { //Data check hiigeed hooson bwl return hiij zogsoono
            if(userData[property] == "")  {
                return false;
            }
            else if(property =="email" && !validateMail(email))  {  //email syntax check
                return false;
            }
        }

        setIsLoading(true);
        await axios.post(Constants.backEndURL+"/users/register", userData).then(response => { 
            let responce = response.data.res;
            if(responce.status == 0)  {
                setAlert({ 
                    type: "alert-danger", 
                    msg:  responce.msg
                });
            }
            else if(responce.status == 1)  {
                setAlert({ 
                    type: "alert-success", 
                    msg:  responce.msg
                });
            }
            setIsLoading(false);
        });
    }

    const alertMsg = (alert) =>  {
        if(alert.type !=null)  {
            window.scrollTo(0, 0);
            if(alert.type == "alert-danger") return <div className="alert alert-danger registerAlert" role="alert">{alert.msg}</div>
            else  return <div className="alert alert-success registerAlert" role="alert">{alert.msg}</div>
        }
    }

    const validateMail = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase());
    }

    return (
        <div className="container pt-3 pb-5">
            { alertMsg(alert) }
            <h1 className="display-4 text-center">サインアップ</h1>
            <p className="lead text-center">アカウントを作成</p>
            <div className="card-body bg-white p-5 shadow">
                <div className="form-group">
                    <label className="form-control-label">会社名:</label>
                    <input 
                        type="text" 
                        name="companyName" 
                        className="registerinput form-control" 
                        value={ companyName } 
                        onChange={e => onInputChange(e)}
                    />
                    {companyName == "" && valueCheck ? <small className="text-danger">Please enter more characters.</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">担当者名:</label>
                    <input 
                        type="text" 
                        name="guarantorName" 
                        className="registerinput form-control" 
                        value={ guarantorName } 
                        onChange={e => onInputChange(e) }
                    />
                    {guarantorName == "" && valueCheck ? <small className="text-danger">guarantorName is empty</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">郵便番号:</label>
                    <input 
                        type="text" 
                        name="postCode" 
                        className="registerinput form-control" 
                        value={ postCode } 
                        onChange={e => onInputChange(e) }
                    />
                    {postCode == "" && valueCheck ? <small className="text-danger">postCode is empty</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">住所1:</label>
                    <input 
                        type="text" 
                        name="address1" 
                        className="registerinput form-control" 
                        value={ address1 } 
                        onChange={e => onInputChange(e) }
                    />
                    {address1 == "" && valueCheck ? <small className="text-danger">address1 is empty</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">住所2:</label>
                    <input 
                        type="text" 
                        name="address2" 
                        className="registerinput form-control" 
                        value={ address2 } 
                        onChange={e => onInputChange(e) }
                    />
                    {address2 == "" && valueCheck ? <small className="text-danger">address2 is empty</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">住所3:</label>
                    <input 
                        type="text"
                        name="address3"
                        className="registerinput form-control"
                        value={ address3 } 
                        onChange={e => onInputChange(e) }
                    />
                    {address3 == "" && valueCheck ? <small className="text-danger">address3 is empty</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">担当者電話番号:</label>
                    <input
                        type="text"
                        name="guarantorPhoneNumber"
                        className="registerinput form-control"
                        value={ guarantorPhoneNumber } 
                        onChange={e => onInputChange(e) }
                    />
                    {guarantorPhoneNumber == "" && valueCheck ? <small className="text-danger">guarantorPhoneNumber is empty</small> : ""}
                </div>
                <div className="form-group">
                    <label className="form-control-label">担当者携帯電話番号:</label>
                    <input
                        type="text"
                        name="cellPhone"
                        className="registerinput form-control"
                        value={ cellPhone } 
                        onChange={e => onInputChange(e) }
                    />
                    {cellPhone == "" && valueCheck ? <small className="text-danger">cellPhone is empty</small> : ""}
                </div>
                <div className="form-group">
                    <h6>メール</h6>
                    <input
                        type="text"
                        name="email"
                        className="registerinput form-control"
                        value={ email } 
                        onChange={e => onInputChange(e) }
                    />
                    {email == "" && valueCheck ? <small className="text-danger">email is empty</small> : ""}
                    {email != "" && !validateMail(email) && valueCheck ? <small className="text-danger">email syntax error</small> : ""}
                </div>
                <input type="button" disabled={isLoading ? true : false} value={isLoading ? "Loading..." : "Register"} onClick={e => handleSubmit(e)} className="btn btn-info btn-block mt-4" />
            </div>
        </div>
    )
}

export default Register
