import React, { Component } from "react";
import styled from 'styled-components';
import Loading from './loading.gif';
import * as Constant from '../Constants';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

const SignUpFormContainer = styled.div`
    height: 85%;
    width: 100%;
    padding-left: 1em
    padding-top: 1em;
    padding-right: 1em;
    overflow-x:hidden;
    overflow-y: scroll;
`;

const SignUpFrame = styled.div`
    width:50%;
    min-height:90%;
    border-radius:3px;
    box-shadow: 1px 1px 10px #000d1a;
    margin-left:25%;
    margin-bottom: 5%;
    margin-top:3%;
    padding: 5% 5% 2% 5%;
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
        font-size:1em;
        text-align:left;
        background-color:rgba(255,255,255,0.8);
        border: 1px solid #000;
        border-radius: 3px;
    }
    p{
        color:#000;
    }
    button{
        font-size:1em;
        text-align:center;
        opacity:0.8;
    }
`;

const ErrorMessage = styled.div`
    color: #ff0000;
    text-align:right;
    width:100%;
`;
const SuccessMessage = styled.div`
    color: #194d19;
    text-align:center;
    width:100%;
`;

class LoginNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: this.props.location.pathname
        }

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick = (to) => {
        this.setState({ activePath: to });
    }

    render() {
        return (
            <p className="forgot-password text-right">
                Already registered &nbsp;&nbsp;
                <Link to="/login"  onClick={this.onItemClick}>
                    <div className="fa fa-user"> &nbsp;&nbsp;Login</div>
                </Link>
            </p>
        );
    };
}

const LoginOption = withRouter(LoginNav);

export default class SignUp extends Component {
    SignUpUrl = Constant.API_BASE_URL + "/register-user";
    SuccessMessage = "You are registered successfully , please ";
    constructor(props) {
        super(props);
        if (localStorage.getItem("user_name")) {
            this.props.history.push("/");
        }
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            mobileNo: "",
            memberId: "",
            password: "",
            registerError: false,
            registerSuccess: false,
            btnDisable: false,
            loginOption: true,
            processing: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("State values: " + JSON.stringify(this.state));
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            mobileNo: this.state.mobileNo,
            memberId: this.state.memberId,
            password: this.state.password
        }
        this.setState({ btnDisable: true, registerError: false, loginOption: false, processing: true });
        console.log("Body : " + JSON.stringify(data));
        fetch(this.SignUpUrl, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then((result) => {
                console.log("Result: " + JSON.stringify(result));
                this.setState({
                    registerSuccess: true,
                    processing: false
                })
            }, (error) => {
                console.log("Error while registering the user: " + error);
                this.setState({
                    registerError: true,
                    btnDisable: false,
                    loginOption: true,
                    processing: false
                });
            });

    }


    render() {
        return (
            <SignUpFormContainer><SignUpFrame>
                <form onSubmit={this.handleSubmit}>
                    <h3>Join Us</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input required="true" type="text" name="firstName" className="form-control" placeholder="Enter first name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input required="true" type="text" name="lastName" className="form-control" placeholder="Enter last name" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Mobile No.</label>
                        <input required="true" type="text" name="mobileNo" className="form-control" placeholder="Enter mobile no" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Member Id</label>
                        <input required="true" type="text" name="memberId" className="form-control" placeholder="Enter member id" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input required="true" type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={this.state.btnDisable}>{(this.state.processing) ? <img src={Loading} /> : "Sign Up"}</button>
                    <br />
                    {(this.state.registerSuccess) ? <SuccessMessage>You are registered successfully. Please <a href="/login">Login Now</a></SuccessMessage> : ""}
                    {(this.state.registerError) ? <ErrorMessage>Unable to register please check your credentials.</ErrorMessage> : ""}
                    {(this.state.loginOption) ? <LoginOption style={this.state.loginOption}></LoginOption> : ""}
                </form>
            </SignUpFrame></SignUpFormContainer>
        );
    }
}