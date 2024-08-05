import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error  = useRouteError();

    return (
        <div>
            <h1>Error</h1>
            <p>{isRouteErrorResponse(error) && error.data}</p>
        </div>
    )
}