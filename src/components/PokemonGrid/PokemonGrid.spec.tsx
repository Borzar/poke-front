
import { render, screen } from '@testing-library/react'
import PokemonGrid from './PokemonGrid'

describe('<PokemonGrid />', () => {
  it('should show loading initially', async () => {
    const loading = true
    render(<PokemonGrid loading={loading} />)
    expect(await screen.findByText(/cargando.../i)).toBeInTheDocument()
  })
})
