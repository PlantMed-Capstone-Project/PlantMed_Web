import React, { Fragment } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
function AlertDialog({
    openDialog,
    setOpenDialog,
    callBack,
    title,
    content,
    cancelButton,
    cancelTitle,
    closeTitle,
}) {
    const handleClose = () => {
        setOpenDialog(false)
    }

    const handleCallBack = () => {
        setOpenDialog(false)
        callBack()
    }

    return (
        <Fragment>
            <Dialog
                open={openDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {cancelButton && (
                        <Button onClick={handleCallBack}>{cancelTitle}</Button>
                    )}
                    <Button onClick={handleClose} autoFocus>
                        {closeTitle}
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default AlertDialog
