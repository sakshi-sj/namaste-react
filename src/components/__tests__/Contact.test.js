import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("should load contact us comp", () => {
    render(<Contact/>);

    const heading = screen.getAllByRole("heading")
    expect(heading.length).toBe(2);
})
test("should load button us comp", () => {
    render(<Contact/>);

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
})
test("should load 2 input boxes", () => {
    render(<Contact/>);

    const input = screen.getAllByRole("textbox")
    expect(input.length).toBe(2);
})