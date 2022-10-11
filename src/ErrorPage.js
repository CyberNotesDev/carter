import { useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Sorry, Wrong Page</h1>

            {error.statusText || error.message}
        </div>

    )
}