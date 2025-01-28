import React from 'react'
import lineblack from '../../assets/black-line.svg'
import team from '../../assets/image.svg'
import Supporters from '../Supporters/Supporters'
import award1 from '../../assets/award1.svg'
import award2 from '../../assets/award2.svg'
import award3 from '../../assets/award3.svg'
import award4 from '../../assets/award4.svg'
import groupImage from '../../assets/group.png'
import Cta from '../Cta/Cta'
import News from '../News/News'
import Events from '../Events/Events'
import Team from '../Team/Team'

const Aboutus = () => {
	return (
		<section className='mt-[96px]'>
			<div className='container mx-auto max-w-[1280px]'>
				<div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
					<img className='mb-8' src={lineblack} alt='' />
					<h2 className='mb-8'>Know About us</h2>
				</div>
				<div className=' flex items-center gap-[64px] mb-[96px]'>
					<div className='w-[1500px]'>
						<h3 className='leading-[67.2px text-[56px] font-bold text-[#1D2130]'>
							We are a nonprofit team working worldwide
						</h3>
					</div>

					<div className='w-full'>
						<h4 className='font-bold text-[20px] text-[#1D2130] mb-[16px]'>
							Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
							Nunc ut sem vitae risus tristique posuere.
						</h4>
						<p className='text-[#1D2130] font-normal text-[16px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
							libero vitae erat. Suspendisse varius enim elementum tristique.
						</p>
					</div>
				</div>

				<div className='mb-[96px]'>
					<img src={team} alt='team image' />
				</div>

				<div className='flex items-center gap-[96px] text-[#1D2130] mb-[96px]'>
					<div>
						<h2 className='text-[16px] font-bold uppercase mb-[16px]'>
							our mission
						</h2>
						<h3 className='text-[28px] font-bold leading-[42px] mb-[8px]'>
							We make the world we save our own environment
						</h3>
						<p className='text-[16px] font-medium leading-[25.6px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
							libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
							lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
						</p>
					</div>
					<div>
						<h2 className='text-[16px] font-bold uppercase mb-[16px]'>
							our mission
						</h2>
						<h3 className='text-[28px] font-bold leading-[42px] mb-[8px]'>
							We make the world we save our own environment
						</h3>
						<p className='text-[16px] font-medium leading-[25.6px]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
							libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
							lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
						</p>
					</div>
				</div>
				<Supporters />
				<div className='flex flex-col gap-12 my-24'>
					<h3 className='text-5xl font-bold text-[#1D2130] text-center'>
						Awards & Recognitions
					</h3>
					<div className='flex items-center justify-center gap-[208px]'>
						<div className='flex gap-[208px]'>
							<img src={award1} alt='' />
							<img src={award2} alt='' />
							<img src={award3} alt='' />
							<img src={award4} alt='' />
						</div>
					</div>
				</div>
				<div className='w-full h-[576px] bg-black my-24 rounded-[12px] pl-24 py-16 flex items-center'>
					<div className='flex flex-col gap-5 text-white flex-1'>
						<span className='text-base font-bold '>OUR JOURNEY </span>
						<h3 className='font-bold text-5xl '>How we raised 34M</h3>
						<p className='w-[448px] text-[#9d9c9b]'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique. Duis cursus,
							mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
							libero vitae erat. Aenean faucibus nibh.
						</p>
						<div className='flex  items-center gap-8'>
							<div className='flex flex-col '>
								<strong className='text-2xl font-medium '>34M+</strong>
								<span className='text-[#9d9c9b] text-[12px] font-medium'>
									Donation Received
								</span>
							</div>
							<div className='flex flex-col '>
								<strong className='text-2xl font-medium '>400+</strong>
								<span className='text-[#9d9c9b] text-[12px] font-medium'>
									Volunters
								</span>
							</div>
							<div className='flex flex-col '>
								<strong className='text-2xl font-medium '>40K+</strong>
								<span className='text-[#9d9c9b] text-[12px] font-medium'>
									Trees planted
								</span>
							</div>
						</div>
					</div>
					<div className='w-[647px] h-[448px]'>
						<img src={groupImage} alt='' />
					</div>
				</div>
				<Team />
				<Cta />
				<News />
				<Events />
			</div>
		</section>
	)
}

export default Aboutus
