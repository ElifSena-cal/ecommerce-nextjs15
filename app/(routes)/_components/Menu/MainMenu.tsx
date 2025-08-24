import { navLinks } from '@/constans'
import Link from 'next/link'
import React from 'react'

const MainMenu = () => {
  return (
    <div className='flex gap-4'>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className='hover:bg-blue-100 p-2 transition duration-500'>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default MainMenu