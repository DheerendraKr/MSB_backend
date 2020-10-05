import React, { Component } from 'react';
import styled from 'styled-components';
const JoinUsContent = styled.div`
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


export const Join = () => (
    <JoinUsContent>
        <h2>How To Join Us</h2>
        <p>
            You buy our product and support us with 500 rupees, you will receive a gift (useable product). <br/>
            When you join us your sponsor will get: <b>1 Point Value ( 1 PV = &#x20b9; 50/- )</b><br />
            Maximum <b>100 PV</b> bussiness one can do in a day. You will recieve benifit also from downline bussiness.
        </p>
    </JoinUsContent>
)