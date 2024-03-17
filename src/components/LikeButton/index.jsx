import * as styleMui from './LikeButton.styled'
import Heart from 'Images/heart.png'
import CountUp from 'react-countup'
import { useState } from 'react'

export const LikeButton = ({ quantity }) => {
    const [liked, setLiked] = useState(false)
    const handleLikeClick = () => {
        setLiked(!liked)
    }

    return (
        <styleMui.likeContainer>
            <styleMui.likeButton
                onClick={handleLikeClick}
                sx={{ display: 'flex', alignItems: 'center' }}
            >
                <styleMui.likeBg>
                    <styleMui.likeIcon image={Heart} liked={liked} />
                </styleMui.likeBg>
            </styleMui.likeButton>
            <styleMui.likeQuantity>
                <CountUp start={0} end={quantity} duration={7} delay={0} />k
            </styleMui.likeQuantity>
        </styleMui.likeContainer>
    )
}
