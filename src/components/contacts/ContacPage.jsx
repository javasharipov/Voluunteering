import React from 'react';
import lineblack from '../../assets/black-line.svg';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import map from '../../assets/Map.svg'
import logo from '../../assets/footerlogo.svg'

const ContacPage = () => {
  return (
    <>
      <section className='pt-[96px] pb-[96px] bg-[#EBF0F9]'>
        <div className='container mx-auto max-w-[1280px]'>
          <div className='flex gap-[24px] items-center text-[#1D2130] text-[16px] font-bold'>
            <img className='mb-8' src={lineblack} alt="" />
            <h2 className='mb-8 uppercase'>Contact Us</h2>
          </div>

          <div className='flex items-center gap-[96px]'>
            <div className='text-[#1D2130] w-full'>
              <h2 className='text-[56px] font-bold leading-[67.2px] mb-[16px]'>We'd love to hear from you</h2>
              <p className='text=[#525560] text-[16px] font-medium mb-[32px]'>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            </div>

            <div className='w-full grid grid-rows-3 gap-[24px] p-[24px] rounded-2xl'>
              <div className='flex items-center gap-[24px]'>
                <h2 className='text-[20px] font-bold leading-[30px]'>Let's talk!  <p className='text-[16px] font-normal text-[#1D2130]'>+1 23 456 789 <strong className='pl-[32px] text-[16px] font-normal text-[#1D2130]'>hello@finsweet.com</strong></p></h2>
              </div>
              <div className='flex items-center gap-[24px]'>
                <h2 className='text-[20px] font-bold leading-[30px]'>Headoffice <p className='text-[16px] font-normal text-[#525560]'>8 Brewery Drive, Hudson, NH 03051 <p>USA</p></p></h2>
              </div>
              <div className='flex items-center gap-[24px]'>
                <h2 className='text-[20px] font-bold leading-[30px]'>Branch Office <p className='text-[16px] font-normal text-[#525560]'>178 Marconi St., Venice, 34293 <p>Italy</p></p></h2>
              </div>
              <div className='flex items-center gap-[24px] text-xl'>
                <FaFacebook /> <FaTwitter /> <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-[96px] container mx-auto max-w-[1280px]'>
        <form className='bg-white p-[32px}]'>
          <div className='grid grid-cols-2 gap-[16px] mb-[24px]'>
            <div>
              <label className='block text-[16px] font-medium text-[#1D2130] mb-[8px]'>First Name</label>
              <input type='text' placeholder='John' className='w-full p-[12px] border border-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2130]' />
            </div>
            <div>
              <label className='block text-[16px] font-medium text-[#1D2130] mb-[8px]'>Last Name</label>
              <input type='text' placeholder='Doe' className='w-full p-[12px] border border-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2130]' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-[16px] mb-[24px]'>
            <div>
              <label className='block text-[16px] font-medium text-[#1D2130] mb-[8px]'>Email ID</label>
              <input type='email' placeholder='johndoe@gmail.com' className='w-full p-[12px] border border-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2130]' />
            </div>
            <div>
              <label className='block text-[16px] font-medium text-[#1D2130] mb-[8px]'>Subject</label>
              <input type='text' placeholder='Subject' className='w-full p-[12px] border border-[#E4E4E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D2130]' />
            </div>
          </div>

          <div className='mb-[24px]'>
            <label className='block text-[16px] font-medium text-[#1D2130] mb-[8px]'>Message</label>
            <textarea placeholder='Type your Message' className='w-full p-[12px] border border-[#E4E4E4] rounded-lg h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-[#1D2130]'></textarea>
          </div>

          <button type='submit' className='mb-[96px] px-[16px] py-[12px] block m-auto bg-[#28A745] text-white text-[16px] font-bold rounded-lg hover:bg-[#218838]'>Send Message</button>
        </form>

      </section>
      <img className='w-full' src={map} alt="" />


      <section className="bg-black text-white py-10">
        <div className="container mx-auto max-w-[1280px] px-4 grid md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our team</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About us</a></li>
              <li><a href="#" className="hover:text-gray-400">Team</a></li>
              <li><a href="#" className="hover:text-gray-400">What we do</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Projects</a></li>
              <li><a href="#" className="hover:text-gray-400">Events</a></li>
              <li><a href="#" className="hover:text-gray-400">Donate</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-xl font-semibold mb-6">Subscribe to get latest updates</h3>
            <form className="flex flex-wrap justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring focus:ring-gray-600 max-w-[300px]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>


    </>
  );
};

export default ContacPage;
