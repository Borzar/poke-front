
import { render, screen } from "@testing-library/react";
import { SearchInput } from "./index";

describe('<SearchInput />', () => {
  it('show input in DOM', () => {
    render(<SearchInput />)
    expect(screen.getByLabelText(/search by name/i)).toBeInTheDocument()
})
})
