import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("logo should load on rendering", () => {
  //load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //check if logo loaded
  const logo = header.getAllByTestId("logo");
  expect(logo[0].src).toBe("http://localhost/dummy.png")
});


test("Status should be online on rendering header", () => {
    //load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    //check if status is online
    const isOnline = header.getByTestId("isOnline-status");
    expect(isOnline.innerHTML).toBe("✅")
  });

  test("Cart set to zero rendering header", () => {
    //load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
  
    //check if cart is set to zero
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0")
  });
