import React from 'react'
import pic1 from '/src/images/desktop/image-transform.jpg'
import pic2 from '/src/images/desktop/image-stand-out.jpg'
import pic3mo from '/src/images/mobile/image-graphic-design.jpg'
import pic3 from '/src/images/desktop/image-graphic-design.jpg'
import pic4 from '/src/images/desktop/image-photography.jpg'
function Grid() {
  return (
    <div className='w-full md:mt-[0px] grid  grid-cols-1 grid-row-6 md:grid-cols-2 md:grid-row-3'>
        <div className='w-full text-center md:text-start flex items-center justify-center p-10'>
            <div className='max-w-[300px] h-[300px] flex flex-col justify-center row-start-2 row-end-3'>
            <h1 id='text' className=' font-black text-4xl'>Transform your brand</h1>
            <p className=' font-extralight text-sm py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, beatae. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
            <p id='learn1' className='uppercase flex justify-center md:justify-start border-b-orange-400 font-extrabold'>Learn More</p>
            </div>
        </div>
        <div className='w-full md:col-start-2 row-start-1 row-end-2 bg-red-500'>
            <div className='h-full w-full flex items-center justify-center'>
            <img src={pic1} className='w-full object-cover  h-full'/>
            </div>
        </div>
        <div className='w-full bg-red-500'>
            <div className='h-full w-full flex items-center justify-center'>
            <img src={pic2} className='w-full object-cover  h-full'/>
            </div>
        </div>
        <div className='w-full text-center md:text-start flex items-center justify-center p-10'>
            <div className='max-w-[300px] md:max-w-[400px] h-[300px] flex flex-col justify-center'>
            <h1 id='text' className='font-extrabold text-4xl'>Start out to the right audience</h1>
            <p className=' font-extralight text-sm py-8'>Lorem Lorem ipsum dolor sit amet. Lorem, ipsum dolor. ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero tempore molestiae qui corporis mollitia.</p>
            <p id='learn2' className='uppercase  flex justify-center md:justify-start border-b-orange-400 font-extrabold'>Learn More</p>
            </div>
        </div>
        <div id='cherry' className='w-full flex items-center justify-center h-[580px] relative'> 
        <img src={pic3} className=' w-[100%] object-cover md:object-center h-[100%]'/>
       <div className='absolute max-h-[100px] w-full flex items-center justify-center text-center px-[100px]  md:px-[100px] lg:md:px-[150px] top-[400px]'>
       <div className=''>
       <h1 id='text' className='text-center font-extrabold text-2xl'>
          Graphics Design
        </h1>
        <p className='py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ducimus vero pariatur provident facilis exercitationem!</p>
       </div>
       </div>
        </div>
        <div id='orange' className='w-full flex items-center justify-center h-[580px] relative'> 
        <img src={pic4} className='w-[100%] object-cover md:object-center h-[100%]'/>
       <div className='absolute max-h-[100px] w-full flex items-center justify-center text-center px-[100px] md:px-[100px] lg:md:px-[150px] top-[400px]'>
       <div className=''>
       <h1 id='text' className='text-center font-extrabold text-2xl'>
          Photography
        </h1>
        <p className='py-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ducimus vero pariatur provident facilis exercitationem!</p>
       </div>
       </div>
        </div>
    </div>
  )
}

export default Grid