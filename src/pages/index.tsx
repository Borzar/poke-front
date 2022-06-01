import Box from '@mui/material/Box'
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
  }, [])

  // ASYNC AWAIT
  const fetchDataByPage = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0`
      )
      const data = await response.json()
      setShowData(data.results)
      console.log(data.results)
    } catch (e) {
      console.log(`error: ${e}`)
    }
  }

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: 'rgb(	240,248,255)' }}>
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
            width: 0.2,
            mb: 'auto',
            mx: 'auto',
          }}
        >
          <Typography sx={{ p: 1, mx: 'auto', textAlign: 'center' }}>
            <BungalowIcon sx={{ mr: 1 }} />
            opcion 1
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', textAlign: 'center' }}>
            <BuildCircleIcon sx={{ mr: 1 }} />
            opcion 2
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', textAlign: 'center' }}>
            <CachedIcon sx={{ mr: 1 }} />
            opcion 3
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', textAlign: 'center' }}>
            <MessageIcon sx={{ mr: 1 }} />
            opcion 4
          </Typography>
        </Paper>
          <TableContainer component={Paper} sx={{ ml: 2 }}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>PM</TableCell>
                  <TableCell>Url</TableCell>
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
    </>
  )
}
