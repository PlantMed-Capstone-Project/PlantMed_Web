import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'

import AboutUsPage from 'pages/AboutUsPage'
import BlogListPage from 'pages/BlogList'
import BlogPage from 'pages/BlogPage/BlogPage'
import CreateBlog from 'pages/CreateBlog'
import DetailPage from 'pages/DetailPage/DetailPage'
import DetectionPage from 'pages/DetectionPage/DetectionPage'
import HomePage from 'pages/HomePage'
import Login from 'pages/Login'
import PlantPage from 'pages/Plant/PlantPage'
import BlogDetail from 'pages/BlogDetail/BlogDetail'
import Register from 'pages/Register'
import ProfilePage from 'pages/ProfilePage'
import VerificationPage from 'pages/VerificationPage/VerificationPage'
import ResetPasswordPage from 'pages/ResetPasswordPage'
import ForgotPasswordPage from 'pages/ForgotPasswordPage'

const publicRoutes = [
    { path: '/', page: HomePage, layout: MainLayout },
    { path: '/login', page: Login, layout: LoginLayout },
    { path: '/register', page: Register, layout: LoginLayout },
    { path: '/verification', page: VerificationPage, layout: LoginLayout },
    { path: '/plants', page: PlantPage, layout: MainLayout },
    { path: '/plants/:id', page: DetailPage, layout: MainLayout },
    { path: '/about-us', page: AboutUsPage, layout: MainLayout },
    { path: '/predict', page: DetectionPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/blog/:id', page: BlogDetail, layout: MainLayout },
    { path: '/forgot-password', page: ForgotPasswordPage, layout: MainLayout },
]

const privateRoutes = [
    { path: '/new-blog', page: CreateBlog, layout: MainLayout },
    { path: '/bloglist', page: BlogListPage, layout: MainLayout },
    { path: '/blog', page: BlogPage, layout: MainLayout },
    { path: '/blog/:id', page: BlogDetail, layout: MainLayout },
    { path: '/profile', page: ProfilePage, layout: MainLayout },
    { path: '/reset-password', page: ResetPasswordPage, layout: MainLayout },
]

export { privateRoutes, publicRoutes }
