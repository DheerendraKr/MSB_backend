import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
const Styles = styled.div`
    width:100%;
    height:15%
    //box-shadow: 1px 1px 1px #004d4d;
  .navbar { 
   // background-image: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(0,13,26,0.38));
        /*background-color:#fff;*/
        color: #fff;
    }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #000;
    font-size:1.3em;
    &:hover { font-weight: bold; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #000;
    h1{
      font-size:2.5em;
      font-weight: bolder;
    }
  }
  h3{
    &:hover{color:#e6005c;}
  }
`;

const UserLabel = styled.div`
  width: 100%;
  
`;


class LoginNav extends React.Component{

  user = {
    userName: "Login",
    navLink: "/login"
  }

  constructor(props) {
    super(props);
    this.state = {
      activePath: this.props.location.pathname
    }
    if (this.props.userName) {
      this.user.userName = this.props.userName;
      this.user.navLink = "/profile"
    }
    //const location = useLocation();
    console.log("ABC_______________-"+JSON.stringify(this.props));
    
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick = (to) => {
    this.setState({ activePath:  to });
  }

  render(){

    return(
      <Link to={this.user.navLink}  onClick={this.onItemClick}>
          <div className="fa fa-user"> &nbsp;&nbsp;{this.user.userName}</div>
      </Link>
    );

  }
}

const LoginNavigation = withRouter(LoginNav);



export default class HeadBar extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Styles>
        <Navbar style={{ height: "100%" }} expand="lg">
          <Navbar.Brand>
            <h1>MBS</h1>
            <h3>Marvellous Bussiness Security Plan</h3>
          </Navbar.Brand>
          <Nav className="ml-auto" >
            <LoginNavigation userName = {this.props.userName}/>
          </Nav>
        </Navbar>
      </Styles>
    );
  }
}