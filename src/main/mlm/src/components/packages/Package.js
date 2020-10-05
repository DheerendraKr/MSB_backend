import React, { Component } from 'react';
import styled from 'styled-components';
const PackageContents = styled.div`
    height: 85%;
    width: 100%;
    padding-left:1em;
    padding-top: 1em;
    padding-right: 1em;
    overflow-x:hidden;
    overflow-y: scroll;
    h4{
        font-size:2em;
        width: 100%;
        margin-top: 3%;
        text-align: center;

    }
    p{
        font-size: 1.6em;
        text-align: justify;
    }
`;

const PlanMoney = styled.div`
    width: 90%;
    padding: 1em;
    border-radius: 3px;
    box-shadow: 1px 1px 10px #001a09;
    margin-left: 5%;
    background: #006622;
    text-align: center;
    color: #fff;
    opacity: 0.8;
    p{
        text-align: center;
        font-size: 1.7em;
    }
`;

const PlanDescription = styled.div`
    width: 90%;
    margin-left: 5%;
    padding: 1em;
    text-align: justify;
    p{
        width: 100%;
        font-size: 1.6em;
    }
`;

class Package extends React.Component{
    render(){
        return(
            <PackageContents>
                <h4>Simple, Straight Packages</h4>
                <PlanDescription>
                    <p>Millions of people around the world have already made MBS plan the place where their dream happens.</p>
                </PlanDescription>
                <PlanMoney>
                    <p><b>&#x20b9; 500</b></p>
                    <p>Package 1</p>
                </PlanMoney>
                <PlanDescription>
                    <p>
                        <b>MBS</b> is a leading monthly rotation plan company. It is growing at the rate of <b>100%</b> per year. This growth pattern 
                        in itself speaks volume about the quality of the products, the market plan and the management that has been able to 
                        acomplish such a reqarding and sustainable system.
                    </p>
                </PlanDescription>
            </PackageContents>
        );
    }
}

export default Package;
