import React from 'react'


const Landing = () => {
  return (
    <section className='w-full px-10 py-14 flex items-center justify-center text-[#252728] bg-[#FFF]'>
        <div className="container w-full h-full flex flex-col items-center justify-center gap-4">
            <div className='w-[300px] h-[300px] rounded-full bg-[url("https://spotify-nf.s3.eu-north-1.amazonaws.com/Mama.jpg")] bg-top bg-cover bg-no-repeat' />
            <div className="text-center">
                <h1 className='text-4xl font-vag-rounded-light text-[#8ED7E0]'>КУЛЧИМАКОВА</h1>
                <h1 className='text-4xl font-vag-rounded-light text-[#8ED7E0]'>КУРАЛАЙ</h1>
            </div>
            <div className="flex flex-col gap-4 font-vag-rounded-medium text-xl text-center">
                {/* <p>№1 </p> */}
                {/* <ion-icon name="checkmark-done-circle-outline"></ion-icon> */}
                <p>Жоғары санатты гинеколог-эндокринолог дәрігер</p>
                <p>4000 астам әйелге ана болуға көмектескен</p>
                <p>Бедеулік, балалар гинекологиясы</p>
                <p>Lorem ipsum dolor sit, amet consectetur.</p>
                <p>17 жыл тәжірибе</p>
            </div>
            <div className="button-container">
                <button className="w-full bg-[#8ED7E0] text-[#FFF] rounded-lg p-4">Консультацияға жазылу</button>
            </div>
        </div>
    </section>
  )
}

export default Landing