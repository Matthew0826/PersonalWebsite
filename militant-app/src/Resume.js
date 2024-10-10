import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import React, { useState, useRef } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web'
import './Resume.css';
const Resume = () => {
    const [props, set] = useSpring(() => ({ rotate: 0 }));
    const parallaxRef = useRef(null);
    const handlePress = () => {
        // Scroll the parallax down to the second layer (index 1)
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(.95);
        }
    };
    return (
        <div>
            <Parallax pages={3} ref={parallaxRef} onScroll={(e) => { console.log(props); set({ rotate: e.target.scrollTop * 0.2 }) }}>
                <ParallaxLayer speed={0} style={{
                    background: `linear-gradient(to top, #34343490, #ffffff5b), url('boston.jpeg')`,
                    backgroundColor: 'rgba(200, 200, 200, 1)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center', // Center the image
                    display: 'flex', // Use flexbox to center content if needed
                    justifyContent: 'center', // Center content horizontally
                    height: '25vh',


                }}></ParallaxLayer>
                < ParallaxLayer speed={0} offset={0.75} >
                    <img class={'main-content'} src='northeastern2.jpg'></img>
                    <div class='overlay'> </div>
                </ParallaxLayer>
                <ParallaxLayer speed={0.25} offset={0.075} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}> Overview</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={.25} style={{
                    height: '75vh',
                    background: 'linear-gradient(to bottom , rgb(230, 230, 230), rgb(180, 180, 180))',
                    //borderTop: '2px solid black',
                    //borderBottom: '2px solid black',
                    display: 'flex',
                }}>
                    <div class="card" onClick={handlePress}>
                        <h2>Education</h2>
                        <img src="northeastern.jpg" class="cardIcon"></img>
                        <h1>Northeastern<br />University</h1>
                        <div class="cardText">
                            <p>Mechanical & Computer <br />Engineering</p>
                            <p>-- Class of 2026 --</p>
                            <p>GPA: 3.947</p>
                        </div>
                    </div >
                    <div class="card">
                        <h2>Work Experience</h2>
                        <img src="notch.jpeg" class="cardIcon"></img>
                        <h1>Notch Inc. <br /><br /></h1>
                        <div class="cardText">
                            <p>Electrical & Computer<br />Engineering Co-Op</p>
                            <p>January - July 2024</p>
                            <p>RF Metamaterial Startup</p>
                        </div>
                    </div>
                    <div class="card">
                        <h2>Extracurricular Activities</h2>
                        <img src="lunabotics.jpg" class="cardIcon"></img>
                        <h1>NU Lunabotics<br /><br /></h1>
                        <div class="cardText">
                            <p>NASA Robotics <br />Competition</p>
                            <p>Project Lead & Founder</p>
                            <p>Team of 15+ People</p>
                        </div>
                    </div>
                    <div class="card">
                        <h2>Awards</h2>
                        <img src="tbp.png" class="cardIcon"></img>
                        <h1>Northeastern<br />Tau Beta Pi</h1>
                        <div class="cardText">
                            <p>For Academic Performance <br /> & Character</p>
                            <p>Engineering Honor Society</p>
                            <p>Member Since Spring 2024</p>
                        </div>
                    </div>
                </ParallaxLayer>




                <ParallaxLayer speed={0.25} offset={1.1} style={{
                    height: '75vh',
                    backgroundColor: 'rgba(200, 200, 200, 1)',
                    borderTop: '2px solid black',
                    borderBottom: '2px solid black',
                    display: 'flex',
                }}>
                    <div style={{
                        width: '20%',
                        border: '2px solid black', // Border for the left component
                        borderRadius: '10px', // Rounded edges
                        padding: '.1vw',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional shadow for depth
                        margin: '40px', // Space between the left component and main container
                        backgroundColor: 'white',
                        lineHeight: 1,
                        fontSize: '100%',
                    }}>
                        <h1>Education</h1>
                        <img src="northeastern.jpg" style={{
                            width: '50%',
                            borderRadius: '50%',
                            aspectRatio: 1,
                            objectFit: 'cover',
                            border: '2px solid black', // Border for the left component
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Optional shadow for depth
                        }}></img>
                        <h2>Northeastern University</h2>
                        <h4>Mechanical & Computer Engineering</h4>
                        <h4>-- Class of 2026 --</h4>
                        <h4>GPA: 3.947</h4>
                        <h5>CE Relevant Coursework:</h5>
                        <p>Linear Systems, Engineering Algorithms, Electronics, Networks </p>
                        <h5>MechE Relevant Coursework:</h5>
                        <p>Fluid Mechanics, Dynamics, Compuation & Design</p>
                        <button>More Education Experience</button>
                    </div>
                </ParallaxLayer>


                <ParallaxLayer speed={0.25} offset={.92} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Education</ParallaxLayer>


            </Parallax>
        </div >
    )
}

export default Resume;