import Link from 'next/link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const PokemonGrid = ({ filterData, loading }) => {
  return (
    <>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, ml: 2 }}>
        {loading && <h2>Cargando...</h2>}
        {filterData &&
          filterData.map((x) => (
            <Card sx={{ minWidth: 275, m: 2 }} key={x.name}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ mx: 'auto' }} variant='h5' component='div'>
                  <Link href={`/pokemon/${x.name}`} underline='none'>
                    <a>{x.name}</a>
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          ))}
      </Box>
    </>
  )
}
