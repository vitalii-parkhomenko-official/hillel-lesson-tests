import { getList, getItem } from "./api";
import { data } from "./__fixtures__/products"

describe("api products", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("get list", async () => {
    fetch.mockResponseOnce(JSON.stringify(data));

    const res = await getList();
    const [url] = fetch.mock.calls[0];

    expect(res).toEqual(data.products);
    expect(url).toBe("https://dummyjson.com/products");
  });

  test("get item", async () => {
    fetch.mockResponseOnce(JSON.stringify(data.products[0]));

    const res = await getItem({ id: "1" });
    const [url] = fetch.mock.calls[0];

    expect(res).toEqual(data.products[0]);
    expect(url).toBe("https://dummyjson.com/products/1");
  });
});
