import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from '@/constans'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import Image from "next/image";

const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger><Menu /></SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image alt='' src='/logo.png'  width={512} height={150} className="w-auto h-12 lg:h-14"/>
            </SheetTitle>
            <SheetDescription asChild>
              <div className='flex flex-col gap-1 items-start'>
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href} className='hover:bg-blue-100 p-2 transition duration-500'>
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu