import React, { Component } from 'react';
import './dashboard.css';
import * as Constant from '../Constants';

class Member extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="member-container1">
                <label className="profile-content"><b>Name</b></label>
                <label className="profile-content-value">{this.props.user.firstName+" "+this.props.user.lastName}</label><br/>
                <label className="profile-content"><b>Contact Number:</b></label>
                <label className="profile-content-value">{this.props.user.mobileNo}</label><br/>
                <label className="profile-content"><b>Email</b></label>
                <label className="profile-content-value">{this.props.user.email}</label><br/>
                <label className="profile-content"><b>Joined On</b></label>
                <label className="profile-content-value">{this.props.user.joinedOn}</label><br/>
                <label className="profile-content"><b>Added Members</b></label>
                <label className="profile-content-value">{this.props.user.membersAdded}</label><br/>     
                <label className="profile-content"><b>Status</b></label>
                <label className="profile-content-value">{this.props.user.userStatus}</label><br/>          
            </div>
        );
    }
}

export default class AddedMembers extends React.Component{
    
    constructor(props){
        super(props);
        console.log("Added Members.............: "+JSON.stringify(props));
        if(!localStorage.getItem("user_name")){
            this.props.history.push("/");
        }
        this.state = {
            members : this.props.users
        }
    }

    render(){
        const items = this.state.members;
        return (      
            <div className="added-member-content">     
                <div className="topic">You Have Added</div>
                {
                    (this.state.members.length==0)?(
                        <div className="member-container1">
                            <p>You have not added any members yet or the members you have added not signed up yet....</p>
                            <a href="/add-member">Add New Member</a>
                        </div>
                    ):(
                        items.map((member)=>{
                            return <Member user = {member} ></Member>
                        })                        
                    )
                }
            </div>
        );
    }

}