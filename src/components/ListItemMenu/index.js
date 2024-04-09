import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
    Box,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'
import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../../layouts/Layout.styled'

/**
 * Custom List Menu of Sidebar
 * @param {array} menu - Menu item in sidebar
 * @param {boolean} openSidebar - state of anchorEl Sidebar
 * @param {Function} setOpenSidebar - function setState of anchorEl Sidebar
 */
const ListItemCustom = ({ menu, openSidebar, setOpenSidebar }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            {!menu.children ? (
                <S.Nav to={menu.path}>
                    <ListItemButton component={'li'}>
                        <Box display={'flex'} alignItems={'center'}>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText
                                disableTypography
                                primary={<Typography>{menu.label}</Typography>}
                            />
                        </Box>
                    </ListItemButton>
                </S.Nav>
            ) : (
                <ListItem
                    key={menu.key}
                    disablePadding
                    onClick={() => {
                        if (menu.children) {
                            setOpenSidebar(true)
                            setOpen(!open)
                        } else {
                            navigate(menu.path)
                        }
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>{menu.icon}</ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography>{menu.label}</Typography>}
                        />
                        {menu.children &&
                            (open ? <ExpandLess /> : <ExpandMore />)}
                    </ListItemButton>
                </ListItem>
            )}

            <Collapse in={open && openSidebar} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {menu?.children?.map((element) => {
                        return (
                            <S.Nav
                                to={element.path}
                                key={element.path}
                                className="nav-link"
                            >
                                <ListItemButton
                                    sx={{ height: 50 }}
                                    component={'li'}
                                >
                                    <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        sx={{ height: '40px', ml: 2 }}
                                    >
                                        <ListItemIcon>
                                            {element.icon}
                                        </ListItemIcon>

                                        <ListItemText primary={element.label} />
                                    </Box>
                                </ListItemButton>
                            </S.Nav>
                        )
                    })}
                </List>
            </Collapse>
        </>
    )
}

export default memo(ListItemCustom)
