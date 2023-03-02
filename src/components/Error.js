import { useRouteError } from "react-router-dom";


const Error = () =>{
    const error = useRouteError();
    console.log(error)
    return (
        <>
            <h1>OOps! Something went wrong</h1>
            <h2>{error.status}</h2>
            <h2>{error.statusText}</h2>
        </>
    )
}

export default Error