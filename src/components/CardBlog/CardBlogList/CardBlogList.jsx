import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as styleMui from './CardBlogList.styled'
import { convertString, parseImg } from 'utils'
import { Typography } from '@mui/material'

const CardBlogList = ({ item, idx }) => {
    const [showPopup, setShowPopup] = useState(false)
    const [hoverRp, setHoverRp] = useState(false)
    const [isHover, setIsHover] = useState(false)
    const navigate = useNavigate()

    const popupRef = useRef()

    // kiểm tra khi click có đang click vào popup hay không ?
    const handler = (e) => {
        if (!popupRef.current?.contains(e.target)) {
            setShowPopup(null)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handler)
    }, [])

    // cắt tên thành các chữ cái đầu
    const stringAvatar = (name) => {
        return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }

    const handleOpenForm = (value) => {
        console.log(value)
    }

    const handleRedirect = (id) => {
        navigate(`/blog/${id}`)
    }

    const content = convertString(item.content, 300)
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
                            src={parseImg(item.user.image.id)}
                        />
                        <styleMui.nameUser>
                            {item.user.fullName}
                        </styleMui.nameUser>
                    </styleMui.boxAvatar>
                    <styleMui.tagContainer>
                        {item.tags.length &&
                            item.tags.map((vl, idx) => (
                                <styleMui.tag key={item}>
                                    <styleMui.tagContent>
                                        {vl?.tagName}
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
                        dangerouslySetInnerHTML={{ __html: content }}
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
                        image={parseImg(item.images[0].data)}
                        title="green iguana"
                    />
                </styleMui.boxImage>
                {/* End phase image */}
            </styleMui.ctnBody>
            {/* End seccond phase of this card */}

            {/* Start Third phase of this card */}
            <styleMui.ctnBottom>
                <styleMui.likeContainer>
                    <FavoriteBorderIcon
                        sx={{ cursor: 'pointer', color: '#69AD28' }}
                    />
                    <styleMui.quantityLike>100</styleMui.quantityLike>
                </styleMui.likeContainer>
                <styleMui.commentBox onClick={() => handleRedirect(item.id)}>
                    <ChatBubbleOutlineIcon
                        sx={{ cursor: 'pointer', color: '#69AD28' }}
                    />
                </styleMui.commentBox>
            </styleMui.ctnBottom>
            {/* End Third phase of this card */}
        </styleMui.container>
    ) : (
        <styleMui.txtNotFound>Không có dữ liệu</styleMui.txtNotFound>
    )
}

export default CardBlogList
