import { useRouteError } from "react-router-dom"
const Error = () => {
const err = useRouteError();

    console.log('err', err)
    return (
        <div>
            <h1>Error Page</h1>
        </div>
    )
}

export default Error;