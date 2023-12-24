import { Avatar, Box, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import avartarImage from '../../Images/avatar.jpg';
import logoImage from '../../Images/logo.png';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { motion } from "framer-motion"


export default function Header() {
    const [value, setValue] = useState(0);
    const [openPf, setOpenPf] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const menuItems = [
        { icon: <SettingsIcon sx={{ height: "1.25rem", width: "1.25rem", color: "#69AD28" }} />, text: 'Cài đặt tài khoản' },
        { icon: <LockIcon sx={{ height: "1.25rem", width: "1.25rem", color: "#69AD28" }} />, text: 'Thay đổi mật khẩu' },
        { icon: <ExitToAppIcon sx={{ height: "1.25rem", width: "1.25rem", color: "#69AD28" }} />, text: 'Đăng xuất' },
    ];

    const headerChoose = ['TRANG CHỦ', 'PHÁT HIỆN HÌNH ẢNH', 'BÀI VIẾT', 'THỰC VẬT', 'VỀ CHÚNG TÔI']

    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" component="header" p="0 8.62rem" sx={{ width: "100%", height: "5.94rem", backgroundColor: "#FFF", position: "relative" }}>
            <Box
                component="div"
                sx={{
                    height: "4.1875rem",
                    width: "7.375rem",
                }}
            >
                <img src={logoImage} alt="" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
            </Box>
            <Stack direction="row" alignItems="center" sx={{ height: "100%", borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{ borderBottom: 2, borderColor: 'transparent' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ style: { backgroundColor: "#69AD28" } }} sx={{
                        '& .Mui-selected': {
                            color: '#69AD28 !important'
                        }
                    }}>
                        {
                            headerChoose.map((vl, idx) => (
                                <Tab key={idx} label={vl} sx={{ color: "#214400", fontWeight: "700" }} />
                            ))
                        }
                    </Tabs>
                </Box>
            </Stack>
            <Tooltip title="Open settings">
                <Avatar
                    alt="Your avatar"
                    src={avartarImage}
                    sx={{ width: "2.8125rem", height: "2.8125rem", cursor: "pointer" }}
                    onClick={() => setOpenPf(!openPf)}
                />
            </Tooltip>
            {
                openPf && (
                    <motion.div
                        style={
                            {
                                width: "12.6875rem",
                                height: "13.125rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0",
                                backgroundColor: "#fff",
                                boxShadow: "0px 0px 3px 0px rgba(33, 68, 0, 0.30)",
                                borderRadius: "0.625rem",
                                position: "absolute",
                                top: "5.31rem",
                                right: "8.62rem",
                                paddingTop: "1.25rem",
                                zIndex: "10"
                            }
                        }
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Box
                            sx={{ width: "8.125rem", display: "flex", flexDirection: "column", alignItems: "center", borderBottom: "solid #69AD28 2px", pb: "0.63rem" }}
                        >
                            <Avatar
                                alt="Your avatar"
                                src={avartarImage}
                                sx={{ width: "2.8125rem", height: "2.8125rem" }}
                            />
                            <Typography variant='subtitle1' sx={{ fontSize: "0.625rem", fontWeight: "500", color: "#214400" }}>QiQi</Typography>
                            <Typography variant='caption' sx={{ fontStyle: "italic", color: "#214400", fontSize: "0.5rem", fontWeight: "300" }}>nguyen@gmail.com</Typography>
                        </Box>
                        <Stack
                            direction="column"
                            spacing="0.5rem"
                            alignItems="center"
                            sx={{
                                width: "8.125rem",
                                p: "0.62rem 0 0 0.62rem"
                            }}
                        >
                            {menuItems.map((item, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    alignItems="center"
                                    width="100%"
                                    spacing="0.44rem"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                >
                                    {item.icon}
                                    <Typography variant='subtitle2' sx={{ fontSize: "0.625rem", color: "#214400", fontWeight: "500" }}>
                                        {item.text}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </motion.div>
                )
            }

        </Stack>
    )
}
