import React, { useState, useEffect } from 'react';
import './PhotoAlbum.css';
import EXIF from 'exif-js';

const fileNames = [
    "boston_boba.jpeg",
    "boston_winter.jpeg",
    "charles_river.jpeg",
    "fancy_clothes.jpeg",
    "junior_prom.jpeg",
    "nutcracker.jpeg",
    "ny_state_fair.jpeg",
    "prom.jpeg",
    "public_garden.jpeg",
    "red_sox.jpeg",
    "rochester_campus.jpeg",
    "rochester_city.jpeg"
]

const text = [
    ["To Faith,", "I'm always counting down the seconds until I can see you again. Whether it is a month, a week, a day, or an hour, \
        it is always too long\. If we work hard and keep our eyes on the future, \
        one day we will live together and be able to see each other every day after work. I always think \
        about that day, and it keeps me sane while I have to live my life away from you."],
    ["Happy Birthday!", "You're finally twenty-one! That means you have the obligation to by me alchohol >:(. I love being able \
        to become young adults with you and figure out life together. I'm glad we were able to meet so early so we have our entire \
        lives together. No matter what happens, we can work through it together. I'm excited to grow up together and find out \
        what kind of adults we become."],
    ["I Love You", "I love you so so much and miss you so so much. I'm so proud of you and I love watching you succeed in debate. \
        You're so much better at debate than you think you are. I love having political discussions with you and hearing your opinions \
        on current events. I love having intellectual conversations with you and having my ideas challenged. You're so \
        much smarter than you think you are and I love you more than you could possibly know."]]

const PhotoAlbum = () => {
    const [timeLeft, setTimeLeft] = useState(0); // time in seconds
    const [imageList, setImageList] = useState([]);
    const [metadata, setMetadata] = useState("");
    const [randomFiles, setRandomFiles] = useState([]);

    // This function calculates days, hours, minutes, and seconds from timeLeft
    const getWeeks = () => Math.floor(timeLeft / (60 * 60 * 24 * 7)); // Weeks
    const getDays = () => Math.floor(timeLeft % (60 * 60 * 24 * 7) / (60 * 60 * 24)); // Days
    const getHours = () => Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)); // Hours
    const getMinutes = () => Math.floor((timeLeft % (60 * 60)) / 60); // Minutes
    const getSeconds = () => timeLeft % 60; // Seconds

    
    useEffect(() => {
        const fetchTimeLeft = async () => {
            try {
                const response = await fetch("https://apt.mattgeisel.com/for_faith/time_until");
                const data = await response.json();
                setTimeLeft(Math.round(data["Time Left"]) || 2000); // Assuming 'timeLeft' is in seconds

            } catch (error) {
                console.error("Error fetching timeLeft:", error);
            }
        };
        const getRandomFiles = () => {
            const shuffled = shuffleArray([...fileNames]);
            return shuffled.slice(0, 3);
          };
      
        // Set the random files to state
        setRandomFiles(getRandomFiles());
        // Fetch data on component mount
        fetchTimeLeft();
        const intervalID = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000); // Run every second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalID);
    }, []); // Empty dependency array ensures this effect runs once, when the component mounts
    // Helper function to shuffle an array (Fisher-Yates shuffle)
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    };
    return (
        <div className='main-content'>
            <div className='titlePage'>
                <h1>Time Until I See You Again:</h1>
            </div>
            <div className="countdown">
                <div className='number'> <h1>{getWeeks()}</h1> Week{getWeeks() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getDays()}</h1> Day{getDays() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getHours()}</h1> Hour{getHours() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getMinutes()}</h1> Minute{getMinutes() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getSeconds()}</h1> Second{getSeconds() !== 1 ? 's' : ''} </div>
            </div>
            {randomFiles.length > 0 ? (
          randomFiles.map((image, index) => (
            <div className="imageContainer" key={index}>
                <img
                    src={`/for_faith/${image}`}
                    alt={image}
                />
                <div className = "textContent">
                    <h1>{text[index][0]}</h1>
                    <h3>{text[index][1]}</h3>
                </div>
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}

        </div>
    );
};

export default PhotoAlbum;
