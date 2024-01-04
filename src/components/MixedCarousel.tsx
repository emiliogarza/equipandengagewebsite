'use client'

import { useState, useEffect } from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import carouselSlide1 from '@/images/homepage-slides/Slide-7.jpg'
import carouselSlide2 from '@/images/homepage-slides/Slide-8.jpg'
import carouselSlide3 from '@/images/homepage-slides/Slide-9.jpg'
import Link from 'next/link'

interface CarouselItem {
    source: StaticImageData | string;
    description: string;
    link: string;
    duration: number;
    isVideo: boolean;
}

export function MixedCarousel() {
    const content: CarouselItem[] = [
    {
        source: "zuzZ_RSOb2E",
        description: "BEYOND Initiative 2024",
        link: "",
        duration: 130000,
        isVideo: true
    },
    {
        source: carouselSlide2,
        description: "Beyond Initiative",
        link: "/beyond",
        duration: 5000,
        isVideo: false
    },
    {
        source: carouselSlide1,
        description: "Equip and Engage Ministries",
        link: "/about",
        duration: 5000,
        isVideo: false
    },
    {
        source: carouselSlide3,
        description: "Partner with the mission of Equip and Engage Ministries",
        link: "/partner",
        duration: 5000,
        isVideo: false
    },
    {
        source: "Ol1Lurn5BKg",
        description: "BEYOND Initiative 2024",
        link: "",
        duration: 220000,
        isVideo: true
    }]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < content.length - 1) {
                setCurrentIndex(currentIndex + 1);
                // This is created for the _next_ interval method.
                setDuration(content[currentIndex + 1].duration);
            } else {
                setCurrentIndex(0)
                setDuration(content[0].duration)
            }
        }, duration > 0 ? duration : content[0].duration);
        return () => clearInterval(interval);
      }, [content]);

    return (
        <div>
            {content[currentIndex].isVideo ? (
                <div className="relative" style={{paddingTop: '56.25%'}}>
                    <iframe src={'https://www.youtube.com/embed/' + content[currentIndex].source + '?autoplay=1&mute=1&modestBranding=1&rel=0'} className="absolute inset-0 w-full h-full rounded-3xl"></iframe>
                </div>
            ) : (
                <Link href={content[currentIndex].link} >
                    <Image src={content[currentIndex].source} alt={content[currentIndex].description} className="rounded-3xl cursor-pointer w-full" />
                </Link>
            )}
        </div>
    )
}

