import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

export default function Carousel() {
    let [currentIdx, setCurrentIdx] = useState(0);
    let [isPlaying, setIsPlaying] = useState(false);
    let slides = [];
    let SLIDE_DURATION = 2000;

    useEffect(() => {
        if (isPlaying) {
            let timeout = setTimeout(() => {
                setCurrentIdx(
                    (currentIdx + 1) % slides.length
                );
            }, SLIDE_DURATION);
            
            return () => clearTimeout(timeout);
        };
    }, [currentIdx, isPlaying]);

    return (
        <section className="widget">
            <div className="info-card">
                Insert Carousel Here
                <Button>
                    Click Me!
                </Button>
                
            </div>
        </section>
    )
}