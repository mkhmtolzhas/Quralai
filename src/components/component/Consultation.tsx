import React from 'react'

const Consultation = () => {
  return (
    <section className='w-full min-h-1 px-10 pb-14 flex justify-center items-center text-[#FFF] font-vag-rounded-medium'>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <div className="text-center">
                <h1 className='text-3xl font-vag-rounded-light text-[#4169E1]'>КОНСУЛЬТАЦИЯҒА НЕ КІРЕДІ?</h1>
            </div>
            <div className="">
                <div className="flex flex-col gap-4 font-vag-rounded-medium text-xl bg-[#4169E1] rounded-t-lg p-4">
                    <p><span className='text-[#FFF]'>–</span> Әйелі мен күйеуін бірге қабылдау</p>
                    <p><span className='text-[#FFF]'>–</span> Не үшін бала көтере алмай жатқан себебін анықтау</p>
                    <p><span className='text-[#FFF]'>–</span> Себебіне байланысты индивидуалды емдеу</p>
                    <p><span className='text-[#FFF]'>–</span> Бимануалды тексеру, креслода қарау</p>
                    <p><span className='text-[#FFF]'>–</span> Күйеуімен бірге емдеу</p>
                    <p><span className='text-[#FFF]'>–</span> Емдеудің әр этаптарында қолдау көрсету</p>
                </div>
                <div className="w-full min-h-1 border-2 border-[#4169E1] p-4 rounded-b-lg text-black">
                    <p className='text-2xl text-center'>Консультация бағасы:</p>
                    <p className='text-xl'>20 000 теңге</p>
                    <p className='text-xl'>Күйеуімен бірге: 30 000 теңге</p>
                    <p className='text-xl'>Балаларға: 15 000 теңге</p>
                </div>


            </div>
            <a href='https://wa.me/77475638583' className="w-full text-center bg-[#4169E1] text-[#FFF] rounded-lg p-4">Консультацияға жазылу</a>
        </div>
    </section>
  )
}

export default Consultation