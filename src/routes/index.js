import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'
import AboutUsPage from 'pages/AboutUsPage'
import BlogListPage from 'pages/BlogList'

import BlogPage from 'pages/BlogPage/BlogPage'
import DetailPage from 'pages/DetailPage/DetailPage'
import DetectionPage from 'pages/DetectionPage/DetectionPage'
import HomePage from 'pages/HomePage'
import Login from 'pages/Login'
import PlantPage from 'pages/Plant/PlantPage'
import Register from 'pages/Register'
import ProfilePage from 'pages/ProfilePage'
import VerificationPage from 'pages/VerificationPage/VerificationPage'

const publicRoutes = [
    { path: '/', page: HomePage, layout: MainLayout },
    { path: '/login', page: Login, layout: LoginLayout },
    { path: '/register', page: Register, layout: LoginLayout },
    { path: '/verification', page: VerificationPage, layout: LoginLayout },
    { path: '/plants', page: PlantPage, layout: MainLayout },
    { path: '/plants/:id', page: DetailPage, layout: MainLayout },
    { path: '/about-us', page: AboutUsPage, layout: MainLayout },
    { path: '/predict', page: DetectionPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/bloglist', page: BlogListPage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/profile', page: ProfilePage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
    { path: '/profile/edit', page: ProfilePage, layout: MainLayout }, // cai nay de test, sau nay chuyen ve privateRouter
]

const privateRoutes = [
    { path: '/blog', page: BlogPage, layout: MainLayout },
    { path: '/blog/:id', page: 'detail blog here', layout: MainLayout },
    //{ path: '/profile', page: 'profile page here', layout: MainLayout },
]

export { privateRoutes, publicRoutes }
