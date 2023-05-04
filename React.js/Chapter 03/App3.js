import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
    - logo
    - Nav items(right side)
    - cart
Body
    - search bar
    - restaurant list
    - restaurant card
        - image
        - rating
        - name
        - cusine
Footer
    - links
    - copyright
*/


// react element
const Title = ()=>(
    <a href="/">
        <img className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" alt="logo" />
    </a>
);


// react component
// composing components
const Header = ()=>{
    return (
    <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

// config driven ui
const Burgerking = [
    {
        name : "AL Hayat Pallimukku",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yecbyuxar09vwq4gvpas",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key : "12"
    },
    {
        name : "Mahal Foods - Polayathod",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/p7mtkbiiv8jajydvjqf3",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key:"13"
    },
    {
        name : "Thaj Fast Food",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cm0s2quaew2qf2wz3uud",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key : "14"
    },
    {
        name : "Quilon Lunch Home",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yecbyuxar09vwq4gvpas",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key : "15"
    },
    {
        name : "Lekshmi Bakers",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/idyyiqhwrqwgd76m1mfo",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key : "16"
    },
    {
        name : "Burger Lounge",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ihdieablaqorjjtyiwd9",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key : "17"
    },
    {
        name : "AL Hayat Pallimukku",
        img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yecbyuxar09vwq4gvpas",
        cuisin : ["Arabian", "South Indian", "Chinese"],
        rating : 4.2,
        key : "18"
    },
    
];
                        // props -> object destructuring
                        // restaurant
const RestaurantCard = ({
   name, img, cuisin, rating
})=>{
    return(
        <div className="card">
            <img src={img} alt="image" />
            <h2>{name}</h2>
            <h3>{cuisin.join(", ")}</h3>
            <h4>{rating} stars</h4>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="Restaurantlist">
            {
                Burgerking.map((restaurant)=>{
                   return(
                    <RestaurantCard {...restaurant} key={restaurant.key}/>
                   )
                })
            }
            {/* <RestaurantCard {...Burgerking[1]}/>
            <RestaurantCard {...Burgerking[2]}/>
            <RestaurantCard {...Burgerking[3]}/>
            <RestaurantCard {...Burgerking[4]}/>
            <RestaurantCard {...Burgerking[5]}/>
            <RestaurantCard {...Burgerking[6]}/> */}
            {/* <RestaurantCard restaurant={Burgerking[6]}/> */}
            
        </div>
    )
};

const Footer = ()=>{
    return(
            <h2>Footer contents</h2>
    )
}

const AppLayout = ()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}

// const jsx = (   
//     <div style={{backgroundColor:"blue",color:"white"}}>
//         <h1>heading</h1>
//         <h2>heading2</h2>
//     </div>
// );
 
const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element inside the root
    // root.render(heading);
root.render(<AppLayout/>);
    