import React from 'react'
import LinksBar from './LinksBar'
import Link from 'next/link'

function Navigation() {
  return (
    <nav className=' w-[90%] flex justify-between items-center mt-10 z-10 text-white'>
      <Link href="/" className='text-2xl font-bold'>loopStudios</Link>
      <LinksBar />
    </nav>
  )
}

export default Navigation