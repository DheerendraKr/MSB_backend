import React, { Component } from "react";
import styled from 'styled-components';
import Loading from './loading.gif';
import * as Constant from '../Constants';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

const LoginFormContainer = styled.div`
    height: 85%;
    width: 100%;
    padding-left: 1em
    padding-top: 1em;
    padding-right: 1em;
    overflow-x:hidden;
    overflow-y: scroll;
`;

const LoginFrame = styled.div`
    width:50%;
    min-height:70%;
    border-radius:3px;
    box-shadow: 1px 1px 10px #000d1a;
    margin-left:25%;
    margin-top:3%;
    margin-bottom: 2%;
    padding: 5% 5% 1% 5%;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.5));
    label{
        color:#000;
        font-size:1em;
    }
    h3{
        color:#00;
    }
    input{
        color:#000;
        font-size:1em;
        text-align:center;
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


class SignUpNav extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          activePath: this.props.location.pathname
        }
        
        this.onItemClick = this.onItemClick.bind(this);
      }
    
      onItemClick = (to) => {
        this.setState({ activePath:  to });
      }
    
      render(){
    
        return(
          <Link to="/register"  onClick={this.onItemClick}>
              <div className="fa fa-users"> &nbsp;&nbsp;Join Now</div>
          </Link>
        );
    
      }

}

const SignupNavigation = withRouter(SignUpNav);

export default class Login extends Component {
    LoginUrl = Constant.API_BASE_URL+'/login-user';
    error="";
    constructor(props) {
        super(props);
        if(localStorage.getItem("user_name")){
            this.props.history.push("/");
        }
        this.state={ 
            memberId:"", 
            password:"", 
            errorMessage:"",
            btnDisable:false,
            loadingOption: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    isUserLoggedIn(){
        console.log("user token: "+localStorage.getItem("user_token"));
        if(localStorage.getItem("user_token")){this.props.history.push("/");};
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })        
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({
            btnDisable : true,
            loadingOption:true,
            errorMessage:""
        }); 
        const data =  { memberId:this.state.memberId, password:this.state.password };
        console.log("Form data: "+JSON.stringify(data));
        fetch(this.LoginUrl, {
            method: 'POST',
            headers: {  
                accept: 'application/json',
                'Access-Control-Allow-Origin': window.location.href,
              },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((result)=> {
            localStorage.setItem("memberId",this.state.memberId);
            localStorage.setItem("userToken", result.access_token);
            localStorage.setItem("roles", result.roles);
            localStorage.setItem("user_name", result.userName);
            localStorage.setItem("expires_in", result.expires_in);
            localStorage.setItem("roles", result.roles);
            window.location.reload(false);
        },(error)=>{
            console.log("Error while fetching the data: "+error);
            this.setState({
                btnDisable:false,
                loadingOption:false,
                errorMessage: "Member Id or Password is incorrect."
            });
        });
    }

    async redirect(){
        this.props.history.push("/");
    }

    render() {
        return (
            <LoginFormContainer><LoginFrame>

                <form method="post" onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>

                    <div className="form-group">
                        <label>Member Id</label>
                        <input type="text" required="true" className="form-control" name="memberId" placeholder="Enter member id" onChange={this.handleChange}  />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" required="true" className="form-control" name="password" placeholder="Enter password" onChange={this.handleChange}  />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" disabled={this.state.btnDisable}>
                        {(this.state.loadingOption)?<img  src={Loading} />:"Login Now"}
                    </button>
                    <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
                    <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        Wants To Join Us?  &nbsp;&nbsp;<SignupNavigation></SignupNavigation>
                    </p>
                </form>

            </LoginFrame></LoginFormContainer>
        );
    }
}