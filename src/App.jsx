import { Box } from '@mui/material'
import GoogleFontLoader from 'react-google-font-loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import CustomSnackbar from 'components/CustomSnackbar'
import NotFound from 'components/NotFound'
import ReduxContainer from 'components/ReduxContainer'
import { LoginRoute, PrivateRoute } from 'components/Routers'
import { privateRoutes, publicRoutes } from 'routes'
import './App.css'

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
            <ReduxContainer>
                <GoogleFontLoader
                    fonts={[
                        {
                            font: 'Roboto',
                            weights: [200, 400, 500, 700],
                        },
                    ]}
                />
                <CustomSnackbar />
                <BrowserRouter>
                    <Routes>
                        <Route element={<LoginRoute />}>
                            {publicRoutes.map((route) => {
                                const Page = route.page
                                const Layout = route.layout

                                return (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                )
                            })}
                        </Route>

                        <Route element={<PrivateRoute />}>
                            {privateRoutes.map((route) => {
                                const Page = route.page
                                const Layout = route.layout

                                return (
                                    <Route
                                        key={route.path}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                )
                            })}
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ReduxContainer>
        </Box>
    )
}

export default App
