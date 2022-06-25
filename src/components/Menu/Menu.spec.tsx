import { render, screen } from '@testing-library/react'
import Menu from './Menu'

beforeEach(() => {
  render(<Menu />)
})

describe('<Menu />', () => {
  it('show settings on Menu', () => {
    expect(screen.getByText(/settings/i)).toBeInTheDocument()
  })
  it('show favorites on Menu', () => {
    expect(screen.getByText(/favorites/i)).toBeInTheDocument()
  })
  it('show about on Menu', () => {
    expect(screen.getByText(/about/i)).toBeInTheDocument()
  })
})
