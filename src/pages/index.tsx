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
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'

export default function Home() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

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
          <TableContainer component={Paper} sx={{ ml: 2, width: 'auto' }}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>PM</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>URL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {showData &&
                  showData.map((d) => (
                    <TableRow
                      key={d.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        {d.name}
                      </TableCell>
                      <TableCell>{d.url}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  )
}
