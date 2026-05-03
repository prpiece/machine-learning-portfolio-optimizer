import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the project title", () => {
    render(<Home />);
    const heading = screen.getByText(/Machine Learning Portfolio Optimizer/i);
    expect(heading).toBeInTheDocument();
  });
});
