// TopBar.js
import React, {useRef} from 'react';
import './Portfolio.css'; // Import the CSS file for styling
import { Link, Outlet } from 'react-router-dom';
import ReactPlayer, {handlePress} from 'react-player';
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

const Portfolio = () => {

    const playerRef = useRef(null);
  const parallaxRef = useRef(null);
  const handleEnded = () => {
    // Seek back to 2:00 (120 seconds)
    if (playerRef.current) {
      playerRef.current.seekTo(62, 'seconds');
    }
  };
    return (
<div>
            <Parallax pages={5} ref={parallaxRef} >
                {/*The Images*/}
                < ParallaxLayer speed={0} offset={-0.3} >
                    <img className='main-content' src='lunabot.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={0.6} >
                    <img className='main-content' src='swerve.png'></img>
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

                < ParallaxLayer speed={0} offset={3.6} >
                    <img className={'main-content'} src='PEAK.jpg'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                {/* Text*/}
                <ParallaxLayer speed={0.25} offset={0.025} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}> Lunabotics Chassis</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={.999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Lunabotics Swerve Drive</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={1.975} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />SEDS Finance System</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={2.9999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />EWB Suspension Bridge Project</ParallaxLayer>
                {/*The Panels*/}

                <ParallaxLayer speed={0.25} offset={3.9999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />Awards</ParallaxLayer>
                {/*The Panels*/}

                <ParallaxLayer speed={0.25} offset={.15}>
                    <div className="panel">
                      <div style={{width: "50%", paddingLeft: "1%"}}>
                        <p><b>Design</b>: Led SolidWorks design by managing mechanical team of 5 mechanical engineers. Uses Rocker System, Grouser Wheels, and Aluminum Frame. <br /><br />
                        <u>Rocker System</u>: Uses steel tubes with aluminum differential bar, off-the-shelf bearings & threaded rods. Motors are attached via aluminum plates with 3D-printed spacers. <br /> <br />
                        <u>Grouser Wheels</u>: 3D-printed wheels made of PETG with grousers to dig into sand. Off-the-shelf hub direct driven by 84 rpm motor with planetary gearbox. <br /> <br />
                        <u>Aluminum Frame</u>: L-channel aluminum frame attached via M4 bolts. Acrylic outer panels for dust-free operation & electronics mounting.</p>

                        <p><b>Fabrication</b>: Fabricated in-house using 3D printing, manual CNC, cold saw, band saw, water jet, and laser cutter. Wheels, clamps, & electronics mounts were 3D printed, aluminum frame hole pattern
                        CNC-ed, plates for wheels & bearing mounts made on water jet, acrylic cut on laser cutter.</p>

                        <p><b>Electronics</b>: Created team of 4 electrical engineers. Powered by 7 amp hour 12V LiFePO4 battery. Off the shelf 12V - 5V regulator powers Raspberry Pi 5 & SparkMini 
                        motor controllers control 12V motors. Ardunio Nano microcontrollers power motor controllers via 5V PWM signals. Serial communication runs between Raspberry Pi & Nano.
                        E-Stop button cuts circuit from battery to 12V bus. </p>

                        <p><b>Software</b>: Led & Guided software team of 5 software engineers. Firmware on Arduino Nano in C++ & Software on Raspberry Pi in Python. 
                        Webapp controls robot hosted via Node.js. ROS2 used to control the robot with nodes in TypeScript (webapp backend) and Python. 
                        Private Wi-Fi router used to communicate with robot, but when on internet Tailscale VPN allows for connection from anywhere in the world.</p>

                      </div>
                      <ReactPlayer
                        ref={playerRef}
                        url="https://www.youtube.com/watch?v=F9l-CRNjs0Y"
                        playing
                        muted
                        controls
                        width="50%"
                        height="100%"
                        onEnded={handleEnded}
                        config={{
                          youtube: {
                            playerVars: {
                              start: 62
                            }
                          }
                        }}
                      />
                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={1.15}>
                    <div className="panel">
                        <div style={{width: "50%", paddingLeft: "1%"}}>
                            <p>s</p>
                        </div>
                        
                        <video src="swerve.mp4" type="video/quicktime" autoPlay muted loop style={{marginTop: "1%", height: "95%"}} ></video>
                        <img src="swerve_large.png" style={{height: "95%", paddingTop: "1%", paddingLeft: "4%", width: "auto", borderRadius: "0"}}></img>

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
                                <p><b>Projects:</b> SEDS Finance System, Managing Budget of $50,000+</p>
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
                <ParallaxLayer speed={0.25} offset={4.15}>
                    <div className="panel">
                        <div className="card">
                            <h2>Member</h2>
                            <img src="tbp.png" className="cardIcon"></img>
                            <h1>Northeastern<br />Tau Beta Pi</h1>
                            <div className="cardText">
                                <p>For Academic Performance <br /> & Character</p>
                                <p>Engineering Honor Society</p>
                                <p>Member Since Spring 2024</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Awardee</h2>
                            <img src="RISE.jpeg" className="cardIcon"></img>
                            <h1>PEAK Award</h1>
                            <div className="cardText">
                                <p>Award of $2,750 for NU Lunabotics Project</p>
                                <p>Presented at RISE 2025</p>
                                <p>Awarded Spring 2025</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Member</h2>
                            <img src="HKN.jpg" className="cardIcon"></img>
                            <h1>Northeastern <br /> Eta Kappa Nu</h1>
                            <div className="cardText">
                                <p>For Academic Performance in Electrical & Computer Engineering</p>
                                <p>IEEE Engineering Honor Society</p>
                                <p>Member Since Spring 2025</p>
                            </div>
                        </div>
                        <div className="card">
                            <h2>Awardee</h2>
                            <img src="Eagle.png" className="cardIcon"></img>
                            <h1>Eagle Scout</h1>
                            <div className="cardText">
                                <p>Awarded Fall 2021</p>
                                <p>Project: Constructing Outdoor Reading Garden for Ringwood Public Library</p>
                                <p>Was Senior Patrol Leader of Troop of over 30</p>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div >
      
    //     <div className="portfolio">            
    //         <div className='element'>
    //             <div style={{
    //                 width: "50%"}}>  
    //                 <div style={{
    //                     fontSize: '3rem',
    //                     alignItems: 'center',
    //                     textShadow: '2px 2px 4px rgba(50, 50, 50, .5)', // Text shadow for highlighting
    //                 }} ><b>Theia</b></div>
    //             </div>
    //             <div style={{width: "50%" , display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>  
    //             <ReactPlayer
    //   ref={playerRef}
    //   url="https://www.youtube.com/watch?v=F9l-CRNjs0Y"
    //   playing
    //   muted
    //   controls
    //   width="97.5%"
    //   height="90%"
    //   onEnded={handleEnded}
    //   config={{
    //     youtube: {
    //       playerVars: {
    //         start: 62
    //       }
    //     }
    //   }}
    // />
    //             </div>
                

    
    //         </div>
    //     </div>
    );
};

export default Portfolio;
