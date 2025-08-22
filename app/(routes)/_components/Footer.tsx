import { footerSections } from '@/constans'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-900 px-8 py-12 text-white lg:px-64'>
      <div>
        <div className='flex flex-col md:flex-row justify-between gap-8 py-12'>
          <div className='w-full md:w-1/4'>
            Logo
            <p className='mt-2 text-sm'>
              Your trusted source for the latest products and trends.
            </p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className='w-full md:w-1/6'>
              <h3 className='font-semibold text-lg'>{section.title}</h3>
              <ul className='mt-2 space-y-1 text-sm'>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className='hover:underline'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='border-t border-blue-400 my-5'>
          <div className='flex flex-col md:flex-row justify-between items-center py-5 text-sm'>
            <div>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer