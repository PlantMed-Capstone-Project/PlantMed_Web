import React, { useState } from 'react'
import { Box } from '@mui/material'
import * as styleMui from './Message.styled'
import ImageModal from 'components/ImageModal'

export const MessageLeft = ({ message }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <styleMui.messageRow>
                <ImageModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    imgSrc={message}
                />
                {message.startsWith('https://firebasestorage') ? (
                    <Box
                        component="img"
                        src={message}
                        sx={{
                            width: 100,
                            height: 'auto',
                            marginLeft: '0.625rem',
                            borderRadius: 2,
                            cursor: 'pointer',
                        }}
                        onClick={handleOpen}
                    ></Box>
                ) : (
                    <Box sx={{ maxWidth: '60%' }}>
                        <styleMui.messageBlue>
                            <Box>
                                <styleMui.messageContent>
                                    {message}
                                </styleMui.messageContent>
                            </Box>
                        </styleMui.messageBlue>
                    </Box>
                )}
            </styleMui.messageRow>
        </>
    )
}

export const MessageRight = ({ message }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <styleMui.messageRowRight>
            <ImageModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                imgSrc={message}
            />
            {message.startsWith('https://firebasestorage') ? (
                <Box
                    component="img"
                    src={message}
                    sx={{
                        width: 100,
                        height: 'auto',
                        marginRight: '1.25rem',
                        borderRadius: 2,
                        cursor: 'pointer',
                    }}
                    onClick={handleOpen}
                ></Box>
            ) : (
                <styleMui.messageOrange>
                    <styleMui.messageContent>{message}</styleMui.messageContent>
                </styleMui.messageOrange>
            )}
        </styleMui.messageRowRight>
    )
}
