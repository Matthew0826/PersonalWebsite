import React, { useState, useEffect } from 'react';
import './PhotoAlbum.css';
import EXIF from 'exif-js';

const PhotoAlbum = () => {
    const [timeLeft, setTimeLeft] = useState(0); // time in seconds

    // This function calculates days, hours, minutes, and seconds from timeLeft
    const getWeeks = () => Math.floor(timeLeft / (60 * 60 * 24 * 7)); // Days
    const getDays = () => Math.floor(timeLeft / (60 * 60 * 24)); // Days
    const getHours = () => Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)); // Hours
    const getMinutes = () => Math.floor((timeLeft % (60 * 60)) / 60); // Minutes
    const getSeconds = () => timeLeft % 60; // Seconds
       // Function to handle file input and read EXIF data
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      EXIF.getData(file, function () {
        console.log("tags: ", EXIF.getAllTags(this));
        const date = EXIF.getTag(this, 'DateTimeOriginal');
        if (date) {
          console.log(date);
        } else {
          console.log('No date found');
        }
      });
    }
  };
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

        // Fetch data on component mount
        fetchTimeLeft();
        const intervalID = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000); // Run every second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalID);
    }, []); // Empty dependency array ensures this effect runs once, when the component mounts

    return (
        <div className='main-content'>
            <div className='titlePage'>
                <h1> Time Until I See You Again:</h1>
            </div>
            <div className="countdown">
                <div className='number'> <h1>{getWeeks()}</h1> Week{getWeeks() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getDays()}</h1> Day{getDays() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getHours()}</h1> Hour{getHours() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getMinutes()}</h1> Minute{getMinutes() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getSeconds()}</h1> Second{getSeconds() !== 1 ? 's' : ''} </div>
            </div>
            <div>
                <img src="boston.jpg"></img>
            </div>
            <div className="upload-container">
                <input type="file" id="imageUpload" accept="image/*" onChange={handleImageUpload} />
            </div>

        </div>
    );
};

export default PhotoAlbum;
