// HMR - HOT MODULE REPLACEMENT
// FILE WATCHER ALGORITH  - C++
// CLEANING OUR CODE BUNDLING
// SUPER FAST BUILD ALGORITHAM
// IMAGE OPTIMIZATION
// CACHING WHILE DEVELOPMENT
// COMPRESSION
// COMPATABLE WITH OLDER VERSION OF BROWSERS
// HTTPS ON DEVELOPMENT
// MANAGE PORT Number
// CONSISTENT HASHING ALGORITHAM
// ZERO CONFIG BUNDLER
// TRANSITIVE DEPENDENCIES



import React from "react";
import ReactDOM from "react-dom/client";

//  // heading 1
// const heading = React.createElement("h1",
// {
//     id:'title',
//     key: "h1",
// },
// "Heading 1");
//     // heading 2
// const heading2 = React.createElement("h2",
// {
//     id:'title',
//     key:"h2",
// },
// "Heading 2");

// const container = React.createElement("div",{
//     id:'container',
// },[heading,heading2]);    

// jsx
// react element
const Heading2 = (
<h1 title="heading" key="h2">hello react element</h1>
);

const Title = () =>{
    return <h1 title="heading" key="h2">hello functional component</h1>
}
    

// // component
//     - functional compoennts
//     - class based components
// Name of the Component started with Capital letter - it's not mandatory but it's the good practice

// react component
// composing components
const HeaderComponents = ()=>{
    return (
    <div>
    {Heading2}
    <Title/>
    <h1>Hello header 1</h1>
    <h2>Hello header 2</h2>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element inside the root
    // root.render(heading);
root.render(<HeaderComponents/>);
    