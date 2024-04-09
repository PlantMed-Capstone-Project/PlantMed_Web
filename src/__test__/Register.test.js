import {
    cleanup,
    fireEvent,
    render,
    screen,
    waitFor,
} from '@testing-library/react'
import store from 'app/store'
import RegisterForm from 'components/RegisterForm'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const setup = () =>
    render(
        <Router>
            <Provider store={store}>
                <RegisterForm />
            </Provider>
        </Router>
    )

describe('RegisterForm component', () => {
    // Teardown
    beforeEach(() => cleanup())

    test('renders correctly', () => {
        setup()

        // Assert that the component renders the title
        expect(
            screen.getByText('Đăng ký', { selector: 'h5' })
        ).toBeInTheDocument()

        // Assert that the component renders input fields
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Họ')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Tên')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Mật khẩu')).toBeInTheDocument()
        expect(
            screen.getByPlaceholderText('Xác thực mật khẩu')
        ).toBeInTheDocument()

        // Assert that the component renders the policy checkbox
        expect(
            screen.getByText(
                'Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư.'
            )
        ).toBeInTheDocument()

        // Assert that the component renders the registration button
        expect(
            screen.getByText('Đăng ký', { selector: 'button' })
        ).toBeInTheDocument()

        // Assert that the component renders the login link
        expect(screen.getByText('Đăng nhập')).toBeInTheDocument()
    })

    test('submits form when registration button is clicked', async () => {
        setup()

        // Fill in the input fields
        fireEvent.change(screen.getByPlaceholderText('Email'), {
            target: { value: 'test@example.com' },
        })
        fireEvent.change(screen.getByPlaceholderText('Họ'), {
            target: { value: 'Doe' },
        })
        fireEvent.change(screen.getByPlaceholderText('Tên'), {
            target: { value: 'John' },
        })
        fireEvent.change(screen.getByPlaceholderText('Mật khẩu'), {
            target: { value: 'password123' },
        })
        fireEvent.change(screen.getByPlaceholderText('Xác thực mật khẩu'), {
            target: { value: 'password123' },
        })

        // Click on the registration button
        const button = screen.getByText('Đăng ký', { selector: 'button' })
        fireEvent.click(button)

        // Assert that the form is submitted
        await waitFor(() => {
            const actual = screen.getByText(/Vui lòng chờ trong giây lát/i)
            expect(actual).toBeInTheDocument()
        })
    })
})
