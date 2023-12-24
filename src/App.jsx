import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from 'pages/HomePage'
import PlantPage from 'pages/Plant/PlantPage'
import { Box } from '@mui/material'
import GoogleFontLoader from 'react-google-font-loader';

function App() {
  return (
    <Box component="section" sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: [200, 400, 500, 700],
          },
        ]}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/plant" element={<PlantPage />} exact />
        </Routes>
      </BrowserRouter>
    </Box>


  )
}

export default App
