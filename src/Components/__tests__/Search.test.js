import "@testing-library/jest-dom";
import Body from "../body";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { RESTAURANT_DATA } from ".././mocks/data";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import store from "../../Utils/Store";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});
test("Shimmer should load On Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
});

test("Restaurant should load On Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => {
    expect(body.getByTestId("searchBtn"));
  });

  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("Search for string(food) on home page", async () => {
  const body = render(

 <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => {
    expect(body.getByTestId("searchBtn"));
  });

  const input = body.getByTestId("search-input");

//This code is used to simulate a change event on an input element. 
//It will set the value of the input to "food". The first argument is the input element, and the second argument is an object containing the target and value properties.
  fireEvent.change(input, { target: { value: "food" } });

  const searchbtn=body.getByTestId("searchBtn");
  fireEvent.click(searchbtn);

  const resList=body.getByTestId("res-list");

  expect(resList.children.length).toBe(1)
});
