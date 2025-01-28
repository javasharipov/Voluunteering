import React from 'react'
import lineblack from '../../assets/black-line.svg'
import clear from '../../assets/cleared.svg'
import dog from '../../assets/dog.svg'
import travel from '../../assets/travel.svg'
import Events from '../Events/Events'
import Projects from '../Projects/Projects'

const MediaPage = () => {
	return (
		<>
			<section className='pt-[96px] pb-[96px] bg-[#EFF7F2]'>
				<div className='container mx-auto max-w-[1280px]'>
					<div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
						<img className='mb-8' src={lineblack} alt='' />
						<h2 className='mb-8 uppercase'>Top news</h2>
					</div>

					<div className='flex items-center gap-[96px]'>
						<div className='text-[#1D2130] w-full'>
							<h2 className='text-[56px] font-bold leading-[67.2px] mb-[16px]'>
								Our goal is to make water available for everyone
							</h2>
							<p className='text=[#525560] text-[16px] font-medium mb-[32px]'>
								Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
								Nunc ut sem vitae risus tristique posuere.
							</p>
							<button className='px-[32px] py-[16px] bg-[#70C174] rounded text-[#fff] text-[16px] font-medium'>
								Read more
							</button>
						</div>

						<div className='w-full grid grid-rows-3 gap-[24px] bg-white p-[24px] rounded-2xl'>
							<div className='flex items-center gap-[24px]'>
								<img src={clear} alt='cleared' />
								<h2 className='text-[20px] font-bold leading-[30px]'>
									Don’t destroy greenery and don’t spoil scenery.{' '}
									<p className='text-[16px] font-normal text-[#525560]'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse varius enim
									</p>
								</h2>
							</div>
							<div className='flex items-center gap-[24px]'>
								<img src={dog} alt='cleared' />
								<h2 className='text-[20px] font-bold leading-[30px]'>
									Why saving wildlife is extremely important{' '}
									<p className='text-[16px] font-normal text-[#525560]'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse varius enim
									</p>
								</h2>
							</div>
							<div className='flex items-center gap-[24px]'>
								<img src={travel} alt='cleared' />
								<h2 className='text-[20px] font-bold leading-[30px]'>
									Caring for the present is caring for the future{' '}
									<p className='text-[16px] font-normal text-[#525560]'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Suspendisse varius enim
									</p>
								</h2>
							</div>
						</div>
					</div>
					<Events />
				</div>
			</section>
		</>
	)
}

export default MediaPage
