import React from 'react'
import * as styleMui from '../InforDetail.styled'
import { ListItem } from '@mui/material'

function InfoList({ label, value, screenSlide }) {
    return (
        <ListItem sx={{ width: screenSlide ? "37rem" : '100%', display: "flex", alignItems: "flex-start" }
        }>
            <styleMui.Dot>•</styleMui.Dot>
            <styleMui.TextList> {label}: {value}</styleMui.TextList>
        </ListItem >
    )
}

export default InfoList