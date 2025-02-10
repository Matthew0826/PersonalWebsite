import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import React, { useState, useRef } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web'
import './Resume.css';
const Resume = () => {
    const parallaxRef = useRef(null);
    const handlePress = (layer = 1) => {
        console.log('clicked!');
        // Scroll the parallax down to the second layer (index 1)
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(layer);
        }
    };
    return (
        <div>
            <Parallax pages={4} ref={parallaxRef} >
                {/*The Images*/}
                < ParallaxLayer speed={0} offset={-0.3} >
                    <img className='main-content' src='boston.jpeg'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={0.6} >
                    <img className='main-content' src='northeastern2.jpg'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={1.6} >
                    <img className='main-content' src='theengine.jpg'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={2.6} >
                    <img className={'main-content'} src='utahRoverImg.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                {/* Text*/}
                <ParallaxLayer speed={0.25} offset={0.025} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}> Overview</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={.999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Education</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={1.975} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Work Experience</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={2.9999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Extracurriculars</ParallaxLayer>
                {/*The Panels*/}

                <ParallaxLayer speed={0.25} offset={.15}>
                    <div className="panel">
                        <div className="card" onClick={() => handlePress(1)}>
                            <h2>Education</h2>
                            <img src="northeastern.jpg" className="cardIcon"></img>
                            <h1>Northeastern<br />University</h1>
                            <div className="cardText">
                                <p>Mechanical & Computer <br />Engineering</p>
                                <p>-- Class of 2026 --</p>
                                <p>GPA: 3.947</p>
                            </div>
                        </div >
                        <div className="card" onClick={() => handlePress(2)}>
                            <h2>Work Experience</h2>
                            <img src="notch.jpeg" className="cardIcon"></img>
                            <h1>Notch Inc. <br /><br /></h1>
                            <div className="cardText">
                                <p>Electrical & Computer<br />Engineering Co-Op</p>
                                <p>January - July 2024</p>
                                <p>RF Metamaterial Startup</p>
                            </div>
                        </div>
                        <div className="card" onClick={() => handlePress(3)}>
                            <h2>Extracurricular Activities</h2>
                            <img src="lunabotics.png" className="cardIcon"></img>
                            <h1>NU Lunabotics<br /><br /></h1>
                            <div className="cardText">
                                <p>NASA Robotics <br />Competition</p>
                                <p>Project Lead & Founder</p>
                                <p>Team of 10+ People</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Awards</h2>
                            <img src="tbp.png" className="cardIcon"></img>
                            <h1>Northeastern<br />Tau Beta Pi</h1>
                            <div className="cardText">
                                <p>For Academic Performance <br /> & Character</p>
                                <p>Engineering Honor Society</p>
                                <p>Member Since Spring 2024</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={1.15}>
                    <div className="panel">
                        <div className="card edu" onClick={handlePress}>
                            <h2>B.S. In Progress (NU)</h2>
                            <img src="meche.jpg" className="cardIcon"></img>
                            <h1>Mechanical<br />Engineering</h1>
                            <div className="cardText">
                                <p>-- Relevant Coursework --</p>
                                <p><b>Current</b>: Design, Heat Transfer, System Analysis & Control</p>
                                <p><b>Completed</b>: Fluids, Dynamics, Thermo, Material Sci., Mechanics of Materials, Comp. & Design</p>
                            </div>
                        </div >
                        <div className="card edu">
                            <h2>B.S. In Progress (NU)</h2>
                            <img src="elece.png" className="cardIcon"></img>
                            <h1>Electrical<br />Engineering</h1>
                            <div className="cardText">
                                <p>-- Relevant Coursework --</p>
                                <p><b>Current</b>: Electromagnetics</p>
                                <p><b>Completed</b>: Digital Design, Electronics, Linear Systems, Algorithms, Networks</p>
                            </div>
                        </div>
                        <div className="card edu">
                            <h2>High School Diploma</h2>
                            <img src="lrhs.jpg" className="cardIcon"></img>
                            <h1>Lakeland Regional<br />High School</h1>
                            <div className="cardText">
                                <p>Wanaque, NJ</p>
                                <p>-- Class of 2022 Salutatorian --</p>
                                <p>Unweighted GPA: 4.0</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={2.15}>
                    <div className="panel">
                        <div className="card" onClick={handlePress}>
                            <h2>Electrical & Computer Engineering Co-Op</h2>
                            <img src="notch.jpeg" className="cardIcon"></img>
                            <h1>Notch Inc.</h1>
                            <div className="cardText">
                                <p>Cambridge, MA</p>
                                <p>January - July 2024< br />(part-time since)</p>
                                <p><b>Skills:</b> PCB Design, Circuit Design, Python Programming, Rapid Prototyping, Full-Stack Development, RPi</p>
                            </div>
                        </div >
                        <div className="card">
                            <h2>EXPlorer</h2>
                            <img src="makerspace.png" className="cardIcon"></img>
                            <h1>EXP Makerspace</h1>
                            <div className="cardText">
                                <p>Boston, MA<br /> Northeastern University</p>
                                <p>January 2023 - April 2024</p>
                                <p><p><b>Skills:</b> Laser Cutting, 3D Printing, CAD, Product Design, First Aid Training, Customer Service</p></p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Intern</h2>
                            <img src="unilux.jpg" className="cardIcon"></img>
                            <h1>Unilux Inc.</h1>
                            <div className="cardText">
                                <p>Saddle Brook, NJ</p>
                                <p>June-August 2021 & 2022<br />May 2023</p>
                                <p><b>Skills:</b> Soldering, Procedure Development, PID Controller, C++ Programming</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Adventure Guide</h2>
                            <img src="flatwater.jpg" className="cardIcon"></img>
                            <h1>Flatwater Paddle Co.</h1>
                            <div className="cardText">
                                <p>Ringwood, NJ</p>
                                <p>August 2020, June-August<br />2021 & 2022, May 2023</p>
                                <p><b>Skills:</b> Customer Service, Construction, Rescue Training, Communication</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={3.15}>
                    <div className="panel">
                        <div className="card" onClick={handlePress}>
                            <h2>Project Lead / Founder</h2>
                            <img src="lunabotics.png" className="cardIcon"></img>
                            <h1>NU Lunabotics</h1>
                            <div className="cardText">
                                <p>September 2024 - Present< br /></p>
                                <p><b>Projects:</b> Differential Swerve, Construction System, UWB Trilateration, LiDAR Obstacle Detection</p>
                                <p><b>Skills:</b> CAD, Mechanical Design, ROS2, Unix, Python, C++, Serial Comms, Leadership</p>
                            </div>
                        </div >
                        <div className="card">
                            <h2>Finance Chair</h2>
                            <img src="seds.png" className="cardIcon"></img>
                            <h1>NU SEDS</h1>
                            <div className="cardText">
                                <p>January 2023 - Present</p>
                                <p><b>Projects:</b> SEDS Finance System, Managing Budget of $25,000+</p>
                                <p><b>Skills:</b> HTML/CSS/JS, React.js, Fullstack Development, Leadership, Finance</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Mechanical Co-Lead</h2>
                            <img src="rover.png" className="cardIcon"></img>
                            <h1>NU Rover</h1>
                            <div className="cardText">
                                <p>September 2022 - Present<br /></p>
                                <p><b>Projects:</b> Screw Gear Claw, Auger System</p>
                                <p><b>Skills:</b> Solidworks, Rapid Prototyping, Leadership, Collaboration, Mechanical Design</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Technical Director</h2>
                            <img src="ewb.jpg" className="cardIcon"></img>
                            <h1>NU Engineers Without Borders</h1>
                            <div className="cardText">
                                <p>September 2022 - Present<br /></p>
                                <p><b>Projects:</b> Valve Box Redesign, Las Delicias Pipe Bridge</p>
                                <p><b>Skills:</b> AutoCAD, Civil Engineering Design, Collaboration, Leadership</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>

            </Parallax>
        </div >
    )
}

export default Resume;