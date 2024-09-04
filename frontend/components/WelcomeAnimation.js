import React, { useState, useEffect } from 'react';


const WelcomeAnimation = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const video = document.querySelector('.video'); // Get the video element
        const animationDuration = 3000; // Duration of the animation in milliseconds

        video.addEventListener('ended', () => {
            setFadeOut(true); // Trigger fade-out animation when video ends
            setTimeout(() => {
                // Wait for the fade-out animation to complete
                setFadeOut(false);
            }, animationDuration);
        });
    }, []);

    return (
        <div className='animationContainer'>
            <video autoPlay muted loop className='video'>
                <source src="/vedio/welcomevedio.mp4" type="video/mp4" />
                {/* You can also add other video formats here */}
                Your browser does not support the video tag.
            </video>
            <div className='overlay'>
                <div className='welcomeText'>Welcome to <span>Makmovies</span></div>
            </div>
        </div>
    );
};

export default WelcomeAnimation;
