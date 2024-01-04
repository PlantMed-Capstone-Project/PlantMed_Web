import { ListItem } from '@mui/material'
import React from 'react'
import * as styleMui from '../MoreDetail.styled'

export default function MoreDetailList({ label, value }) {
    return (
        <ListItem sx={{display:"flex", alignItems:"flex-start"}}>
            <styleMui.Dot>•</styleMui.Dot>
            <styleMui.TextList> {label}: {value}</styleMui.TextList>
        </ListItem>
    )
}
