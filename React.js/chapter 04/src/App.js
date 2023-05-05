import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
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

const AppLayout = ()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    )
}
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    