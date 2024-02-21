import React, { useState } from 'react'
import { MenuItem, Autocomplete, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

// read from storage after
const names = [
    { id: 1, name: 'Dinh huong' },
    { id: 2, name: 'Bạc hà' },
    { id: 3, name: 'Câu cầu tử' },
    { id: 4, name: 'Cần sa' },
    { id: 5, name: 'Đinh lăng' },
]

export default function MultipleSelect({ onChange }) {
    const [selectedValues, setSelectedValues] = useState([])

    const handleAutocompleteChange = (_, newValues) => {
        setSelectedValues(newValues.slice(0, 2))
        const selectId = selectedValues.map((item) => item.id)
        onChange(selectId)
    }

    return (
        <Autocomplete
            sx={{ m: 1, width: 500 }}
            multiple
            id="tags-standard"
            options={Object.values(names)}
            getOptionLabel={(option) => option.name}
            value={selectedValues}
            onChange={handleAutocompleteChange}
            disableCloseOnSelect
            limitTags={2} // Limits the displayed tags to 2
            renderOption={(props, option, { selected }) => (
                <MenuItem
                    key={option.id}
                    value={option}
                    sx={{ justifyContent: 'space-between' }}
                    {...props}
                >
                    {option.name}
                    {selected ? <CheckIcon color="info" /> : null}
                </MenuItem>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Chọn chủ đề"
                    placeholder="Tìm kiếm chủ đề"
                />
            )}
        />
    )
}
