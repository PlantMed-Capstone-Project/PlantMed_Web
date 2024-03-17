import React, { useState } from 'react'
import { MenuItem, Autocomplete, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'

export default function MultipleSelect({ onChange }) {
    const { data } = useShallowEqualSelector((state) => state.plant)
    const [selectedValues, setSelectedValues] = useState([])

    const handleAutocompleteChange = (_, newValues) => {
        console.log(newValues)
        setSelectedValues(newValues.slice(0, 2))
        onChange(() => selectedValues.map((item) => item.id))
    }

    return (
        <Autocomplete
            sx={{ width: 500, marginBottom: '1.25rem' }}
            multiple
            id="tags-standard"
            options={Object.values(data)}
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
                    {selected && <CheckIcon color="info" />}
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
