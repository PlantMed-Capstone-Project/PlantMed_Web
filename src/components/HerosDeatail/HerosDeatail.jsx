import { Box, CardMedia, Stack } from '@mui/material'
import React from 'react'
import * as styleMui from './heroDetail.styled'
import hienNhanImage from 'Images/hiền nhân.jpg'

export default function HerosDeatail() {
  return (
    <styleMui.BoxImg mt="0.88rem" width="72.75rem" height="13.75rem">
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
