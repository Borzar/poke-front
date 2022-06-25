import Link from 'next/link'
import MessageIcon from '@mui/icons-material/Message'
import CachedIcon from '@mui/icons-material/Cached'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const Menu = () => {
  return (
    <>
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
          <Link href='/settings'>Settings</Link>
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
    </>
  )
}

export default Menu
