import { Box } from '@mui/material'
import Header from 'components/Header/Header'
import BlogPage from 'pages/BlogPage/BlogPage'
import DetailPage from 'pages/DetailPage/DetailPage'
import HomePage from 'pages/HomePage'
import PlantPage from 'pages/Plant/PlantPage'
import GoogleFontLoader from 'react-google-font-loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from 'components/Footer/Footer'
import SignupPage from 'pages/SignupPage/SignupPage'
import SigninPage from 'pages/SigninPage/SigninPage'

function App() {
    const spacingTop = 5
    return (
        <Box
            component="section"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
            }}
        >
            <GoogleFontLoader
                fonts={[
                    {
                        font: 'Roboto',
                        weights: [200, 400, 500, 700],
                    },
                ]}
            />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/plant" element={<PlantPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/detail" element={<DetailPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/signin" element={<SigninPage />} />
                </Routes>
            </BrowserRouter>
            <Footer topspacing={spacingTop} />
        </Box>
    )
}

export default App
