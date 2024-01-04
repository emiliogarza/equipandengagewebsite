'use client'

import { useState, useEffect } from 'react'

interface VideoCarouselItem {
    ytKey: string;
    description: string;
    duration: number;
}

export function VideoCarousel() {
    const videos: VideoCarouselItem[] = [
    {
        ytKey: "zuzZ_RSOb2E",
        description: "BEYOND Initiative 2024",
        duration: 130000
    },
    {
        ytKey: "Ol1Lurn5BKg",
        description: "BEYOND Initiative 2024 - Tyler Sullivan",
        duration: 220000
    }]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < videos.length - 1) {
                setCurrentIndex(currentIndex + 1);
                // This is created for the _next_ interval method.
                setDuration(videos[currentIndex + 1].duration);
            } else {
                setCurrentIndex(0)
                setDuration(videos[0].duration)
            }
        }, duration > 0 ? duration : videos[0].duration);
        return () => clearInterval(interval);
      }, [videos]);

    return (
        <div className="relative" style={{paddingTop: '56.25%'}}>
          <iframe src={'https://www.youtube.com/embed/' + videos[currentIndex].ytKey + '?autoplay=1&modestBranding=1&rel=0'} className="absolute inset-0 w-full h-full rounded-3xl"></iframe>
        </div>
    )
}

