import { NoEncryption } from "@material-ui/icons";
import React, { Component, useState } from "react";
import styled from 'styled-components';
import './add-member.css';
import PreviouslyAddedMembers from './PreviouslyAddedMembers';
import Loading from './loading.gif';
import * as Constant from '../Constants';

const AddMemberFormContainer = styled.div`
    height: 85%;
    width: 100%;
    padding-left: 1em
    padding-top: 1em;
    padding-right: 1em;
    overflow-x:hidden;
    overflow-y: scroll;
`;

const MemberFrame = styled.div`
    width:50%;
    min-height:65%;
    border-radius:3px;
    box-shadow: 1px 1px 10px #000d1a;
    margin-left:25%;
    margin-bottom: 2%;
    margin-top:3%;
    padding: 5% 5% 5% 5%;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5));
    label{
        color:#000;
        font-size:1em;
    }
    h3{
        color:#000;
    }
    input{
        color:#000;
        width: 100%;
        font-size:1em;
        text-align:left;
        background-color:rgba(255,255,255,0.8);
        border: 1px solid #000;
        border-radius: 3px;
    }
    p{
        color:#ff0000;
    }
    button{
        font-size:1em;
        text-align:center;
        opacity:0.8;
    }
`;

const MemberResponseFrame = styled.div`
    width:50%;
    padding: 2em;
    border-radius:3px;
    box-shadow: 1px 1px 10px #000d1a;
    margin-left:25%;
    margin-bottom: 2%;
    h3{
        width: 100%;
        text-align: center;
    }
`;

class AddedMember extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Added Member Details</h3>
                <li><b>Name:</b> {this.props.name}</li>
                <li><b>Mobile No:</b> <a href={this.props.mobileNo}>{this.props.mobileNo}</a></li>
                <li><b>Email:</b> <a href={this.props.email}>{this.props.email}</a></li>
                <li><b>Member Id:</b> {this.props.memberId}</li>
                <p>
                    Member added successfully. To add new Member please refresh the page.<br/>
                    <a href="/add-member">Refresh Page </a>
                </p>
            </div>
        );
    }
}

export default class AddMember extends Component {

    AddMemberUrl = Constant.API_BASE_URL+"/secured/members/"+localStorage.getItem("memberId");
    AddedMembersUrl = Constant.API_BASE_URL+"/secured/members/"+localStorage.getItem("memberId")+"added";


    constructor(props) {
        super(props);
        this.state = { 
            name: "", 
            mobileNo: "", 
            email: "" , 
            errorMessage:"", 
            memberId: "",            
            btnDisabled:false,
            addNewMemberLoading:false,
            addedMembers:"",
            addedMemberDisplay:"none",
            alreadyAddedMemberDisplay:"none",
            addedMemberDisplaybtn:false,
            addedeUserLoadingOption:false,
            addedMembersLoadingError:""
            
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadAddedMembers = this.loadAddedMembers.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            btnDisabled:true, 
            addNewMemberLoading:true,
            errorMessage:""
        });

        const data = { name: this.state.name, 
            email: this.state.email,
            mobileNo: this.state.mobileNo };
        console.log("Request: " + JSON.stringify(data));
        fetch(this.AddMemberUrl,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                Authorization: "Bearer "+localStorage.getItem("userToken")
            },
            body:JSON.stringify(data)            
        }).then(res=>res.json())
        .then((result)=>{
            console.log("Response: "+JSON.stringify(result));
            this.setState({addedMemberDisplay:"block",
            memberId:result.memberId,
            addNewMemberLoading:false});
        },(error)=>{
            console.log("Error while fetching the data: "+error);
            this.setState({errorMessage: "Member can't be added please try again later.",
            btnDisabled:false,
            addNewMemberLoading:false});            
        });
    }

    async loadAddedMembers(event){
        this.setState({
            addedMemberDisplaybtn:true,
            addedMembersLoadingError:"",
            addedeUserLoadingOption:true,
            addedMembers:""
        });
        await fetch("http://localhost:8090/secured/members/"+localStorage.getItem("memberId")+"/added",{
            method:"GET",
            headers:{
                Authorization: "Bearer "+localStorage.getItem("userToken")
            }           
        }).then(res=>res.json())
        .then((result)=>{
            console.log("Response: "+JSON.stringify(result));
            this.setState({
                alreadyAddedMemberDisplay:"block",
                addedMembers:result,
                addedeUserLoadingOption:false,
                addedMemberDisplaybtn:false
            });
            
        },(error)=>{
            console.log("Error while fetching the data: "+error);
            this.setState({
                addedMemberDisplaybtn:false,
                addedeUserLoadingOption:false,
                addedMembersLoadingError: "Member can't be loaded please try again later."
            });
        });
    }

    render() {
        return (
            <AddMemberFormContainer>
                <MemberFrame>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Add New Member</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" required="true" className="form-control" placeholder="Name" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Mobile No</label>
                            <input type="text" name="mobileNo" required="true" className="form-control" placeholder="Mobile No" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" disabled={this.state.btnDisabled}>
                            {
                                (this.state.addNewMemberLoading)
                                ?<img src={Loading} />
                                :"Add"
                            }
                        </button>
                        <br /><p className="forgot-password text-right" > 
                            {this.state.errorMessage}
                        </p>
                    </form>
                </MemberFrame>
                <MemberResponseFrame  style={{display:`${this.state.addedMemberDisplay}`}}><AddedMember 
                    name={this.state.name}
                    mobileNo={this.state.mobileNo}
                    email={this.state.email}
                    memberId={this.state.memberId}
                /></MemberResponseFrame>
                <button type="submit" className="topic1" onClick={this.loadAddedMembers} disabled={this.state.addedMemberDisplaybtn}>{
                        (this.state.addedeUserLoadingOption)
                        ?<img src={Loading} />
                        :"View Added Members"
                }</button>
                <div className="error-message">{this.state.addedMembersLoadingError}</div>
                <div style={{"display":`${this.state.alreadyAddedMemberDisplay}`}}>
                    {
                        (this.state.addedMembers)
                        ?(<PreviouslyAddedMembers users={this.state.addedMembers}></PreviouslyAddedMembers>)
                        :<img src={Loading} />                        
                    }
                </div>
            </AddMemberFormContainer>
        );
    }
}