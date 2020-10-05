import React, { Component } from 'react';
import styled from 'styled-components';
import './add-member.css';

class Member extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="member-container">
                <label className="profile-content"><b>Name:</b></label>
                <label className="profile-content-value">{this.props.user.name}</label><br/>
                <label className="profile-content"><b>Member ID:</b></label>
                <label className="profile-content-value">{this.props.user.memberId}</label><br/>
                <label className="profile-content"><b>Contact Number:</b></label>
                <label className="profile-content-value">{this.props.user.mobileNo}</label><br/>
                <label className="profile-content"><b>Email:</b></label>
                <label className="profile-content-value">{this.props.user.email}</label><br/>
                <label className="profile-content"><b>Added On:</b></label>
                <label className="profile-content-value">{this.props.user.addedOn}</label><br/>   
                <label className="profile-content"><b>Status:</b></label>
                <label className="profile-content-value">{this.props.user.status}</label><br/>          
            </div>
        );
    }
}

export default class PreviouslyAddedMembers extends React.Component{
    
    constructor(props){
        super(props);
        console.log("Added Members.............: "+JSON.stringify(props));
        this.state = {
            members : this.props.users
        }
    }

    render(){
        const items = this.state.members;
        return (      
            <div className="added-member-content">
                {
                    (this.state.members.length===0)?(
                        <div className="member-container">
                            <p>You have not added any members yet.</p>
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