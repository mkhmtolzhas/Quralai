"use client"
import React from 'react'
import Slider from 'react-slick';

const ImageReviews = () => {
    const images = [
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review1.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review2.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review3.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review4.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review5.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review6.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review7.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review8.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review9.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review10.jpg',
        'https://spotify-nf.s3.eu-north-1.amazonaws.com/review11.jpg',
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
            </Slider>
        </div>
    )
}

export default ImageReviews