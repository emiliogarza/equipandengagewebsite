'use client'

import { useState, useEffect } from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import carouselSlide1 from '@/images/homepage-slides/Slide-1.jpg'
import carouselSlide2 from '@/images/homepage-slides/Slide-2.jpg'
import carouselSlide3 from '@/images/homepage-slides/Slide-3.jpg'

interface CarouselImage {
    source: StaticImageData | string;
    altText: string;
    link: string;
}

export function Carousel() {
    const slides: CarouselImage[] = [
    {
        source: carouselSlide1,
        altText: "Equip and Engage Ministries",
        link: "/about-us"
    },
    {
        source: carouselSlide2,
        altText: "Beyond Initiative",
        link: "/about-us"
    },
    {
        source: carouselSlide3,
        altText: "Partner with the mission of Equip and Engage Ministries",
        link: "/about-us"
    }]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        let newIndex = 0
        const interval = setInterval(() => {
            if (newIndex < slides.length - 1) {
                newIndex += 1
            } else {
                newIndex = 0
            }
            setCurrentIndex(newIndex)
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    return (
        <Image src={slides[currentIndex].source} alt={slides[currentIndex].altText} className="rounded-3xl cursor-pointer" />
    )
}

