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
            <Parallax pages={4} ref={parallaxRef} >
                {/*The Images*/}
                < ParallaxLayer speed={0} offset={-.15}>
                    <img class={'main-content'} src='boston.jpeg'></img>
                    <div class='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={0.75} >
                    <img class={'main-content'} src='northeastern2.jpg'></img>
                    <div class='overlay'> </div>
                </ParallaxLayer>
                < ParallaxLayer speed={0} offset={1.5} >
                    <img class={'main-content'} src='theengine.jpg'></img>
                    <div class='overlay'> </div>
                </ParallaxLayer>

                {/*The Panels*/}
                <ParallaxLayer speed={0.25} offset={0.12} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}> Overview</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={.25}>
                    <div class="panel">
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
                    </div>
                </ParallaxLayer>



                <ParallaxLayer speed={0.25} offset={1.1}>
                    <div class="panel">
                        <div class="card edu" onClick={handlePress}>
                            <h2>B.S. In Progress (NU)</h2>
                            <img src="meche.jpg" class="cardIcon"></img>
                            <h1>Mechanical<br />Engineering</h1>
                            <div class="cardText">
                                <p>-- Relevant Coursework --</p>
                                <p><b>Current</b>: Comp. & Design</p>
                                <p><b>Completed</b>: Fluids, Dynamics, Thermo, Material Sci., Mechanics of Materials</p>
                            </div>
                        </div >
                        <div class="card edu">
                            <h2>B.S. In Progress (NU)</h2>
                            <img src="compe.jpg" class="cardIcon"></img>
                            <h1>Computer<br />Engineering</h1>
                            <div class="cardText">
                                <p>-- Relevant Coursework --</p>
                                <p><b>Current</b>: Linear Systems, Algorithms, Networks</p>
                                <p><b>Completed</b>: Digital Design, Electronics</p>
                            </div>
                        </div>
                        <div class="card edu">
                            <h2>High School Diploma</h2>
                            <img src="lrhs.jpg" class="cardIcon"></img>
                            <h1>Lakeland Regional<br />High School</h1>
                            <div class="cardText">
                                <p>Wanaque, NJ</p>
                                <p>-- Class of 2022 Salutatorian --</p>
                                <p>Unweighted GPA: 4.0</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={2}>
                    <div class="panel">
                        <div class="card" onClick={handlePress}>
                            <h2>EECE CO-OP / Intern</h2>
                            <img src="notch.jpeg" class="cardIcon"></img>
                            <h1>Notch Inc.</h1>
                            <div class="cardText">
                                <p>Cambridge, MA</p>
                                <p>January - July 2024< br />(part-time since)</p>
                                <p><b>Skills:</b> PCB Design, Circuit Design, Python Programming, Rapid Prototyping, Full-Stack Development, RPi</p>
                            </div>
                        </div >
                        <div class="card">
                            <h2>EXPlorer</h2>
                            <img src="makerspace.png" class="cardIcon"></img>
                            <h1>EXP Makerspace</h1>
                            <div class="cardText">
                                <p>Boston, MA<br /> Northeastern University</p>
                                <p>January 2023 - April 2024</p>
                                <p><p><b>Skills:</b> Laser Cutting, 3D Printing, CAD, Product Design, First Aid Training, Customer Service</p></p>
                            </div>
                        </div>
                        <div class="card">
                            <h2>Intern</h2>
                            <img src="unilux.jpg" class="cardIcon"></img>
                            <h1>Unilux Inc.</h1>
                            <div class="cardText">
                                <p>Saddle Brook, NJ</p>
                                <p>June-August 2021 & 2022<br />May 2023</p>
                                <p><b>Skills:</b> Soldering, Procedure Development, PID Controller, C++ Programming</p>
                            </div>
                        </div>
                        <div class="card">
                            <h2>Adventure Guide</h2>
                            <img src="flatwater.jpg" class="cardIcon"></img>
                            <h1>Flatwater Paddle Co.</h1>
                            <div class="cardText">
                                <p>Ringwood, NJ</p>
                                <p>August 2020, June-August<br />2021 & 2022, May 2023</p>
                                <p><b>Skills:</b> Customer Service, Construction, Rescue Training, Communication</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                {/* Text*/}

                <ParallaxLayer speed={0.25} offset={.925} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Education</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={1.825} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Work Experience</ParallaxLayer>


            </Parallax>
        </div >
    )
}

export default Resume;