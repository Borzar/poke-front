import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded'
import Link from 'next/link'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
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
import { GetStaticProps } from 'next'

export default function Home() {
  const [showData, setShowData] = useState(false)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState()

  useEffect(() => {
    fetchDataByPage()
  }, [page])

  useEffect(() => {
    const fetchDataByInput = async () => {
      try {
        const responseInput = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${search}`
        )
        const dataInput = await responseInput.json()
        console.log(dataInput)
      } catch (e) {
        console.log(e)
      }
    }
    fetchDataByInput()
  }, [search])

  const fetchDataByPage = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page * 2}0`
      )
      const data = await response.json()
      setShowData(data.results)
    } catch (e) {
      console.log(`error: ${e}`)
    }
  }

  const handleNextTenPages = () => {
    if (page > 45) return
    setPage(page + 10)
  }
  const handlePrevTenPages = () => {
    if (page < 10) return
    setPage(page - 10)
  }
  const handlePrevPage = () => {
    if (page < 1) return
    setPage(page - 1)
  }
  const handleNextPage = () => {
    if (page > 55) return
    setPage(page + 1)
  }

  const handleResetPage = () => {
    setPage((page = 0))
  }

  const handleInputSearch = (e) => {
    e.preventDefault
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
            <Link href='/opcion1'>opcion 1</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <BuildCircleIcon sx={{ mr: 1 }} />
            <Link href='/opcion2'>opcion 2</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <CachedIcon sx={{ mr: 1 }} />
            <Link href='/opcion3'>opcion 3</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <MessageIcon sx={{ mr: 1 }} />
            <Link href='/opcion4'>opcion 4</Link>
          </Typography>
        </Paper>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Paper sx={{ mb: 1, ml: 2, height: 'auto', display: 'flex' }}>
            <Stack sx={{ mt: 2, width: 0.5, mx: 'auto', flexDirection: 'row' }}>
              <Button
                variant='outlined'
                size='small'
                sx={{ mb: 2, mr: 3 }}
                onClick={handlePrevTenPages}
                startIcon={<KeyboardDoubleArrowLeftRoundedIcon />}
              >
                10
              </Button>
              <Button
                variant='outlined'
                size='small'
                sx={{ mr: 3, mb: 2 }}
                onClick={handlePrevPage}
                endIcon={<KeyboardArrowLeftRoundedIcon />}
              ></Button>
              {page}
              <Button
                variant='outlined'
                size='small'
                sx={{ ml: 3, mb: 2 }}
                onClick={handleNextPage}
                startIcon={<KeyboardArrowRightIcon />}
              ></Button>
              <Button
                variant='outlined'
                size='small'
                sx={{ ml: 3, mb: 2 }}
                onClick={handleNextTenPages}
                endIcon={<KeyboardDoubleArrowRightIcon />}
              >
                10
              </Button>
              <Button
                color='info'
                variant='contained'
                size='small'
                sx={{ ml: 3, mb: 2 }}
                onClick={handleResetPage}
              >
                Clear
              </Button>
            </Stack>
            <TextField
              label='Search by name'
              size='small'
              sx={{ mt: 1, width: 0.2, mx: 'auto' }}
              onChange={handleInputSearch}
            />
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
                  showData.map((data) => (
                    <TableRow
                      key={data.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component='th' scope='row'>
                        {data.name}
                      </TableCell>
                      <TableCell>{data.url}</TableCell>
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
// Funcion que es ejecutada del lado del servidor, en el build time.
// Esta funcion solo se va a ser usada cuando podamos saber de antemano
// que estos son los parametros que esta pagina nececita.
// Por ejemplo: en esta pagina mostraremos 150 pokemons entonces de
// antemano se cargan estos pokemons para que cuando se haga el build
// de la aplicacion esos 150 pokemons sean parte de la peticion del
// html que estamos regresando. No se haran peticiones adicionales
// al cliente, el cliente apenas carge la pagina, esta pagina ya vendra
// con toda la informacion pre insertados. Esta pre insercion ocurre a
// la hora de construir la aplicacion.

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      // props que llegan a este componente Home como props
    },
  }
}
