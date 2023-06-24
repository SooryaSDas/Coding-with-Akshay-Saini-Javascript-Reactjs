import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            // count : 0,
            // count2 : 2,
            userInfo:{
                name : "Dummy",
                location : "default"
            }
        };
        // console.log("child consturctor");
    }

    async componentDidMount(){
        // console.log("child component did mount");
        const data = await fetch("https://api.github.com/users/SooryaSDas");
        const json = await data.json();
        this.setState({
            userInfo : json,
        });
        // console.log(json);
        this.timer = setInterval(()=>{
            console.log("NAMASTE REACT ");
        },1000)
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(this.state.count === prevState.count)
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
        clearInterval(this.timer);
    }


    render(){
        // const {name , location} = this.props;
        // const {count,count2} = this.state;
        // console.log("child render");
        const {name , location} = this.state.userInfo;

        return (
            <div className="user-card">
                {/* <h2>Count : {count}</h2>
                <h2>Count2 : {count2}</h2>
                <button onClick={()=> {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>Click here for increases</button>

                <button onClick={()=> {
                    // NEVER UPDATE STATE VARIABLES DIRECTLY
                    this.setState({
                        count : this.state.count - 1,
                    })
                }}>Click here for decrease</button> */}
            
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
            </div>
        )
    }
}

export default UserClass;