import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Box } from '@mui/material'
import * as styleMui from './Message.styled'

export const MessageLeft = (props) => {
    const { message, photoURL, displayName } = props
    return (
        <>
            <styleMui.messageRow>
                <Avatar alt={displayName} src={photoURL}></Avatar>
                <Box sx={{ maxWidth: '60%' }}>
                    <styleMui.messageBlue>
                        <Box>
                            <styleMui.messageContent>
                                {message}
                            </styleMui.messageContent>
                        </Box>
                    </styleMui.messageBlue>
                </Box>
            </styleMui.messageRow>
        </>
    )
}

export const MessageRight = (props) => {
    const message = props.message ? props.message : 'no message'
    return (
        <styleMui.messageRowRight>
            <styleMui.messageOrange>
                <styleMui.messageContent>{message}</styleMui.messageContent>
            </styleMui.messageOrange>
        </styleMui.messageRowRight>
    )
}
