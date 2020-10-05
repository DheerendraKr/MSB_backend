import React, { Component } from 'react';
import styled from 'styled-components';
const EarningContent = styled.div`
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


export default class Earnings extends React.Component{
    render(){
        return(
            <EarningContent>
                <h2>Your Total Earnings</h2>
                <p>
                    Adding soon....
                </p>
            </EarningContent>
        );
    }
}