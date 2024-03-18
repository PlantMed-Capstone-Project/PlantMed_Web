import titleImage from 'Images/hiền nhân.jpg'
import presentImage from 'Images/tía tô.jpg'
import { useEffect, useRef, useState } from 'react'
import * as styleMui from './TagSearch.styled'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { CircularProgress } from '@mui/material'
function TagSearch({ setTagSearch, rightHeight, isFixed, isAbs }) {
    const { blogActive, loading } = useShallowEqualSelector(
        (state) => state.blog
    )
    const [dataTag, setDataTag] = useState()
    const [isHover, setIsHover] = useState(null)
    const [prvText, setPrvText] = useState('')

    const getHeightEl = useRef()

    // Các giá trị render ra card bên sidebar
    const dataPresent = [
        {
            id: 1,
            images: titleImage,
            title: 'Có thể bạn chưa biết',
            subTitle: `Các loại cây ở đây đều được sinh trưởng trong môi trường
            tự nhiên tốt nhất, và sẽ có những loại cây quý hiếm chưa
            được đưa vào sử dụng nhiều. Trang web chúng tôi đang sẵn
            có nhiều loại cây khác nhau bạn hay nhấn vào để xem thêm
            bạn nhé.`,
        },
        {
            id: 2,
            images: presentImage,
            title: 'Các bài biết được chắt lọc',
            subTitle: `Bên cạnh việc chia sẽ về các loại cây, chúng tôi cũng
            rất quan tâm đến độ xác thực của nó. Đội ngủ của chúng
            tôi không ngừng cố gắng chắt lọc ra những bài viết chính
            xác nhất có thể, nhằm mang lại cho người đọc cái nhìn
            chính xác nhất có thể.`,
        },
    ]

    // sử dụng Set để lọc ra các phần tử bị trùng, và sau khi add vào set thì chuyển thành mãng bằng qua array.form
    const uniqueTagsSet = new Set()

    //Lọc mãng và nhét các phần tử tagName vào trong mãng mới
    const filterTags = () => {
        blogActive.forEach((vl) => {
            vl.tags.forEach((tag) => {
                uniqueTagsSet.add(tag.name)
            })
        })
    }

    // xử lý sự kiện scroll
    const handleScroll = () => {
        rightHeight.height = getHeightEl.current.clientHeight
    }

    // kích hoạt sự kiện và chuyển set thành mãng
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // clean up effect
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let filterStart = true
        if (filterStart) {
            filterTags()
            setDataTag(() => Array.from(uniqueTagsSet))
        }
        return () => {
            filterStart = false
        }
    }, [blogActive])

    // xử lý các tag được chọn và handle cancel nếu giá trị trùng lặp giá trị cũ
    const handleActive = (vl) => {
        setTagSearch((prvValue) => (prvValue !== vl ? vl : ''))
        setPrvText((prvValue) => (prvValue !== vl ? vl : ''))
    }

    return (
        <styleMui.container>
            <styleMui.ctnTagTitle>
                <styleMui.title>CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</styleMui.title>
                <styleMui.BoxTagSearch>
                    {loading ? (
                        <CircularProgress color="success" />
                    ) : dataTag?.length > 0 ? (
                        dataTag.map((vl, idx) => (
                            <styleMui.tagSearch
                                key={vl}
                                text={vl}
                                ishover={isHover}
                                prvtext={prvText}
                                onMouseEnter={() => setIsHover(vl)}
                                onMouseLeave={() => setIsHover(null)}
                                onClick={() => handleActive(vl)}
                            >
                                <styleMui.text>{vl}</styleMui.text>
                            </styleMui.tagSearch>
                        ))
                    ) : (
                        'khong co data'
                    )}
                </styleMui.BoxTagSearch>
            </styleMui.ctnTagTitle>

            <styleMui.cotainerFixed
                ref={getHeightEl}
                isfixed={isFixed}
                isabs={isAbs}
            >
                {dataPresent.length &&
                    dataPresent.map((vl, idx) => (
                        <styleMui.imagePresent key={vl.id}>
                            <styleMui.imgTitle
                                image={vl.images}
                                alt="Paella dish"
                            >
                                <styleMui.presenTitle>
                                    {vl.title}
                                </styleMui.presenTitle>
                                <styleMui.presenSuntitle variant="subtitle1">
                                    {vl.subTitle}
                                </styleMui.presenSuntitle>
                            </styleMui.imgTitle>
                        </styleMui.imagePresent>
                    ))}
            </styleMui.cotainerFixed>
        </styleMui.container>
    )
}

export default TagSearch
