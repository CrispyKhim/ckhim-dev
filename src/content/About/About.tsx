import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <p>Short About component section</p>
            <Link to="/about">Read More</Link>
        </>
    )
}