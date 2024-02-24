import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import CloseIcon from '@mui/icons-material/Close'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#1b1839',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white',
}

function ReportModal({ isOpen, setIsOpen, handleReport, checkBoxLabel }) {
    const handleClose = () => setIsOpen(false)
    const [checkedItem, setCheckedItem] = useState({})
    const handleCheckBoxChange = (label) => {
        setCheckedItem((prevCheckedItem) => ({
            ...prevCheckedItem,
            [label]: !prevCheckedItem[label],
        }))
    }
    const handleSend = () => {
        const checkedLabels = Object.keys(checkedItem).filter(
            (label) => checkedItem[label]
        )
        handleReport(checkedLabels)
        setCheckedItem({})
        handleClose()
    }
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        sx={{ fontWeight: 'bold', fontSize: '1.375rem' }}
                    >
                        Bạn muốn báo cáo vấn đề gì?
                    </Typography>
                    <CloseIcon
                        sx={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                        onClick={handleClose}
                    />
                    <FormGroup>
                        {checkBoxLabel.map((data) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={
                                            checkedItem[data.label] || false
                                        }
                                        onChange={() =>
                                            handleCheckBoxChange(data.label)
                                        }
                                        sx={{
                                            color: 'white',
                                            '&.Mui-checked': {
                                                color: 'green',
                                            },
                                        }}
                                    />
                                }
                                label={data.label}
                                ơ
                            />
                        ))}
                    </FormGroup>
                    <Button
                        onClick={handleSend}
                        variant="contained"
                        color="success"
                        sx={{
                            marginTop: '1.125rem',
                        }}
                    >
                        <Typography>Báo cáo</Typography>
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default ReportModal
