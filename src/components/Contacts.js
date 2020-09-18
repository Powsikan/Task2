import React from 'react';
import ContactForm from './ContactForm';

const Contacts = () => {

    const List = e => {

        if(localStorage.getItem('data') !== null){
            var retrievedData = localStorage.getItem("data");
        var deatils = JSON.parse(retrievedData);
        {deatils.map(user => {
            console.log(user)
        })}
        }else{
            alert("No data available");
        }

    }
    return(
        <div style={{marginLeft:100 }}>
            <div>
                <center>
                    <h1> React Data Store </h1>
                </center>            
            </div>
            <div className="row">
                <div>
                    <ContactForm/>
                </div>
            </div>
            <div className="row">
                <thead>
                    <tr>
                        <th>List Of Contacts</th>
                        <th><button onClick={List}>List now</button></th>
                    </tr>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mobile Number</th>
                        <th>Email ID</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td></td>
                    </tr>
                </tbody>
            </div>
        </div>
    );
}

export default Contacts;