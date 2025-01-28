import React from 'react'
import ctaImg from '../../assets/cta.png'

const Cta = () => {
	return (
		<div
			className='w-[1280px] h-[390px] bg-center bg-no-repeat'
			style={{ backgroundImage: `url(${ctaImg})` }}
		>
			<div className='flex flex-col items-center justify-center'>
				<h2 className='text-5xl font-bold text-center w-[630px] text-white leading-[57px] mt-[93px]'>
					You can contribute to make the environment greener!
				</h2>
				<div className='flex items-center gap-8 mt-8'>
					<button className='px-8 py-4 bg-[#70C174] text-white rounded-[4px] cursor-pointer'>
						Join as a volunteer
					</button>
					<button className='px-8 py-4 bg-[#fff] text-black rounded-[4px] cursor-pointer'>
						Donate
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cta
