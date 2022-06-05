import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded'
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

export default function Home() {
  const [showData, setShowData] = useState(false)
  const [page, setPage] = useState(0)

  useEffect(() => {
    fetchDataByPage()
  }, [page])

  const fetchDataByPage = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${page * 2}0`
      )
      const data = await response.json()
      setShowData(data.results)
      console.log(data.results)
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
            opcion 1
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <BuildCircleIcon sx={{ mr: 1 }} />
            opcion 2
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <CachedIcon sx={{ mr: 1 }} />
            opcion 3
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <MessageIcon sx={{ mr: 1 }} />
            opcion 4
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
