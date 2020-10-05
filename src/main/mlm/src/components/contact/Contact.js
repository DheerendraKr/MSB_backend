import React, { Component } from 'react';
import styled from 'styled-components';
const ContactContent = styled.div`
    min-height: 50%;
    width: 80%;
    margin-left: 10%
    margin-top: 3%;
    margin-right: 1%;
    border-radius: 3px;
    box-shadow: 1px 1px 5px #001f4d;
    padding: 2em;
    h2{
        width: 98%;
        text-align: center;
    }
    p{
        width: 100%;
        font-size: larger;
        text-align: justify;
    }
`;

class Contact extends React.Component{
    render(){
        return(
            <ContactContent>
                <h2>Our Address</h2>
                <p>
                    1609, Udhana Main Road,<br />
                    Near krishna petrolpump,<br />
                    Shashtri nagar society, Aman Nagar,<br />
                    Surat, Gujrat<br />
                    PinCode: 395002
                </p>
            </ContactContent>
        );
    }
}

export default Contact;
