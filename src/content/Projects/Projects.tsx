const projects = [
    {
        title: 'Remly',
        description: 'A centralised web application for hosting group hangouts and major events with the add-on features of gambling stakes and community engagement.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/devsoc-unsw/trainee-ratatouille-25t3'
    },
    {
        title: 'Sortify',
        description: ''
    }
]


export default function Projects() {
    return (
        <div className="h-screen w-screen max-w-6xl mx-50">
            <h1>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols gap-6">
                {projects.map((item) => (
                    <h2>{item.title}</h2>
                ))}
            </div>
        </div>
    )
}