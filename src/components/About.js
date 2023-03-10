import { Outlet } from "react-router-dom";

const About = () =>{
    return (
        <div className="mt-20 h-screen flex items-center justify-center font-bold text-3xl">
            <h1>This is About us page.</h1>
            <Outlet/>
        </div>
    )
}

export default About;