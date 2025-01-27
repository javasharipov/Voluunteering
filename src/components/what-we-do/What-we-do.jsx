import React from 'react'
import lineblack from '../../assets/black-line.svg'
import wedo from '../../assets/wedo.svg'
import city from '../../assets/Icon.svg'

const WhatWeDo = () => {
    return (
        <section className='mt-[96px] mb-[96px]'>
            <div className='container mx-auto max-w-[1280px]'>
                    <div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
                        <img className='mb-8' src={lineblack} alt="" />
                        <h2 className='mb-8'>What we do</h2>
                    </div>
                <div className='flex gap-[110px] items-center mb-[96px]'>
                    <div className='w-full text-[#1D2130]'>
                        <h2 className='text-[56px] font-bold leading-[67.2px mb-[34px]'>We are working worldwide</h2>
                        <p className='text-[#525560] text-[16px] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                    <div className='w-full'>
                        <img src={wedo} alt="What we do" />
                    </div>
                </div>


            </div>
                <div className='bg-[#EFF7F2]'>
                    <div className='container mx-auto max-w-[1280px]'>
                    <h2 className='text-[#1D2130] text-[48px] font-bold pt-[96px] pb-[64px]'>What we do for the environment</h2>
                    
                    <div className='grid grid-cols-3 gap-[64px] pb-[96px]'>
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Build healthy cities <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Protect land and water<p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Tree plantation <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Water sustainability <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Animal safety <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                        <div>
                            <div className='flex items-start gap-[24px]'>
                                <img src={city} alt="city" />
                                <h2 className='text-[#1D2130] text-[24px] font-bold leading-[28px]'>Biodiversity <p className='text-[#525560] text-[14px] font-medium leading-[22px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p> </h2>
                            </div>
                        </div>    
                    </div>
                    </div>
                </div>
        </section>
    )
}

export default WhatWeDo