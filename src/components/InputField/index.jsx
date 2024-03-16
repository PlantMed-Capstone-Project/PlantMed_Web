import { InputAdornment } from '@mui/material'
import * as styleMui from './InputField.styled'

const InputField = ({
    type,
    icon,
    eyeIcon,
    placeholder,
    value,
    error,
    onChange,
    helperText,
    disabled,
    onKeyDown,
    height,
    fontSize,
}) => {
    return (
        <styleMui.Input
            placeholder={placeholder}
            autoComplete="off"
            size="small"
            value={value}
            error={error}
            onChange={onChange}
            onKeyDown={onKeyDown}
            helperText={helperText}
            margin="dense"
            type={type}
            disabled={disabled}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">{eyeIcon}</InputAdornment>
                ),
                style: {
                    height,
                    fontSize,
                },
            }}
        />
    )
}

export default InputField
