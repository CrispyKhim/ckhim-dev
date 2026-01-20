import GitHubIcon from '@mui/icons-material/GitHub'
import LinkIcon from '@mui/icons-material/Link';

interface Project {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    app?: string;
}

const projects: Project[] = [
    {
        title: 'Remly',
        description: 'A centralised web application for hosting group hangouts and major events with the add-on features of gambling stakes and community engagement.',
        tech: ['React', 'TypeScript', 'Tailwind CSS'],
        github: 'https://github.com/devsoc-unsw/trainee-ratatouille-25t3',
    }, {
        title: 'Sortify',
        description: `
        Automatically sort a large, messed-up Spotify playlist into one or more playlists split based on a designated criteria. 
        This project is a web application that integrates with the Spotify API, allowing users to interact with their Spotify library through a Flask backend and a React frontend.
        `,
        tech: ['Python', 'Flask'],
        github: 'https://github.com/Rushik-Rsenal/Hackathon',
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
    }
]


export default function Projects() {
    return (
        <div className="w-full p-40">
            <h1 className="p-4">Projects</h1>
            <hr />
            <div className="flex flex-col">
                {projects.map((project) => (
                    <div className="p-10 m-10 border rounded-md">
                        {/* Title */}
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        
                        {/* Tech */}
                        <div className="flex flex-row items-center justify-start">
                            {project.tech.map((tech) => (
                                <p className="my-2 mr-4 p-1 bg-white border border-black rounded-lg">{tech}</p>
                            ))}
                        </div>

                        {/* Project Description */}
                        <p>{project.description}</p>

                        {/* Github & App Link */}
                        <div className='flex flex-row items-center justify-start'>
                            { project.github && 
                            <a className="my-2 mr-4 p-2 bg-white border border-black rounded-lg" href={project.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub' id='highlight'>
                                <GitHubIcon className='text-black hover:text-gray-600 transition-colors' /> Github Link
                            </a> }

                            { project.app && 
                            <a className="my-2 mr-4 p-2 bg-white border border-black rounded-lg" href={project.app} target='_blank' rel='noopener noreferrer' aria-label='App' id='highlight'>
                                <LinkIcon className='text-black hover:text-gray-600 transition-colors' /> App Link
                            </a> }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}