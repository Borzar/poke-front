import { render, screen } from '@testing-library/react'
import Menu from './Menu'

beforeEach(() => {
  render(<Menu />)
})

describe('<Menu />', () => {
  it('show settings on Menu', () => {
    expect(screen.getByRole('link', { name: 'Settings' })).toBeInTheDocument()
  })
  it('show favorites on Menu', () => {
    expect(screen.getByRole('link', { name: 'Favorites' })).toBeInTheDocument()
  })
  it('show about on Menu', () => {
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })
})
