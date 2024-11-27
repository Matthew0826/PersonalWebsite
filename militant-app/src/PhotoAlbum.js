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
        setMetadata("");
        setImageList(Array.from(e.target.files));
        let newMetadata = "";
    
        Array.from(e.target.files).forEach((file) => {
            console.log(file);
            let line = file.name + ":";
    
            // Create an image element to load the image file
            const img = new Image();
            const reader = new FileReader();
    
            reader.onload = function (event) {
                img.onload = function () {
                    // Create a canvas to manipulate the image
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
    
                    // Get the EXIF data
                    EXIF.getData(file, function () {
                        console.log("tags: ", EXIF.getAllTags(this));
    
                        // Get the orientation tag
                        const orientation = EXIF.getTag(this, 'Orientation');
                        if (orientation) {
                            console.log("Orientation: ", orientation);
                        } else {
                            console.log('No orientation data found');
                        }
    
                        // Calculate the correct rotation based on the EXIF orientation
                        let angle = 0;
                        switch (orientation) {
                            case 3:
                                angle = 180;
                                break;
                            case 6:
                                angle = 90;
                                break;
                            case 8:
                                angle = 270;
                                break;
                            default:
                                angle = 0; // No rotation needed
                                break;
                        }
    
                        // Resize the canvas to 1000x1200
                        const targetWidth = 1000;
                        const targetHeight = (img.height / img.width) * targetWidth; // Maintain aspect ratio
                        canvas.width = targetWidth;
                        canvas.height = targetHeight;
    
                        // Clear the canvas and rotate/resize the image
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.save();
    
                        // Translate and rotate
                        if (angle !== 0) {
                            ctx.translate(canvas.width / 2, canvas.height / 2);
                            ctx.rotate((angle * Math.PI) / 180);
                            ctx.translate(-canvas.width / 2, -canvas.height / 2);
                        }
    
                        // Draw the image (resized)
                        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
    
                        // Restore canvas state
                        ctx.restore();
    
                        // Get the rotated and resized image as a JPEG
                        canvas.toBlob((blob) => {
                            const newFile = new File([blob], file.name, { type: 'image/jpeg' });
    
                            // Set new file (to upload or preview)
                            setImageList(prev => [...prev, newFile]);
    
                            // Extract EXIF metadata as before
                            const date = EXIF.getTag(this, 'DateTimeOriginal');
                            if (date) {
                                line += "<Date>" + date + "</Date>";
                                console.log("Photo date: ", date);
                            } else {
                                line += "<Date>None</Date>";
                                console.log('No date found');
                            }
    
                            // Get GPS coordinates (latitude and longitude)
                            const latitude = EXIF.getTag(this, 'GPSLatitude');
                            const longitude = EXIF.getTag(this, 'GPSLongitude');
                            if (latitude && longitude) {
                                const lat = latitude[0] + latitude[1] / 60 + latitude[2] / 3600; // Convert to decimal
                                const lon = longitude[0] + longitude[1] / 60 + longitude[2] / 3600; // Convert to decimal
                                line += "<Position>" + lat + ", " + lon + "</Position>";
                                console.log(`Location: ${lat}, ${lon}`);
                            } else {
                                line += "<Position>None</Position>";
                                console.log('No location data found');
                            }
    
                            // Append the orientation and other metadata
                            line += "<Orientation>" + orientation + "</Orientation>\n";
                            newMetadata += line;
                            setMetadata(newMetadata);  
                        }, 'image/jpeg', 0.8); // 0.8 for compression quality
                    });
                };
                img.src = event.target.result;
            };
    
            reader.readAsDataURL(file); // Convert the file to a data URL
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
            <img id="image1"  className = "image" src="https://apt.mattgeisel.com/for_faith/random"></img>
            <button onClick={formData}>Upload</button>

        </div>
    );
};

export default PhotoAlbum;
