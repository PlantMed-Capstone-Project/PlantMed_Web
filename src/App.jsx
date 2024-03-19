import { Box } from '@mui/material'
import GoogleFontLoader from 'react-google-font-loader'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { blogAction } from 'app/reducers/blog'
import { plantAction } from 'app/reducers/plant'
import ChatBox from 'components/ChatBox'
import CustomSnackbar from 'components/CustomSnackbar'
import NotFound from 'components/NotFound'
import { PublicRoute, PrivateRoute } from 'components/Routers'
import useActions from 'hooks/useActions'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { useEffect } from 'react'
import { getActiveBlog } from 'rest/api/blog'
import { getAll } from 'rest/api/plant'
import { privateRoutes, publicRoutes } from 'routes'

function App() {
    const { storePlant, storePlantSuccessful } = useActions(plantAction)
    const { storeBlogActive, storeBlog, storeBlogFailed } =
        useActions(blogAction)
    const { isLogin } = useShallowEqualSelector((state) => state.auth)

    const fetchPlant = async () => {
        storePlant()
        try {
            const response = await getAll()
            const data = response.data
            storePlantSuccessful(data)
        } catch (error) {
            console.log(error)
            storeBlogFailed()
        }
    }

    const fetchblog = async () => {
        storeBlog()
        try {
            const response = await getActiveBlog()
            storeBlogActive(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPlant()
        if (isLogin) {
            fetchblog()
        }
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
