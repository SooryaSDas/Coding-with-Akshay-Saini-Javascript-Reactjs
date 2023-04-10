        // creating h1 Element
//  const heading = document.createElement("h1");
        // adding content 
//  heading.innerHTML = "Namasthe javascript";
//  const data = document.getElementById("root");
        // appended to root Element
//  data.appendChild(heading);
// const heading = React.createElement("h1",{
    //     id:'title',
    //     className : "class",
    //     style : {color:"brown"}
    // },"namasthe react");
    // {} --> all tag attributes come from this object

        // heading 1
        const heading = React.createElement("h1",{
            id:'title',
        },"Heading 1");
            // heading 2
        const heading2 = React.createElement("h2",{
            id:'title',
        },"Heading 2");
            // creating container div and pass headings to div.
            // <div>
            //     <h1></h1>
            //     <h2></h2>
            // </div> 
        const container = React.createElement("div",{
            id:'container',
        },[heading,heading2]);
    
        const root = ReactDOM.createRoot(document.getElementById("root"));
                // passing the react element inside the root
        // root.render(heading);
    
        root.render(container);
    