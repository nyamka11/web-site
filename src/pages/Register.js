
    import  React, { useState  } from 'react';    
    import axios from 'axios';

    const Register = () => {
        const [companyName, setCompayName] = useState("");
        const [guarantorName, setGuarantorName] = useState("");
        const [postCode, setPostCode] = useState("");
        const [address1, setAddress1] = useState("");
        const [address2, setAddress2] = useState("");
        const [address3, setAddress3] = useState("");
        const [guarantorPhoneNumber, setGuarantorPhoneNumber] = useState("");
        const [cellPhone, setCellPhone] = useState("");
        const [email, setEmail] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        const [checkName, setCheckName] = useState("");
        const [checkGuarantorName, setCheckGuarantorName] = useState("");
        const [checkPostCode, setCheckPostCode] = useState("");
        const [checkAddress1, setCheckAddress1] = useState("");
        const [checkAddress2, setCheckAddress2] = useState("");
        const [checkAddress3, setCheckAddress3] = useState("");
        const [checkGuarantorPhoneNumber, setCheckGuarantorPhoneNumber] = useState("");
        const [checkCellPhone, setCheckCellPhone] = useState("");
        const [checkEmail, setCheckEmail] = useState("");
        const [checkMailSyntax, setCheckMailSyntax] = useState("");
        const [alert, setAlert] = useState({ type: null, msg: null });

        const basicURL = "http://127.0.0.1/backEnd/";
        const sendData = (url, data, onSuccess) => {
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

        const companyNameHandler = (event) => setCompayName(event.target.value);
        const guarantorNameHandler = (event) => setGuarantorName(event.target.value);
        const postCodeHandler = (event) => setPostCode(event.target.value);
        const addressHandler1 = (event) => setAddress1(event.target.value);
        const addressHandler2 = (event) => setAddress2(event.target.value);
        const addressHandler3 = (event) => setAddress3(event.target.value);
        const guarantorPhoneHandler = (event) => setGuarantorPhoneNumber(event.target.value);
        const cellPhoneHandler = (event) => setCellPhone(event.target.value);
        const emailHandler = (event) => setEmail(event.target.value);

        const handleSubmit = (event) => {
            event.preventDefault();
            let data = {
                companyname: companyName,
                guarantorname: guarantorName,
                postcode: postCode,
                address1: address1,
                address2: address2, 
                address3: address3,
                guarantorphonenumber: guarantorPhoneNumber,
                cellphone: cellPhone,
                email: email
            };

            checkCompanyNameFn();
            checkGuarantorNameFn();
            checkPostCodeFn();
            checkAddress1Fn();
            checkAddress2Fn();
            checkAddress3Fn();
            checkGuarantorPhoneNumberFn();
            checkCellPhoneFn();
            checkEmailFn();
            checkEmailSyntaxFn();

            if(companyName !='' && guarantorName !='' &&  postCode !='' &&  address1 !='' &&  
                address2 !='' &&  address3 !='' &&  guarantorPhoneNumber !='' && cellPhone !='' && 
                email !='' && validateMail(email)
            )  {
                setIsLoading(true);
                sendData("company/add", data, function(response)  {
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
        }

        /** check zone  */
        const checkCompanyNameFn = () =>  {
            if(companyName === "") setCheckName('Please enter more characters.');
            else setCheckName('');
        }

        const renderErrorCompanyName = () => {
            if(checkName !="")  {
                return <small className="text-danger">{checkName}</small>;
            }
        }

        const checkGuarantorNameFn = () =>  {
            if(guarantorName === "") setCheckGuarantorName('setCheckGuarantorName');
            else setCheckGuarantorName();
        }

        const renderErrorCheckGuarantorName = () => {
            if(checkGuarantorName)  return <small className="text-danger">{checkGuarantorName}</small>;
        }

        const checkPostCodeFn = () =>  {
            if(postCode === "") setCheckPostCode('post code empty');
            else setCheckPostCode("");
        }

        const renderErrorCheckPostCode = () => {
            if(checkPostCode)  return <small className="text-danger">{checkPostCode}</small>;
        }

        const checkAddress1Fn = () =>  {
            if(address1 === "") setCheckAddress1('address 1');
            else setCheckAddress1("");
        }

        const renderErrorCheckAddress1 = () => {
            if(checkAddress1)  return <small className="text-danger">{checkAddress1}</small>;
        }

        const checkAddress2Fn = () =>  {
            if(address2 === "") setCheckAddress2('address 2');
            else setCheckAddress2("");
        }

        const renderErrorCheckAddress2 = () => {
            if(checkAddress2)  return <small className="text-danger">{checkAddress2}</small>;
        }

        const checkAddress3Fn = () =>  {
            if(address3 === "") setCheckAddress3('address 3');
            else setCheckAddress3("");
        }

        const renderErrorCheckAddress3 = () => {
            if(checkAddress3)  return <small className="text-danger">{checkAddress3}</small>;
        }

        const checkGuarantorPhoneNumberFn = () =>  {
            if(guarantorPhoneNumber === "") setCheckGuarantorPhoneNumber('setCheckGuarantorPhoneNumber ');
            else setCheckGuarantorPhoneNumber("");
        }

        const renderErrorCheckGuarantorPhoneNumber = () => {
            if(checkGuarantorPhoneNumber)  return <small className="text-danger">{checkGuarantorPhoneNumber}</small>;
        }

        const checkCellPhoneFn = () =>  {
            if(cellPhone === "") setCheckCellPhone('setCheckCellPhone ');
            else setCheckCellPhone("");
        }

        const renderErrorCheckCellPhone = () => {
            if(checkCellPhone)  return <small className="text-danger">{checkCellPhone}</small>;
        }

        const checkEmailFn = () =>  {
            if(email === "") setCheckEmail('setCheckEmail  asdfafd ');
            else setCheckEmail("");
        }

        const renderErrorCheckEmail = () => {
            if(checkEmail)  return <small className="text-danger">{checkEmail}</small>;
        }

        const checkEmailSyntaxFn = () =>  {
            if(email != "" && !validateMail(email)) setCheckMailSyntax('syntax error ');
            else setCheckMailSyntax("");
        }

        const renderErrorCheckEmailSyntax = () => {
            if(checkMailSyntax)  return <small className="text-danger">{checkMailSyntax}</small>;
        }

        function alertMsg(alert)  {
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
                        <input type="text" name="Companyname" className="registerinput form-control" value={companyName} onChange={companyNameHandler}/>
                        {renderErrorCompanyName()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">担当者名:</label>
                        <input type="text" name="Guarantorname"  className="registerinput form-control" value={guarantorName} onChange={guarantorNameHandler} />
                        {renderErrorCheckGuarantorName()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">郵便番号:</label>
                        <input type="text" name="Postcode"  className="registerinput form-control" value={postCode} onChange={postCodeHandler} />
                        {renderErrorCheckPostCode()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">住所1:</label>
                        <input type="text" name="Address1" className="registerinput form-control" value={address1} onChange={addressHandler1} />
                        {renderErrorCheckAddress1()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">住所2:</label>
                        <input type="text" name="Address2" className="registerinput form-control" value={address2} onChange={addressHandler2} />
                        {renderErrorCheckAddress2()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">住所3:</label>
                        <input type="text" name="Address3" className="registerinput form-control" value={address3} onChange={addressHandler3} />
                        {renderErrorCheckAddress3()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">担当者電話番号:</label>
                        <input type="text" name="Guarantorphone" className="registerinput form-control" value={guarantorPhoneNumber} onChange={guarantorPhoneHandler} />
                        {renderErrorCheckGuarantorPhoneNumber()}
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">担当者携帯電話番号:</label>
                        <input type="text" name="Cellphone" className="registerinput form-control" value={cellPhone} onChange={cellPhoneHandler} />
                        {renderErrorCheckCellPhone()}
                    </div>
                    <div className="form-group">
                        <h6>メール</h6>
                        <input type="text" name="email" className="registerinput form-control" value={email} onChange={emailHandler}/>
                        {renderErrorCheckEmail()}
                        {renderErrorCheckEmailSyntax()}
                    </div>
                    <input type="button" disabled={isLoading ? true : false} value={isLoading ? "Loading..." : "Register"} onClick={handleSubmit} className="btn btn-info btn-block mt-4" />
                </div>
            </div>
        )
    }
    
    export default Register
    