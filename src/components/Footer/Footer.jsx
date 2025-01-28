import React from 'react'
import logo from '../../assets/footerlogo.svg'

const Footer = () => {
	return (
		<section className='bg-black text-white py-10'>
			<div className='container mx-auto max-w-[1280px] px-4 grid md:grid-cols-4 gap-8'>
				<div>
					<img src={logo} alt='Logo' />
				</div>

				<div>
					<h3 className='text-lg font-semibold mb-4'>Our team</h3>
					<ul className='space-y-2'>
						<li>
							<a href='#' className='hover:text-gray-400'>
								About us
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Team
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								What we do
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Contact
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-lg font-semibold mb-4'>More</h3>
					<ul className='space-y-2'>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Projects
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Events
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Donate
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Blog
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h3 className='text-lg font-semibold mb-4'>Connect</h3>
					<ul className='space-y-2'>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Facebook
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Instagram
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								Twitter
							</a>
						</li>
						<li>
							<a href='#' className='hover:text-gray-400'>
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div className='mt-10'>
				<div className='container mx-auto px-4 text-center'>
					<h3 className='text-xl font-semibold mb-6'>
						Subscribe to get latest updates
					</h3>
					<form className='flex flex-wrap justify-center items-center gap-4'>
						<input
							type='email'
							placeholder='Your email'
							className='flex-1 px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-gray-600 max-w-[300px]'
						/>
						<button
							type='submit'
							className='px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition'
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Footer
