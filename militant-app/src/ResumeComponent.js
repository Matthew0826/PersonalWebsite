import React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';

export const ResumeComponent = ({ speed, offset }) => {
    return (
        <div>
            <ParallaxLayer speed={speed} offset={offset}>
                <h1>Welcome to my beautiful website</h1>
            </ParallaxLayer>
        </div>
    );
}

