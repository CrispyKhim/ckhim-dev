import { NavLink } from 'react-router-dom'

const navItems = [
	{ path: '/', label: 'Home' },
	{ path: '/about', label: 'About' },
	{ path: '/projects', label: 'Projects' },
	{ path: '/blog', label: 'Blog' },
	{ path: '/contacts', label: 'Contacts' },
]

export default function Navbar() {
	return (
		<nav className='flex-1 p-4 overflow-hidden fixed top-0 w-screen bg-blue-100'>
			<ul className='space-y-2'>
				{navItems.map((item) => (
					<li key={item.path} className='float-left pl-10'>
						<NavLink to={item.path}>{item.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	)
}