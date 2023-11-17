import { render, fireEvent, getAllByTestId } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ItemCard from "./ItemCard";
import { data } from "../store/products/__fixtures__/products";

function Product() {
  return (
    <div data-testid="mock-product-page">
      Content
    </div>
  );
}

describe("ItemCard", () => {
  test("render default", () => {
    const item = data.products[0];
    const { getByTestId, container } = render(
      <MemoryRouter initialEntries={["/products"]}>
        <Routes>
          <Route
            path="/products"
            element={
              <ItemCard
                data={item}
              />
            }
          />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </MemoryRouter>
    );

    const element = getByTestId("item-card-img");

    expect(element.src).toEqual("https://i.dummyjson.com/data/products/1/thumbnail.jpg");

    const link = container.querySelector("a[href=\"/products/1\"]");

    fireEvent.click(link);

    const page = getByTestId("mock-product-page");

    expect(page.textContent).toEqual("Content");
  });
});
