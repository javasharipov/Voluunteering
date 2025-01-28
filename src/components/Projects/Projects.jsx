import React from 'react'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const Projects = () => {
	return (
		<div className='flex items-center justify-center gap-6 mt-[68px]'>
			<img className='cursor-pointer' src={card1} alt='' />
			<img className='cursor-pointer' src={card2} alt='' />
			<img className='cursor-pointer' src={card3} alt='' />
		</div>
	)
}

export default Projects
