import { Box, CardMedia, Stack, Typography, styled } from '@mui/material'

export const container = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    height: '18rem',
    width: '100%',
    backgroundColor: '#F4FFEB',
    borderRadius: '0.625rem',
    boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
    padding: '1rem',
    cursor: 'pointer',
})

export const imageBox = styled(Box)({
    height: '100%',
    width: '100%',
    borderRadius: '0.625rem',
    boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
    overflow: 'hidden',
})

export const image = styled(CardMedia)(({ ishover }) => ({
    height: '100%',
    width: '100%',
    borderRadius: '0.625rem',
    scale: ishover ? '1.2' : '1 ',
    transition: 'all 0.2s',
}))

export const txtBox = styled(Box)({
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '3rem',
    padding: '0 2rem 0 1rem ',
})

export const subTitleBox = styled(Box)({
    flex: '9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
})

export const tagsBox = styled(Box)({
    backgroundColor: '#69AD28',
    borderRadius: '0.6rem',
    boxShadow: 3,
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
    cursor: 'pointer',
})

export const avatarBox = styled(Box)({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '0.4rem',
    paddingTop: '1rem',
})

export const title = styled(Typography)({
    color: '#214400',
    fontSize: '1.5rem',
    fontWeight: '800',
    flex: '1',
    display: 'flex',
    alignItems: 'center',
})

export const subTitle = styled(Typography)({
    width: '100%',
    color: '#505050',
    fontSize: '1.05rem',
    fontWeight: '500',
    lineHeight: '1.6',
    textAlign: 'justify',
    wordBreak: 'break-all',
})

export const tagsTxt = styled(Typography)({
    color: '#FFF',
    fontSize: '0.9rem',
    fontWeight: '300',
    lineHeight: 'normal',
})

export const avatarName = styled(Typography)({
    color: '#214400',
    fontSize: '1rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
})
