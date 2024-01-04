import React from 'react'
import * as styleMui from '../InforDetail.styled'
import { ListItem } from '@mui/material'

function InfoList({ label, value }) {
    return (
        <ListItem sx={{ width: "37rem", display: "flex", alignItems: "flex-start" }
        }>
            <styleMui.Dot>•</styleMui.Dot>
            <styleMui.TextList> {label}: {value}</styleMui.TextList>
        </ListItem >
    )
}

export default InfoList