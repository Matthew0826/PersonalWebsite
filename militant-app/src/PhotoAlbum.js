import React, { useState, useEffect } from 'react';
import './PhotoAlbum.css';
import EXIF from 'exif-js';

const PhotoAlbum = () => {
    const [timeLeft, setTimeLeft] = useState(0); // time in seconds
    const [imageList, setImageList] = useState([]);
    const [metadata, setMetadata] = useState("");

    // This function calculates days, hours, minutes, and seconds from timeLeft
    const getWeeks = () => Math.floor(timeLeft / (60 * 60 * 24 * 7)); // Weeks
    const getDays = () => Math.floor(timeLeft / (60 * 60 * 24)); // Days
    const getHours = () => Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)); // Hours
    const getMinutes = () => Math.floor((timeLeft % (60 * 60)) / 60); // Minutes
    const getSeconds = () => timeLeft % 60; // Seconds

    // Function to handle file input and read EXIF data
    const handleImageUpload = (e) => {
        setMetadata( "" );
        setImageList(Array.from(e.target.files));
        let newMetadata = "";
        Array.from(e.target.files).forEach( (file) => {
            console.log(file);
            let line = file.name + ":";
            EXIF.getData(file, function () {
                console.log("tags: ", EXIF.getAllTags(this));
                
                // Get the date the photo was taken
                const date = EXIF.getTag(this, 'DateTimeOriginal');
                if (date) {
                    line += "<Date>" + date + ""
                    console.log("Photo date: ", date);
                } else {
                    line += "<Date>None"
                    console.log('No date found');
                }
                

                // Get GPS coordinates (latitude and longitude)
                const latitude = EXIF.getTag(this, 'GPSLatitude');
                const longitude = EXIF.getTag(this, 'GPSLongitude');
                if (latitude && longitude) {
                    const lat = latitude[0] + latitude[1] / 60 + latitude[2] / 3600; // Convert to decimal
                    const lon = longitude[0] + longitude[1] / 60 + longitude[2] / 3600; // Convert to decimal
                    line += "<Position>" + lat + ", " + lon + ""
                    console.log(`Location: ${lat}, ${lon}`);
                } else {
                    line += "<Position>None";
                    console.log('No location data found');
                }
                line += "\n";
                newMetadata += line;
                setMetadata(newMetadata);
            });
        });
    };

    const formData = () => {
        const currData = new FormData();
        currData.append('metadata', metadata)
        // Append each selected file to FormData
        imageList.forEach( (file) => {
            currData.append('files', file );
        })
    
        console.log(currData);
        // POST the form data with the files to the server
        fetch('https://apt.mattgeisel.com/upload/images', {
            method: 'POST',
            body: currData,
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
            if( timeLeft > 0){
                setTimeLeft(prevTime => prevTime - 1);
            }
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
            <button onClick={formData}>Upload</button>

        </div>
    );
};

export default PhotoAlbum;
