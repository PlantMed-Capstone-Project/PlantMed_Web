import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'
import { Box, Typography } from '@mui/material'
const styles = {
    messageRow: {
        display: 'flex',
    },
    messageRowRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    messageBlue: {
        color: 'white',
        position: 'relative',
        marginLeft: '1.25rem',
        marginBottom: '0.625rem',
        padding: '0.625rem',
        backgroundColor: '#747474',
        textAlign: 'left',
        font: "400 .9em 'Open Sans', sans-serif",
        border: '0.063rem solid #747474',
        borderRadius: '0.625rem',
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '0',
            borderTop: '0.938rem solid #747474',
            borderLeft: '0.938rem solid transparent',
            borderRight: '0.938rem solid transparent',
            top: '0',
            left: '-0.938rem',
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '0',
            borderTop: '1rem solid #747474',
            borderLeft: '1rem solid transparent',
            borderRight: '1rem solid transparent',
            top: '-0.05rem',
            left: '-1rem',
        },
    },
    messageOrange: {
        color: 'white',
        position: 'relative',
        marginRight: '1.25rem',
        marginBottom: '0.625rem',
        padding: '0.625rem',
        backgroundColor: '#69AD28',
        maxWidth: '60%',
        textAlign: 'left',
        font: "400 .9em 'Open Sans', sans-serif",
        border: '0.063rem solid #69AD28',
        borderRadius: '0.625rem',
        '&:after': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '0',
            borderTop: '0.938rem solid #69AD28',
            borderLeft: '0.938rem solid transparent',
            borderRight: '0.938rem solid transparent',
            top: '0',
            right: '-1rem',
        },
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '0',
            borderTop: '1rem solid #69AD28',
            borderLeft: '1rem solid transparent',
            borderRight: '1rem solid transparent',
            top: '-0.05rem',
            right: '-1rem',
        },
    },

    messageContent: {
        padding: 0,
        margin: 0,
        wordWrap: 'break-word',
    },

    orange: {
        color: 'orange',
        backgroundColor: deepOrange[500],
    },
    avatarNothing: {
        color: 'transparent',
        backgroundColor: 'transparent',
    },
    displayName: {
        marginLeft: '1.25rem',
    },
}

export const MessageLeft = (props) => {
    const message = props.message
    const photoURL = props.photoURL
    const displayName = props.displayName
    return (
        <>
            <Box sx={styles.messageRow}>
                <Avatar
                    alt={displayName}
                    sx={styles.orange}
                    src={photoURL}
                ></Avatar>
                <Box sx={{ maxWidth: '60%' }}>
                    <Box sx={styles.messageBlue}>
                        <Box>
                            <Typography sx={styles.messageContent}>
                                {message}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export const MessageRight = (props) => {
    const message = props.message ? props.message : 'no message'
    return (
        <Box sx={styles.messageRowRight}>
            <Box sx={styles.messageOrange}>
                <Typography sx={styles.messageContent}>{message}</Typography>
            </Box>
        </Box>
    )
}
