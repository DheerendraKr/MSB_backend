import React, { Component } from 'react';
import styled from 'styled-components';
import trophy from './trophy.gif';
import ourService from './our_services.png';
import ourMission from './our_mission.png';
import ourVision from './our_vision.png';
import binaryPlan from './binary_plan.png';



const HomeContent = styled.div`
    height: 84%;
    width: 98%;
    margin:1%;
    padding-top:2%;
    overflow-x:hidden;
    overflow-y: scroll;
`;

const HomeDesc = styled.div`
    width:90%;
    margin-left:5%;
    margin-bottom: 2em;
    border-radius: 3px;
    float:left;
    p{
        width: 98%;
        font-size: 1.5em;
        text-align: justify;
    }
`;

const HomeDetails = styled.div`
    width:90%;
    height:35vh;
    margin-left:5%;
    margin-bottom: 2em;
    border-radius: 3px;
    padding:1em;
    box-shadow: 1px 0px 10px #001a33;
    float:left;
    p{
        width: 98%;
        font-size: 1.5em;
        text-align: justify;
    }
`;

const ImageDivision = styled.div`
    width: 30%;
    height: 100%;
    float:inherit;
`;


const DescriptionDivision = styled.div`
    height:100%;
    width: 55%;
    margin-left: 5%;
    float:inherit;
    p{
        width: 100%;
        font-size: 1.4em;
        text-align: justify;
    }
    b{
        font-size: 1.6em;
    }
`;

class HomeImage extends React.Component{
    render(){
        return(
            <img src={trophy} style={{ width:'100%', height:'80%'}} alt="Logo" />
        );
    }
}

export const Home = () => (
    <HomeContent>
        {/* <HomeImage /> */}
        <HomeDesc>
            <p>
                <b>MBS</b> is totally based on social services fromation, also we can say this is social service company.<br/>
                If any member joins us to help the organisation and we provide him/her support to free from worried of daily pocket expenses. We get help and provide help.
            </p>
        </HomeDesc>
        <HomeDetails>
            <ImageDivision><img src={ourService} width="100%" height="100%"/></ImageDivision>
            <DescriptionDivision>
                <b>Our Services</b><br/>
                <p><li>Home use products</li>
                <li>Spices</li>
                <li>Clothes</li>
                and others</p>
            </DescriptionDivision>
        </HomeDetails>
        <HomeDetails>
            <ImageDivision><img src={ourMission} width="100%" height="100%"/></ImageDivision>
            <DescriptionDivision>
                <b>Quality</b><br/>
                <p>
                    The quality of work you get last long and help us remain with you forever.
                </p>
                <p>
                    That's the faith we maintains.
                </p>
            </DescriptionDivision>
        </HomeDetails>
        <HomeDetails >
            <ImageDivision><img src={ourVision} width="90%" height="90%"/></ImageDivision>
            <DescriptionDivision>
                <b>Our Vision</b><br/>
                <p>
                    To be a life changing agent to rope in people from all parts of the world to make their life simple and qualitative.
                </p>
            </DescriptionDivision>
        </HomeDetails>
        <HomeDetails >
            <ImageDivision><img src={binaryPlan} width="100%" height="100%"/></ImageDivision>
            <DescriptionDivision>
                <b>Binary Plan</b><br/>
                <p>
                    <li>Binary income is 100 Rupees per person.</li>
                    <li>1PV = 100 Rupees</li>
                    <li>First binary 1:2 or 2:1 after 1:1</li>
                    <li>Direct confirmation for getting binary income.</li>
                    <li>Daily closing.</li>
                </p>
            </DescriptionDivision>
        </HomeDetails>
    </HomeContent>
)