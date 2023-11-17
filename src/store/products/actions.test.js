import { fetchProductsLoading, fetchProductsSuccess, fetchProductsFailure, fetchProducts } from "./actions";
import { data } from "./__fixtures__/products";
import { FETCH_PRODUCTS } from "./constants";

describe("products actions", () => {
  describe("action creators", () => {
    test("products loading", () => {
      const action = fetchProductsLoading();
      const expected = {
        type: FETCH_PRODUCTS
      };

      expect(action).toEqual(expected);
    });

    test("products success", () => {
      const action = fetchProductsSuccess(data.products);
      const expected = {
        type: FETCH_PRODUCTS,
        status: "success",
        payload: data.products
      };

      expect(action).toEqual(expected);
    });

    test("products failure", () => {
      const action = fetchProductsFailure();
      const expected = {
        type: FETCH_PRODUCTS,
        status: "failure",
        payload: []
      };

      expect(action).toEqual(expected);
    });
  });

  describe.skip("action thunk", () => {
    beforeEach(() => {
      fetch.resetMocks()
    });

    test("fetch products", async () => {
      fetch.mockResponseOnce(JSON.stringify(data));

      const dispatch = jest.fn();
      const res = await fetchProducts()(dispatch);
      const [url] = fetch.mock.calls[0];

      expect(url).toBe("https://dummyjson.com/products");

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls[0][0]).toHaveBeenCalledWith(fetchProductsLoading());
      expect(dispatch.mock.calls[1][0]).toHaveBeenCalledWith(fetchProductsSuccess(data.products));
    });
  });
});
