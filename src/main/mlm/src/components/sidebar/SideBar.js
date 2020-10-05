import React from 'react';
import './SideBar.css';
import styled from 'styled-components';
import NavItems from './NavItems'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import logo from './icon1.png';

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 25%;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  /*top: 3.4em; */     /* Stay at the top */
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(0,13,26,1));
  /*overflow-x: hidden;*/     /* Disable horizontal scroll */
  //opacity:0.9;
  box-shadow: 1px 1px 10px #000d1a;
`;

const NavItemsContainer = styled.div`
    width: 100%;
    height: 20%;
`;

const containerstyle = {
    width: '100%',
} ;


const AppIcon = styled.div`
    width: 100%;
    height:55%;
    padding 3%
    
`;

const NavLinks = styled.div`
width: 100%;
height: 45%;
overflow-x:hidden;
overflow-y: scroll;
//background-color: #000d1a; /* Black */
`;

class Icon extends React.Component{
    render(){
        return(
            <img src={logo} style={{ width:'100%', height:'100%'}} alt="Logo" />
        );
    }
}

class SideNav extends React.Component {

    constructor(props) {
        super(props);
        console.log("Recieved from parent: "+props.userLoggedIn);
        this.state = {
            activePath: props.location.pathname,
            items: (this.props.userLoggedIn)? [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Dashboard',
                    value: 'Dashboard',
                    css: 'fa fa-tasks',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },{
                    path: '/add-member',
                    name: 'Add Member',
                    value: 'add-member',
                    css: 'fa fa-user-plus',
                    key: 2
                },
                {
                    path: '/earnings',
                    name: 'My Earnings',
                    value: 'earnings',
                    css: 'fa fa-trophy',
                    key: 3
                },
                {
                    path: '/about',
                    name: 'About',
                    value: 'About',
                    css: 'fa fa-book',
                    key: 4
                },{
                    path: '/contact',
                    name: 'Contact Us',
                    value: 'Contact',
                    css: 'fa fa-address-card',
                    key: 5
                },
            ] : [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    value: 'Home',
                    css: 'fa fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                }, {
                    path: '/join',
                    name: 'How To join',
                    value: 'How to join',
                    css: 'fa fa-users ',
                    key: 2
                },
                {
                    path: '/packages',
                    name: 'Packages',
                    value: 'About',
                    css: 'fa fa-suitcase',
                    key: 3
                },
                {
                    path: '/about',
                    name: 'About',
                    value: 'About',
                    css: 'fa fa-book',
                    key: 4
                },{
                    path: '/contact',
                    name: 'Contact Us',
                    value: 'Contact',
                    css: 'fa fa-address-card',
                    key: 5
                },
            ]
        }
        
    }

    onItemClick = (path) => {
        console.log("Path-------------------"+path);
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }

    render() {
        const { items, activePath } = this.state;


        return (
            <StyledSideNav>
                
            <AppIcon>
                <Icon></Icon>
            </AppIcon>
            <NavLinks>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItems path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} style={{ width: '100%' }} ></NavItems>
                        )
                    })
                }
            </NavLinks>
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

class SideBar extends React.Component {
    constructor(props){super(props);}
    render() {
        return (
            <RouterSideNav userLoggedIn={this.props.userLoggedIn}></RouterSideNav>
        );
    }
}

export default SideBar;