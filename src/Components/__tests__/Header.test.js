import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../header";
import store from "../../Utils/Store";
import { StaticRouter } from "react-router-dom/server";

// This code is a test that checks if the logo loads when the header is rendered. 
//It uses the render function to render the header component,
// which is wrapped in a StaticRouter and Provider components.
// The Provider component is given a store as a prop. 
//The test will check if the logo is loaded when the header is rendered.
test("Logo should load on redering header", () => {
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );
  //console.log("🚀 ~ file: Header.test.js:20 ~ test ~ header", header)

  const logo=header.getByTestId("logo")
  //console.log("🚀 ~ file: Header.test.js:23 ~ test ~ logo", logo)

  expect(logo.src).toBe("http://localhost/dummylogo.png")
});


test("Cart item should be 0 when redering header", () => {
  const header = render(
    <StaticRouter>
    <Provider store={store}>
      <Header />
    </Provider>
    </StaticRouter>
  );

  const logo=header.getByTestId("cart")

  expect(logo.innerHTML).toBe("0")
});
