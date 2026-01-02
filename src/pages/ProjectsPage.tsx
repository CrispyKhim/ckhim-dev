import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

// Using useState
function MyButton() {
    // Count is the current state
    // setCount updates the state when clicked
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

function ProjectsPage() {
  return (
    <>
      <p>Projects Page</p>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>

      <MyButton />

    </>
  )
}

export default ProjectsPage
