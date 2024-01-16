import LoginLayout from 'layouts/LoginLayout'
import MainLayout from 'layouts/MainLayout'

import BlogPage from 'pages/BlogPage/BlogPage'
import DetailPage from 'pages/DetailPage/DetailPage'
import HomePage from 'pages/HomePage'
import PlantPage from 'pages/Plant/PlantPage'

const publicRoutes = [
    { path: '/', page: HomePage, layout: MainLayout },
    { path: '/login', page: 'LoginPage', layout: LoginLayout },
    { path: '/register', page: 'RegisterPage', layout: LoginLayout },
    { path: '/plants', page: PlantPage, layout: MainLayout },
    { path: '/detail', page: DetailPage, layout: MainLayout },
    { path: '/about-us', page: '', layout: MainLayout },
]

const privateRoutes = [
    { path: '/blog', page: BlogPage, layout: MainLayout },
    { path: '/blog/:id', page: '', layout: MainLayout },
    { path: '/predict', page: '', layout: MainLayout },
    { path: '/profile', page: '', layout: MainLayout },
]

export { publicRoutes, privateRoutes }
