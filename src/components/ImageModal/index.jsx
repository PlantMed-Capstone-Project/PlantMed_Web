import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
}

function ImageModal({ isOpen, setIsOpen, imgSrc }) {
    const handleClose = () => setIsOpen(false)

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        component="img"
                        src={imgSrc}
                        sx={{
                            width: 500,
                            height: 600,
                            objectFit: 'contain',
                        }}
                    ></Box>
                </Box>
            </Modal>
        </>
    )
}

export default ImageModal
