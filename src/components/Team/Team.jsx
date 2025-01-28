import React from 'react'
import person1 from '../../assets/person1.png'
import linkedinIcon from '../../assets/linkedin.svg'
import facebookInIcon from '../../assets/facebook.svg'
import twitterInIcon from '../../assets/twitter.svg'
import { Employees } from '../../static/index'

const Team = () => {
	return (
		<div className='flex flex-col gap-4 items-center justify-center my-24'>
			<h2 className='text-5xl font-bold text-[#1D2130] text-center'>
				Meet our team
			</h2>
			<p className='w-[520px] text-[#525560] text-base font-normal text-center'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique.
			</p>
			<div className='flex flex-wrap items-center justify-center gap-8'>
				{Employees?.map(product => (
					<div
						key={product.id}
						className='flex flex-col items-center justify-center gap-4'
					>
						<img src={product.picture} alt='' />
						<span className='text-[20px] font-medium text-[#1D2130]'>
							{product.name}
						</span>
						<h6 className='text-[#1D2130] font-medium text-[12px]'>
							{product.status}
						</h6>
						<div className='flex items-center justify-center gap-5'>
							<img src={facebookInIcon} alt='' />
							<img src={twitterInIcon} alt='' />
							<img src={linkedinIcon} alt='' />
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Team
