import { render, screen } from '@testing-library/react'
import TopBar from './TopBar'

beforeEach(() => {
  render(<TopBar />)
})

describe('<TopBar />', () => {
  it('show Toolbar description on ToolBar', () => {
    expect(screen.getByText(/toolbar/i)).toBeInTheDocument()
  })
  it('show Login description on ToolBar', () => {
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
})
