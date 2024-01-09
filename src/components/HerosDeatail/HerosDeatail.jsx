import { CardMedia } from '@mui/material'
import hienNhanImage from 'Images/hiền nhân.jpg'
import * as styleMui from './heroDetail.styled'

export default function HerosDeatail({ pages }) {

  return (
    <styleMui.BoxImg mt="0.88rem" width="72.75rem" height={pages === 'plant' ? "31.25rem" : "13.75rem"}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image={hienNhanImage}
        alt="Paella dish"
        sx={{ borderRadius: "0.625rem" }}
      />
      <styleMui.TextHero>
        HƠN 30K LOÀI THỰC VẬT
        ĐỂ BẠN TÌM KIẾM
      </styleMui.TextHero>
    </styleMui.BoxImg>
  )
}
