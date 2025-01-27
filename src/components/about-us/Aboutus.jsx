import React from 'react'
import lineblack from '../../assets/black-line.svg'
import team from '../../assets/image.svg'

const Aboutus = () => {
  return (
    <section className='mt-[96px]'>
      <div className='container mx-auto max-w-[1280px]'>
          <div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
            <img className='mb-8' src={lineblack} alt="" />
            <h2 className='mb-8'>Know About us</h2>
          </div>
        <div className=' flex items-center gap-[64px] mb-[96px]'>
          <div className='w-[1500px]'>
            <h3 className='leading-[67.2px text-[56px] font-bold text-[#1D2130]'>We are a nonprofit team working worldwide</h3>
          </div>

          <div className='w-full'>
            <h4 className='font-bold text-[20px] text-[#1D2130] mb-[16px]'>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h4>
            <p className='text-[#1D2130] font-normal text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
          </div>
        </div>


        <div className='mb-[96px]'>
          <img src={team} alt="team image" />
        </div>

        <div className='flex items-center gap-[96px] text-[#1D2130] mb-[96px]'>
          <div>
            <h2 className='text-[16px] font-bold uppercase mb-[16px]'>our mission</h2>
            <h3 className='text-[28px] font-bold leading-[42px] mb-[8px]'>We make the world we save our own environment</h3>
            <p className='text-[16px] font-medium leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
          <div>
            <h2 className='text-[16px] font-bold uppercase mb-[16px]'>our mission</h2>
            <h3 className='text-[28px] font-bold leading-[42px] mb-[8px]'>We make the world we save our own environment</h3>
            <p className='text-[16px] font-medium leading-[25.6px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus