const { render,screen } = require("@testing-library/react")
import { Provider } from "react-redux"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load header comp with login button", () => {
    render(
        <BrowserRouter>
        <Provider store = {appStore}>
 <Header/>
        </Provider>
        </BrowserRouter>
    )

    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument();
})