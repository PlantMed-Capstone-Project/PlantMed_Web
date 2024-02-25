import { Alert, Snackbar } from '@mui/material'
import { snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import React from 'react'

const CustomSnackbar = () => {
    const snackbar = useShallowEqualSelector((state) => state.snackbar)
    const { open, severity, message, autoHideDuration } = snackbar
    const { hide } = useActions(snackbarAction)

    const handleClose = () => {
        hide()
    }

    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            autoHideDuration={autoHideDuration}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
        >
            <Alert variant="filled" onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackbar
