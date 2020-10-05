import React, { Component } from "react";
import styled from 'styled-components';
import './Profile.css';
import ProfilePic from './profile-pic.png';
import * as Constant from '../Constants';

const ProfilePage = styled.div`
    height: 82%;
    width: 98%;
    margin:1%;
    padding:2em;
    overflow-x:hidden;
    overflow-y: scroll;
    float:left;
`;

class ProfileImage extends React.Component{

    FetchUserDetailUrl = Constant.API_BASE_URL+"/secured/user";
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="profile-image"><img src={ProfilePic} width="100%" height="100%" alt="loading user image..."/></div>
        );
    }
}



class ProfileDetails extends React.Component{

    
    constructor(props){
        super(props);
        console.log("User details: "+JSON.stringify(props))
    }

    signOut(event){
        localStorage.clear();
        console.log("User logged out.");
        window.location.reload(false);
    }    

    render(){
        return (
            <div className="profile-desc">
                <label className="profile-content"><b>Name:</b></label>
                <label className="profile-content-value">{this.props.user.name}</label><br/>
                <label className="profile-content"><b>Contact Number:</b>
                </label><label className="profile-content-value">{this.props.user.mobileNo}</label><br/>
                <label className="profile-content"><b>Email:</b></label>
                <label className="profile-content-value">{this.props.user.email}</label><br/>
                <label className="profile-content"><b>Joined On:</b></label>
                <label className="profile-content-value">{this.props.user.joinedOn}</label><br/>
                <label className="profile-content"><b>Active from:</b></label>
                <label className="profile-content-value">{this.props.user.activeFrom}</label><br/>
                <label className="profile-content"><b>Added Members:</b></label>
                <label className="profile-content-value">{this.props.user.addedMembers}</label><br/>
                <label className="profile-content"><b>Total Earnings:</b></label>
                <label className="profile-content-value">{this.props.user.totalEarnings}</label><br/>
                <label className="profile-content-btn"><button type="submit" className="btn btn-primary btn-block" onClick={this.signOut} >Sign Out</button></label>
            </div>
        );
    }
}


export default class Profile extends React.Component{
    FetchUserDetailUrl = Constant.API_BASE_URL+"/secured/user/";
    constructor(props){
        super(props);
        console.log("user : "+localStorage.getItem("user_name"));
        if(!localStorage.getItem("user_name")){
            this.props.history.push("/");
        }
        this.state = {
            userProfile:"",
            errorMessage:"",
            userFrame: false
        }
    }

    async componentDidMount(){
        console.log("Fetching user details from server. Please wait...................");
        await fetch(this.FetchUserDetailUrl+localStorage.getItem("memberId"),{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("userToken")
            }
        }).then(res => res.json())
        .then((result)=>{
            console.log("Response: "+JSON.stringify(result));
            this.setState({userFrame:true,userProfile:result});
        },(error)=>{
            console.log("Unable to load user details please try again. Please refresh the page.");
            this.setState({errorMessage:"Unable to load user details please try again. Please refresh the page."});
        });
    }

    render(){
        return(
            <ProfilePage>
                <ProfileImage></ProfileImage>
                <div className="error_message">{this.state.errorMessage}</div>
                {(this.state.userFrame)?(<ProfileDetails user={this.state.userProfile}></ProfileDetails>):""}
            </ProfilePage>
        );
    }

}