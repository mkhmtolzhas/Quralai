import React from 'react'


const Landing = () => {
  return (
    <section className='w-full px-10 py-14 flex items-center justify-center text-[#252728] bg-[#FFF]'>
        <div className="container w-full h-full flex flex-col items-center justify-center gap-4">
            <div className='w-[300px] h-[300px] rounded-full bg-[url("https://spotify-nf.s3.eu-north-1.amazonaws.com/Mama.jpg")] bg-top bg-cover bg-no-repeat' />
            <p>@quralai_gynecolog</p>
            <div className="text-center">
                <h1 className='text-4xl font-vag-rounded-light text-[#8ED7E0]'>КУЛЧИМАКОВА</h1>
                <h1 className='text-4xl font-vag-rounded-light text-[#8ED7E0]'>КУРАЛАЙ</h1>
            </div>
            <div className="flex flex-col gap-4 font-vag-rounded-medium text-xl">
                <p><span className='text-[#8ED7E0]'>•</span> Жоғары санатты гинеколог-эндокринолог дәрігер</p>
                <p><span className='text-[#8ED7E0]'>•</span> 4000 астам әйелге ана болуға көмектескен маман</p>
                <p><span className='text-[#8ED7E0]'>•</span> Бедеулік, етеккір циклының бұзылуы, гормондық өзгерістерді қалпына келтіру</p>
                <p><span className='text-[#8ED7E0]'>•</span> ҚР Президентінің Іс Басқармасы ауруханасында дәрігер-гинеколог қызметін атқарды</p>
                <p><span className='text-[#8ED7E0]'>•</span> 17 жыл тәжірибесі бар гинеколог</p>
            </div>
            <a href='https://wa.me/77475638583' className="w-full text-center bg-[#8ED7E0] text-[#FFF] rounded-lg p-4">Консультацияға жазылу</a>
        </div>
    </section>
  )
}

export default Landing