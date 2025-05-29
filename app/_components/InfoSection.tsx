import React from 'react'
import Image from 'next/image'

export default function InfoSection() {
    return (
        <section className='flex w-full items-center justify-center my-6 font-josefin'>
            <div className='w-[90%] flex flex-col md:flex-row relative my-8'>
                <div className='w-full md:w-[60%] h-[450px] relative'>
                    <Image src='/image-interactive.jpg' alt='interactive vr' fill className='object-cover' />
                </div>
                <div className='w-full  md:w-[50%] h-[300px] flex flex-col justify-between md:absolute bottom-0 right-8 md:pl-12 lg:px-20 pt-16 bg-white'>
                    <h2 className='text-5xl text-black/80 text-center md:text-left md:text-2xl lg:text-5xl font-light'>THE LEADER IN INTERACTIVE VR</h2>
                    <p className='text-gray-500 text-center md:text-left'>Founded in 2012, Loopstudios have producing world-class VR reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand</p>
                </div>
            </div>
        </section>
    )
}
