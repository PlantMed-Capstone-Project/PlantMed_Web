import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useEffect, useRef, useState } from 'react'
import * as styleMui from './CardBlogList.styled'
import { motion } from 'framer-motion'

const CardBlogList = ({ item }) => {
    const [showPopup, setShowPopup] = useState(false)
    const [hoverRp, setHoverRp] = useState(false)
    const [isHover, setIsHover] = useState(false)

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

    return (
        <styleMui.container>
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
                        {/*Kiểm tra avatar có tồn tại hay khum */}
                        {item.avartar !== '' ? (
                            <styleMui.avatarImage
                                alt="Remy Sharp"
                                src={item.avartar}
                            />
                        ) : (
                            <styleMui.avatarImage>
                                {stringAvatar(item.user)}
                            </styleMui.avatarImage>
                        )}
                        <styleMui.nameUser>{item.user}</styleMui.nameUser>
                    </styleMui.boxAvatar>
                    <styleMui.tagContainer>
                        {item.tags.length &&
                            item.tags.map((vl, idx) => (
                                <styleMui.tag key={item}>
                                    <styleMui.tagContent>
                                        {vl.tagName}
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
            <styleMui.ctnBody>
                {/* Start phase text */}
                <styleMui.containtText>
                    <styleMui.title>{item.title}</styleMui.title>
                    <styleMui.description>
                        {item.description.length > 300
                            ? item.description.slice(0, 300) + '...'
                            : item.description}
                    </styleMui.description>
                </styleMui.containtText>
                {/* End phase text */}

                {/* Start phase image */}
                <styleMui.boxImage
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <styleMui.mainImage
                        ishover={isHover}
                        image={item.image}
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
                <ChatBubbleOutlineIcon
                    sx={{ cursor: 'pointer', color: '#69AD28' }}
                />
            </styleMui.ctnBottom>
            {/* End Third phase of this card */}
        </styleMui.container>
    )
}

export default CardBlogList
