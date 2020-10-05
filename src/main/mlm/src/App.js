import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HeadBar from './components/headbar/HeadBar';
import SideBar from './components/sidebar/SideBar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Join } from './components/join/Join';
import User from './components/user/User'
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import ForgetPassword from './components/forget-password/ForgetPassword'
import BackImg from './background/back.jpg';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import LoadingIcon from './background/loading.gif';
import Package from './components/packages/Package';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import AddMember from './components/add_member/AddMember';
import Earnings from './components/earnings/Earnings';

const ParentContainer = styled.div`
  width:100%;
  height:100%;
`;

const LoadingDiv = styled.div`
    width: 10%;
    height: 10%;
    position: relative;
    top: 45%;
    left: 45%;
`;

const MainContent = styled.div`
  width: 75%;
  height:100vh;
  margin-left:25%;
  padding-bottom: 0px;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.9));
`;

export default class App extends React.Component {

  state = {
    userLoggedIn: false,
    HomeComponent: Home
  };

  constructor(props){
    super(props);
  }
  

  componentWillMount () {
    this.state.userLoggedIn = (localStorage.getItem('userToken'))? true : false;
    this.state.HomeComponent = (localStorage.getItem('userToken'))? Dashboard : Home;
    console.log("Token: "+localStorage.getItem('userToken'));
    console.log("Update token: "+this.state.userLoggedIn);

  }

  render() {
    //this.componentDidMount();
    return (
    <ParentContainer >
          <React.Fragment>
            <Router styles={{ backgroundImage: `url(${BackImg})` }}>
              <SideBar userLoggedIn={this.state.userLoggedIn}/>
              <MainContent>
                <HeadBar userName={localStorage.getItem("user_name")}/>
                <Switch styles={{ backgroundImage: `url(${BackImg})` }}>
                  <Route exact path="/" component={this.state.HomeComponent}/>
                  <Route path="/profile" component = {Profile} />
                  <Route path="/add-member" component = {AddMember} />
                  <Route path="/about" component={About} />
                  <Route path="/join" component={Join} />
                  <Route path="/user" component={User} />
                  <Route path="/contact" component={Contact} />
                  <Route path="/packages" component={Package} />
                  <Route path="/earnings" component={Earnings} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={SignUp} />
                  <Route path="/forget-password" component={ForgetPassword} />
                </Switch>
              </MainContent>
            </Router>
          </React.Fragment>
        </ParentContainer>
    );
  }
}
