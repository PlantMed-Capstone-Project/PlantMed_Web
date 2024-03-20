import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'

import AboutUsPage from 'pages/AboutUsPage'
import ApprovalPage from 'pages/ApprovalPage'
import BlogDetail from 'pages/BlogDetail/BlogDetail'
import BlogListPage from 'pages/BlogList'
import BlogPage from 'pages/BlogPage/BlogPage'
import CreateBlog from 'pages/CreateBlog'
import DetailPage from 'pages/DetailPage/DetailPage'
import DetectionPage from 'pages/DetectionPage/DetectionPage'
import ForgotPasswordPage from 'pages/ForgotPasswordPage'
import HomePage from 'pages/HomePage'
import LikedBlog from 'pages/LikedBlog'
import Login from 'pages/Login'
import MyBlog from 'pages/MyBlog'
import PlantPage from 'pages/Plant/PlantPage'
import ProfilePage from 'pages/ProfilePage'
import Register from 'pages/Register'
import ResetPasswordPage from 'pages/ResetPasswordPage'

const publicRoutes = [
    { path: '/', page: HomePage, layout: MainLayout },
    { path: '/login', page: Login, layout: LoginLayout },
    { path: '/register', page: Register, layout: LoginLayout },
    { path: '/plants', page: PlantPage, layout: MainLayout },
    { path: '/plants/:id', page: DetailPage, layout: MainLayout },
    { path: '/about-us', page: AboutUsPage, layout: MainLayout },
    { path: '/predict', page: DetectionPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/forgot-password', page: ForgotPasswordPage, layout: MainLayout },
]

const privateRoutes = [
    { path: '/blog/approval', page: ApprovalPage, layout: MainLayout },
    { path: '/new-blog', page: CreateBlog, layout: MainLayout },
    { path: '/bloglist', page: BlogListPage, layout: MainLayout },
    { path: '/blog', page: BlogPage, layout: MainLayout },
    { path: '/blog/:id', page: BlogDetail, layout: MainLayout },
    { path: '/profile', page: ProfilePage, layout: LoginLayout },
    { path: '/reset-password', page: ResetPasswordPage, layout: LoginLayout },
    { path: '/my-blog', page: MyBlog, layout: LoginLayout },
    { path: '/liked-blog', page: LikedBlog, layout: LoginLayout },
]

export { privateRoutes, publicRoutes }
