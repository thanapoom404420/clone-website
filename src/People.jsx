import React from 'react'
import pic1 from '/src/images/image-emily.jpg'
import pic2 from '/src/images/image-thomas.jpg'
import pic3 from '/src/images/image-jennie.jpg'
function People() {
  return (
    <div className='w-full h-[1800px] md:h-[800px] p-0 md:p-10 xl:px-[150px] py-[450px] md:py-[150px] text-center'>
        <div className='block'>
            <h1 id='text' className='uppercase tracking-[.25em] font-extrabold text-gray-400 text-2xl'>client testimonials</h1>
        </div>
        <div className='md:grid grid-cols-3 gap-20 text-center sm:p-[10px] sm:pt-[100px] p-[100px]'>
            <div className='p-2 py-[0px] md:py-0'>
               <div className='flex items-center justify-center'>
               <img src={pic1}  className='rounded-full w-[30%]' />
               </div>
               <div>
               <p className='py-[30px] md:py-[50px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste sequi culpa iure nisi inventore?</p>
               </div>
               <h1 id='people' className='font-extrabold text-2xl py-5'>Emily B.</h1>
               <p className='text-gray-400'>Marketing Director</p>
            </div>
            <div className='p-2 py-[80px] md:py-0'>
               <div className='flex items-center justify-center'>
               <img src={pic2}  className='rounded-full w-[30%]' />
               </div>
               <div>
               <p className='py-[30px] md:py-[50px] text-gray-500'>Lorem ipsum dolor sit amet, Lorem, ipsum. suscipit.lorem5 Lorem ipsum dolor sit amet.</p>
               </div>
               <h1 id='people' className='font-extrabold text-2xl py-5'>Thomas S.</h1>
               <p className='text-gray-400'>Chief operating Officer</p>
            </div>
            <div className='p-2 py-[0px] md:py-0'>
               <div className='flex items-center justify-center'>
               <img src={pic3}  className='rounded-full w-[30%]' />
               </div>
               <div>
               <p className='py-[30px] md:py-[50px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at commodi eligendi in, veritatis ullam.</p>
               </div>
               <h1 id='people' className='font-extrabold text-2xl py-5'>Jennie F.</h1>
               <p className='text-gray-400'>Business Owner</p>
            </div>
        </div>
    </div>
  )
}

export default People