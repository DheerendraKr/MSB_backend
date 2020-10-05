import React, { Component } from 'react';
import styled from 'styled-components';
const HomeContent = styled.div`
    height: 80%;
    width: 100%;
    padding-left: 1em;
    padding-top: 1em;
    padding-right: 1em;
`;

class ForgetPassword extends React.Component {
    render() {
        return (
            <HomeContent><h1>Forget Password Screen</h1></HomeContent>
        )
    }
}

export default ForgetPassword;