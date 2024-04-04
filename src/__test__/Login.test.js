import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react'
import LoginForm from 'components/LoginForm'
import store from 'app/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('firebase.js', () => ({
    db: jest.fn(),
}))

const setup = async () =>
    render(
        <Router>
            <Provider store={store}>
                <LoginForm />
            </Provider>
        </Router>
    )

describe('Login Testing', () => {
    // Tear down
    afterEach(() => {
        cleanup()
    })

    // Test cases
    test('should render and submit form with valid input', async () => {
        // rendering setup
        setup()

        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'phunlh2001@gmail.com' },
        })
        fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), {
            target: { value: '123456' },
        })

        const button = screen.getByText(/Đăng nhập/i, { selector: 'button' })
        button.click()

        await waitFor(() => {
            expect(
                screen.getByText('Đăng nhập thành công!')
            ).toBeInTheDocument()
        })
    })

    test('should display error message with invalid input', async () => {
        // rendering setup
        setup()

        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'invalid' },
        })
        fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), {
            target: { value: '' },
        })

        const button = screen.getByText(/Đăng nhập/i, { selector: 'button' })
        button.click()

        await waitFor(() => {
            expect(screen.getByText('Email không hợp lệ')).toBeInTheDocument()
        })

        await waitFor(() => {
            expect(
                screen.getByText('Mật khẩu không được để trống')
            ).toBeInTheDocument()
        })
    })
})
