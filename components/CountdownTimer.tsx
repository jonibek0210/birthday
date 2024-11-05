"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
interface CounterProps { }

const Counter: React.FC<CounterProps> = () => {
    const [stop, setStop] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Total time values for percentage calculations
    const totalSeconds = 60;
    const totalMinutes = 60;
    const totalHours = 24;
    const totalDays = 365; // Adjust according to your use case

    useEffect(() => {
        const date = new Date("11/10/2024 15:00:00");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = date.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            setDays(d);

            const h = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            setHours(h);

            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);

            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);

            if (d === 0 && h === 0 && m === 0 && s === 0) {
                setStop(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Calculate progress percentages
    const getProgressPercentage = (current: number, total: number) => {
        return (current / total) * 100;
    };

    const blocks = [
        { value: days, label: "Дней", total: totalDays },
        { value: hours, label: "Часов", total: totalHours },
        { value: minutes, label: "Минут", total: totalMinutes },
        { value: seconds, label: "Секунд", total: totalSeconds },
    ];

    return (
        <div className="relative pb-48 pt-5 z-10">
            <div className="">
                <p className="text-4xl text-center font-bold font-text text-[#f7775e]">Мне исполнится 1 год <br /> через...</p>
            </div>

            <div className="flex justify-center gap-4 px-5 py-10 text-orange-600">
                {blocks.map(({ value, label, total }, index) => {
                    const percentage = getProgressPercentage(value, total);
                    const strokeDashoffset = 440 - (440 * percentage) / 100; // Circle circumference = 440

                    return (
                        <div
                            key={index}
                            className="relative flex flex-col items-center justify-center w-20 h-20"
                        >
                            <svg
                                className="absolute -z-10 w-full h-full transform rotate-90"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                viewBox="0 0 160 160"
                            >
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="70"
                                    stroke="#ffffff00"
                                    strokeWidth="5"
                                    fill="none"
                                />
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="70"
                                    stroke={!stop ? "#f7775e" : "#ffffff00"}
                                    strokeWidth="5"
                                    fill="none"
                                    strokeDasharray="440"
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <p className="text-4xl font-bold font-title">{!stop ? value : "0"}</p>
                            <p className=" font-text">{label}</p>
                        </div>
                    );
                })}
            </div>
            <div className="">
                {stop && (
                    <div className="w-full flex items-center justify-center mb-10">
                        <div
                            className="text-[#f7775e] text-center font-text"
                        >
                            <h1 className="text-3xl font-bold mb-4">
                                Ожидание окончено!
                            </h1>
                            <p className="">
                                Спасибо, что разделили этот момент с нами. Давайте сделаем этот день незабываемым!
                            </p>
                        </div>
                    </div>

                )}
            </div>

            <div className="w-60 absolute -z-20 -top-5 -left-10 select-none pointer-events-none">
                <Image
                    className='w-full h-full object-cover object-top'
                    src={"/images/clock.png"}
                    width={1000}
                    height={1000}
                    alt='childe'
                />
            </div>

            <div className="w-[400px] absolute -z-20 -bottom-24 -left-20 select-none pointer-events-none">
                <Image
                    className='w-full h-full object-cover object-top'
                    src={"/images/key.png"}
                    width={1000}
                    height={1000}
                    alt='childe'
                />
            </div>
            <div className="w-[400px] absolute -z-20 -bottom-20 -left-20 select-none pointer-events-none">
                <Image
                    className='w-full h-full object-cover object-top'
                    src={"/images/lock.png"}
                    width={1000}
                    height={1000}
                    alt='childe'
                />
            </div>
            <div className="w-72 absolute -z-20 -bottom-10 -right-20 select-none pointer-events-none">
                <Image
                    className='w-full h-full object-cover object-top'
                    src={"/images/cups.png"}
                    width={1000}
                    height={1000}
                    alt='childe'
                />
            </div>
        </div>
    );
};

export default Counter;