import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
    return (
        <div className='h-full py-4 w-full rounded-[30px] px-[20px] flex items-start justify-between bg-[#ffffff] border-2 border-[#dddddd]'>
            <div className="flex flex-col gap-5">
                <div className="w-full">
                    <h1 className='text-[64px] font-black leading-none'>СЕМЕЙНЫЕ ПОКУПКИ</h1>
                    <h1 className='text-[64px] font-black leading-none'>СТАЛИ ПРОЩЕ</h1>
                </div>
                <div className="flex gap-5 h-full">
                    <div className="flex flex-col h-full gap-5 w-[40%]">
                        <div className="flex bg-[#E1EFFF] rounded-[30px] border-[#558FFF] items-center justify-center gap-4 py-4 w-full border-2 ">
                            <h2 className='text-[40px] font-black'>21.7k</h2>
                        </div>
                        <div className="flex bg-[#FBDED1] rounded-[30px] border-[#FF783C] items-center justify-center gap-4 py-4 w-full border-2 ">
                            <h2 className='text-[40px] font-black'>120</h2>
                        </div>
                        <div className="flex bg-[#E3F6E3] rounded-[30px] border-[#55FFA3] items-center justify-center gap-4 py-4  w-full border-2 ">
                            <h2 className='text-[40px] font-black'>12M</h2>
                        </div>
                    </div>
                    <div className="flex flex-col h-[100%] gap-5 w-full">
                        <Image width={500} height={400} src={'/hero.png'} className='w-full h-[328px] rounded-[30px]' alt="hero-image"></Image>
                    </div>
                    <div className="flex flex-col h-[100%] gap-5 w-[30%]">
                        <Image width={500} height={400} src={'/hero.png'} className='w-full h-[328px]  rounded-[30px] object-cover' alt="hero-small-image"></Image>
                    </div>
                </div>
                <div className="w-full h-[100px]">
                    <div className="h-[90px] w-full rounded-full px-[20px] flex items-center justify-center bg-[#fafafa] border-2 border-[#dddddd]">
                        <div className="flex items-center gap-[10px]">
                            <Link className="text-[#161F1E] text-[16px] font-medium" href='/account/login'>Войти</Link>
                            <Link className="text-white text-[16px] font-medium bg-[#ff7435] rounded-full px-[30px] py-4 " href={'/'}>Начать</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
