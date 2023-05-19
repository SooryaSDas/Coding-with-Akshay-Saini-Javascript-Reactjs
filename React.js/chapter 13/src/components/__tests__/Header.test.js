const { render } = require("@testing-library/react")
import Header from "../Header"; // for testing header
import { Provider } from "react-redux"; // we using useselector in header (react-redux)
import store from "../../utils/store"; // importing store
import {StaticRouter} from "react-router-dom/server"; // for routing purpose


test("Logo should load on rendering header", ()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}> 
            <Header/>
        </Provider>
        </StaticRouter>
    );
    // console.log(header);
        // find logo
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("online status should online in render", ()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}> 
            <Header/>
        </Provider>
        </StaticRouter>
    );
        // find online or not
    const onlinestatus = header.getByTestId("online-status");
    expect(onlinestatus.innerHTML).toBe(" online ");
});

test("cart should have 0 item in render", ()=>{
    const header = render(
        <StaticRouter>
        <Provider store={store}> 
            <Header/>
        </Provider>
        </StaticRouter>
    );
        // find cart should have 0 items or not
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe(" Cart- 0 ");
});