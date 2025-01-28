import React from 'react'
import { LINKS } from '../../static/index'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useLocation } from 'react-router-dom'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<header
			id='header'
			className={
				pathname === '/media'
					? 'bg-[#EFF7F2]'
					: pathname === '/contact'
					? 'bg-[#EBF0F9]'
					: ''
			}
		>
			<div className='container mx-auto max-w-[1280px]'>
				<nav className='flex items-center justify-between h-[67px]'>
					<div>
						<Link to={'/'}>
							<img src={logo} alt={logo} />
						</Link>
					</div>
					<ul className='flex items-center gap-10 capitalize text-[16px font-medium text-[#525560]'>
						{LINKS?.map((item, inx) => {
							return (
								<li key={inx}>
									<span>
										<NavLink to={item.path}>{item.name}</NavLink>
									</span>
								</li>
							)
						})}
						<button className='py-3 px-8 bg-[#1D2130] rounded text-[#fff] cursor-pointer active:scale-95 duration-300'>
							Donate
						</button>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
