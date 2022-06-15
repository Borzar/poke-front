import Link from 'next/link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import MessageIcon from '@mui/icons-material/Message'
import CachedIcon from '@mui/icons-material/Cached'
import BungalowIcon from '@mui/icons-material/Bungalow'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export default function Home() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')
  //const [id, setId] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const showData = !search
    ? pokemon
    : pokemon.filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))

  const fetchData = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${search}?limit=151`
      const resp = await fetch(url)
      const data = await resp.json()
      setPokemon(data.results)
    } catch (e) {
      console.log(`error: ${e}`)
    }
  }

  //const fetchDataById = async () => {
    //try {
      //const url = `https://pokeapi.co/api/v2/pokemon/${id}`
      //const resp = await fetch(url)
      //const data = await resp.json()
      //setId(getId)
    //} catch (e) {
      //console.log(`error: ${e}`)
    //}
  //}
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: 'rgb(240,248,255)' }}>
          <Toolbar>
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, color: 'rgb(0,0,0)' }}
            >
              Toolbar
            </Typography>
            <Button sx={{ color: 'rgb(0,0,0)' }} color='inherit'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ display: 'flex', mt: 10 }}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 0.15,
            mb: 'auto',
            mx: 'auto',
          }}
        >
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <BungalowIcon sx={{ mr: 1 }} />
            <Link href='/opcion1'>Home</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <BuildCircleIcon sx={{ mr: 1 }} />
            <Link href='/opcion2'>Settings</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <CachedIcon sx={{ mr: 1 }} />
            <Link href='/opcion3'>Favorites</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <MessageIcon sx={{ mr: 1 }} />
            <Link href='/opcion4'>About</Link>
          </Typography>
        </Paper>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Paper sx={{ mb: 1, ml: 2, height: 'auto', display: 'flex' }}>
            <Stack sx={{ mt: 2, width: 0.5, mx: 'auto', flexDirection: 'row' }}>
              <TextField
                type='text'
                label='Search by name'
                size='small'
                sx={{ mx: 'auto', mb: 2 }}
                onChange={handleSearch}
                value={search}
              />
            </Stack>
          </Paper>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, ml: 2 }}>
            {showData &&
              showData.map((x) => (
                <Card sx={{ minWidth: 275, m: 2}} key={x.name} >
                  <CardContent
                    sx={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <Typography sx= {{ mx: 'auto' }}variant='h5' component='div'>
                      {x.name}
                    </Typography>
                    <Typography variant='body2'>{x.url}</Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
