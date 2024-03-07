import * as styleMui from './MyBlog.styled'
import { ProfileSidebar } from 'components/Profile'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { StatusBlogCard } from 'components/StatusBlogCard'

function MyBlog() {
    const [blogStatus, setblogStatus] = useState('Chờ phê duyệt') // Default selected tab

    const handleChange = (event, newValue) => {
        setblogStatus(newValue)
    }

    //Khai báo array các tab
    const nabItem = [
        {
            id: 1,
            label: 'Chờ phê duyệt',
            link: '',
        },
        {
            id: 2,
            label: 'Đã đăng',
            link: '',
        },
    ]

    //Khai báo array các bài blog
    const blogCard = [
        {
            id: 1,
            title: 'Cây Đinh Lăng',
            author: 'Qiqi',
            description:
                'Đinh Lăng là một loài cây nhỏ, thân nhẵn, không có gai, thường cao 0.8-1.5m. Lá kép 3 lần xẻ lông chim dài 20-40cm, không có lá kèm rõ. Lá chét có răng cưa không đều, lá có mùi thơm. Cụm hoa hình chuỳ ngắn 7-18mm gồm nhiều tán, mang nhiều hoa nhỏ, tràng 5, nhị 5 với chỉ nhị gầy,...',
        },
        {
            id: 2,
            title: 'Cây Đinh Lăng',
            author: 'Qiqi',
            description:
                'Đinh Lăng là một loài cây nhỏ, thân nhẵn, không có gai, thường cao 0.8-1.5m. Lá kép 3 lần xẻ lông chim dài 20-40cm, không có lá kèm rõ. Lá chét có răng cưa không đều, lá có mùi thơm. Cụm hoa hình chuỳ ngắn 7-18mm gồm nhiều tán, mang nhiều hoa nhỏ, tràng 5, nhị 5 với chỉ nhị gầy,...',
        },
        {
            id: 3,
            title: 'Cây Đinh Lăng',
            author: 'Qiqi',
            description:
                'Đinh Lăng là một loài cây nhỏ, thân nhẵn, không có gai, thường cao 0.8-1.5m. Lá kép 3 lần xẻ lông chim dài 20-40cm, không có lá kèm rõ. Lá chét có răng cưa không đều, lá có mùi thơm. Cụm hoa hình chuỳ ngắn 7-18mm gồm nhiều tán, mang nhiều hoa nhỏ, tràng 5, nhị 5 với chỉ nhị gầy,...',
        },
    ]

    return (
        <styleMui.container>
            <styleMui.blogContainer>
                <styleMui.tabContainer
                    value={blogStatus}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    {nabItem?.map((item) => (
                        <styleMui.statusTab
                            component={Link}
                            to={item.link}
                            key={item.id}
                            label={item.label}
                            value={item.label}
                        />
                    ))}
                </styleMui.tabContainer>
                <styleMui.blogCardList>
                    {blogCard?.map((item) => (
                        <StatusBlogCard
                            key={item.id}
                            title={item.title}
                            author={item.author}
                            description={item.description}
                        />
                    ))}
                </styleMui.blogCardList>
            </styleMui.blogContainer>
            <ProfileSidebar />
        </styleMui.container>
    )
}

export default MyBlog
