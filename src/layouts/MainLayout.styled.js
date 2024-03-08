import { Box, styled } from '@mui/material'

export const Root = styled(Box)({
    display: 'grid',
    gridAutoRows: '100px 1fr',
    gridTemplateAreas: `"header" "main" "footer"`,
    minHeight: '100vh',
})

export const Header = styled(Box)({
    gridArea: 'header',
    minWidth: '100%',
})

export const Main = styled(Box)(({ chekcOverflow }) => ({
    gridArea: 'main',
    width: '100%',
    overflowY: chekcOverflow ? 'unset' : 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}))

export const Footer = styled(Box)({
    gridArea: 'footer',
    minWidth: 'calc(100vw - 17px)',
})
