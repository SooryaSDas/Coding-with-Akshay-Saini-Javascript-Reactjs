import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileFunctionalComponent from './Profile'
import Profile from './ProfileClass'
import { render } from 'react-dom';
import userContext from '../utils/userContext';

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("constructor console");
  }

  componentDidMount(){
    // best place to make an API call
    console.log("component did mount console");
  }

  render(){
    console.log("render");
    
    return(
      <div>
        <userContext.Consumer>
          {
            ({user}) =>(
              <h4>{user.name}</h4>
            )
          }
        </userContext.Consumer>
        <h2> about page </h2>
        {/* <ProfileFunctionalComponent name={"Soorya"}/> */}
        <Profile name={"First child"} xyz= "abc"/>
        {/* <Profile name={"Second Child"} xyz = "abc"/> */}
      </div>
    )
  }
}


export default About

// parent constructor
// parent render
    // First child consturctor
    // First child render
    // Second child constructor
    // Second child render
// ****DOM UPDATION *********

    // First child component
    // Second child component
// Parent componentdidmount 

// https://api.github.com/users/akshaymarch7
