import { Avatar, Box } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { convertString, parseImg } from 'utils'
import * as styleMui from './approvalCardList.styled'

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

    const content = convertString(item.content, 200)

    return (
        <styleMui.container
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
                <styleMui.imageBox
                    onMouseEnter={() => hoverEnter(idx)}
                    onMouseLeave={hoverLeave}
                >
                    <styleMui.image
                        ishover={isHover}
                        image={parseImg(item.thumbnail)}
                        title={item.title}
                    />
                </styleMui.imageBox>
            </Box>
            {/* End image element */}

            {/*Start title element */}
            <styleMui.txtBox>
                <styleMui.title>{item.title}</styleMui.title>
                <styleMui.subTitleBox>
                    <styleMui.subTitle
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <Box sx={{ display: 'flex', gap: '0.3rem' }}>
                        {item.tags.length
                            ? item.tags.map((vl) => (
                                  <styleMui.tagsBox key={item}>
                                      <styleMui.tagsTxt>
                                          {vl.name}
                                      </styleMui.tagsTxt>
                                  </styleMui.tagsBox>
                              ))
                            : ''}
                    </Box>
                </styleMui.subTitleBox>
            </styleMui.txtBox>
            {/*End title element */}

            {/*Start avatar element */}
            <styleMui.avatarBox>
                <Avatar
                    alt={item.user.name}
                    src={parseImg(item.user.avatar)}
                    sx={{ width: 80, height: 80, backgroundColor: '#214400' }}
                />
                <styleMui.avatarName>{item.user.name}</styleMui.avatarName>
            </styleMui.avatarBox>
            {/*End avatar element */}
        </styleMui.container>
    )
}

export default ApprovalCardList
