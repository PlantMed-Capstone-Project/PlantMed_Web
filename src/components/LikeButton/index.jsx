import Heart from 'Images/heart.png'
import { useEffect, useState } from 'react'
import * as styleMui from './LikeButton.styled'

export const LikeButton = ({ initHeart, likeQuantity, handleClick }) => {
    const [liked, setLiked] = useState(false)
    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setLiked(initHeart)
        setQuantity(likeQuantity)
    }, [initHeart, likeQuantity])

    const handleLikeClick = () => {
        setLiked((prevState) => {
            const newLikedState = !prevState
            setQuantity((prevQuantity) =>
                newLikedState ? prevQuantity + 1 : prevQuantity - 1
            )
            return newLikedState
        })
        handleClick()
    }

    return (
        <styleMui.likeContainer>
            <styleMui.likeButton onClick={handleLikeClick}>
                <styleMui.likeIcon image={Heart} liked={liked} />
            </styleMui.likeButton>
            <styleMui.likeQuantity>{quantity}</styleMui.likeQuantity>
        </styleMui.likeContainer>
    )
}
