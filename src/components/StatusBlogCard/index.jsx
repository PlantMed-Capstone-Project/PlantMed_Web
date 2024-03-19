import * as styleMui from './StatusBlogCard.styled'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import { motion } from 'framer-motion'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { convertString, parseImg } from 'utils'

export const StatusBlogCard = ({ idx, item, setIndexData}) => {
    const cardClick = (id) => {
        setIndexData(id)
    }
    return (
        <styleMui.blogCard
            component={motion.div}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: idx * 0.1,
            }}
            onClick={() => cardClick(item.id)}
        >
            <styleMui.thumbnailContainer>
                <styleMui.Thumbnail
                    thumbnail={parseImg(item.thumbnail)}
                    opacity="0"
                    zIndex="1"
                    sx={{ translate: '2rem 0rem' }}
                />
                <styleMui.Thumbnail
                    thumbnail={parseImg(item.thumbnail)}
                    opacity="1"
                    zIndex="0"
                    sx={{ marginLeft: '-14.3rem', filter: 'grayscale(50%)' }}
                />
            </styleMui.thumbnailContainer>
            <styleMui.blogCardBox>
                <styleMui.blogCardContent>
                    <styleMui.blogCardHeader>
                        <styleMui.Title>{item.title}</styleMui.Title>
                        <styleMui.iconHeader>
                            <FavoriteBorderIcon sx={styleMui.iconStyle} />
                            <styleMui.quantityNumber>
                                {item.totalLike}
                            </styleMui.quantityNumber>
                            <ChatOutlinedIcon sx={styleMui.iconStyle} />
                            <styleMui.quantityNumber>
                                {item.totalComment}
                            </styleMui.quantityNumber>
                        </styleMui.iconHeader>
                    </styleMui.blogCardHeader>
                    <styleMui.Author>Tác giả: {item.user.name}</styleMui.Author>
                    <styleMui.tagsContainer>
                        {item.tags.length
                            ? item.tags.map((vl, idx) => (
                                  <styleMui.tagsBox key={item}>
                                      <styleMui.tagsTxt>
                                          {vl.name}
                                      </styleMui.tagsTxt>
                                  </styleMui.tagsBox>
                              ))
                            : ''}
                    </styleMui.tagsContainer>
                    <styleMui.DescriptionHeader>
                        Mô tả:
                    </styleMui.DescriptionHeader>
                    <styleMui.Description>
                        {convertString(item.content, 300)}
                    </styleMui.Description>
                </styleMui.blogCardContent>
            </styleMui.blogCardBox>
        </styleMui.blogCard>
    )
}
