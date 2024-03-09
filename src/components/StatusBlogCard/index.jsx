import * as styleMui from './StatusBlogCard.styled'
import thumbnail from 'Images/tía tô.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'

export const StatusBlogCard = ({ title, author, description }) => {
    return (
        <styleMui.blogCard>
            <styleMui.thumbnailContainer>
                <styleMui.Thumbnail
                    thumbnail={thumbnail}
                    opacity="0"
                    zIndex="1"
                    sx={{ translate: '2rem 0rem' }}
                />
                <styleMui.Thumbnail
                    thumbnail={thumbnail}
                    opacity="0.8"
                    zIndex="0"
                    sx={{ marginLeft: '-14.3rem' }}
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
