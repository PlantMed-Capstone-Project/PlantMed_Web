import * as styleMui from './LikeButton.styled'
import Heart from 'Images/heart.png'
import { useState } from 'react'

export const LikeButton = ({ likeQuantity }) => {
    const [liked, setLiked] = useState(false)
    const [quantity, setQuantity] = useState(likeQuantity)

    const handleLikeClick = () => {
        setLiked((prevState) => !prevState)
        setQuantity(liked ? quantity - 1 : quantity + 1)
    }

    return (
        <styleMui.likeContainer>
            <styleMui.likeButton onClick={handleLikeClick}>
                <styleMui.likeBg>
                    <styleMui.likeIcon image={Heart} liked={liked} />
                </styleMui.likeBg>
            </styleMui.likeButton>
            <styleMui.likeQuantity>{quantity}</styleMui.likeQuantity>
        </styleMui.likeContainer>
    )
}
