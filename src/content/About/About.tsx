import { NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className="w-full h-screen p-40">
            <h1 className="p-4">Hi!</h1>
            <hr className="" />
            <div className="p-4 text-xl">
                <p>I'm Christopher, currently living in Sydney as a penultimate computer science @ UNSW.</p>
                <p>Despite the lack of employability and experience, I am somewhat building projects to develop technical skills and keep up-to-date with the latest tech trends!</p>
                <br />
                <p>Besides creating personal projects for self-growth, I like to design and tinker with 3D models on Blender. You can view some old projects I created <NavLink to={'/projects'}>here!</NavLink></p>
                <p>I'm just an average gacha gamer. Currently, </p>
            </div>
        </div>
    )
}