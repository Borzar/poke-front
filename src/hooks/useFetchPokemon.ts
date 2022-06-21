import { useEffect, useState } from 'react'

export const useFetchPokemon = ( search ) => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const getPokemon = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${search}?limit=151`
    const resp = await fetch(URL)
    const data = await resp.json()
    setPokemon(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return {
    pokemon,
    loading,
  }
}
