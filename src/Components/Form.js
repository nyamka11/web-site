
    import  React, { useState  } from 'react';
    import './CSS/todo.css'

    function CompanyRegister()  {
        const [companyName, setCompayName] = useState("");
        const [guarantorName, setGuarantorName] = useState("");
        const [postCode, setPostCode] = useState("");
        const [address, setAddress] = useState("");
        const [guarantorPhoneNumber, setGuarantorPhoneNumber] = useState("");
        const [cellPhone, setCellPhone] = useState("");
        const [email, setEmail] = useState("");


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
            setCompayName("");
            setGuarantorName("");
            setPostCode("");
            setAddress("");
            setGuarantorPhoneNumber("");
            setCellPhone("");
            setEmail("");

            let data = {
                companyname: companyName,
                guarantorname: guarantorName,
                postcode: postCode,
                address: address,
                guarantorphonenumber: guarantorPhoneNumber,
                cellphone: cellPhone,
                email: email
            };
            event.preventDefault()

            // fetch('http://ec2-107-23-240-208.compute-1.amazonaws.com/api/company.php', {
            //     method: 'POST',
            //     mode: 'cors',
            //     headers:{
            //
            //         "Access-Control-Allow-Origin": "*",
            //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            //         'Content-type':'application/json',
            //     },
            //     body:"" //JSON.stringify(data)
            // }).then(res => res.json()).then(result=>{
            //     console.log(result);
            // })

            let headers = new Headers({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Content-type': 'application/x-www-form-urlencoded'
            });

            let sentData = {
                method: 'POST',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(data)
            };

            return new Promise((reslove, reject) => {
                fetch('http://ec2-107-23-240-208.compute-1.amazonaws.com/api/company.php', sentData)
                    .then(response => response.json())
                    .then(responseText => {
                        let resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
                        console.log(resp);
                        reslove(resp); //这个resp会被外部接收
                    }).catch(err => {
                        console.log(err);
                        reject(err);
                    });
            }).catch(err => {
                console.log('出错了');
            });
        }

        return  (
            <div>
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
