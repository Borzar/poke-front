import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

beforeEach(() => {
  render(<Home />);
});

describe('<Home />', () => {
  it('Menu Opcion 1', () => {
    expect(screen.getByText(/opcion 1/i)).toBeInTheDocument()
  })
  it('Menu Opcion 2', () => {
    expect(screen.getByText(/opcion 2/i)).toBeInTheDocument()
  })
  it('Menu Opcion 3', () => {
    expect(screen.getByText(/opcion 3/i)).toBeInTheDocument()
  })
  it('Menu Opcion 4', () => {
    expect(screen.getByText(/opcion 4/i)).toBeInTheDocument()
  })
})
