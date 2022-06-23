import Box from '@mui/material/Box'
import { SearchInput } from 'src/components/SearchInput'
import { TopBar } from 'src/components/TopBar'
import { Menu } from 'src/components/Menu'
import { useState } from 'react'
import { useFetchPokemon } from 'src/hooks'
import { PokemonGrid } from 'src/components/PokemonGrid'

export default function Home() {
  const [namePokemon, setNamePokemon] = useState('')
  const { loading, filterData } = useFetchPokemon(namePokemon)

  return (
    <>
      <TopBar />
      <Box sx={{ display: 'flex', mt: 10 }}>
        <Menu />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <SearchInput setNamePokemon={setNamePokemon} />
          <PokemonGrid 
            loading = {loading}
            filterData={filterData} />
        </Box>
      </Box>
    </>
  )
}
