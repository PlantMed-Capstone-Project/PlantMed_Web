import { Box, styled } from '@mui/material'

export const Root = styled(Box)({
    display: 'grid',
    gridAutoRows: '100px 1fr',
    gridTemplateAreas: `"header" " main"`,
    minHeight: '100vh',
})

export const Header = styled(Box)({
    gridArea: 'header',
})

export const Main = styled(Box)({
    gridArea: 'main',
    minWidth: 'calc(100vw - 18px)',
})
