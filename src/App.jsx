import { Box } from '@mui/material'
import GoogleFontLoader from 'react-google-font-loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { plantAction } from 'app/reducers/plant'
import CustomSnackbar from 'components/CustomSnackbar'
import NotFound from 'components/NotFound'
import { PublicRoute, PrivateRoute } from 'components/Routers'
import useActions from 'hooks/useActions'
import { useEffect } from 'react'
import { getAll } from 'rest/api/plant'
import { privateRoutes, publicRoutes } from 'routes'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import ChatBox from 'components/ChatBox'

function App() {
    const { storePlant, storePlantSuccessful, storePlantFail } =
        useActions(plantAction)
    const { isLogin } = useShallowEqualSelector((state) => state.auth)
    const fetchData = async () => {
        storePlant()
        try {
            const response = await getAll()

            const data = response.data
            storePlantSuccessful(data)
        } catch (error) {
            console.log(error)
            storePlantFail()
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            <CustomSnackbar />
            {isLogin && <ChatBox />}
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicRoute />}>
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
        </Box>
    )
}

export default App
