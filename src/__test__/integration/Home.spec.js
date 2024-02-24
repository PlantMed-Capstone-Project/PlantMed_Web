import { cleanup, render, screen } from '@testing-library/react'
import HomePage from 'pages/HomePage'

// Mock the useNavigate function
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}))

// clean after each test case
afterEach(() => {
    cleanup()
})

describe('HomePage Integration testing', () => {
    // test render HomePage correctly
    test('render HomePage correctly', () => {
        render(<HomePage />)

        // Test render title diversity plant
        const title = screen.getByText('ĐA DẠNG CÁC LOẠI THỰC VẬT')
        expect(title).toBeInTheDocument()
    })

    // etc testing...
})
