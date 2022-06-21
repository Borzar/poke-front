import { useState } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'

export const SearchInput = ({ setSearch }) => {

  const [inputValue, setInputValue] = useState('')
	
  const onInputChange = ( { target } ) => {
    setInputValue(target.value)
  }

	const onSubmit = (e) => {
		e.preventDefault()
		if ( inputValue.trim().length <= 1) return  
		setSearch(inputValue)
		setInputValue('')
	}

	return (
		<>
			<form onSubmit={ onSubmit }>		
				<Paper sx={{ mb: 1, ml: 2, height: 'auto', display: 'flex' }}>
					<Stack sx={{ mt: 2, width: 0.5, mx: 'auto', flexDirection: 'row' }}>
						<TextField
							type='text'
							label='Search by name'
							size='small'
							sx={{ mx: 'auto', mb: 2 }}
							onChange={onInputChange}
							value={inputValue}
						/>
					</Stack>
				</Paper>
			</form>

		</>
	)
}
