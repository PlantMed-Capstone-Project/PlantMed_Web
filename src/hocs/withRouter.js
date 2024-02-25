import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom'

export default function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()

        const [searchParams, setSearchParams] = useSearchParams()

        return (
            <Component
                {...props}
                location={location}
                navigate={navigate}
                params={params}
                searchParams={searchParams}
                setSearchParams={setSearchParams}
            />
        )
    }

    return ComponentWithRouterProp
}
