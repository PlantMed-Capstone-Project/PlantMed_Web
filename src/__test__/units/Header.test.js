import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/Header/Header'
import { Provider } from 'react-redux'
import store from 'app/store'

// Mock the useNavigate function
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}))

// clean after each test case
afterEach(() => {
    cleanup()
})

describe('Header Component Unit testing', () => {
    // test render without login correctly
    test('render correctly', () => {
        render(
            <Router>
                <Provider store={store}>
                    <Header isLogin={false} />
                </Provider>
            </Router>
        )

        // test logo render
        const logoElement = screen.getByAltText('logo')
        expect(logoElement).toBeInTheDocument()

        // test nav render
        const homeTab = screen.getByText('TRANG CHỦ')
        expect(homeTab).toBeInTheDocument()

        const predictTab = screen.getByText('NHẬN DIỆN HÌNH ẢNH')
        expect(predictTab).toBeInTheDocument()
    })

    // etc testing...
})
