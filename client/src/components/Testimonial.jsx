import React from 'react';
import { assets } from '../assets/data';
import Title from './Title';

const Testimonial = () => {
  return (
    <section className="">
      <Title
        title1={"What People Says"}
        title2={"Don't Just Take our Words"}
        titleStyles={"mb-10"}
        para={"Hear What our Users Say About us. We're Always Looking for Ways to Improve. If you have a positive experience with us, Please Leave a Review."}
      />

      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm">
          <div className='flexBetween'>
            <div className='flex gap-1'>
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />              
            </div>
            <p>22 January 2025</p>
          </div>
          <p>“Amazing service! The car arrived 10 minutes early, very clean and well maintained. The driver was polite and professional. Definitely booking again!”</p>
          <div className='flex-items-center gap-2'>
            <img src={assets.user1} alt="userImg" className='h-8 w-8 rounded-full' />
            <p className='text-gray-800 font-medium' >Shakshi</p>
          </div>
        </div>
        <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm'>
          <div className='flexBetween'>
            <div className='flex gap-1'>
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
            </div>
            <p>23 March 2025</p>
          </div>
          <p>“Car was spotless and comfortable, felt like a new vehicle. AC worked perfectly and the ride was super smooth.”</p>
          <div className='flex-items-center gap-2'>
            <img src={assets.user2} alt="userImg" className='h-8 w-8 rounded-full' />
            <p className='text-gray-800 font-medium' >Micheal</p>
          </div>
        </div>
        <div className='bg-primary w-full space-y-4 p-3 rounded-md text-gray-500 text-sm'>
          <div className='flexBetween'>
            <div className='flex gap-1'>
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
              <img src={assets.star} alt="" width={16} />
            </div>
            <p>25 April 2025</p>
          </div>
          <p>“Booking was very simple and quick, no unnecessary paperwork. Got the car within minutes.”</p>
          <div className='flex-items-center gap-2'>
            <img src={assets.user3} alt="userImg" className='h-8 w-8 rounded-full' />
            <p className='text-gray-800 font-medium' >harley</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonial