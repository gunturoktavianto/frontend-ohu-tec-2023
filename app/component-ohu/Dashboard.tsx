import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function QuestionMark() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>

    )
}

const Dashboard = () => {
    return (
        <div className='flex items-center justify-center w-screen overflow-x-hidden overflow-y-scroll py-14'>
            <div className='w-[90vw]   flex flex-col items-center justify-center gap-14 md:flex-row md:items-start md:h-screen'>
                <div className='w-[70vw] h-fit pt-5 md:pt-0 rounded-2xl bg-gradient-to-b from-[#0A6EA2] via-[#6AC4B8] to-[#FBB915] flex items-center justify-center shadow-xl shadow-slate-400 md:w-[50vw] md:max-w-[70vw] relative md:h-[60vw]' >
                    <div className='relative flex flex-col w-4/5 px-2  min-h-[80vw] md:h-fit  md:min-h-[40vw]'>
                        <h1 className='w-full text-3xl font-bold md:text-5xl'>Daftar Internship</h1>
                        <p className='text-2xl font-bold md:text-3xl md:py-2'>Rp 45.000</p>
                       

                    </div>
                    <Button className='absolute bottom-0 w-4/5 -translate-y-10'>Daftar Intership</Button>
                </div>
                <div className='w-[70vw] pt-5  rounded-2xl bg-gradient-to-b from-[#372F85] via-[#AF86D6] to-[#6AC4B8] shadow-xl shadow-slate-400 flex items-center justify-center flex-col md:w-[50vw]'>
                    <div className='relative flex flex-col w-4/5 px-2 min-h-[80vw] md:max-h-[50vw]  md:min-h-[40vw] md:max-w-[70vw]'>
                        <h1 className='w-full text-3xl font-bold md:text-5xl'>Internship +<br /> <span className='text-2xl md:text-4xl'>TEC Festival</span></h1>
                        <p className='text-2xl font-bold md:text-3xl md:py-2'>Rp 65.000</p>
                        <Button className='absolute bottom-0 w-full text-xs'>Daftar Intership + Tec Fest</Button>
                    </div>
                    <div className='flex items-center justify-center w-4/5 gap-1 py-2'>
                        <Button className='text-[11px] font-bold flex gap-1' variant='link'>Grand Summit  <QuestionMark /></Button>
                        <Button className='text-[11px] font-bold flex gap-1' variant='link'>Start-up Expo  <QuestionMark /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

