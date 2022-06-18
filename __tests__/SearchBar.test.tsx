import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

beforeEach(() => {
  render(<Home />);
});

describe('<Home/>', () => {
  it('Label text on Search input', () => {
    expect(screen.getByLabelText(/search by name/i)).toBeInTheDocument()
  })
  

})

