import CardBlog from 'components/CardBlog/CardBlog'
import TagSearch from 'components/TagSearch/TagSearch'
import useScrollTo from 'hooks/useScrollTo'
import { useEffect, useState } from 'react'
import * as styleMui from './BlogListPage.styled'
import { getReport, reportBlog } from 'rest/api/report'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import useActions from 'hooks/useActions'

function BlogListPage() {
    const { show } = useActions(snackbarAction)

    const [tagSearch, setTagSearch] = useState('')
    // eslint-disable-next-line no-unused-vars
    const [positions] = useState({
        scroll: null,
        topContent: null,
        sectionHeight: null,
    })
    // eslint-disable-next-line no-unused-vars
    const [rightHeight] = useState({
        height: null,
    })
    const [isFixed, setIsFixed] = useState(false)
    const [isAbs, setIsAbs] = useState(false)
    const [dataReport, setdataReport] = useState([])
    const [loading, setLoading] = useState([])
    const [openDialog, setOpenDialog] = useState(false)
    const [reportId, setReportId] = useState(null)
    const [blogId, setBlogId] = useState(null)

    useScrollTo(0, 0)

    const scrollValue = () => {
        // tính giá trị của cuối element, và trừ cho 320 để giảm giá trị, và kích hoạt animate sớm nhất
        const bottomStop =
            positions.topContent +
            positions.sectionHeight -
            rightHeight.height -
            320

        if (
            positions.scroll > positions.topContent &&
            positions.scroll < bottomStop
        ) {
            setIsFixed(true)
            setIsAbs(false)
        } else if (positions.scroll > bottomStop) {
            setIsFixed(false)
            setIsAbs(true)
        } else if (positions.scroll < positions.topContent) {
            setIsFixed(false)
            setIsAbs(false)
        }
    }

    const fetchReport = async () => {
        setLoading(true)
        try {
            const resp = await getReport()
            setdataReport(resp.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollValue, { passive: true })
        fetchReport()
        // cleanup side effect
        return () => {
            window.removeEventListener('scroll', scrollValue)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // mở dialog thông qua việc check xem
    const handleOpenDialog = (idReport, idBlog) => {
        if (idReport !== null && idBlog != null) {
            setOpenDialog(true)
            setReportId(idReport)
            setBlogId(idBlog)
        }
        return
    }

    // khi close dialog thì sẽ kèm theo việc trả boolean để clear state của child
    const closeDialog = () => {
        setOpenDialog(false)
    }

    const postReport = async () => {
        try {
            await reportBlog({ reportId: reportId, blogId: blogId })
            show({
                message: 'Bạn đã báo cáo bài viết thành công!!',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            console.log(error)
            show({
                message: 'Có vấn đề khi báo cáo, vui lòng thử lại!!',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        } finally {
            setReportId(null)
            setBlogId(null)
            closeDialog()
        }
    }

    return (
        <styleMui.container
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {/* Hiện dialog cho user đồng ý hay không */}
            <Dialog
                open={openDialog}
                keepMounted
                onClose={closeDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {'Bạn có chắc chắn sẽ báo cáo bài viết này không ?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Việc báo cáo sẽ được kiểm duyệt bởi admin và sẽ mất một
                        khoảng thời gian !
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>Disagree</Button>
                    <Button onClick={postReport}>Agree</Button>
                </DialogActions>
            </Dialog>
            {/* Kết thúc dialog cho user  */}

            <styleMui.ctnComponent>
                <CardBlog
                    valueSearch={tagSearch}
                    positions={positions}
                    loadingReport={loading}
                    dataReport={dataReport}
                    handleDialog={handleOpenDialog}
                />
                <TagSearch
                    setTagSearch={setTagSearch}
                    rightHeight={rightHeight}
                    isFixed={isFixed}
                    isAbs={isAbs}
                />
            </styleMui.ctnComponent>
        </styleMui.container>
    )
}

export default BlogListPage
