import React from 'react'
import blackLine from '../../assets/black-line.svg'
import rightarrow from '../../assets/rightarrow.svg'
const Events = () => {
	return (
		<div className='container mx-auto max-w-[1280px] my-24'>
			<div className='flex items-center gap-6'>
				<h2 className='text-4xl text-[#1D2130] font-medium'>Our Events</h2>
				<span className='w-[1062px] h-[1px] bg-[#E5E5E5]'></span>
			</div>
			<div className='flex items-start gap-6 mt-12'>
				<div className='flex gap-6 p-10 w-[628px] h-[192px] bg-[#BEF3C0] rounded-[8px]'>
					<div className='flex flex-col items-start'>
						<strong className='text-5xl font-medium text-[#1D2130]'>23</strong>
						<span className='text-base font-medium text-[#1D2130]'>SEP</span>
					</div>
					<div className='flex flex-col gap-2'>
						<div className='flex gap-[24px] items-center'>
							<h2 className='font-medium text-base text-[#1D2130]'>
								Know About us
							</h2>
							<img className='' src={blackLine} alt='' />
						</div>
						<h5 className='text-[28px] font-bold text-[#1D2130] w-[381px]'>
							Say no to plastic usage and save the planet
						</h5>
					</div>
					<button className='w-14 h-14 rounded-full bg-white mt-10'>
						<img className='ml-[18px]' src={rightarrow} alt='' />
					</button>
				</div>
				<div className='flex gap-6 p-10 w-[628px] h-[192px] bg-[#BEF3C0] rounded-[8px]'>
					<div className='flex flex-col items-start'>
						<strong className='text-5xl font-medium text-[#1D2130]'>25</strong>
						<span className='text-base font-medium text-[#1D2130]'>SEP</span>
					</div>
					<div className='flex flex-col gap-2'>
						<div className='flex gap-[24px] items-center'>
							<h2 className='font-medium text-base text-[#1D2130]'>
								Know About us
							</h2>
							<img className='' src={blackLine} alt='' />
						</div>
						<h5 className='text-[28px] font-bold text-[#1D2130] w-[381px]'>
							Weekly cleaning program
						</h5>
					</div>
					<button className='w-14 h-14 rounded-full bg-white mt-10'>
						<img className='ml-[18px]' src={rightarrow} alt='' />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Events
