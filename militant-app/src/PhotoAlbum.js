import React, { useState, useEffect } from 'react';
import './PhotoAlbum.css';

const PhotoAlbum = () => {
    const [timeLeft, setTimeLeft] = useState(2000); // time in seconds

    // This function calculates days, hours, minutes, and seconds from timeLeft
    const getWeeks = () => Math.floor(timeLeft / (60 * 60 * 24 * 7)); // Days
    const getDays = () => Math.floor(timeLeft / (60 * 60 * 24)); // Days
    const getHours = () => Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)); // Hours
    const getMinutes = () => Math.floor((timeLeft % (60 * 60)) / 60); // Minutes
    const getSeconds = () => timeLeft % 60; // Seconds

    useEffect(() => {
        const fetchData =  async () => { 
            const response = (await fetch("https://apt.mattgeisel.com/for_faith/time_until")).json();
            console.log(response);
        }
        fetchData();
        const intervalID = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000); // Run every second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalID);
    }, []); // Empty dependency array ensures this effect runs once, when the component mounts

    return (
        <div className='main-content'>
            <div className='titlePage'>
                <h1> Time Until I See You Again: <br /></h1>
            </div>
            <div className="countdown">
                <div className='number'> <h1>{getWeeks()}</h1> Week{getWeeks() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getDays()}</h1> Day{getDays() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getHours()}</h1> Hour{getHours() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getMinutes()}</h1> Minute{getMinutes() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getSeconds()}</h1> Second{getSeconds() !== 1 ? 's' : ''} </div>
            </div>
        </div>
    );
};

export default PhotoAlbum;
