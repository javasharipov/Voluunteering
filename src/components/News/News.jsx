import React from 'react'
import girl from '../../assets/Thumbnail.svg'
import nature from '../../assets/nature.svg'
import sky from '../../assets/sky.svg'
import water from '../../assets/water.svg'

const News = () => {
	return (
		<section className='mt-[96px] mb-[96px]'>
			<div className='container mx-auto max-w-[1280px]'>
				<div className='text-center mb-[48px]'>
					<h2 className='text-[#1D2130] text-[48px] font-bold mb-[16px]'>
						Read our Recent News
					</h2>
					<p className='text-[#525560] text-[16px] font-normal'>
						Edit this text to make it your own. To edit, simply click directly
						on the text to start We are served
					</p>
				</div>

				<div className='grid grid-cols-4 gap-[24px]'>
					<div>
						<img src={girl} alt='image' />
						<h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>
							Don’t destroy greenery and don’t spoil scenery
						</h3>
						<p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim
						</p>
					</div>
					<div>
						<img src={nature} alt='image' />
						<h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>
							Is climate change happening faster than expected?
						</h3>
						<p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim
						</p>
					</div>
					<div>
						<img src={sky} alt='image' />
						<h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>
							Top 10 facts about wind farms you didn't know
						</h3>
						<p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim
						</p>
					</div>
					<div>
						<img src={water} alt='image' />
						<h3 className=' mt-[16px] text-[#1D2130] text-[20px] font-medium leading-[30px] mb-[8px]'>
							Our goal is to make water available for everyone
						</h3>
						<p className='text-[#525560] text-[16px] font-normal leading-[25.6px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default News
