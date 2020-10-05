import React from 'react';
import styled from 'styled-components';

const UserPageContainer = styled.div`
    height: 80%;
    width: 74%;
    margin-left:26%;
    margin-top: 1em;
    margin-right: 1em;
`;
export default class User extends React.Component{
    render(){
        return (
            <UserPageContainer><h1>Users Page</h1></UserPageContainer>
        );
    }
}