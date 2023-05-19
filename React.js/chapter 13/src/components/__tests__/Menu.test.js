import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import RestaurantMenu from "../RestaurantMenu";
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { MENU_DATA } from "../../mocks/restauranttest";
import Header from "../Header"


global.fetch = jest.fn(()=>{
   return Promise.resolve({
        json: ()=>{return Promise.resolve(MENU_DATA);},
    });
});

test("Add item to card", async()=>{
   const body =  render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    );
 
     await waitFor(()=> expect(body.getByTestId("menu")));

     const addBtn = body.getByTestId("addBtn");

    fireEvent.click(addBtn[0]); 
    fireEvent.click(addBtn[2]); 
     const cart = body.getByTestId("cart");
     expect(cart.innerHTML).toBe(" Cart - 1 ");
 
 });