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
import avartarImage from 'Images/avatar.jpg'
import logoImage from 'Images/logo.png'
import { authAction } from 'app/reducers/auth'
import { snackbarAction } from 'app/reducers/snackbar'
import { motion } from 'framer-motion'
import useActions from 'hooks/useActions'
import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import * as styleMui from './header.styled'
import { collection, deleteDoc, doc, or, where } from 'firebase/firestore'
import { db } from 'firebase.js'
import { useFirestoreQuery } from 'hooks/useFirestoreQuery'
import { parseJwt } from 'utils'
import { readCookie } from 'utils/cookie'
import { ACCESS_TOKEN } from 'constant'

const iconStyle = {
    height: '1.25rem',
    width: '1.25rem',
    color: '#69AD28',
}

function Header({ isLogin }) {
    const expertRef = collection(db, 'expertOnline')
    const user = parseJwt(readCookie(ACCESS_TOKEN))
    const [expertList, setExpertList] = useState()
    const [value, setValue] = useState(0)
    const [openPf, setOpenPf] = useState(false)
    const location = useLocation()
    const { logout } = useActions(authAction)
    const { show } = useActions(snackbarAction)
    const navigate = useNavigate()

    const nav = isLogin
        ? [
              { id: 1, label: 'TRANG CHỦ', link: '/' },
              { id: 2, label: 'NHẬN DIỆN HÌNH ẢNH', link: '/predict' },
              { id: 3, label: 'BÀI VIẾT', link: '/blog' },
              { id: 4, label: 'THỰC VẬT', link: '/plants' },
              { id: 5, label: 'VỀ CHÚNG TÔI', link: '/about-us' },
          ]
        : [
              { id: 1, label: 'TRANG CHỦ', link: '/' },
              { id: 2, label: 'NHẬN DIỆN HÌNH ẢNH', link: '/predict' },
              { id: 3, label: 'THỰC VẬT', link: '/plants' },
              { id: 4, label: 'VỀ CHÚNG TÔI', link: '/about-us' },
          ]

    const [navItem] = useState(nav)

    const handleChange = (_, newValue) => {
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

    useEffect(() => {
        checkPath()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname])

    const loginRegister = [
        { id: 1, label: 'Đăng nhập', path: '/login' },
        { id: 2, label: 'Đăng ký', path: '/register' },
    ]

    const Navbars = useMemo(
        () =>
            navItem.map((item) => (
                <Tab
                    component={Link}
                    key={item.id}
                    to={item.link}
                    label={item.label}
                    sx={{ color: '#214400', fontWeight: '700' }}
                />
            )),
        [navItem]
    )

    useFirestoreQuery(
        expertRef,
        [
            or(
                where('status', '==', 'isChatting'),
                where('status', '==', 'isOnline')
            ),
        ],
        setExpertList
    )

    const handleOffLine = async () => {
        const expert = expertList.find(
            ({ expert }) => expert.Email === user.Email
        )
        await deleteDoc(doc(expertRef, expert.id))
        logout()
    }

    const handleLogout = () => {
        handleOffLine()
        logout()
        show({ message: 'Đã đăng xuất!' })
        navigate('/login')
    }

    const handleResetPassword = () => {
        navigate('/reset-password')
    }

    const goToProfile = () => {
        navigate('/profile')
    }

    const menuItems = [
        {
            id: 1,
            icon: <SettingsIcon sx={iconStyle} />,
            text: 'Cài đặt tài khoản',
            onClick: goToProfile,
        },
        {
            id: 2,
            icon: <LockIcon sx={iconStyle} />,
            text: 'Thay đổi mật khẩu',
            onClick: handleResetPassword,
        },
        {
            id: 3,
            icon: <ExitToAppIcon sx={iconStyle} />,
            text: 'Đăng xuất',
            onClick: handleLogout,
        },
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
                    cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
            >
                <img
                    src={logoImage}
                    alt="logo"
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
                        {Navbars}
                    </Tabs>
                </Box>
            </Stack>

            {/* có đăng nhập hay chưa  */}
            {isLogin ? (
                <Tooltip title="Open settings">
                    <Avatar
                        alt="Your avatar"
                        src={avartarImage}
                        sx={{
                            width: '2.8125rem',
                            height: '2.8125rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => setOpenPf((prevState) => !prevState)}
                    />
                </Tooltip>
            ) : (
                <styleMui.containerButton>
                    {loginRegister.map((vl) => (
                        <styleMui.button
                            key={vl.id}
                            component={Link}
                            to={vl.path}
                        >
                            {vl.label}
                        </styleMui.button>
                    ))}
                </styleMui.containerButton>
            )}

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
                            PlantMed
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
                        {menuItems.map((item) => (
                            <Stack
                                key={item.id}
                                direction="row"
                                alignItems="center"
                                width="100%"
                                spacing="0.44rem"
                                sx={{ cursor: 'pointer' }}
                                onClick={item.onClick}
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

export default React.memo(Header)
