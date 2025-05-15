import React, { useState, useEffect } from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import Button from 'react-bootstrap/Button';
import { DevilFruit } from "../../types";

// Splide carousel configuration options; learned about this from https://levelup.gitconnected.com/implementing-an-infinite-autoplay-carousel-in-react-with-splide-cac6355ba435
const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 3, // Number of items visible per page
    perMove: 1, // Move one item at a time
    arrows: true,
    pagination: false, // Hide pagination dots
    gap: '12px', // Gap between slides
};


// Define the style for the images in the carousel
const imageStyle = {
    width: '420px',
    height: '564px',
    borderRadius: '20px',
};

function FruitCarousel(props: { fruits: DevilFruit[] }) {
    return <div className="h-screen relative flex items-center justify-center bg-stone-200">
        {/* Container for the carousel with a fixed width */}
        <h1 className="onePieceHeader">How well do you know your DEVIL FRUITS?</h1>

        <div className="w-1/2" id="fruitCarousel">
            {/* Splide component with configuration options */}
            <Splide options={splideOptions}>
                {props.fruits.map((fruit) => (
                    <SplideSlide key={fruit.id}>
                        <img src={fruit.filename} alt={fruit.roman_name} style={imageStyle} />
                        <p>{fruit.roman_name}</p>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
        <Button variant="danger">Let's Play (guessing game coming soon)</Button>
    </div>
};

export default FruitCarousel;   