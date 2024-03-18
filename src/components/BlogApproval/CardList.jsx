import { Avatar, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { convertString, parseImg } from 'utils'
import * as S from './BlogApproval.styled'

export function CardList({ item, idx, setIndexData }) {
    const [isHover, setIsHover] = useState(null)

    const hoverEnter = () => {
        setIsHover(true)
    }
    const hoverLeave = () => {
        setIsHover(null)
    }

    const cardClick = (id) => {
        setIndexData(id)
    }

    const content = convertString(item.content, 200)

    return (
        <S.containerCard
            component={motion.div}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: idx * 0.1,
            }}
            onClick={() => cardClick(item.id)}
        >
            {/* Start image element */}
            <Box sx={{ flex: '2' }}>
                <S.imageBox
                    onMouseEnter={() => hoverEnter()}
                    onMouseLeave={hoverLeave}
                >
                    <S.image
                        ishover={isHover}
                        image={parseImg(item.thumbnail)}
                        title={item.title}
                    />
                </S.imageBox>
            </Box>
            {/* End image element */}

            {/*Start title element */}
            <S.txtBox>
                <S.title>{item.title}</S.title>
                <S.subTitleBox>
                    <S.subTitle dangerouslySetInnerHTML={{ __html: content }} />
                    <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                        {item.tags.length
                            ? item.tags.map((vl) => (
                                  <S.tagsBox key={item}>
                                      <S.tagsTxt>{vl.name}</S.tagsTxt>
                                  </S.tagsBox>
                              ))
                            : ''}
                    </Box>
                </S.subTitleBox>
            </S.txtBox>
            {/*End title element */}

            {/*Start avatar element */}
            <S.avatarBox>
                <Avatar
                    alt={item.user.name}
                    src={parseImg(item.user.avatar)}
                    sx={{ width: 80, height: 80, backgroundColor: '#214400' }}
                />
                <S.avatarName>{item.user.name}</S.avatarName>
            </S.avatarBox>
            {/*End avatar element */}
        </S.containerCard>
    )
}
