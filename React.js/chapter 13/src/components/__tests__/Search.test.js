import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import Body from "../Body"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/restauranttest";
import Shimmer from "../Shimmer"

global.fetch = jest.fn(()=>{
   return Promise.resolve({
        json: ()=>{return Promise.resolve(RESTAURANT_DATA);},
    });
});

test("shimmer should load on homepage",()=>{
   const body =  render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
    // console.log(shimmer);

});

test("Restaurant should load on homepage",async ()=>{
    const body =  render(
         <StaticRouter>
             <Provider store={store}>
                 <Body/>
             </Provider>
         </StaticRouter>
     );

     await waitFor(()=> expect(body.getByTestId("search-btn")));
 
     const reslist = body.getByTestId("res-list");
     expect(reslist.children.length).toBe(15);
    //  console.log(reslist);
 
 });

 test("Search for string load on homepage",async ()=>{
    const body =  render(
         <StaticRouter>
             <Provider store={store}>
                 <Body/>
             </Provider>
         </StaticRouter>
     );

     await waitFor(()=> expect(body.getByTestId("search-btn")));

     fireEvent.change(input,{
        target : {
            value : "food",  // e.target.value
        },
     });
     const searchbtn = body.getByTestId("search-btn");
     fireEvent.click(searchbtn);

     const reslist = body.getByTestId("res-list");
     expect(reslist.children.length).toBe(3);
 
 });