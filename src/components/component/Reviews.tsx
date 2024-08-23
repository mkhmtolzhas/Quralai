import React from 'react'
import ImageReviews from './ImageReviews'

const Reviews = () => {
  return (
    <section className='w-full min-h-1 px-10 pb-14 flex justify-center items-center text-[#FFF] font-vag-rounded-medium'>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="text-center">
          <h1 className='text-3xl font-vag-rounded-light text-[#4169E1]'>ОТЗЫВТАР</h1>
        </div>
        <ImageReviews />
      </div>
    </section>
  )
}

export default Reviews