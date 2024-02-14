import { useLayoutEffect } from 'react'

export default function useScrollTo(vertical, horizontal) {
    useLayoutEffect(() => {
        window.scrollTo(vertical, horizontal)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
