import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("render default", () => {
    const { getByTestId } = render(
      <Button>
        Test
      </Button>
    );

    const btn = getByTestId("button");

    expect(btn.tagName).toEqual("BUTTON");
    expect(btn.type).toEqual("button");
    expect(btn.className).toMatch("btn btn-primary");
    expect(btn.textContent).toEqual("Test");
  });

  test("render snapshot", () => {
    const { getByTestId } = render(
      <Button>
        Test
      </Button>
    );

    const btn = getByTestId("button");

    expect(btn).toMatchSnapshot();
  });

  test("render secondary", () => {
    const { getByTestId } = render(
      <Button variant="secondary">
        Test
      </Button>
    );

    const btn = getByTestId("button");

    expect(btn.tagName).toEqual("BUTTON");
    expect(btn.type).toEqual("button");
    expect(btn.className).toEqual("btn btn-secondary");
  });

  test("render with custom class", () => {
    const { getByTestId } = render(
      <Button className="ms-3">
        Test
      </Button>
    );

    const btn = getByTestId("button");

    expect(btn.tagName).toEqual("BUTTON");
    expect(btn.type).toEqual("button");
    expect(btn.className).toEqual("btn btn-primary ms-3");
  });

  test("call on click", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClick}>
        Test
      </Button>
    );

    const btn = getByTestId("button");

    fireEvent.click(btn);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
