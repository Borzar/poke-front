import Link from 'next/link'
import Box from '@mui/material/Box'
import MessageIcon from '@mui/icons-material/Message'
import CachedIcon from '@mui/icons-material/Cached'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { SearchInput } from 'src/components/SearchInput'
import { useState } from 'react'
import { useFetchPokemon } from 'src/hooks'

export default function Home() {
  const [namePokemon, setNamePokemon] = useState('')
  const { loading, showData } = useFetchPokemon(namePokemon)

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
            <BuildCircleIcon sx={{ mr: 1 }} />
            <Link href='/settings'>
                Settings 
            </Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <CachedIcon sx={{ mr: 1 }} />
            <Link href='/favorites'>Favorites</Link>
          </Typography>
          <Typography sx={{ p: 1, mx: 'auto', display: 'flex' }}>
            <MessageIcon sx={{ mr: 1 }} />
            <Link href='/about'>About</Link>
          </Typography>
        </Paper>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <SearchInput setNamePokemon={setNamePokemon} />
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, ml: 2 }}>
            {showData &&
              showData.map((x) => (
                <Card sx={{ minWidth: 275, m: 2 }} key={x.name}>
                  <CardContent
                    sx={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <Typography
                      sx={{ mx: 'auto' }}
                      variant='h5'
                      component='div'
                    >
                      <Link href={`/pokemon/${x.name}`} underline='none'>
                        <a>{x.name}</a>
                      </Link>
                    </Typography>
                    <Typography variant='body2'></Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  )
}
