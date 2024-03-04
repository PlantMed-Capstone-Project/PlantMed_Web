import { Stack } from '@mui/material'
import HeroBlog from 'components/HeroBlog/HeroBlog'
import React from 'react'

export default function ApprovalPage() {
    return (
        <Stack direction="column" alignItems="center" sx={{ width: '100%' }}>
            <HeroBlog ApprovalPage />
        </Stack>
    )
}
