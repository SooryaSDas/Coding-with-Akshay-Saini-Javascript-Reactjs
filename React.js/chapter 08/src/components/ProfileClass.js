import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
           this.state = {
            // count : 0,
            // count2 : 0
            userinfo:{
                name : "dummy name",
                location : "dummy location"
            }
           }
        console.log(" child constuctor"+ this.props.name);
    }

   async componentDidMount(){

        this.timer = setInterval(()=>{
            console.log("NAMASTHE REACT op");
        },1000);

        console.log("component did mount");

        // API Calls
        // console.log("child component did mount"+ this.props.name);
        // const data = await fetch("https://api.github.com/users/akshaymarch7");
        // const json = await data.json();
        // this.setState({
        //     userinfo: json,
        // })
    }
    // useEffect(()=>{

    // },[]) --> componentdidupdate is equal to an dependency array
    componentDidUpdate(prevProps, prevState){
        // if(this.state.count !== this.prevState.count || this.state.count2 !== this.prevState.count2){
        //     // statement
        // }
        // console.log("compoent did update");
      }
      componentWillUnmount(){
        clearInterval(this.timer)
        console.log("component will unmount");
      }

    render(){
        console.log("child render"+ this.props.name);
        return(
        <div>
            <h2>Profile Class Component</h2>
            {/* <img src={this.state.userinfo.avatar_url}></img>
            <h3>Name : {this.state.userinfo.name}</h3>
            <h3>Location : {this.state.userinfo.location}</h3>
            
            */}
            {/* <h3>Count : {this.state.count}</h3>
            <h3>Count2 : {this.state.count2}</h3> */}
            {/* <button onClick={()=>this.setState({
                count : 1, count2 : 1+1
            })}>click me</button> */}
        </div>
        )
    }
}

export default Profile