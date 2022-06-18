import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

beforeEach(() => {
  render(<Home />);
});

describe('<Home/>', () => {
  it('show Home on menu', () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
  it('show Settings on menu', () => {
    expect(screen.getByText(/settings/i)).toBeInTheDocument()
  })
  it('show Favorites on menu', () => {
    expect(screen.getByText(/favorites/i)).toBeInTheDocument()
  })
  it('show About on menu', () => {
    expect(screen.getByText(/about/i)).toBeInTheDocument()
  })
})

