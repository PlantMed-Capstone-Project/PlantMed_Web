import SearchIcon from '@mui/icons-material/Search'
import { Stack } from '@mui/material'
import * as styleMui from './Searching.styled'
import { formatText } from 'utils'

function Searching({ setSearch }) {
    const handleSearch = (event) => {
        setSearch(formatText(event.target.value))
    }

    return (
        <Stack
            mt="6.5rem"
            direction="column"
            alignItems="center"
            width="100%"
            sx={{ gap: '1.6rem' }}
        >
            <styleMui.Text>BẠN CẦN TÌM GÌ?</styleMui.Text>
            <styleMui.searchBar
                variant="outlined"
                onChange={handleSearch}
                InputProps={{
                    endAdornment: (
                        <SearchIcon
                            sx={{
                                color: '#69AD28',
                                mr: 1,
                                pointerEvents: 'none',
                                height: '50%',
                                width: '2.5rem',
                            }}
                        />
                    ),
                }}
            />
        </Stack>
    )
}

export default Searching
