import React from 'react'
import User from './User'
import UserClass from './UserClass'


class About extends React.Component{
  constructor(props){
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount(){
    // console.log("parent component did mount");
}
  render() {
    // console.log("parent render");

    return(
      <div>       
        <h1>About page</h1>
        {/* <User name="sooryasdas function"/> */}
        <UserClass name={"sooryasdas class"} location = "Thiruvananthapuram"/> 
        {/* <UserClass name={"sandra class"} location = "attingal"/>        */}
      </div>
    )
  }
}


// const About = () => {
//   return (
//     <div>
//         <h1>About page</h1>
//         <User name="sooryasdas function"/>
//         <UserClass name={"sooryasdas class"} location = "Thiruvananthapuram"/>
//     </div>
//   )
// }

export default About