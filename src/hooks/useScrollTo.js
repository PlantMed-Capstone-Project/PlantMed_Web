import { useLayoutEffect } from 'react'

export default function useScrollTo(vertical, horizontal, ...deps) {
    useLayoutEffect(
        () => {
            window.scrollTo(vertical, horizontal)
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps ? [...deps] : []
    )
}
