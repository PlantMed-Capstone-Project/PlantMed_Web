import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'
import AboutUsPage from 'pages/AboutUsPage'
import BlogListPage from 'pages/BlogDetail/BlogListPage'

import BlogPage from 'pages/BlogPage/BlogPage'
import CreateBlog from 'pages/CreateBlog/CreateBlog'
import DetailPage from 'pages/DetailPage/DetailPage'
import DetectionPage from 'pages/DetectionPage/DetectionPage'
import HomePage from 'pages/HomePage'
import PlantPage from 'pages/Plant/PlantPage'
import SigninPage from 'pages/SigninPage/SigninPage'
import SignupPage from 'pages/SignupPage/SignupPage'
import VerificationPage from 'pages/VerificationPage/VerificationPage'

const publicRoutes = [
    { path: '/', page: HomePage, layout: MainLayout },
    { path: '/login', page: SigninPage, layout: LoginLayout },
    { path: '/register', page: SignupPage, layout: LoginLayout },
    { path: '/verification', page: VerificationPage, layout: LoginLayout },
    { path: '/plants', page: PlantPage, layout: MainLayout },
    { path: '/detail', page: DetailPage, layout: MainLayout },
    { path: '/about-us', page: AboutUsPage, layout: MainLayout },
    { path: '/predict', page: DetectionPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/new-blog', page: CreateBlog, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/bloglist', page: BlogListPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
]

const privateRoutes = [
    { path: '/blog', page: BlogPage, layout: MainLayout },
    { path: '/blog/:id', page: 'detail blog here', layout: MainLayout },
    // { path: '/predict', page: DetectionPage, layout: MainLayout },
    { path: '/profile', page: 'profile page here', layout: MainLayout },
]

export { publicRoutes, privateRoutes }
