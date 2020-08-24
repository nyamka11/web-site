
    import  React, { useState  } from 'react';
    import { CButton, CCard, CCardBody, CCardFooter, CCol, CContainer,CForm,
      CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow
    } from '@coreui/react'
    import CIcon from '@coreui/icons-react'        
    import axios from 'axios';
    import ReactNotification from 'react-notifications-component'
    import 'react-notifications-component/dist/theme.css'
    import { store } from 'react-notifications-component';

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
        const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";

        const sendData = (url, data, onSuccess) => {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.post(proxyurl+basicURL+url, data)
            .then(response => {
                console.log(response);
                onSuccess(response);
            });
        }

        const companyNameHandler = (event) => {
            setCompayName(event.target.value);
        }
        const guarantorNameHandler = (event) => {
            setGuarantorName(event.target.value);
        }
        const postCodeHandler = (event) => {
            setPostCode(event.target.value);
        }
        const addressHandler1 = (event) => {
            setAddress1(event.target.value);
        }
        const addressHandler2 = (event) => {
            setAddress2(event.target.value);
        }
        const addressHandler3 = (event) => {
            setAddress3(event.target.value);
        }
        const guarantorPhoneHandler = (event) => {
            setGuarantorPhoneNumber(event.target.value);
        }
        const cellPhoneHandler = (event) => {
            setCellPhone(event.target.value);
        }
        const emailHandler = (event) => {
            setEmail(event.target.value);
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            let data = {
                companyname: companyName,
                guarantorname: guarantorName,
                postcode: postCode,
                address: address1+" "+address2+" "+address3,
                guarantorphonenumber: guarantorPhoneNumber,
                cellphone: cellPhone,
                email: email
            };

            console.log(data);

            sendData("company.php", JSON.stringify(data), function(response)  {
                console.log(response.data.message);

                let notify = {}
                if(response.data.status == false)  {
                    notify.type = "warning"
                    notify.title = "Warning!";
                    notify.message = response.data.message;
                }
                else if(response.data.status == true)  {
                    notify.type = "success"
                    notify.title = "Success!";
                    notify.message = response.data.message;

                    setCompayName("");
                    setGuarantorName("");
                    setPostCode("");

                    setAddress1("");
                    setAddress2("");
                    setAddress3("");

                    setGuarantorPhoneNumber("");
                    setCellPhone("");
                    setEmail("");
                }

                store.addNotification({
                    title: notify.title,
                    message: response.data.message,
                    type: notify.type, //"success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                });

            });
        }

        return (
            <div className="c-app c-default-layout flex-row align-items-center">
                <ReactNotification />
                <CContainer>
                    <CRow className="justify-content-center">
                    <CCol md="9" lg="7" xl="6">
                        <CCard className="mx-4">
                        <CCardBody className="p-4">
                            <CForm>
                            <h1>新規会員登録</h1>
                            <p className="text-muted">アカウントを作成</p>
                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="会社名" defaultValue={ setCompayName } autoComplete="Companyname" onChange={companyNameHandler} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="担当者名" defaultValue={ setGuarantorName } autoComplete="Guarantorname" onChange={guarantorNameHandler} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="郵便番号" defaultValue={ setPostCode } autoComplete="Postcode" onChange={postCodeHandler} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="住所1" defaultValue={ setAddress1 } autoComplete="Address" onChange={addressHandler1} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="住所2" defaultValue={ setAddress2 } autoComplete="Address" onChange={addressHandler2} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="住所3" defaultValue={ setAddress3 } autoComplete="Address" onChange={addressHandler3} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="担当者電話番号" defaultValue={ setGuarantorPhoneNumber } autoComplete="Guarantorphone" onChange={guarantorPhoneHandler} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    <CIcon name="cil-user" />
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="担当者携帯電話番号" defaultValue={ setCellPhone } autoComplete="Cellphone" onChange={cellPhoneHandler} />
                            </CInputGroup>

                            <CInputGroup className="mb-3">
                                <CInputGroupPrepend>
                                <CInputGroupText>
                                    @
                                </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput type="text" placeholder="メール" defaultValue={ setEmail } autoComplete="Email" onChange={emailHandler} />
                            </CInputGroup>
                            
                            <CButton color="success" block onClick={handleSubmit}>登録</CButton>
                            </CForm>
                        </CCardBody>
                        <CCardFooter className="p-4">
                            <CRow>
                            <CCol xs="12" sm="6">
                                {/* <CButton className="btn-facebook mb-1" block><span>facebook</span></CButton> */}
                            </CCol>
                            <CCol xs="12" sm="6">
                                {/* <CButton className="btn-twitter mb-1" block><span>twitter</span></CButton> */}
                            </CCol>
                            </CRow>
                        </CCardFooter>
                        </CCard>
                    </CCol>
                    </CRow>
                </CContainer>
            </div>
        )
    }
    
    export default Register
    


    // function CompanyRegister()  {
    //     
    //     return  (
    //         <div>
    //             <ReactNotification />
    //             <form onSubmit={handleSubmit}>
    //                 <h1>Registration</h1>
    //                 <table >
    //                     <tbody>
    //                     <tr><td><label>Company name :</label></td>
    //                         <td><input type="text" value={companyName} onChange={companyNameHandler} placeholder="Company name..." /></td></tr>
    //                     <tr><td><label>Guarantor name:</label></td>
    //                         <td><input type="text" value={guarantorName} onChange={guarantorNameHandler} placeholder="Guarantor name..." /></td></tr>
    //                     <tr><td><label>Post code :</label></td>
    //                         <td><input type="text" value={postCode} onChange={postCodeHandler} placeholder="Post code..." /></td></tr>
    //                     <tr><td><label>Address :</label></td>
    //                         <td><input type="text" value={address} onChange={addressHandler} placeholder="Address..." /></td></tr>
    //                     <tr><td><label>Guarantor phone :</label></td>
    //                         <td><input type="text" value={guarantorPhoneNumber} onChange={guarantorPhoneHandler} placeholder="Guarantor phone..." /></td></tr>
    //                     <tr><td><label>Cell phone :</label></td>
    //                         <td><input type="text" value={cellPhone} onChange={cellPhoneHandler} placeholder="Cell phone..." /></td></tr>
    //                     <tr><td><label>Email :</label></td>
    //                         <td><input type="text" value={email} onChange={emailHandler} placeholder="Email..." /></td></tr>
    //                     </tbody>
    //                 </table><br/>
    //                 <input className="submit" type="submit" value="Submit" />
    //             </form>
    //         </div>

    //     )
    // }
    // //
    // //
    // //     <option defaultValue>Select Gender</option>
    // //     <option value="male">Male</option>
    // //     <option value="female">Female</option>
    // // </select><br />

    // export default CompanyRegister
