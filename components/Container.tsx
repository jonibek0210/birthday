"use client"
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import CountdownTimer from './children/CountdownTimer';
import { IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger)
const Container = () => {
    const [active, setActive] = useState(true);
    const audioRef = useRef<any>(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (active) {
            audio?.play();
        } else {
            audio?.pause();
        }
    }, [active]);

    useEffect(() => {
        gsap.from('.teddy', {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.2,
            scrollTrigger: {
                trigger: '.teddy',
                start: 'top 80%',
                end: 'bottom 60%',
                toggleActions: 'play none none reverse',
            },
        });

        gsap.utils.toArray('.main-title').forEach((element: any) => {
            gsap.from(element, {
                opacity: 0,
                y: -50,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.4,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse',
                },
            });
        })
        gsap.utils.toArray('.text-element').forEach((element: any) => {
            gsap.from(element, {
                opacity: 0,
                x: 100,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
            });
        })
        gsap.utils.toArray('.background-image').forEach((element: any) => {
            gsap.from(element, {
                opacity: 0,
                y: 100,
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 100%',
                    end: 'center 60%',
                    scrub: true,
                },
            });
        })

        gsap.utils.toArray('.floating-image').forEach((element: any) => {
            gsap.from(element, {
                opacity: 0,
                scale: 0.7,
                duration: 3,
                ease: 'elastic.out(1.5, 1)',
                stagger: 0.5,
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'bottom 70%',
                    scrub: true,
                },
            });
        })
    }, []);

    return (
        <div>
            <div className="fixed -z-40 top-0 left-0 h-screen w-full">
                <Image
                    className="w-full h-full object-cover"
                    src={"/images/bg.png"}
                    width={1000}
                    height={1000}
                    alt="bg"
                />
            </div>

            <div className="h-screen w-full relative overflow-hidden">
                <div className="w-full absolute z-10 bottom-30 -right-5 pointer-events-none select-none">
                    <p className='text-[450px] text-end text-[#f7775e50] text-element'>1</p>
                </div>

                <div className="teddy absolute z-10 top-0 left-[15%] -translate-x-1/2 h-[600px] pointer-events-none select-none">
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
                    <h2 className='text-2xl text-end font-bold mb-5 text-[#f7775e] main-title'>Приглашение <br /> на День Рождения</h2>
                    <h1 className='text-7xl font-title font-bold text-center text-pink-600 main-title'>Ариана</h1>
                </div>

            </div>
            <div
                className="mt-auto w-40 mx-auto my-10 flex flex-col items-center py-4 border-y-2 border-[#dc663b]"
            >
                <button
                    className="mb-2"
                    onClick={() => {
                        setActive(!active);
                    }}
                >
                    {active ? (
                        <IoVolumeHigh size={35} color={"#f7775e"} />
                    ) : (
                        <IoVolumeMute size={35} color={"#f7775e"} />
                    )}
                </button>
                <audio ref={audioRef} loop autoPlay={true} src="/music/happy-birthday.m4a"></audio>
                <p className="text-xs text-center text-[#f7775e] text-element">Если Вас отвлекает музыка, ее можно выключить</p>
            </div>
            <div className="">
                <h2 className='text-4xl font-bold font-title text-center text-orange-600 main-title'>Дорогие гости!</h2>
                <p className='mt-5 text-2xl text-center font-text mx-5 text-[#f7775e] text-element'>Один из дней в этом году станет для нас особенным и мы хотим провести его вместе с Вами!
                    С превеликим удовольствием приглашаем Вас на первый День Рождения нашей малышки Арианы! Будем счастливы видеть  Вас на нашем торжестве, которое состоится в понедельник 11.11.2024 г. в 18:00 в ресторане "Шохсарой" по адресу: г. Самарканд, ул. Аль Хоразмий, дом 250Д, ориентир Школа N "51". </p>
                <p className='mt-5 text-2xl text-center font-text mx-5 text-[#f7775e] text-element'>Будет много веселья, <br /> сладостей и пиццы!</p>
                <p className='mt-5 text-2xl text-center font-text mx-5 text-[#f7775e] text-element'>С уважением семьи Ким.</p>
                <p className='mt-10 text-6xl font-title font-black text-center text-orange-600 main-title'>11.11.24</p>
                <p className='mt-10 text-2xl text-center font-text mx-5 text-[#f7775e] text-element'>ЖДУ ВАС В 18:00</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.5904561199643!2d66.94110543627961!3d39.67407120035819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1905e4996b93%3A0xdc563810a9d4b0bb!2sShoh%20Saroy!5e0!3m2!1sru!2s!4v1730823024089!5m2!1sru!2s" className='w-full h-80 my-10 text-element' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="my-10 py-8 bg-red-50">
                <div className="w-60 h-60 m-auto mb-10 overflow-hidden rounded-full floating-image">
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
                        className='w-full h-full object-cover object-top text-element'
                        src={"/images/img-childe/image-2.jpg"}
                        width={1000}
                        height={1000}
                        alt='childe'
                    />
                    <Image
                        className="absolute -bottom-5 -right-20 w-52 object-cover pointer-events-none select-none kettle"
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
                <h2 className='mt-24 text-4xl font-bold font-title text-center text-orange-600 main-title'>Дорогие гости</h2>

                <p className='mt-10 text-2xl text-center font-text mx-5 text-[#f7775e] text-element'>
                    Вам пишет Ариана.
                    Мама и Папа сказали, что
                    это очень значимая дата
                    для нашей семьи. Поэтому
                    я хочу, чтобы вы разделили
                    со мной это событие,
                    мой первый день рождения.
                </p>

                <p className='mt-10 text-2xl text-center font-text mx-5 text-[#f7775e] text-element'>
                    До встречи 11 ноября!
                </p>
            </div>

            <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[500px] select-none pointer-events-none flower">
                <Image
                    className="w-full h-full object-cover"
                    src={"/images/flower.png"}
                    width={1000}
                    height={1000}
                    alt="bg"
                />
            </div>
        </div>
    )
}

export default Container
