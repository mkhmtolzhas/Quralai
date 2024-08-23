"use client"
import React from 'react'
import Slider from 'react-slick';

const ImageReviews = () => {
    const images = [
        './img/review1.jpg',
        './img/review2.jpg',
        './img/review3.jpg',
        './img/review4.jpg',
        './img/review5.jpg',
        './img/review6.jpg',
        './img/review7.jpg',
        './img/review8.jpg',
        './img/review9.jpg',
        './img/review10.jpg',
        './img/review11.jpg',
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        // autoplaySpeed: 1000,
        // cssEase: "linear",
        pauseOnHover: false,
        arrows: true,
        rtl: true,
        swipeToSlide: true,
        afterChange: function(index: any) {
            console.log(
              `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
          }
      };
      return (
        <div className="w-full text-black">
            <Slider {...settings} className=''>
                {images.map((image, index) => (
                    <div key={index} className='w-full h-[60vh]'>
                        <div className="w-full h-[60vh] flex items-center justify-center">
                            <img src={image} alt="review" className="w-[80%] h-full object-contain" />
                        </div>
                    </div>
                ))}
                {/* <div className='w-full h-[40vh]'>
                    <div className="w-full h-[40vh] flex items-center justify-center">
                        <div className="w-[80%] h-full bg-black"></div>
                    </div>
                </div>
                <div className='w-full h-[40vh]'>
                    <div className="w-full h-[40vh] flex items-center justify-center">
                        <div className="w-[80%] h-full bg-black"></div>
                    </div>
                </div>
                <div className='w-full h-[40vh]'>
                    <div className="w-full h-[40vh] flex items-center justify-center">
                        <div className="w-[80%] h-full bg-black"></div>
                    </div>
                </div>
                <div className='w-full h-[40vh]'>
                    <div className="w-full h-[40vh] flex items-center justify-center">
                        <div className="w-[80%] h-full bg-black"></div>
                    </div>
                </div>
                <div className='w-full h-[40vh]'>
                    <div className="w-full h-[40vh] flex items-center justify-center">
                        <div className="w-[80%] h-full bg-black"></div>
                    </div>
                </div>
                <div className='w-full h-[40vh]'>
                    <div className="w-full h-[40vh] flex items-center justify-center">
                        <div className="w-[80%] h-full bg-black"></div>
                    </div>
                </div> */}
            </Slider>
        </div>
    )
}

export default ImageReviews