import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import LockIcon from '@mui/icons-material/Lock'
import SettingsIcon from '@mui/icons-material/Settings'
import {
    Avatar,
    Box,
    Stack,
    Tab,
    Tabs,
    Tooltip,
    Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import avartarImage from 'Images/avatar.jpg'
import logoImage from 'Images/logo.png'
import * as styleMui from './header.styled'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const iconStyle = {
    height: '1.25rem',
    width: '1.25rem',
    color: '#69AD28',
}

export default function Header({ typeHeader }) {
    const [value, setValue] = useState(0)
    const [openPf, setOpenPf] = useState(false)
    const location = useLocation()
    const [navItem, setNavItem] = useState()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    // check current path
    const checkPath = () => {
        const currentPath = location.pathname
        const selectedItem = navItem.find((item) => item.link === currentPath)
        if (selectedItem) {
            const selectedIndex = navItem.indexOf(selectedItem)
            setValue(selectedIndex)
        }
    }

    // kiểm tra đường dần tồn tại trên header
    const checkHeader = () => {
        if (typeHeader) {
            setNavItem((state) => [
                {
                    lable: 'TRANG CHỦ',
                    link: '/',
                },
                {
                    lable: 'PHÁT HIỆN HÌNH ẢNH',
                    link: '/predict',
                },
                {
                    lable: 'BÀI VIẾT',
                    link: '/blog',
                },
                {
                    lable: 'THỰC VẬT',
                    link: '/plants',
                },
                {
                    lable: 'VỀ CHÚNG TÔI',
                    link: '/about-us',
                },
            ])
        } else {
            setNavItem((state) => [
                {
                    lable: 'TRANG CHỦ',
                    link: '/',
                },
                {
                    lable: 'PHÁT HIỆN HÌNH ẢNH',
                    link: '/predict',
                },
                {
                    lable: 'THỰC VẬT',
                    link: '/plants',
                },
                {
                    lable: 'VỀ CHÚNG TÔI',
                    link: '/about-us',
                },
            ])
        }
    }

    useEffect(() => {
        checkPath()
    }, [location.pathname])

    useEffect(() => {
        checkHeader()
    }, [])

    const menuItems = [
        { icon: <SettingsIcon sx={iconStyle} />, text: 'Cài đặt tài khoản' },
        { icon: <LockIcon sx={iconStyle} />, text: 'Thay đổi mật khẩu' },
        { icon: <ExitToAppIcon sx={iconStyle} />, text: 'Đăng xuất' },
    ]

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            component="header"
            p="0 8.62rem"
            sx={{
                width: '100%',
                height: '5.94rem',
                backgroundColor: '#FFF',
                position: 'relative',
            }}
        >
            <Box
                component="div"
                sx={{
                    height: '4.1875rem',
                    width: '7.375rem',
                }}
            >
                <img
                    src={logoImage}
                    alt=""
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Stack
                direction="row"
                alignItems="center"
                sx={{ height: '100%', borderColor: 'divider' }}
            >
                <Box sx={{ borderBottom: 2, borderColor: 'transparent' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        TabIndicatorProps={{
                            style: { backgroundColor: '#69AD28' },
                        }}
                        sx={{
                            '& .Mui-selected': {
                                color: '#69AD28 !important',
                            },
                        }}
                    >
                        {navItem?.map((item, idx) => (
                            <Tab
                                component={Link}
                                to={item.link}
                                key={idx}
                                label={item.lable}
                                sx={{ color: '#214400', fontWeight: '700' }}
                            />
                        ))}
                    </Tabs>
                </Box>
            </Stack>
            <Tooltip title="Open settings">
                <Avatar
                    alt="Your avatar"
                    src={avartarImage}
                    sx={{
                        width: '2.8125rem',
                        height: '2.8125rem',
                        cursor: 'pointer',
                    }}
                    onClick={() => setOpenPf((state) => !state.valueOf)}
                />
            </Tooltip>
            {openPf && (
                <styleMui.CustomBoxPopup
                    component={motion.div}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <styleMui.BoxContainAvt>
                        <Avatar
                            alt="Your avatar"
                            src={avartarImage}
                            sx={{ width: '2.8125rem', height: '2.8125rem' }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: '0.625rem',
                                fontWeight: '500',
                                color: '#214400',
                            }}
                        >
                            QiQi
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                fontStyle: 'italic',
                                color: '#214400',
                                fontSize: '0.5rem',
                                fontWeight: '300',
                            }}
                        >
                            nguyen@gmail.com
                        </Typography>
                    </styleMui.BoxContainAvt>
                    <Stack
                        direction="column"
                        spacing="0.5rem"
                        alignItems="center"
                        sx={{
                            width: '8.125rem',
                            p: '0.62rem 0 0 0.62rem',
                        }}
                    >
                        {menuItems.map((item, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                alignItems="center"
                                width="100%"
                                spacing="0.44rem"
                                sx={{ cursor: 'pointer' }}
                            >
                                {item.icon}
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontSize: '0.625rem',
                                        color: '#214400',
                                        fontWeight: '500',
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </styleMui.CustomBoxPopup>
            )}
        </Stack>
    )
}
