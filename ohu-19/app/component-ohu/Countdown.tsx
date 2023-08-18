"use client"
import React from 'react'
import { useState, useEffect } from 'react'

const Countdown = () => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24
    const [countSecond, setcountSecond] = useState(0)
    const [countMinute, setcountMinute] = useState(0)
    const [countHour, setcountHour] = useState(0)
    const [countDay, setcountDay] = useState(0)


    function countDown() {
        const targetDate = new Date("September 1, 2023 00:00:00").getTime()
        const currDate = new Date().getTime()
        const gap = targetDate - currDate

        const textDay = Math.floor(gap / day)
        const textHour = Math.floor((gap % day) / hour)
        const textMinute = Math.floor((gap % hour) / minute)
        const textSecond = Math.floor((gap % minute) / second)

        setcountSecond(textSecond)
        setcountMinute(textMinute)
        setcountHour(textHour)
        setcountDay(textDay)

        console.log(countSecond, countMinute, countHour, countDay)
    }

    useEffect(() => {
        // exit early when we reach 0


        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            countDown();
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [countSecond]);

    return (
        <div className='h-[70vw] w-screen flex items-center justify-center flex-col gap-10 md:h-[50vw] md:-translate-y-20 md:gap-16 '>
            <h1 className='text-4xl font-semibold md:text-6xl'>Countdown</h1>
            <div className='flex items-center justify-center gap-4 text-4xl md:gap-8'>
                <div className='grid p-2 text-center shadow-xl rounded-2xl md:text-8xl'>
                    <p>{countDay}</p>
                    <p className='text-xs md:text-2xl'>Days</p>
                </div>
                <p className=''>:</p>
                <div className='grid p-2 text-center shadow-xl rounded-2xl md:text-8xl'>
                    <p>{countHour}</p>
                    <p className='text-xs md:text-2xl'>Hours</p>
                </div>
                <p>:</p>
                <div className='grid p-2 text-center shadow-xl rounded-2xl md:text-8xl'>
                    <p>{countMinute}</p>
                    <p className='text-xs md:text-2xl'>Minutes</p>
                </div>
                <p>:</p>
                <div className='grid p-2 text-center shadow-xl rounded-2xl md:text-8xl'>
                    <p>{countSecond}</p>
                    <p className='text-xs md:text-2xl'>Seconds</p>
                </div>


            </div>
        </div>
    )
}



export default Countdown