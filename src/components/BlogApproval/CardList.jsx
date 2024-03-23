import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { convertString, parseImg } from 'utils'
import * as S from './BlogApproval.styled'

export function CardList({ item, idx, setIndexData }) {
    const [isHover, setIsHover] = useState(null)

    const hoverEnter = (idx) => {
        setIsHover(idx)
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
            onMouseOver={() => hoverEnter(item.id)}
            onMouseLeave={hoverLeave}
            itemimage={parseImg(item.thumbnail)}
        >
            {isHover === item.id && (
                <S.cardHover
                    component={motion.div}
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <S.avatarBox>
                        <S.title>{item.title}</S.title>
                        <S.avatarName>Tác giả: {item.user.name}</S.avatarName>
                    </S.avatarBox>
                    <S.txtBox>
                        <S.subTitle title={true}>Mô tả:</S.subTitle>
                        <S.subTitle
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </S.txtBox>
                    <Box
                        sx={{
                            flex: '1',
                            width: '100%',
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        {item.tags.length &&
                            item.tags.map((vl) => (
                                <S.tagsBox key={item}>
                                    <S.tagsTxt>{vl.name}</S.tagsTxt>
                                </S.tagsBox>
                            ))}
                    </Box>
                </S.cardHover>
            )}
        </S.containerCard>
    )
}
