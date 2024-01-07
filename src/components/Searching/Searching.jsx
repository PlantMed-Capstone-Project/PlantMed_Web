import SearchIcon from '@mui/icons-material/Search';
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import * as styleMui from './Searching.styled';

function Searching({ setSearch }) {

    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleSearch = (event) => {
        setIsFocused(event.target.value !== '');
        setSearch(event.target.value)
    }

    return (
        <Stack
            mt="6.5rem"
            direction="column"
            alignItems="center"
            width="100%"
            sx={{ gap: "1.6rem" }}
        >
            <styleMui.Text>BẠN CẦN TÌM GÌ?</styleMui.Text>
            <styleMui.searchBar
                variant="outlined"
                onChange={handleSearch}
                onBlur={handleBlur}
                isforcus={isFocused}
                InputProps={{
                    endAdornment: (
                        <SearchIcon sx={{ color: '#69AD28', mr: 1, pointerEvents: 'none', height: "2.5rem", width: "2.5rem" }} />
                    ),
                }}
            />
        </Stack>
    )
}

export default Searching