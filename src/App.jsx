import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import PlantPage from 'pages/Plant/PlantPage'
import BlogPage from 'pages/BlogPage/BlogPage'
import { Box } from '@mui/material'
import GoogleFontLoader from 'react-google-font-loader'
import DetailPage from 'pages/DetailPage/DetailPage'
import Header from 'components/Header/Header'

function App() {
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
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App
