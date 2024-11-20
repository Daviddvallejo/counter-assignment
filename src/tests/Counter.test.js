import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";



beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const message = screen.getByText(/counter/i);
  expect(message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const count = screen.getByTestId("count");
  expect(count).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  const increment = screen.getByText("+");
  const count = screen.getByTestId("count");
  userEvent.click(increment);
  expect(count).toHaveTextContent("1");
  userEvent.click(increment);
  expect(count).toHaveTextContent("2");
});

test('clicking - decrements the count', () => {
  const decrement = screen.getByText("-");
  const count = screen.getByTestId("count");
  userEvent.click(decrement);
  expect(count).toHaveTextContent("-1");
  userEvent.click(decrement);
  expect(count).toHaveTextContent("-2");
});
