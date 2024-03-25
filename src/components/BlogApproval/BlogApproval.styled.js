import { Box, CardMedia, Stack, Typography, styled } from '@mui/material'

export const container = styled(Stack)({
    columnGap: '1rem',
    marginBottom: '4.13rem',
    flexWrap: 'wrap',
    width: '72.685rem',
    minHeight: '40.31rem',
    marginTop: '10rem',
    rowGap: '2rem',
})

export const text = styled(Typography)({
    color: '#214400',
    fontWeight: '500',
    fontSize: '2.2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

//====================== CARD LIST =================================//

export const containerCard = styled(Box)(({ itemimage }) => ({
    height: '16rem',
    width: 'calc(33.3% - 1rem)',
    borderRadius: '0.625rem',
    boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
    cursor: 'pointer',
    backgroundImage: `url(${itemimage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}))

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
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.1rem',
})

export const subTitleBox = styled(Box)({
    flex: '9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
})

export const tagsBox = styled(Box)({
    backgroundColor: 'rgba(200, 200, 200, 0.35)',
    borderRadius: '0.6rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 1rem',
})

export const avatarBox = styled(Box)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: '1',
})

export const title = styled(Typography)({
    color: '#FFF',
    fontSize: '1.5rem',
    fontWeight: '800',
})

export const subTitle = styled(Typography)(({ title }) => ({
    width: '100%',
    color: '#FFF',
    fontSize: title ? '0.8rem' : '0.7rem',
    fontWeight: title ? '800' : '500',
    lineHeight: '1.6',
    textAlign: 'justify',
    wordBreak: 'break-word',
}))

export const tagsTxt = styled(Typography)({
    color: '#FFF',
    fontSize: '0.7rem',
    fontWeight: '800',
    lineHeight: 'normal',
})

export const avatarName = styled(Typography)({
    color: '#FFF',
    fontSize: '1rem',
    fontWeight: '600',
})

export const cardHover = styled(Box)(() => ({
    height: '100%',
    width: '100%',
    borderRadius: '0.625rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.7rem',
    backgroundColor: 'rgba(68, 68, 68, 0.97)',
    padding: '1rem',
}))
