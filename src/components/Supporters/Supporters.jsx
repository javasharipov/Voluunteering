import React from 'react'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
import logo4 from '../../assets/logo4.svg'
import logo5 from '../../assets/logo5.svg'
import logo6 from '../../assets/logo6.svg'

const Supporters = () => {
	return (
		<div className='container mx-auto max-w-[1280px]'>
			<div className='flex flex-col'>
				<div className='flex items-center gap-6 mt-[64px]'>
					<span className='text-base text-[#1D2130] font-bold uppercase '>
						our Supporters
					</span>
					<span className='w-[1094px] h-[0.5px] bg-[#E5E5E5]'></span>
				</div>
				<div className='flex items-center justify-center gap-24 mt-8'>
					<img src={logo1} alt='' />
					<img src={logo2} alt='' />
					<img src={logo3} alt='' />
					<img src={logo4} alt='' />
					<img src={logo5} alt='' />
					<img src={logo6} alt='' />
				</div>
			</div>
		</div>
	)
}

export default Supporters
