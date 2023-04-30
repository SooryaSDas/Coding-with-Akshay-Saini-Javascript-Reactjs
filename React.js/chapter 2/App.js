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

 // heading 1
const heading = React.createElement("h1",{
    id:'title',
},"Heading 1");
    // heading 2
const heading2 = React.createElement("h2",{
    id:'title',
},"Heading 2");
const container = React.createElement("div",{
    id:'container',
},[heading,heading2]);    
const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element inside the root
    // root.render(heading);
root.render(container);
    