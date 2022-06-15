import { Card as MCard } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Card = () => {
	return (
		<MCard sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					asdfasdfas
				</Typography>
				<Typography variant='h5' component='div'>
					asdfasd
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					adsffa
				</Typography>
				<Typography variant='body2'>
					adsfas
				</Typography>
			</CardContent>
			<CardActions>
			</CardActions>
		</MCard>
	)
}

export default Card
