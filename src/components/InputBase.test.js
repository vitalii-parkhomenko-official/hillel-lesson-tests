import { render, fireEvent } from "@testing-library/react";
import InputBase from "./InputBase";

describe("InputBase", () => {
  test("render default", () => {
    const { getByTestId } = render(
      <InputBase
        id="search"
        name="params.search"
        placeholder="Search"
      />
    );

    const element = getByTestId("input-base");

    expect(element.className).toEqual("form-control")
    expect(element.placeholder).toEqual("Search")
  });

  test("call on change", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputBase
        id="search"
        name="params.search"
        placeholder="Search"
        onChange={onChange}
      />
    );

    const element = getByTestId("input-base");

    fireEvent.change(element, { target: { value: "iphone" } });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
