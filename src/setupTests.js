// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// mock firebase
jest.mock('firebase/app')
jest.mock('firebase/firestore', () => ({
    getFirestore: jest.fn(() => ({
        // Mock Firestore methods here
        collection: jest.fn(() => ({
            where: jest.fn(() => ({
                get: jest.fn(() => Promise.resolve('mocked expert')),
            })),
        })),
    })),
}))
jest.mock('firebase/storage', () => ({
    getStorage: jest.fn(() => ({
        ref: jest.fn(() => ({
            child: jest.fn(() => ({
                put: jest.fn(() =>
                    Promise.resolve({
                        ref: {
                            getDownloadURL: jest.fn(() => {
                                Promise.resolve('mockedURL')
                            }),
                        },
                    })
                ),
            })),
        })),
    })),
}))

// mock axios
jest.mock('axios', () => {
    return {
        create: jest.fn(() => ({
            interceptors: {
                request: { use: jest.fn(), eject: jest.fn() },
                response: { use: jest.fn(), eject: jest.fn() },
            },
            get: jest.fn(),
            post: jest.fn(),
            patch: jest.fn(),
            put: jest.fn(),
            postForm: jest.fn(),
        })),
    }
})

// mock router dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}))
