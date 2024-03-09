import { Avatar, Box, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
function ApprovalCardList({ item, idx, setIndexData }) {
    const [isHover, setIsHover] = useState(null)

    const hoverEnter = (idx) => {
        setIsHover(true)
    }
    const hoverLeave = () => {
        setIsHover(null)
    }

    const cardClick = (id) => {
        setIndexData(id)
    }
    function stringToColor(string) {
        let hash = 0
        let i

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash)
        }

        let color = '#'

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff
            color += `00${value.toString(16)}`.slice(-2)
        }
        /* eslint-enable no-bitwise */

        return color
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        }
    }

    const content =
        item.content.length > 300
            ? item.content.slice(0, 300) + '...'
            : item.content
    return (
        <Box
            component={motion.div}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: idx * 0.1,
            }}
            onClick={() => cardClick(item.id)}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '18rem',
                width: '100%',
                backgroundColor: '#F4FFEB',
                borderRadius: '0.625rem',
                boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
                padding: '1rem',
                cursor: 'pointer',
            }}
        >
            <Box sx={{ flex: '2' }}>
                <Box
                    sx={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '0.625rem',
                        boxShadow: '0px 4px 5px 0px rgba(33, 68, 0, 0.50)',
                        overflow: 'hidden',
                    }}
                    onMouseEnter={() => hoverEnter(idx)}
                    onMouseLeave={hoverLeave}
                >
                    <CardMedia
                        sx={{
                            height: '100%',
                            width: '100%',
                            borderRadius: '0.625rem',
                            scale: isHover ? '1.2' : '1 ',
                            transition: 'all 0.2s',
                        }}
                        image={item.image}
                        title="green iguana"
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    flex: '3',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '3rem',
                    padding: '0 2rem 0 1rem ',
                }}
            >
                <Typography
                    sx={{
                        color: '#214400',
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        flex: '1',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {item.title}
                </Typography>
                <Box
                    sx={{
                        flex: '9',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            width: '100%',
                            color: '#505050',
                            fontSize: '1.05rem',
                            fontWeight: '500',
                            lineHeight: '1.6',
                            textAlign: 'justify',
                        }}
                    >
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                        {item.tags.length
                            ? item.tags.map((vl, idx) => (
                                  <Box
                                      key={item}
                                      sx={{
                                          backgroundColor: '#69AD28',
                                          borderRadius: '0.6rem',
                                          boxShadow: 3,
                                          height: '2rem',
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          padding: '0 1rem',
                                          cursor: 'pointer',
                                      }}
                                  >
                                      <Typography
                                          sx={{
                                              color: '#FFF',
                                              fontSize: '0.9rem',
                                              fontWeight: '300',
                                              lineHeight: 'normal',
                                          }}
                                      >
                                          {vl.plant}
                                      </Typography>
                                  </Box>
                              ))
                            : ''}
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '0.4rem',
                    paddingTop: '1rem',
                }}
            >
                <Avatar
                    {...stringAvatar('Tim Neutkens')}
                    sx={{ width: 80, height: 80, backgroundColor: '#214400' }}
                />
                <Typography
                    sx={{
                        color: '#214400',
                        fontSize: '1rem',
                        fontWeight: '800',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    Tim Neutkens
                </Typography>
            </Box>
        </Box>
    )
}

export default ApprovalCardList
