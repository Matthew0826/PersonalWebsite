// TopBar.js
import React, {useRef} from 'react';
import './Portfolio.css'; // Import the CSS file for styling
import { Link, Outlet } from 'react-router-dom';
import ReactPlayer, {handlePress} from 'react-player';
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import ResumeComponent from './parallax/ResumeComponent';

const Portfolio = () => {

  const playerRef = useRef(null);
  const playerRef2 = useRef(null);
  const parallaxRef = useRef(null);

  const handleEnded = () => {
    // Seek back to 2:00 (120 seconds)
    if (playerRef.current) {
      playerRef.current.seekTo(62, 'seconds');
    }
  };

  const handleProgress = (state) => {
    if (state.playedSeconds >= 83.25) {
      playerRef2.current.seekTo(69.75, 'seconds');
    }
  };

  return ( <div>
    <Parallax pages={6.65} style={{ height: '90vh'}} ref={parallaxRef} >


    <ResumeComponent offset={5.8} image={'auger.jpg'} title={'NURover Auger System'} children={
        <div className="panel">
        <div style={{width: "60%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
            <p><b>Problem Statement</b>: Take a soil sample from 10 cm deep in simulated Martian soil (Utah ground) that is at least 5 grams. Measure the humidity & temperature of the soil
            at this depth.<br /></p>

            <p><b>Prototyping</b>: First system prototyped was a typical soil auger. Metal & 3D-printed augers were tested in Boston soil & sandy soil from Utah (like shown in video). 
            A typical soil auger did not collect sand; it simply fell out. Then, a threaded tube was tested, but the soil still did not stay inside the treaded tube. Finally, for the 2024 URC competition, 
            an auger inside of a tube was used. The auger & tube were designed to actuate seperately. System worked, but would push up against the Rover.
            <br /></p>

            <p><b>Current Design</b>: Thin steel tube (being replaced by Aluminum for weight) with small diameter is driven into the ground using a lead screw. This screw is inside an off-the-shelf
            aluminum extrusion mounted to the chassis of the Rover & driven by a brushed motor through a planetary gearbox. The tube itself is attached to a motor via a custom PETG 3D-printed mount
            (soon to be SLA printed), which spins the make it easier for the tube to drive into the soil.
            <br /></p>

            <p><b>Performance</b>: As shown, the friction of the soil against the sides of the tube is stronger than gravity. A Servo Cap closes the tube so vibrations from driving do not disturb
            the system (not shown). A parallel dual humidity and temperature sensor measures the soil & moisture of the soil. 
            <br /></p>
            
            
         </div >
        <ReactPlayer
          ref={playerRef2}
          url="https://www.youtube.com/watch?v=9GoSA4WFsdQ&t=70s"
          playing
          muted
          controls
          width="50%"
          height="100%"
          onProgress={handleProgress}
          config={{
            youtube: {
              playerRef2: {
                start: 69.75
              }
            }
          }}
        />
      </div>
      } />

    <ResumeComponent offset={4.7} image={'bridge_color_map.png'} title={'EWB Suspension Bridge Project'} children={
        <div className="panel">
          <div style={{width: "60%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
            <p><b>Problem Statement</b>: The rural Las Delicias (LD) community in Panama has two water lines which cross over a river (Rio Sucio). During the wet season, this river violently floods,
            leading to the water lines being washed away and disrupting water delivery to large parts of the community. A suspension bridge will be constructed to carry the pipes over the flood zone.<br /></p>
            
            <p><b>Overview</b>: A suspension bridge system has been designed which carries two pipes inside a larger 8" diameter pipe. The pipe is held up by two steel poles mounted into the ground.
            A steel cable is strung over these pipes and held into the ground by a large concrete anchor. This cable holds the load of the pipes & water.<br /></p>
            
            <p><b>Calculations</b>: In order to prevent failure, statics calculations were conducted to prevent failure. By keeping the incoming and outgoing angle approximately equal of the steel cable on the column,
            the moment is reduced but the horizontal force on the anchor is increased. This tieback cable increases the buckling on the column, but buckling is less critical than bending.
            Using the friction angle of the soil, the required mass of the anchor is calculated. Other failure modes are verified like bending, buckling, cable static failure, and cable fatigue.<br /></p>

            <p><b>Design</b>: Led a team of 4 engineers to design the system in AutoCAD. Delegated project into smaller tasks (anchor, column bottom, column top, stringer bottom, stringer top) and assigned them to different people.
            Guided the newer members through the design of these components. Now writing a guide so the bridge can be built remotely.
            <br /></p>

            <p><b>Survey Extrapolation</b>: The survey taken during a trip to the site was incomplete. A MATLAB script was generated to extrapolate & interpolate the terrain and plot it in 3 dimensions. This was used
            in combination with pictures taken of flooding to determine the span required for the system.
            <br /></p>
          </div >
          <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", justifyContent: "center", alignContent: "center"}}>
            <img src="calcs.png" style={{width: "auto", height: "100%", borderRadius: "0"}}></img>
          </div>
        </div>
      } />


      <ResumeComponent offset={3.6} image={'finance_backend.png'} title={'SEDS Finance System'} children={
        <div className="panel">
          <div style={{width: "60%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
          <p><b>Note</b>: Demonstrations of project are limited due to sensitivity of financial information<br /></p>
            <p><b>Problem Statement</b>: Design a system to manage over $25,000 of the finances of the Northeastern Students for the Exploration & Development (SEDS).<br /></p>
            <p><b>Database</b>: Uses Google Sheets & Google Drive for databases for ease of access. Cost, date, purchaser, etc. stored in Master Finance sheet which contains all of the information.
            This spreadsheet consists of links to receipt PDFs stored in Google Drive.<br /></p>
            <p><b>Backend</b>: FastAPI backend run on SEDS' virtual machine (Python). This Python backend manages the incoming API calls, Drive & Sheets APIs, and web-scraping using Selene.
            Requests are handled by the Pythonic backend, stored by custom datatypes, and updated in the Google Sheet. After a request is submitted, a Slack notification is sent to ask for approval. After approval,
            up to 7 receipts are submitted. These receipts are uploaded to Google Drive, links are stored in Sheets, and submitted via Northeastern's reimbursement website. Secure sign-in used using tokens, obfuscated passwords,
            and user verification.<br /></p>
            <p><b>Frontend</b>: React frontend using TypeScript. Different custom objects handle the request pop-ups, approval pop-ups, and receipt submissions. User signs in by inputting their student ID & password, when the system
            generates a token. Every API call requires this token, which expires after 5 minutes without use. 'Toasty' library handles pop-ups for pending approvals (based on permissions) and approved requests.
            <br /></p>
            <p><b>Management</b>: Using the system & Excel Spreadsheet, over $25,000 of club finances are managed securely & easily.
            <br /></p>
          </div >
          <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", justifyContent: "center", alignContent: "center"}}>
            <img src="SEDSfinance.png" style={{width: "100%", height: "auto", borderRadius: "0"}}></img>
          </div>
        </div>
      } />

      <ResumeComponent offset={2.5} image={'notchlogo.png'} title={'Notch Inc. Co-Op Projects'} children={
        <div className="panel">
                      <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
          <p><b>Note</b>: Under Non Disclosure Agreement (NDA) for the projects described. Disclosable details are limited.<br /></p>

          <p><b>Power Board Project</b>: Designed, Manufactured, and Iterated upon Power PCB to regulate 5V/12V -> 30V/12V with current
          sensing, voltage monitoring, and configurable power input/output. Jumpers choose 5V or 12V input and 30V or 12V output. Dual-converter IC allows for 
          boost circuit or SEPIC circuit. Boost circuit allows for 30V output and SEPIC circuit allows for 12V and 5V output (if 12V input). ADC monitors input voltage, output voltage,
          5V rail voltage, output current, and 5V rail current. Currents measured via shunt resistor. Resettable fuses protect integrity of system.<br /></p>

          <p><b>Python GUI Interface</b>: Used Python GUI (using Kivy) to control Raspberry Pi 4 touchscreen to control RF system. Developed python RF multi-pathing
          algorithms that were tested for performance and speed. Soldered & added functionality for both touchscreen and an encoder knob. <br /></p>

          <p><b>Networked RF Product</b>: Furthered functionality of RF product to implement API endpoint & webapp. Pitched idea of networked system & presented to CEO of Notch, who allowed
          me to develop the system. Developed & documented fast & easy to use API endpoint to allow for external applications. Extended Python system to integrate with
          Django backend & websocket communications. Electron application maintains touchscreen functionality, but system can be dynamically controlled by multiple users via computer or phone.
          System hosts its own WiFi network that can be connected to for control. Went to Los Angeles with CEO & full-time engineer to demonstrate system to a potential 
          contractor & over 10 DoD representatives.<br /></p>
          </div>
          
          <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
              <div style={{width: "100%", height: "33%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                  <img src="circuit_studio_logo.jpeg" style={{ borderRadius: "5px", width: "40%" }} />
                  <img src="SEPIC.jpeg" style={{ borderRadius: "5px",width: "60%" }} />
              </div>
              <div style={{width: "100%", height: "33%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                  <img src="python_logo.jpeg" style={{ borderRadius: "5px", width: "30%" }} />
                  <img src="kivy_logo.png" style={{ borderRadius: "5px", width: "30%" }} />
                  <img src="rpi_logo.jpeg" style={{ borderRadius: "5px", width: "30%" }} />

              </div>
              <div style={{width: "100%", height: "33%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                  <img src="django_logo.png" style={{ borderRadius: "5px", width: "30%" }} />
                  <img src="React-Logo.jpg" style={{ borderRadius: "5px", width: "30%" }} />
                  <img src="websocket_logo.png" style={{ borderRadius: "5px", width: "20%" }} />

              </div>
          </div>

      </div>
      } />

      <ResumeComponent offset={1.4} image={'swerve.png'} title={'Lunabotics Swerve Drive'} children={
        <div className="panel">
          <div style={{width: "60%", height: '100%', paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
            <p><b>Problem Statement</b>: Design a system to allow for more accurate turning & motion on sandy terrain while keeping low weight, modularity, and ease of control.<br /></p>
            <p><b>Design Overview</b>: Differential swerve system allows for smaller motors, accurate control, and modularity. Two motors drive concentric shafts that drive a differential gearbox.
            The sum of motor speeds (x2) is the wheel speed while the difference is the rotation speed.<br /></p>
            <p><b>Gearbox Design</b>: All gears off-the-shelf & motors have off the shelf planetary gearbox that gives maximum speed of 84 rpm.
            Central 6mm D-shaft driven directly from one motor while outer shaft (10mm ID 12mm OD aluminum tube) driven via Acetal gears by other motor.
            Top bevel gear driven by outer shaft while bottom bevel gear driven by inner shaft. Smaller bevel gear drives belt in tube that drives wheel. <br /></p>
            <p><b>Bearing Design</b>: Shaft-plate interface managed by flanged ball bearings. Spacers all 3D-printed. Concentric outer & inner space maintained by two inside needle bearings.
            Thrust needle bearing maintains thrust between the rotating plates.<br /></p>

            <p><b>Component Design</b>: Custom water jet 1/8" aluminum plates (manufactured in-house) used for light weight & strength.
            1/16" 1" x 2" box tube holds wheel for dust-free operation. Manufactured by manual mill.<br /></p>

            <p><b>Electronics</b>: Relative encoders on each motor used to determine position & speed. Plan to use latching hall effect sensor to detect zero position.
            System controlled from 12V wire, 5V wire, Tx, Rx, and GND. No wires go to rotating section allowing for infinite rotation. Motors controlled via PWM signal sent to SparkMini
            motor controllers & encoder signals read by Arduino Nano.<br /></p>
            <p><b>Software</b>: Firmware written in C++. Prototype shown uses P-control to control rotation & wheel speed, but custom serial protocol will be used to control final system.<br /></p>
          </div >
          <div style={{height: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <video src="swerve.mp4" type="video/quicktime" autoPlay muted loop style={{marginTop: "1%", height: "95%"}} ></video>
            <img src="swerve_large.png" style={{height: "95%", paddingTop: "1%", paddingLeft: "1%", paddingRight: "1%", width: "auto", borderRadius: "0"}}></img>
          </div>
      </div>} /> 

      <ResumeComponent offset={0.3} image={'lunabot.png'} title={'Lunabotics Chassis'} children={
        <div className="panel">
        <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
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
        <ReactPlayer ref={playerRef} url="https://www.youtube.com/watch?v=F9l-CRNjs0Y" playing muted controls width="50%" height="100%" onEnded={handleEnded} config={{youtube: {playerVars: {start: 62}}}}/>
      </div>}/>


                {/* The Images
                < ParallaxLayer speed={0} offset={-0.3} >
                    <img className='main-content' src='lunabot.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={0.6} >
                    <img className='main-content' src='swerve.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={1.6} >
                    <img className='main-content' src='notchlogo.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                {/* < ParallaxLayer speed={0} offset={2.6} >
                    <img className={'main-content'} src='finance_backend.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer> 
                <ResumeComponent offset={.925} image="finance_backend.png" title="" children={
                  <div className="panel">
                    <div style={{width: "60%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
                      <p><b>Problem Statement</b>: Design a system to allow for more accurate turning & motion on sandy terrain while keeping low weight, modularity, and ease of control.<br /></p>
                      <p><b>Design Overview</b>: Differential swerve system allows for smaller motors, accurate control, and modularity. Two motors drive concentric shafts that drive a differential gearbox.
                      The sum of motor speeds (x2) is the wheel speed while the difference is the rotation speed.<br /></p>
                      <p><b>Gearbox Design</b>: All gears off-the-shelf & motors have off the shelf planetary gearbox that gives maximum speed of 84 rpm.
                      Central 6mm D-shaft driven directly from one motor while outer shaft (10mm ID 12mm OD aluminum tube) driven via Acetal gears by other motor.
                      Top bevel gear driven by outer shaft while bottom bevel gear driven by inner shaft. Smaller bevel gear drives belt in tube that drives wheel. <br /></p>
                      <p><b>Bearing Design</b>: Shaft-plate interface managed by flanged ball bearings. Spacers all 3D-printed. Concentric outer & inner space maintained by two inside needle bearings.
                      Thrust needle bearing maintains thrust between the rotating plates.<br /></p>

                      <p><b>Component Design</b>: Custom water jet 1/8" aluminum plates (manufactured in-house) used for light weight & strength.
                      1/16" 1" x 2" box tube holds wheel for dust-free operation. Manufactured by manual mill.<br /></p>

                      <p><b>Electronics</b>: Relative encoders on each motor used to determine position & speed. Plan to use latching hall effect sensor to detect zero position.
                      System controlled from 12V wire, 5V wire, Tx, Rx, and GND. No wires go to rotating section allowing for infinite rotation. Motors controlled via PWM signal sent to SparkMini
                      motor controllers & encoder signals read by Arduino Nano.<br /></p>
                      <p><b>Software</b>: Firmware written in C++. Prototype shown uses P-control to control rotation & wheel speed, but custom serial protocol will be used to control final system.<br /></p>
                    </div>
                      
                      <video src="swerve.mp4" type="video/quicktime" autoPlay muted loop style={{marginTop: "1%", height: "95%"}} ></video>
                      <img src="swerve_large.png" style={{height: "95%", paddingTop: "1%", paddingLeft: "1%", paddingRight: "1%", width: "auto", borderRadius: "0"}}></img>

                  </div>
                } />
                

                < ParallaxLayer speed={0} offset={3.6} >
                    <img className={'main-content'} src='bridge_color_map.png'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                < ParallaxLayer speed={0} offset={4.6} >
                    <img className={'main-content'} src='auger.jpg'></img>
                    <div className='overlay'> </div>
                </ParallaxLayer>

                {/* Text*
                <ParallaxLayer speed={0.25} offset={0.01} style={{
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
                }}><br /><br />Notch Inc. Co-Op Projects</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={2.9999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />SEDS Finance System</ParallaxLayer>
                {/*The Panels*

                <ParallaxLayer speed={0.25} offset={3.9999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />EWB Suspension Bridge Project</ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={4.9999} style={{
                    fontSize: '5rem',
                    alignItems: 'center',
                    size: '50vh',
                    color: "white",
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)', // Text shadow for highlighting
                }}><br /><br />NURover Auger System</ParallaxLayer>

                {/*The Panels*

                <ParallaxLayer speed={0.25} offset={.15}>
                    <div className="panel">
                      <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
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
                      <div style={{width: "60%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
                        <p><b>Problem Statement</b>: Design a system to allow for more accurate turning & motion on sandy terrain while keeping low weight, modularity, and ease of control.<br /></p>
                        <p><b>Design Overview</b>: Differential swerve system allows for smaller motors, accurate control, and modularity. Two motors drive concentric shafts that drive a differential gearbox.
                        The sum of motor speeds (x2) is the wheel speed while the difference is the rotation speed.<br /></p>
                        <p><b>Gearbox Design</b>: All gears off-the-shelf & motors have off the shelf planetary gearbox that gives maximum speed of 84 rpm.
                        Central 6mm D-shaft driven directly from one motor while outer shaft (10mm ID 12mm OD aluminum tube) driven via Acetal gears by other motor.
                        Top bevel gear driven by outer shaft while bottom bevel gear driven by inner shaft. Smaller bevel gear drives belt in tube that drives wheel. <br /></p>
                        <p><b>Bearing Design</b>: Shaft-plate interface managed by flanged ball bearings. Spacers all 3D-printed. Concentric outer & inner space maintained by two inside needle bearings.
                        Thrust needle bearing maintains thrust between the rotating plates.<br /></p>

                        <p><b>Component Design</b>: Custom water jet 1/8" aluminum plates (manufactured in-house) used for light weight & strength.
                        1/16" 1" x 2" box tube holds wheel for dust-free operation. Manufactured by manual mill.<br /></p>

                        <p><b>Electronics</b>: Relative encoders on each motor used to determine position & speed. Plan to use latching hall effect sensor to detect zero position.
                        System controlled from 12V wire, 5V wire, Tx, Rx, and GND. No wires go to rotating section allowing for infinite rotation. Motors controlled via PWM signal sent to SparkMini
                        motor controllers & encoder signals read by Arduino Nano.<br /></p>
                        <p><b>Software</b>: Firmware written in C++. Prototype shown uses P-control to control rotation & wheel speed, but custom serial protocol will be used to control final system.<br /></p>
                      </div>
                        
                        <video src="swerve.mp4" type="video/quicktime" autoPlay muted loop style={{marginTop: "1%", height: "95%"}} ></video>
                        <img src="swerve_large.png" style={{height: "95%", paddingTop: "1%", paddingLeft: "1%", paddingRight: "1%", width: "auto", borderRadius: "0"}}></img>

                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={2.15}>
                <div className="panel">
                      <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
                        <p><b>Note</b>: Under Non Disclosure Agreement (NDA) for the projects described. Disclosable details are limited.<br /></p>

                        <p><b>Power Board Project</b>: Designed, Manufactured, and Iterated upon Power PCB to regulate 5V/12V -> 30V/12V with current
                        sensing, voltage monitoring, and configurable power input/output. Jumpers choose 5V or 12V input and 30V or 12V output. Dual-converter IC allows for 
                        boost circuit or SEPIC circuit. Boost circuit allows for 30V output and SEPIC circuit allows for 12V and 5V output (if 12V input). ADC monitors input voltage, output voltage,
                        5V rail voltage, output current, and 5V rail current. Currents measured via shunt resistor. Resettable fuses protect integrity of system.<br /></p>

                        <p><b>Python GUI Interface</b>: Used Python GUI (using Kivy) to control Raspberry Pi 4 touchscreen to control RF system. Developed python RF multi-pathing
                        algorithms that were tested for performance and speed. Soldered & added functionality for both touchscreen and an encoder knob. <br /></p>

                        <p><b>Networked RF Product</b>: Furthered functionality of RF product to implement API endpoint & webapp. Pitched idea of networked system & presented to CEO of Notch, who allowed
                        me to develop the system. Developed & documented fast & easy to use API endpoint to allow for external applications. Extended Python system to integrate with
                        Django backend & websocket communications. Electron application maintains touchscreen functionality, but system can be dynamically controlled by multiple users via computer or phone.
                        System hosts its own WiFi network that can be connected to for control. Went to Los Angeles with CEO & full-time engineer to demonstrate system to a potential 
                        contractor & over 10 DoD representatives.<br /></p>
                        </div>
                        
                        <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                            <div style={{width: "100%", height: "33%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                                <img src="circuit_studio_logo.jpeg" style={{ borderRadius: "5px", width: "40%" }} />
                                <img src="SEPIC.jpeg" style={{ borderRadius: "5px",width: "60%" }} />
                            </div>
                            <div style={{width: "100%", height: "33%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                                <img src="python_logo.jpeg" style={{ borderRadius: "5px", width: "30%" }} />
                                <img src="kivy_logo.png" style={{ borderRadius: "5px", width: "30%" }} />
                                <img src="rpi_logo.jpeg" style={{ borderRadius: "5px", width: "30%" }} />

                            </div>
                            <div style={{width: "100%", height: "33%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px",  padding: "10px",}}>
                                <img src="django_logo.png" style={{ borderRadius: "5px", width: "30%" }} />
                                <img src="React-Logo.jpg" style={{ borderRadius: "5px", width: "30%" }} />
                                <img src="websocket_logo.png" style={{ borderRadius: "5px", width: "20%" }} />

                            </div>
                        </div>

                    </div>
                </ParallaxLayer>

                <ParallaxLayer speed={0.25} offset={3.15}>
                <div className="panel">
                      <div style={{width: "60%", paddingLeft: "1%", paddingRight: "1%", overflow: "scroll"}}>
                      <p><b>Note</b>: Demonstrations of project are limited due to sensitivity of financial information<br /></p>
                      <p><b>Problem Statement</b>: Design a system to manage over $25,000 of the finances of the Northeastern Students for the Exploration & Development (SEDS).<br /></p>
                      <p><b>Database</b>: Uses Google Sheets & Google Drive for databases for ease of access. Cost, date, purchaser, etc. stored in Master Finance sheet which contains all of the information.
                      This spreadsheet consists of links to receipt PDFs stored in Google Drive.<br /></p>
                      <p><b>Database</b>: Uses Google Sheets & Google Drive for databases for ease of access. Cost, date, purchaser, etc. stored in Master Finance sheet which contains all of the information.
                      This spreadsheet consists of links to receipt PDFs stored in Google Drive.<br /></p>
                      </div >
                        <div style={{width: "50%", paddingLeft: "1%", paddingRight: "1%", justifyContent: "center", alignContent: "center"}}>
                        <img src="SEDSfinance.png" style={{width: "100%", height: "auto", borderRadius: "0"}}></img>

                        </div>

                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={0.25} offset={4.15}>
                    <div className="panel">
                    <p><b>Note</b>: Under Non Disclosure Agreement (NDA) for the projects described. Disclosable details are limited.<br /></p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={0.25} offset={5.15}>
                <div className="panel">
                      <div style={{width: "50%", paddingLeft: "1%", overflow: "scroll"}}>
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
                        url="https://www.youtube.com/watch?v=9GoSA4WFsdQ&t=70s"
                        playing
                        muted
                        controls
                        width="50%"
                        height="100%"
                        onProgress={handleProgress}
                        config={{
                          youtube: {
                            playerRef2: {
                              start: 69.75
                            }
                          }
                        }}
                      />
                    </div>
                </ParallaxLayer> */}
                
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
