export default function About() {
    return (
        <div className="w-screen h-screen bg-green-800">
            <h1>About</h1>
            <hr />
            
            <ul>
                <li></li>
            </ul>

            {/* CV */}
            <iframe
                src='public/Ckhim - CV.pdf'
                title='CV'
                width='100%'
                height='100%'
                className='mx-auto'
            />
        </div>
    )
}