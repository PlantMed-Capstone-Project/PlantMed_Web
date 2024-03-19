import * as styleMui from './LikeButton.styled'
import Heart from 'Images/heart.png'
import { useState } from 'react'

export const LikeButton = ({ likeQuantity }) => {
    const [liked, setLiked] = useState(false)
    const [quantity, setQuantity] = useState(likeQuantity)

    const handleLikeClick = () => {
        setLiked((prevState) => {
            const newLikedState = !prevState;
            setQuantity((prevQuantity) =>
                newLikedState ? prevQuantity + 1 : prevQuantity - 1
            )
            return newLikedState
        })
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
