import { cleanup, render, screen } from '@testing-library/react'
import AboutUsHero from 'components/AboutUs/Hero'
import AboutUsMember from 'components/AboutUs/Members'

// Mock the useNavigate function
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}))

// clean after each test case
afterEach(() => {
    cleanup()
})

describe('AboutUs Integration testing', () => {
    // test render AboutHero correctly
    test('Render AboutHero correctly', () => {
        const text = {
            title: 'Về chúng tôi',
            note: 'Note...',
        }
        render(<AboutUsHero {...text} />)

        // Test render title and note
        const heroTitle = screen.getByText('Về chúng tôi')
        expect(heroTitle).toBeInTheDocument()
    })

    // Render members testing
    test('Should render members', () => {
        const members = {
            title: 'Thành viên',
            listTop: [
                { id: 1, name: 'Nguyễn Lê Hưng Phú', studentId: 'CE150297' },
                { id: 2, name: 'Huỳnh Hoàng Phương', studentId: 'CE161062' },
            ],
            listBot: [{ id: 1, name: 'Bùi Tấn Nguyên', studentId: 'CE150651' }],
        }
        render(<AboutUsMember {...members} />)

        const membersTitle = screen.getByText('Thành viên')
        const member1 = screen.getByText(/Nguyễn Lê Hưng Phú/i)
        const member2 = screen.getByText(/Bùi Tấn Nguyên/i)
        expect(membersTitle).toBeInTheDocument()
        expect(member1).toBeInTheDocument()
        expect(member2).toBeInTheDocument()
    })
})
