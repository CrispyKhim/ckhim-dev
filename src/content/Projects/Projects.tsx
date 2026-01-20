interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    app?: string;
    status: string;
}

const projects: Project[] = [
    {
        title: 'Remly',
        description: 'A centralised web application for hosting group hangouts and major events with the add-on features of gambling stakes and community engagement.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/devsoc-unsw/trainee-ratatouille-25t3',
        status: 'Coming Soon...'
    }, {
        title: 'Sortify',
        description: `
        Automatically sort a large, messed-up Spotify playlist into one or more playlists split based on a designated criteria. 
        This project is a web application that integrates with the Spotify API, allowing users to interact with their Spotify library through a Flask backend and a React frontend.
        `,
        tech: ['Python', 'Flask'],
        github: 'https://github.com/Rushik-Rsenal/Hackathon',
        status: 'Coming Soon...'
    }, {
        title: 'Felis Catus',
        description: `
        A web application created with Python + Flask for my the HSC subject: Information Processes & Technology (IPT).
        Extracts and displays information via The Cat API.
        Challenged myself to learn Flask and learn how to use an API within 3-4 weeks.
        `,
        tech: ['Python', 'Flask', 'HTML', 'CSS'],
        github: 'https://github.com/CrispyKhim/Felis-Catus',
        app: 'https://felis-catus.vercel.app/',
        status: 'Archived'
    }
]


export default function Projects() {
    return (
        <div className="h-screen w-full px-40">
            <h1>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols gap-6">
                {projects.map((item) => (
                    <h2>{item.title}</h2>
                ))}
            </div>
        </div>
    )
}