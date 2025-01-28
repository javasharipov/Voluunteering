import React from 'react'
import blackLine from '../../assets/black-line.svg'
import bgvideoimage from '../../assets/Video.svg'
import img1 from '../../assets/image.png'
import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'
import icon4 from '../../assets/icon4.svg'
import chart from '../../assets/chart.svg'
import Cta from '../Cta/Cta'
import News from '../News/News'
import Events from '../Events/Events'
import Supporters from '../Supporters/Supporters'
import Projects from '../Projects/Projects'
const AboutHero = () => {
	return (
		<section className='mt-[96px] mb-[96px]'>
			<div className='container mx-auto max-w-[1280px]'>
				<div className='flex items-center gap-[96px]'>
					<div className='text-[#1D2130] text-[16px] font-bold w-full'>
						<div className='flex gap-[24px] items-center'>
							<img className='mb-8' src={blackLine} alt='' />
							<h2 className='mb-8'>Know About us</h2>
						</div>
						<h3 className='font-bold text-[48px] leading-[57.6px] mb-[32px]'>
							We help nature smile and survive everywhere
						</h3>
						<p className='font-normal text-[16px] text-[#525560] mb-6'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse varius enim in eros elementum tristique.
						</p>
						<p className='font-normal text-[16px] text-[#525560] mb-[48px]'>
							‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
							ut commodo diam libero vitae erat. Aenean faucibus nibh et justo
							cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
							tristique posuere.
						</p>
						<button className='px-[32px] py-[16px] bg-[#70C174] text-[16px] font-medium rounded text-white'>
							Learn more
						</button>
					</div>

					<div className='w-full'>
						<img src={bgvideoimage} alt='video' />
					</div>
				</div>
				{/* for supporters */}
				<Supporters />
			</div>
			<div className='w-full h-auto bg-[#EFF7F2] mt-16'>
				<div className='container mx-auto max-w-[1280px]'>
					<div className='flex gap-[24px] items-center pt-24'>
						<img className='mb-8' src={blackLine} alt='' />
						<h2 className='mb-8 font-bold text-base text-[#1D2130]'>
							Know About us
						</h2>
					</div>
					<div className='flex items-center justify-center gap-24'>
						<div className='flex flex-col'>
							<h4 className='text-5xl font-bold text-[#1D2130] leading-[57px] w-[608px]'>
								We care for earth, care for the coming birth
							</h4>
							<p className='font-normal text-base text-[#525560] leading-[25px] w-[608px] mt-4'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique.
							</p>
							<div className='desc flex flex-col mt-8 gap-6'>
								<div className='flex gap-6 items-start'>
									<img src={icon1} alt='' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Build Healthy Cities
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
								<div className='flex gap-6 items-start'>
									<img src={icon2} alt='' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Tree Plantation
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
								<div className='flex gap-6 items-start'>
									<img src={icon3} alt='' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Protect Land and Water
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
								<div className='flex gap-6 items-start'>
									<img src={icon4} alt='' />
									<div className='flex flex-col  gap-2'>
										<strong className='text-[#1D2130] text-2xl font-bold'>
											Animal Safety
										</strong>
										<p className='text-[#525560] font-normal text-base w-[384px]'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Suspendisse varius enim in eros.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='w-[480px] h-[658px] mb-24'>
							<img src={img1} alt='' />
						</div>
					</div>
				</div>
			</div>
			<div className='container mx-auto max-w-[1280px]'>
				<div className='flex gap-[24px] items-center pt-24'>
					<img className='mb-8' src={blackLine} alt='' />
					<h2 className='mb-8 font-bold text-base text-[#1D2130]'>
						Know About us
					</h2>
				</div>
				<h2 className='text-5xl font-bold text-[#1D2130] w-[640px] leading-[57px]'>
					We are Creating sustainable society, for everyone and forever.
				</h2>
				{/* projects */}
				<Projects />
			</div>
			<div className='w-full h-[600px] bg-black my-24'>
				<div className='container mx-auto max-w-[1280px] flex gap-[290px] pt-24'>
					<div className='flex flex-col w-[611px] text-white'>
						<h2 className='text-5xl font-bold leading-[57px]'>
							How we spend your donations and where it goes
						</h2>
						<p className='font-normal text-base mt-4 text-[#9d9c9b]'>
							We understand that when you make a  donation, you want to know
							exactly where your money is going and we pledge to be transparent.
						</p>
						<div className='w-full flex flex-wrap mt-8 gap-6'>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#BEF3C0] '></span>
								<span className='text-base font-medium text-white'>
									40% planting trees
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#AC94F1] '></span>
								<span className='text-base font-medium text-white'>
									35% cleanliness program
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#FFF0CA] '></span>
								<span className='text-base font-medium text-white'>
									10% helping people
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#F9CF64] '></span>
								<span className='text-base font-medium text-white'>
									10% animal safety
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<span className='w-4 h-4 rounded-[4px] bg-[#F38FBF] '></span>
								<span className='text-base font-medium text-white'>
									5% feeding the poor
								</span>
							</div>
						</div>
					</div>
					<div>
						<img src={chart} alt='' />
					</div>
				</div>
			</div>
			<div className='container mx-auto max-w-[1280px]'>
				<Cta />
				<News />
				<Events />
			</div>
		</section>
	)
}

export default AboutHero
