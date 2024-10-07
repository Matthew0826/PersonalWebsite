import './AboutMe.css';
import React, { useState, useRef, useEffect, props } from 'react';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'

const AboutMe = () => {
    const [scrollEl, setScrollElement] = useState(null);
    const ref = useRef(null);
    useEffect(() => {
        setScrollElement(ref.current);
    }, []);
    return (
        <div className="scroller" ref={ref}>
            <ParallaxProvider scrollContainer={scrollEl}>
                <ParallaxBanner
                    layers={[
                        { speed: -15, expanded: false, className: 'background-img' },  // Background layer moves slowly
                        {
                            children: (
                                <div className="foreground">
                                    <div id="title-splash">
                                        <img id="main-image" src='northeastern.jpg'></img>
                                        <div>
                                            <h4>--EDUCATION--</h4>
                                            <h1>Northeastern University</h1>
                                            <h4>3rd Year</h4>
                                            <h4>Mechanical & Computer Engineering</h4>
                                            <h4>GPA: 3.947</h4>

                                        </div>
                                    </div>
                                    <div id="title-splash">
                                        <img id="main-image" src='notch.jpeg'></img>
                                        <div>
                                            <h4>--WORK EXPERIENCE--</h4>
                                            <h1>Notch, Inc.</h1>
                                            <h4>Cambridge, Mass</h4>
                                            <h4>Electrical & Computer Engineering Co-Op</h4>
                                            <h4>January 2024 - Present</h4>
                                        </div>
                                    </div>
                                    <div id="title-splash">
                                        <img id="main-image" src='notch.jpeg'></img>
                                        <div>
                                            <h4>--CLUB--</h4>
                                            <h1>NU Rover</h1>
                                            <h4>Mechanical Co-Lead</h4>
                                            <h4></h4>

                                        </div>
                                    </div><div id="title-splash">
                                        <img id="main-image" src='notch.jpeg'></img>
                                        <div>
                                            <h4>--CLUB--</h4>
                                            <h1>NU Rover</h1>
                                            <h4>Mechanical Co-Lead</h4>
                                            <h4></h4>

                                        </div>
                                    </div>
                                    <div id="title-splash">
                                        <img id="main-image" src='notch.jpeg'></img>
                                        <div>
                                            <h4>--CLUB--</h4>
                                            <h1>NU Rover</h1>
                                            <h4>Mechanical Co-Lead</h4>
                                            <h4></h4>

                                        </div>
                                    </div>
                                    <div id="title-splash">
                                        <img id="main-image" src='notch.jpeg'></img>
                                        <div>
                                            <h4>--CLUB--</h4>
                                            <h1>NU Rover</h1>
                                            <h4>Mechanical Co-Lead</h4>
                                            <h4></h4>

                                        </div>
                                    </div>
                                </div>

                            ),
                            speed: 100,  // Foreground layer moves much faster
                            expanded: false
                        },
                    ]}
                    className="parallax-banner"
                />

            </ParallaxProvider>
        </div>
    );
}

export default AboutMe;

/*


*/