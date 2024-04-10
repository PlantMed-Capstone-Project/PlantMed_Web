import { Box, Button, Typography } from '@mui/material'
import { ProfileSidebar } from 'components/Profile/ProfileSidebar.jsx'
import TableCustom from 'components/Table/index.jsx'
import * as styleMui from 'pages/MyBlog/MyBlog.styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHistory } from 'rest/api/history'

function HistoryPage() {
    const [historyList, setHistoryList] = useState([])
    const [emptyMessage, setEmptyMessage] = useState('')
    const navigate = useNavigate()
    const handleRoute = (plantId) => {
        navigate(`/plants/${plantId}`)
    }
    const getAllHistory = async () => {
        try {
            const rsp = await getHistory()
            setHistoryList(rsp.data)
        } catch (error) {
            console.log(error)
            setEmptyMessage('Không có lịch sử được lưu')
        }
    }
    useEffect(() => {
        getAllHistory()
    }, [])

    return (
        <styleMui.container>
            <Box sx={{ height: '100%', width: '82%' }}>
                <TableCustom
                    columns={[
                        {
                            id: 'name',
                            label: 'Tên cây',
                            minWidth: 170,
                            render: ({ plantName }) => (
                                <Typography>{plantName}</Typography>
                            ),
                        },
                        {
                            id: 'date',
                            label: 'Ngày tạo',
                            minWidth: 170,
                            render: ({ createdDate }) => (
                                <Typography>{createdDate}</Typography>
                            ),
                        },
                        {
                            id: 'accuracy',
                            label: 'Độ chính xác',
                            minWidth: 170,
                            render: ({ accuracy }) => (
                                <Typography>
                                    {accuracy.toFixed(2) + '%'}
                                </Typography>
                            ),
                        },
                        {
                            id: 'action',
                            label: 'Action',
                            render: ({ plantId }) => (
                                <Button
                                    sx={{
                                        color: '#FFF',
                                        backgroundColor: '#69AD28',
                                        transition: 'all 0.2s ',
                                        '&:hover': {
                                            backgroundColor: '#69AD28',
                                            color: '#FFF',
                                            scale: '1.1',
                                        },
                                    }}
                                    onClick={() => handleRoute(plantId)}
                                >
                                    Chi tiết
                                </Button>
                            ),
                        },
                    ]}
                    rows={historyList}
                    emptyMessage={emptyMessage}
                />
            </Box>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default HistoryPage
