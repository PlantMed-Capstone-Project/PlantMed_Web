import { Box, styled } from '@mui/material'

export const Root = styled(Box)({
    display: 'grid',
    gridAutoRows: '100px 1fr 55px',
    gridTemplateAreas: `"header" " main" " footer"`,
    minHeight: '100vh',
})

export const Header = styled(Box)({
    gridArea: 'header',
})

export const Main = styled(Box)({
    gridArea: 'main',
    minWidth: '100vh',
})

export const Footer = styled(Box)({
    gridArea: 'footer',
    // width: 'calc(100vw - 17px)',
})
