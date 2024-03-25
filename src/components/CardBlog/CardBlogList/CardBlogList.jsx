import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import { LikeButton } from 'components/LikeButton'
import { motion } from 'framer-motion'
import useActions from 'hooks/useActions'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { like, unlike } from 'rest/api/blog'
import { convertString, parseImg, parseJwt } from 'utils'
import * as styleMui from './CardBlogList.styled'
import { readCookie } from 'utils/cookie'
import { ACCESS_TOKEN } from 'constant'
import { Typography } from '@mui/material'

const CardBlogList = ({ item, idx, onResetData }) => {
    const [showPopup, setShowPopup] = useState(false)
    const [hoverRp, setHoverRp] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const [isHeart, setIsHeart] = useState(false)

    const { show } = useActions(snackbarAction)
    const navigate = useNavigate()
    let user = parseJwt(readCookie(ACCESS_TOKEN))

    const popupRef = useRef()

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!popupRef.current?.contains(e.target)) {
            setShowPopup(null)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)
    }, [])

    useEffect(() => {
        setIsHeart(item.userLike.some((el) => el.email === user.Email))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item])

    const handleOpenForm = (value) => {
        console.log(value)
    }

    const handleRedirect = (id) => {
        navigate(`/blog/${id}`)
    }

    const handleClick = async (id, title) => {
        if (!isHeart) {
            await handleLike(id, title)
        } else {
            await handleUnLike(id, title)
        }
        onResetData()
    }

    const handleLike = async (id, title) => {
        try {
            await like(id)
            show({
                message: `Bạn đã thích bài viết ${title}`,
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleUnLike = async (id, title) => {
        try {
            await unlike(id)
            show({ message: `Bạn đã bỏ thích bài viết ${title}` })
        } catch (error) {
            console.log(error.message)
        }
    }

    return item ? (
        <styleMui.container
            component={motion.div}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: idx * 0.1,
            }}
        >
            {showPopup && (
                <styleMui.caontainerRp
                    ref={popupRef}
                    component={motion.div}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <styleMui.report
                        ishover={hoverRp}
                        onMouseEnter={() => setHoverRp(true)}
                        onMouseLeave={() => setHoverRp(false)}
                        onClick={() => handleOpenForm(item.id)}
                    >
                        <AssistantPhotoIcon
                            sx={{ fontSize: '2rem', color: '#FFF' }}
                        />
                        <styleMui.reportTxt>
                            Báo cáo bài viết
                        </styleMui.reportTxt>
                    </styleMui.report>
                </styleMui.caontainerRp>
            )}

            {/* Start first phase of this card */}
            <styleMui.ctnHead>
                {/* Start avatar case */}
                <styleMui.ctnATag>
                    <styleMui.boxAvatar>
                        <styleMui.avatarImage
                            alt="Remy Sharp"
                            src={parseImg(item.user.avatar)}
                        />
                        <styleMui.nameUser>{item.user.name}</styleMui.nameUser>
                    </styleMui.boxAvatar>
                    <styleMui.tagContainer>
                        {item.tags.length &&
                            item.tags.map((vl) => (
                                <styleMui.tag key={item}>
                                    <styleMui.tagContent>
                                        {vl?.name}
                                    </styleMui.tagContent>
                                </styleMui.tag>
                            ))}
                    </styleMui.tagContainer>
                </styleMui.ctnATag>
                {/* End avartar case */}
                <MoreHorizIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => setShowPopup(!showPopup)}
                />
            </styleMui.ctnHead>
            {/* End first phase of this card */}

            {/* Start seccond phase of this card */}
            <styleMui.ctnBody onClick={() => handleRedirect(item.id)}>
                {/* Start phase text */}
                <styleMui.containtText>
                    <styleMui.title>{item.title}</styleMui.title>
                    <styleMui.description
                        dangerouslySetInnerHTML={{
                            __html: convertString(item.content, 100),
                        }}
                    />
                </styleMui.containtText>
                {/* End phase text */}

                {/* Start phase image */}
                <styleMui.boxImage
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <styleMui.mainImage
                        ishover={isHover}
                        image={parseImg(item.thumbnail)}
                        title="green iguana"
                    />
                </styleMui.boxImage>
                {/* End phase image */}
            </styleMui.ctnBody>
            {/* End seccond phase of this card */}

            {/* Start Third phase of this card */}
            <styleMui.ctnBottom>
                <styleMui.likeContainer>
                    <LikeButton
                        initHeart={isHeart}
                        likeQuantity={item.totalLike}
                        handleClick={() => handleClick(item.id, item.title)}
                    />
                </styleMui.likeContainer>
                <styleMui.commentBox onClick={() => handleRedirect(item.id)}>
                    <ChatBubbleOutlineIcon
                        sx={{
                            cursor: 'pointer',
                            color: '#69AD28',
                        }}
                    />
                    <Typography sx={{ fontSize: '1.25rem' }}>
                        {item.totalComment}
                    </Typography>
                </styleMui.commentBox>
            </styleMui.ctnBottom>
            {/* End Third phase of this card */}
        </styleMui.container>
    ) : (
        <styleMui.txtNotFound>Không có bài viết</styleMui.txtNotFound>
    )
}

export default CardBlogList
