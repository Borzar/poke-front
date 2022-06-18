import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([])

  const router = useRouter()
  const { name } = router.query

  useEffect(() => {
    fetchPokemonByName()
  }, [])

  const fetchPokemonByName = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    setPokemon(data)
  }

  return (
    <>
      {/* AGREGAR CONDICIONAL PARA MOSTRAR LA DATA */}
      <Card sx={{ width: 600, mx: 'auto' }}>
        <CardContent>
          <Typography variant='h5'>{pokemon.name}</Typography>
          <Typography>ID: {pokemon.id}</Typography>
          <Typography>Height: {pokemon.height}</Typography>
          <Typography>Weight: {pokemon.weight}</Typography>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          />
        </CardContent>
      </Card>
    </>
  )
}

export default PokemonPage
