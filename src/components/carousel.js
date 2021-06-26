import React, { useState, useEffect, useReducer } from 'react';
import Button from '@material-ui/core/Button';

export default function Carousel() {
    let [currentIdx, setCurrentIdx] = useState(0);
    let [isPlaying, setIsPlaying] = useState(false);
    let [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'PROGRESS':
            case 'NEXT': return {
                ...state,
                isPlaying: action.type === 'PROGRESS',
                currentIdx: (currentIdx + 1) % slides.length
            }
            case 'PREV': return {
                ...state,
                isPlaying: false,
                currentIdx: (currentIdx - 1) % slides.length
            }
            case 'PLAY': return {
                ...state,
                isPlaying: true
            }
            case 'PAUSE': return {
                ...state,
                isPlaying: false
            }
            default: return state
        }
    }, {
        currentIndex: 0,
        isPlaying: false
    })
    let slides = [];
    let SLIDE_DURATION = 2000;

    useEffect(() => {
        // if (isPlaying) {
        if (state.isPlaying) {
            let timeout = setTimeout(() => {
                dispatch({ type: 'PROGRESS' })
                // setCurrentIdx(
                //     (currentIdx + 1) % slides.length
                // );
            }, SLIDE_DURATION);
            
            return () => clearTimeout(timeout);
        };
    // }, [currentIdx, isPlaying]);
    }, [state.currentIdx, state.isPlaying]);

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