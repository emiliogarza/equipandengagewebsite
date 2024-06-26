'use client'

import { useState, useEffect } from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import carouselSlide1 from '@/images/homepage-slides/Slide-7.jpg'
import carouselSlide2 from '@/images/homepage-slides/Slide-8.jpg'
import carouselSlide3 from '@/images/homepage-slides/Slide-9.jpg'
import carouselSlide4 from '@/images/homepage-slides/live-recording-image-sm.jpg'
import carouselSlideLiveStream from '@/images/homepage-slides/live-stream-grain.jpg'
import Link from 'next/link'

interface CarouselItem {
    source: StaticImageData | string;
    description: string;
    link: string;
    duration: number;
    isVideo: boolean;
    target?: string;
}

export function MixedCarousel() {
    const content: CarouselItem[] = [
    {
        source: carouselSlideLiveStream,
        description: "BEYOND Live Stream Tickets",
        link: "https://brushfire.com/equipandengage/beyondsydney/576447/details",
        duration: 10000,
        isVideo: false,
        target: '_blank'
    },
    {
        source: carouselSlide4,
        description: "BEYOND Tickets",
        link: "https://www.eventbrite.com/e/beyond-training-initiative-live-recording-tickets-697676829177?aff=oddtdtcreator",
        duration: 10000,
        isVideo: false,
        target: '_blank'
    },        
    {
        source: carouselSlide2,
        description: "Beyond Initiative",
        link: "/beyond",
        duration: 10000,
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
                <Link href={content[currentIndex].link} target={content[currentIndex].target ? content[currentIndex].target : undefined}>
                    <Image src={content[currentIndex].source} alt={content[currentIndex].description} className="rounded-3xl cursor-pointer w-full" />
                </Link>
            )}
        </div>
    )
}

