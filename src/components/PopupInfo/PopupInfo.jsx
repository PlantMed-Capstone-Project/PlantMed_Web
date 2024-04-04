import { Box } from '@mui/material'
import { blogAction } from 'app/reducers/blog'
import { SNACKBAR_SEVERITY, snackbarAction } from 'app/reducers/snackbar'
import InforDetail from 'components/InforDetail/InforDetail'
import { motion } from 'framer-motion'
import useActions from 'hooks/useActions'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useState } from 'react'
import { approvalBlog, rejectBlog } from 'rest/api/blog'
import { parseImg } from 'utils'
import * as styleMui from './PopupInfo.styled'

function PopupInfo({
    id,
    approvalPage = false,
    setIndexData,
    predicPage = false,
    myBlogData = null,
}) {
    const getDataPredic = JSON.parse(localStorage.getItem('dataPredict'))
    const getImagePredict = localStorage.getItem('imagePredict')

    const { storeBlogApproval } = useActions(blogAction)
    const { data: dataPlant } = useShallowEqualSelector((state) => state.plant)
    const { data: dataApproval } = useShallowEqualSelector(
        (state) => state.blog
    )

    const { show } = useActions(snackbarAction)

    const [isHover, setIsHover] = useState(false)

    const conditionData = approvalPage ? dataApproval : dataPlant

    // Sử dụng popup ở 5 phase, check xem nếu đang ở chỗ predict thì sẽ lấy data từ storage
    // Nếu không phải predict page thì sẽ check 2 case
    // case 1 : approvalPage và myblog 'từ profile' có data thì sẽ nhận data từ prop.myblog
    // case 2 : là những trường hợp còn lại ví dụ như là plant thì sẽ lấy id để lọc ra .
    let dataFilter
    if (predicPage) {
        dataFilter = getDataPredic
    } else {
        if (approvalPage && myBlogData !== null) {
            dataFilter = myBlogData
        } else {
            dataFilter = conditionData.filter((vl) => vl.id === id)[0]
        }
    }

    // predicPage
    //     ? getDataPredic
    //     : conditionData.filter((vl) => vl.id === id)[0]
    let textData
    if (approvalPage) {
        textData = dataFilter
    } else if (predicPage) {
        textData = {
            id: getDataPredic?.plant.id,
            images: getImagePredict,
            valueList: [
                {
                    label: 'Độ chính xác',
                    value: getDataPredic.accuracy,
                },
                {
                    label: 'Tên quốc tế',
                    value: getDataPredic?.plant.internationalName,
                },
                {
                    label: 'Tên thường gọi',
                    value: getDataPredic?.plant.name,
                },
                {
                    label: 'Họ của cây',
                    value: getDataPredic?.plant.surName,
                },
                {
                    label: 'Nguồn gốc',
                    value: getDataPredic?.plant.origin,
                },
                {
                    label: 'Nơi sinh trưởng',
                    value: getDataPredic?.plant.placeOfBirth,
                },
            ],
        }
    } else {
        textData = {
            id: dataFilter?.id,
            images: dataFilter?.images[0].data,
            valueList: [
                {
                    label: 'Tên quốc tế',
                    value: dataFilter?.internationalName,
                },
                {
                    label: 'Họ của cây',
                    value: dataFilter?.surName,
                },
                {
                    label: 'Tên thường gọi',
                    value: dataFilter?.name,
                },
                {
                    label: 'Nguồn gốc',
                    value: dataFilter?.origin,
                },
                {
                    label: 'Nơi sinh trưởng',
                    value: dataFilter?.placeOfBirth,
                },
            ],
        }
    }

    // trigger active các bài viết theo id
    const acceptBlog = async (id) => {
        try {
            await approvalBlog(id)
            storeBlogApproval(dataApproval.filter((vl) => vl.id !== id))
            show({
                message: 'Phê duyệt thành công',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            console.log(error)
            show({
                message: 'Có sự cố khi phê duyệt, xin thử lại sau',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        } finally {
            setIndexData(null)
        }
    }
    // trigger không duyệt các bài viết theo id
    const rejectBlogs = async (id) => {
        try {
            await rejectBlog(id)
            storeBlogApproval(dataApproval.filter((vl) => vl.id !== id))
            show({
                message: 'Đã từ chối duyệt bài viết thành công',
                severity: SNACKBAR_SEVERITY.SUCCESS,
            })
        } catch (error) {
            console.log(error)
            show({
                message: 'Đã có sự cố khi phê duyệt ',
                severity: SNACKBAR_SEVERITY.ERROR,
            })
        } finally {
            setIndexData(null)
        }
    }

    return (
        <>
            {textData && (
                <styleMui.container
                    approvalpage={approvalPage}
                    key="modal"
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <styleMui.boxImage>
                        <styleMui.image
                            ishover={isHover ? true : undefined}
                            image={
                                approvalPage
                                    ? `${parseImg(textData.thumbnail)}`
                                    : `${parseImg(textData.images)}`
                            }
                            title={
                                approvalPage
                                    ? `${textData.title}`
                                    : textData.valueList[2].value
                            }
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        />
                    </styleMui.boxImage>

                    {!approvalPage ? (
                        <>
                            <InforDetail
                                textData={textData}
                                screenSlide="popupscreen"
                            />
                            <styleMui.linkBtn
                                color="inherit"
                                to={`/plants/${textData.id}`}
                            >
                                Xem thêm thông tin chi tiết về cây
                            </styleMui.linkBtn>
                        </>
                    ) : (
                        <>
                            <styleMui.containerBlog>
                                <styleMui.boxTitle>
                                    <styleMui.title>
                                        {textData.title}
                                    </styleMui.title>
                                    <styleMui.title>
                                        Tác giả: {textData.user.name}
                                    </styleMui.title>
                                </styleMui.boxTitle>
                                <styleMui.diver />
                                <styleMui.boxContent>
                                    <Box
                                        sx={{
                                            width: '100%',
                                        }}
                                    >
                                        <styleMui.blogContent
                                            dangerouslySetInnerHTML={{
                                                __html: textData.content,
                                            }}
                                        />
                                    </Box>
                                </styleMui.boxContent>
                                <styleMui.diver isbottom="true" />
                                {myBlogData === null && (
                                    <styleMui.boxBtn>
                                        <styleMui.btn
                                            onClick={() =>
                                                acceptBlog(textData.id)
                                            }
                                        >
                                            Duyệt
                                        </styleMui.btn>
                                        <styleMui.btn
                                            onClick={() =>
                                                rejectBlogs(textData.id)
                                            }
                                        >
                                            Không duyệt
                                        </styleMui.btn>
                                    </styleMui.boxBtn>
                                )}
                            </styleMui.containerBlog>
                        </>
                    )}
                </styleMui.container>
            )}
        </>
    )
}

export default PopupInfo
