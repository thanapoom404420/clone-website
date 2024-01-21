import React from 'react'
import pic1 from '/src/images/desktop/image-gallery-milkbottles.jpg'
import pic2 from '/src/images/desktop/image-gallery-orange.jpg'
import pic3 from '/src/images/desktop/image-gallery-cone.jpg'
import pic4 from '/src/images/desktop/image-gallery-sugarcubes.jpg'

function Pictures() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
        <div>
            <img src={pic1}/>
        </div>
        <div>
            <img src={pic2}/>
        </div>
        <div>
            <img src={pic3} alt="" />
        </div>
        <div>
            <img src={pic4} alt="" />
        </div>
    </div>
  )
}

export default Pictures