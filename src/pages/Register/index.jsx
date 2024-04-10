import { motion } from 'framer-motion'
import useScrollTo from 'hooks/useScrollTo'
import { useState } from 'react'
import * as styleMui from './SignupPage.styled'
import RegisterForm from 'components/RegisterForm'
import { Typography, Box } from '@mui/material'

function Register() {
    const [typeUser, setTypeUser] = useState('người dùng')
    const [validPdf, setValidPdf] = useState(true)

    //trigger scrollY
    useScrollTo(0, 100)

    return (
        <styleMui.container>
            <styleMui.Background>
                <styleMui.formContainer
                    component={motion.div}
                    initial={{ opacity: 0, x: '30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '-30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <RegisterForm
                        setTypeUser={setTypeUser}
                        typeUser={typeUser}
                        setValidPdf={setValidPdf}
                    />
                </styleMui.formContainer>
                <styleMui.containerTxt
                    component={motion.div}
                    initial={{ opacity: 0, x: '-30%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '-30%' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <styleMui.containsTitle>
                        <styleMui.Title>
                            CHÀO MỪNG <br />
                            BẠN ĐẾN VỚI PLANTMED
                        </styleMui.Title>
                        <styleMui.subTitle>
                            Đây là trang đăng ký dành cho {typeUser}
                        </styleMui.subTitle>
                    </styleMui.containsTitle>
                    {typeUser !== 'người dùng' && (
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '-2rem',
                                bottom: '15rem',
                                backgroundColor: !validPdf
                                    ? '#eb0014'
                                    : '#69AD28',
                                borderRadius: '0.625rem',
                                padding: '1rem',
                            }}
                            component={motion.div}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeOut',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 0,
                                    height: 0,
                                    border: '2.2rem solid transparent',
                                    borderTop: 0,
                                    borderBottom: !validPdf
                                        ? '3rem solid #eb0014'
                                        : '3rem solid #69AD28',
                                    position: 'absolute',
                                    transform: 'rotate(-130deg);',
                                    left: '-1.5rem',
                                    bottom: '-0.68rem',
                                    zIndex: '-1',
                                }}
                            ></Box>
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    color: 'white',
                                }}
                            >
                                {validPdf
                                    ? `Bạn nhớ thêm ảnh chứng chỉ để bọn mình xác nhận
                                nhé!`
                                    : `Hãy thêm ít nhất 1 ảnh chứng chỉ`}
                            </Typography>
                        </Box>
                    )}
                </styleMui.containerTxt>
            </styleMui.Background>
        </styleMui.container>
    )
}

export default Register
