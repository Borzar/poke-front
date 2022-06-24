import { useEffect, useState } from 'react'

export const useFetchPokemon = (namePokemon: string) => {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const getPokemon = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${namePokemon}?limit=151`
    const resp = await fetch(URL)
    const data = await resp.json()
    setPokemon(data.results)
    setLoading(false)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  const filterData:string[] = !namePokemon
    ? pokemon
    : pokemon.filter((x) =>
        x.name.toLowerCase().includes(namePokemon.toLowerCase())
      )

  return {
    loading,
    filterData,
  }
}
