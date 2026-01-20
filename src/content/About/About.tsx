const about = [
    'Penultimate computer science @ UNSW',
    'Self-taught Python',
    'Actively learning web development with React + Tailwind CSS + more',
    'Extensive volunteering experience in high school + university'
]

export default function About() {
    return (
        <div className="w-full h-screen p-20">
            <h1>About</h1>

            
            <hr />
            
            <ul>
                {about.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}