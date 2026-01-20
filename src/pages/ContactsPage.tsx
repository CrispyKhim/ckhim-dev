import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'

export default function ContactsPage() {
  return (
    <>
      {/* Remove padding when you start this page */}
      <div className="h-screen w-full text-center flex flex-col justify-center pt-200 pb-100">
        <h1>Contacts page incoming!</h1>
        <p className='pt-10'>Instead, you can contact me via one of the social media icons!</p>

        {/* Icons */}
				<div className='flex items-center justify-center gap-4 pt-10'>
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
          <a href='https://discord.com/users/619402174572658717' target='_blank' rel='noopener noreferrer' aria-label='Discord'>Discord</a>
				</div>
      </div>
    </>
  )
}