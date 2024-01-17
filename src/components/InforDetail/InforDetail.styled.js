import { ListItem, Stack, Typography, styled } from '@mui/material'

export const Dot = styled(Typography)(({ screen }) => ({
    marginRight: 8,
    display: 'flex',
    fontSize:
        screen === 'topscreen' || screen === 'bottomscreen' ? '1.2em' : '1rem',
    color:
        screen === 'topscreen' || screen === 'bottomscreen'
            ? '#214400'
            : '#FFF',
    fontWeight: '300',
    paddingTop:
        screen === 'topscreen' || screen === 'bottomscreen' ? '0' : '0.2rem',
}))

export const TextList = styled(Typography)(({ screen }) => ({
    color:
        screen === 'topscreen' || screen === 'bottomscreen'
            ? '#214400'
            : '#FFF',
    fontSize:
        screen === 'topscreen' || screen === 'bottomscreen' ? '1.3rem' : '1rem',
    fontWeight: '300',
    wordWrap: 'break-word',
}))

export const TxtListHead = styled(Typography)(({ screen }) => ({
    color:
        screen === 'topscreen' || screen === 'bottomscreen'
            ? '#69AD28'
            : '#FFF',
    fontSize:
        screen === 'topscreen' || screen === 'bottomscreen'
            ? '1.875rem'
            : '1.1rem',
    fontWeight: '600',
    width:
        screen === 'topscreen' || screen === 'bottomscreen'
            ? '22.3rem'
            : '20rem',
    textAlign: 'center',
}))

export const container = styled(Stack)(({ screen }) => ({
    backgroundColor: screen === 'bottomscreen' ? '#FFF' : 'none',
    padding: screen === 'bottomscreen' ? '3.94rem 8.5rem 0 8.5rem' : '0',
    width:
        screen === 'topscreen'
            ? '50%'
            : screen === 'bottomscreen'
            ? '90rem'
            : '100%',
    height: screen === 'topscreen' ? '100%' : '',
}))

export const liContainer = styled(ListItem)(({ screen }) => ({
    width: screen === 'topscreen' ? '37rem' : '100%',
    display: 'flex',
    alignItems: 'flex-start',
    padding: screen === 'popupscreen' && '0',
}))
