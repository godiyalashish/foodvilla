import { getByTestId, render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU } from "../../mocks/dummyData";
import "@testing-library/jest-dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import MenuItem from "../MenuItem";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(RESTAURANT_MENU)}
    })
})

test("cart Items should change on adding item to cart", async() => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <MenuItem/>
        </Provider>
      </StaticRouter>
    );

     await waitFor(() => expect(body.getByTestId("rest-menu")));
    const btn = body.getAllByTestId("addItem");
    fireEvent.click(btn[0]);
    const cart = body.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-1");
})