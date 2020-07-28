
    import  React, { useState  } from 'react';
    import './CSS/todo.css'
    import axios from 'axios';
    import ReactNotification from 'react-notifications-component'
    import 'react-notifications-component/dist/theme.css'
    import { store } from 'react-notifications-component';

    function CompanyRegister()  {
        const [companyName, setCompayName] = useState("");
        const [guarantorName, setGuarantorName] = useState("");
        const [postCode, setPostCode] = useState("");
        const [address, setAddress] = useState("");
        const [guarantorPhoneNumber, setGuarantorPhoneNumber] = useState("");
        const [cellPhone, setCellPhone] = useState("");
        const [email, setEmail] = useState("");
        const basicURL = "http://ec2-107-23-240-208.compute-1.amazonaws.com/api/";

        const sendData = (url, data, onSuccess) => {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            axios.post(proxyurl+basicURL+url, data)
            .then(response => {
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
        const addressHandler = (event) => {
            setAddress(event.target.value);
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
            setCompayName("");
            setGuarantorName("");
            setPostCode("");
            setAddress("");
            setGuarantorPhoneNumber("");
            setCellPhone("");
            setEmail("");

            let data = {
                compnayname: companyName,
                guarantorname: guarantorName,
                postcode: postCode,
                address: address,
                guarantorphonenumber: guarantorPhoneNumber,
                cellphone: cellPhone,
                email: email
            };

            console.log(data);
            let data1 = "&compnayname="+ companyName + "&guarantorname="+ guarantorName + "&postcode="+ postCode +
            "&address="+ address + "&guarantorphonenumber="+ guarantorPhoneNumber +
            "&cellphone="+ cellPhone + "&email="+ email;

            sendData("company.php",data1, function(response)  {
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

        return  (
            <div>
                <ReactNotification />
                <form onSubmit={handleSubmit}>
                    <h1>Registration</h1>
                    <table >
                        <tbody>
                        <tr><td><label>Company name :</label></td>
                            <td><input type="text" value={companyName} onChange={companyNameHandler} placeholder="Company name..." /></td></tr>
                        <tr><td><label>Guarantor name:</label></td>
                            <td><input type="text" value={guarantorName} onChange={guarantorNameHandler} placeholder="Guarantor name..." /></td></tr>
                        <tr><td><label>Post code :</label></td>
                            <td><input type="text" value={postCode} onChange={postCodeHandler} placeholder="Post code..." /></td></tr>
                        <tr><td><label>Address :</label></td>
                            <td><input type="text" value={address} onChange={addressHandler} placeholder="Address..." /></td></tr>
                        <tr><td><label>Guarantor phone :</label></td>
                            <td><input type="text" value={guarantorPhoneNumber} onChange={guarantorPhoneHandler} placeholder="Guarantor phone..." /></td></tr>
                        <tr><td><label>Cell phone :</label></td>
                            <td><input type="text" value={cellPhone} onChange={cellPhoneHandler} placeholder="Cell phone..." /></td></tr>
                        <tr><td><label>Email :</label></td>
                            <td><input type="text" value={email} onChange={emailHandler} placeholder="Email..." /></td></tr>
                        </tbody>
                    </table><br/>
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>

        )
    }
    //
    //
    //     <option defaultValue>Select Gender</option>
    //     <option value="male">Male</option>
    //     <option value="female">Female</option>
    // </select><br />

    export default CompanyRegister
