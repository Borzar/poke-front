import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

beforeEach(() => {
  render(<Home />);
});

describe('<Home/>', () => {
  it('Login text in toolbar', () => {
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
  it('Toolbar text in toolbar', () => {
    expect(screen.getByText(/toolbar/i)).toBeInTheDocument()
  })
})

