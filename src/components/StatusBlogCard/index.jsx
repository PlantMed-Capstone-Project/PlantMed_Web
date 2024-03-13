import * as styleMui from './StatusBlogCard.styled'
import thumbnail from 'Images/tía tô.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import { motion } from 'framer-motion'

export const StatusBlogCard = ({ title, author, description,idx }) => {
    return (
        <styleMui.blogCard
            component={motion.div}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: idx * 0.1,
            }}
        >
            <styleMui.thumbnailContainer>
                <styleMui.Thumbnail
                    thumbnail={thumbnail}
                    opacity="0"
                    zIndex="1"
                    sx={{ translate: '2rem 0rem' }}
                />
                <styleMui.Thumbnail
                    thumbnail={thumbnail}
                    opacity="1"
                    zIndex="0"
                    sx={{ marginLeft: '-14.3rem', filter: 'grayscale(50%)' }}
                />
            </styleMui.thumbnailContainer>
            <styleMui.blogCardBox>
                <styleMui.blogCardContent>
                    <styleMui.blogCardHeader>
                        <styleMui.Title>{title}</styleMui.Title>
                        <styleMui.iconHeader>
                            <FavoriteBorderIcon sx={styleMui.iconStyle} />
                            <ChatOutlinedIcon sx={styleMui.iconStyle} />
                        </styleMui.iconHeader>
                    </styleMui.blogCardHeader>
                    <styleMui.Author>Tác giả: {author}</styleMui.Author>
                    <styleMui.DescriptionHeader>
                        Mô tả:
                    </styleMui.DescriptionHeader>
                    <styleMui.Description>{description}</styleMui.Description>
                </styleMui.blogCardContent>
            </styleMui.blogCardBox>
        </styleMui.blogCard>
    )
}
