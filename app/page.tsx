import CountdownTimer from '@/components/CountdownTimer'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <main className='max-w-xl w-full mx-auto relative pb-20 overflow-hidden'>
            <div className="h-screen w-full relative overflow-hidden">
                <div className="w-full absolute z-10 bottom-30 -right-5 pointer-events-none select-none">
                    <p className='text-[450px] text-end text-[#f7775e50]'>1</p>
                </div>

                <div className="absolute z-10 top-0 left-[15%] -translate-x-1/2 h-[600px] pointer-events-none select-none">
                    <Image
                        className="w-full h-full object-cover"
                        src={"/images/teddy.png"}
                        width={1000}
                        height={1000}
                        alt="teddy"
                    />
                </div>
                <div className="absolute z-10 -top-10 -right-[50%] h-[400px] -rotate-[100deg] pointer-events-none select-none">
                    <Image
                        className="w-full h-full object-cover"
                        src={"/images/leaves.webp"}
                        width={1000}
                        height={1000}
                        alt="teddy"
                    />
                </div>
                <div className="w-full absolute z-10 top-52 right-0 px-10">
                    <h2 className='text-2xl text-end font-bold mb-5 text-[#f7775e]'>Приглашение <br /> на День Рождения</h2>
                    <h1 className='text-7xl font-title font-bold text-center text-pink-600'>Ариана</h1>
                </div>
                {/* Itim                                dcr || en */}
                {/* Playwrite England SemiJoined        dcr || en */}
                {/* Dancing Script                      dcr || en */}

                {/* Kablammo                            title || ru/en */}
                {/* Caveat                              dcr || ru/en */}
            </div>
            <div className="">
                <h1 className='text-4xl font-bold font-title text-center text-orange-600'>Дорогие гости!</h1>
                <p className='mt-5 text-2xl text-center font-text mx-5 text-[#f7775e]'>Совсем скоро у меня день рождения, мне исполнится 1 год, буду очень рада видеть вас на моем празднике!</p>
                <p className='mt-5 text-2xl text-center font-text mx-5 text-[#f7775e]'>Будет много веселья, <br /> сладостей и пиццы!</p>
                <p className='mt-10 text-6xl font-title font-black text-center text-orange-600'>10.11.24</p>
                <p className='mt-10 text-2xl text-center font-text mx-5 text-[#f7775e]'>ЖДУ ВАС В 15:00</p>
                <p className='mt-5 text-2xl text-center font-text mx-5 text-[#f7775e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nulla maxime dolore libero accusamus omnis.</p>
            </div>

            <div className="my-10 py-8 bg-red-50">
                <div className="w-60 h-60 m-auto mb-10 overflow-hidden rounded-full">
                    <Image
                        className='w-full h-full object-cover object-top'
                        src={"/images/img-childe/image-1.jpg"}
                        width={1000}
                        height={1000}
                        alt='childe'
                    />
                </div>
                <CountdownTimer />
            </div>

            <div className="">
                <div className="max-w-[280px] m-auto relative">
                    <Image
                        className='w-full h-full object-cover object-top'
                        src={"/images/img-childe/image-2.jpg"}
                        width={1000}
                        height={1000}
                        alt='childe'
                    />
                    <Image
                        className="absolute -bottom-5 -right-20 w-52 object-cover pointer-events-none select-none"
                        src={"/images/kettle.png"}
                        width={1000}
                        height={1000}
                        alt="teddy"
                    />
                    <Image
                        className="absolute -bottom-32 -right-24 w-60 object-cover pointer-events-none select-none"
                        src={"/images/cups-3.png"}
                        width={1000}
                        height={1000}
                        alt="teddy"
                    />
                </div>
                <h2 className='mt-24 text-4xl font-bold font-title text-center text-orange-600'>Дорогие гости</h2>
                <p className='mt-10 text-2xl text-center font-text mx-5 text-[#f7775e]'>
                    Вам пишет Ариана.
                    Мама и Папа сказали, что
                    это очень значимая дата
                    для нашей семьи. Поэтому
                    я хочу, чтобы вы разделили
                    со мной это событие,
                    мой первый день рождения.
                </p>

                <p className='mt-10 text-2xl text-center font-text mx-5 text-[#f7775e]'>
                    До встречи 14 марта!
                </p>
            </div>

            <div className="">
                <h2 className='mt-24 text-5xl font-bold font-title text-center text-orange-600'>Контакты</h2>
                <p className='text-center mt-10'>
                    <a href="tel:+998 (90) 000 0000" className='text-3xl font-text text-[#f7775e]'>+998 (90) 000 0000</a>
                </p>
                {/* <Image
                    className="relative  object-cover"
                    src={"/images/cups-2.png"}
                    width={1000}
                    height={1000}
                    alt="teddy"
                /> */}
            </div>

            <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[500px] select-none pointer-events-none">
                <Image
                    className="w-full h-full object-cover"
                    src={"/images/flower.png"}
                    width={1000}
                    height={1000}
                    alt="bg"
                />
            </div>
        </main>
    )
}

export default Home
