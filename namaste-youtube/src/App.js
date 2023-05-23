import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import {Provider} from "react-redux";
import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import DemoHooks from "./components/DemoHooks";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children : [
     {
       path : "/",
       element : <MainContainer/>
     },
     {
      path : "watch",
      element: <WatchPage/>
     },
     {
      path : "demo",
      element: 
      <>
      <DemoHooks/>
      <Demo2/>
      </>
     }
  ]
}])

function App() {  
  return (
    <Provider store = {store}>
      <div className="App">
        <Head/>
        <RouterProvider router = {appRouter}/>
      </div>
    </Provider>
  );
}

export default App;

/*
* Head
* Body
*   SideBar
*     MenuItems
*   MainContainer
*     ButtonList
*     Videocontainer
*     Videocard
*
*
*/
