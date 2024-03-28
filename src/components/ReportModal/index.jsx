import CloseIcon from '@mui/icons-material/Close'
import { FormControl, Radio, RadioGroup } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

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

function ReportModal({ isOpen, setIsOpen, handleReport, reportLabels }) {
    const handleClose = () => setIsOpen(false)
    const [reportId, setReportId] = useState('')

    const handleSend = () => {
        handleReport(reportId)
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
                        <FormControl>
                            <RadioGroup>
                                {reportLabels.map((data) => (
                                    <FormControlLabel
                                        value={data?.name}
                                        control={
                                            <Radio
                                                onClick={() =>
                                                    setReportId(data?.id)
                                                }
                                                sx={{
                                                    color: 'white',
                                                    '&.Mui-checked': {
                                                        color: 'green',
                                                    },
                                                }}
                                            />
                                        }
                                        label={data?.name}
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
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
