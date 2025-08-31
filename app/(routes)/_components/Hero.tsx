'use client'
import { API_URL, SliderItem } from '@/constans';
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface HeroProps {
    slider: SliderItem[];
}

const Hero = ({ slider }: HeroProps) => {
    return (
        <div className='mt-3 flex px-4 lg:px-31 xl:px-64'>
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}>
                <CarouselContent>
                    {slider.map((item, index) => (
                        <CarouselItem key={index}>
                            <img src={`${API_URL}/assets/${item.image}`} alt={item.title} width={1170} height={500} className='rounded-2xl w-full' />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Hero