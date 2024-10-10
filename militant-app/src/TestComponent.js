import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import React, { useState } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web'
import { ResumeComponent } from './ResumeComponent';

const TestComponent = () => {
    const [props, set] = useSpring(() => ({ rotate: 0 }));

    return (
        <div>
            <Parallax pages={2} onScroll={(e) => { console.log(props); set({ rotate: e.target.scrollTop * 0.2 }) }}>
                <ParallaxLayer offset={0} speed={.5} factor={3} style={{
                    backgroundImage: `url(utahRoverImg.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center', // Center the image
                    display: 'flex', // Use flexbox to center content if needed
                    justifyContent: 'center', // Center content horizontally
                    height: '250vh'
                }} />
                <ParallaxLayer speed={-3} offset={1}>
                    {Array.from({ length: 18 }).map((_, index) => (
                        <iframe src="https://giphy.com/embed/pejC6N6W5GLEPtA27w" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                    ))}
                </ParallaxLayer>
                <ParallaxLayer speed={10} offset={1}>
                    <h1 style={{
                        color: 'white'
                    }}>Me \/</h1>
                    <img src="070123.jpg"></img>
                </ParallaxLayer>

            </Parallax>
        </div >
    )
}

export default TestComponent;