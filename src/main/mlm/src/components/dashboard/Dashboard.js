import React, { Component } from 'react';
import styled from 'styled-components';
import AddedMembers from './AddedMembers';
import './dashboard.css';
import * as Constant from '../Constants';

const DashboarContent = styled.div`
    height: 80%;
    width: 98%;
    margin-left: 1%
    margin-top: 3%;
    margin-right: 1%;
    border-radius: 3px;
    overflow-x:hidden;
    overflow-y: scroll;
    padding: 2em;
    h3{
        width: 98%;
        text-align: center;
    }
    p{
        width: 100%;
        font-size: larger;
        text-align: justify;
    }
`;


class Dashboard extends React.Component{
    user = localStorage.getItem("user_name")
    AddedMembersUrl = Constant.API_BASE_URL+"/secured/members/"+localStorage.getItem("memberId");
    constructor(props){
        super(props);
        this.state={
            members:"",
            errorMessage:"",
            addedMembersFrame:false
        }
    }

    async componentDidMount(){
        console.log("Fetching dashboard details.");
        await fetch(this.AddedMembersUrl,{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("userToken")
            }
        }).then(res=>res.json())
        .then((result)=>{
            console.log("user details fetched: "+JSON.stringify(result));
            this.setState({
                addedMembersFrame:true,
                members:result.addedMembers
            });
        },(error)=>{
            console.log("Unable to fetch user details. Please try again later.");
            this.setState({
                errorMessage:"Unable to fetch user details please try again later."
            })
        });
    }

    render(){
        return (
            <DashboarContent>                
                {
                    (this.state.addedMembersFrame)
                    ?(<AddedMembers users={this.state.members}></AddedMembers>)                
                    :<div>{this.state.errorMessage}</div>
                }
                {/* <MemberTreeData></MemberTreeData> */}
            </DashboarContent>
        )
    }
}  

export default Dashboard;
