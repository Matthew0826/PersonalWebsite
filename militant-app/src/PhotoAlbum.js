import React, { useState, useEffect } from 'react';
import './PhotoAlbum.css';
import EXIF from 'exif-js';

const PhotoAlbum = () => {
    const [timeLeft, setTimeLeft] = useState(0); // time in seconds
    const [location, setLocation] = useState(null); // To store image location (latitude, longitude)
    const [imageDate, setImageDate] = useState(null); // To store image date
    const [files, setFiles] = useState(null);
    // This function calculates days, hours, minutes, and seconds from timeLeft
    const getWeeks = () => Math.floor(timeLeft / (60 * 60 * 24 * 7)); // Weeks
    const getDays = () => Math.floor(timeLeft / (60 * 60 * 24)); // Days
    const getHours = () => Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)); // Hours
    const getMinutes = () => Math.floor((timeLeft % (60 * 60)) / 60); // Minutes
    const getSeconds = () => timeLeft % 60; // Seconds

    // Function to handle file input and read EXIF data
    const handleImageUpload = (e) => {
        setFiles(e.target.files);
        const file = e.target.files[0];
        if (file) {
            EXIF.getData(file, function () {
                console.log("tags: ", EXIF.getAllTags(this));

                // Get the date the photo was taken
                const date = EXIF.getTag(this, 'DateTimeOriginal');
                if (date) {
                    setImageDate(date);
                    console.log("Photo date: ", date);
                } else {
                    setImageDate('No date found');
                    console.log('No date found');
                }

                // Get GPS coordinates (latitude and longitude)
                const latitude = EXIF.getTag(this, 'GPSLatitude');
                const longitude = EXIF.getTag(this, 'GPSLongitude');
                if (latitude && longitude) {
                    const lat = latitude[0] + latitude[1] / 60 + latitude[2] / 3600; // Convert to decimal
                    const lon = longitude[0] + longitude[1] / 60 + longitude[2] / 3600; // Convert to decimal
                    setLocation({ lat, lon });
                    console.log(`Location: ${lat}, ${lon}`);
                } else {
                    setLocation('No location data found');
                    console.log('No location data found');
                }
            });
        }
    };

    const formData = () => {
        new FormData();

        // Append each selected file to FormData
        files.forEach(file => {
            formData.append("images", file); // Assuming the server expects 'images' as the key
        });

        
        // POST the form data with the files to the server
        fetch('https://mattgeisel.com/upload/images', {
            method: 'POST',
            body: formData,
        });
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
                <h1>Time Until I See You Again:</h1>
            </div>
            <div className="countdown">
                <div className='number'> <h1>{getWeeks()}</h1> Week{getWeeks() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getDays()}</h1> Day{getDays() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getHours()}</h1> Hour{getHours() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getMinutes()}</h1> Minute{getMinutes() !== 1 ? 's' : ''} </div>
                <div className='number'> <h1>{getSeconds()}</h1> Second{getSeconds() !== 1 ? 's' : ''} </div>
            </div>
            <div>
                <img src="boston.jpg" alt="Boston" />
            </div>
            <div className="upload-container">
                <input type="file" id="imageUpload" accept="image/*" multiple onChange={handleImageUpload} />
            </div>

            {/* Display the photo's date */}
            {imageDate && (
                <div className="image-info">
                    <p>Photo taken on: {imageDate}</p>
                </div>
            )}

            {/* Display the photo's location */}
            {location && location.lat && location.lon && (
                <div className="image-info">
                    <p>Location: Latitude: {location.lat.toFixed(4)}, Longitude: {location.lon.toFixed(4)}</p>
                </div>
            )}
            {location && !location.lat && !location.lon && (
                <div className="image-info">
                    <p>{location}</p>
                </div>
            )}
            <button onClick={formData}>Upload</button>

        </div>
    );
};

export default PhotoAlbum;
