import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'
import BlogDetail from 'pages/BlogDetail/BlogDetail'

import BlogPage from 'pages/BlogPage/BlogPage'
import DetailPage from 'pages/DetailPage/DetailPage'
import DetectionPage from 'pages/DetectionPage/DetectionPage'
import HomePage from 'pages/HomePage'
import PlantPage from 'pages/Plant/PlantPage'
import SigninPage from 'pages/SigninPage/SigninPage'
import SignupPage from 'pages/SignupPage/SignupPage'

const publicRoutes = [
    { path: '/', page: HomePage, layout: MainLayout },
    { path: '/login', page: SigninPage, layout: LoginLayout },
    { path: '/register', page: SignupPage, layout: LoginLayout },
    { path: '/plants', page: PlantPage, layout: MainLayout },
    { path: '/detail', page: DetailPage, layout: MainLayout },
    { path: '/about-us', page: 'about us here', layout: MainLayout },
    { path: '/predict', page: DetectionPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/blogdetail', page: BlogDetail, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
]

const privateRoutes = [
    { path: '/blog', page: BlogPage, layout: MainLayout },
    { path: '/blog/:id', page: 'detail blog here', layout: MainLayout },
    // { path: '/predict', page: DetectionPage, layout: MainLayout },
    { path: '/profile', page: 'profile page here', layout: MainLayout },
]

export { publicRoutes, privateRoutes }
