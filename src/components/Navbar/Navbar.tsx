import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import ArticleIcon from '@mui/icons-material/Article';

const navItems = [
	{ path: '/', label: 'About' },
	{ path: '/projects', label: 'Projects' },
	{ path: '/blog', label: 'Blog' },
	{ path: '/contacts', label: 'Contacts' },
]

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100)
		}

		// Check initial scroll position
		handleScroll()

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])


	return (
		<>
		{/* Name + NavLinks */}
		{/* Justify-between keeps the elements on the side of the navbars */}
		<nav 
			className={`bg-white text-black transition-all duration-700 ease-in-out fixed z-50 ${
				isScrolled 
					? 'top-0 left-0 right-0 shadow-md w-full' 
					: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-7xl'
			}`}
		>
			<div className='flex items-center justify-between px-20 py-3 top-0'>
				{/* Name */}
				<NavLink
					to="/"
					className="text-4xl font-bold cursor-pointer !text-black hover:!text-gray-600 transition-colors"
				>
					Christopher Khim
				</NavLink>

				{/* NavLinks */}
				<ul className='flex items-center gap-6'>
					{navItems.map((item) => (
						<li key={item.path}>
							<NavLink to={item.path}>{item.label}</NavLink>
						</li>
					))}
				</ul>
			</div>

			{/* Horizontal Line */}
			{/* Margin: '0 auto' keeps the horizontal line centered */}
			<hr style={{ width: '90%', margin: '0 auto'}}/>

			{/* Social Media Icons & More */}
			<div className='flex items-center justify-between px-20 py-2 top-0'>
				{/* Bio */}
				<p className=''>Programmer + 3D Modeller + Gamer</p>
				{/* Icons */}
				<div className='flex items-center gap-4'>
					<a href='public/Ckhim - CV.pdf' target='_blank' rel='noopener noreferrer' aria-label='CV'>
						<ArticleIcon className='text-black hover:text-gray-600 transition-colors' />
					</a>
					<a href='https://github.com/CrispyKhim' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
						<GitHubIcon className='text-black hover:text-gray-600 transition-colors' />
					</a>
					<a href='https://www.linkedin.com/in/ckhim/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
						<LinkedInIcon className='text-black hover:text-blue-600 transition-colors' />
					</a>
					<a href='https://www.instagram.com/crispy_khim/' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
						<InstagramIcon className='text-black hover:text-pink-600 transition-colors' />
					</a>
					<a href='mailto:christopherkhim668@gmail.com' aria-label='Email'>
						<EmailIcon className='text-black hover:text-gray-600 transition-colors' />
					</a>
				</div>
			</div>
		</nav>
		</>
	)
}