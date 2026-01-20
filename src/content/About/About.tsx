import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className="w-full p-40">
            <h1 className="p-4">Hi!</h1>
            <hr />
            <div className="p-4 text-xl">
                <p>I'm Christopher, currently living in Sydney as a penultimate computer science @ UNSW.</p>
                <p>Despite the lack of employability and experience, I am somewhat building projects to develop technical skills and keep up-to-date with the latest tech trends!</p>
                <br />
                <p>Besides creating personal projects for self-growth, I like to design and model <NavLink to={'/projects'}>3D projects</NavLink> on Blender.</p>
                <br />
                <p></p>
            </div>
        </div>
    )
}