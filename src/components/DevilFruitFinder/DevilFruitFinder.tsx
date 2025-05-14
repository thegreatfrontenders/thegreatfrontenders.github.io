import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Button from 'react-bootstrap/Button';

interface DevilFruit {
  id: number;
  name: string;
  description: string;
  roman_name: string;
  type: string; // make type later
  filename: string;
}

const DevilFruitFinder = () => {
  const [fruits, setFruits] = useState<DevilFruit[]>([]);
  const [characters, setCharacters] = useState([]);
  // const [numFruits, setNumFruits] = useState(10);


  useEffect(() => {
    // GET all fruits 
    const fruitFetch = async () => fetch('https://api.api-onepiece.com/v2/fruits/en')
      .then(response => response.json())
      .then((data) => {
        updateFruits(data)
      }).catch((e) => console.log('issue fetching fruit ', e))


    // GET all characters
    const charFetch = async () => fetch('https://api.api-onepiece.com/v2/characters/en')
      .then(response => response.json())
      .then((data) => setCharacters(data))
      .catch((e) => console.log('character fetch issue ', e));

    fruitFetch();
    // charFetch();

  }, []);

  function updateFruits(data: DevilFruit[]) {
    console.log('testing')
    setFruits(data.filter((fruit) => fruit.filename !== 'https://images.api-onepiece.com/fruits/'));

  }

  // Splide carousel configuration options; learned about this from https://levelup.gitconnected.com/implementing-an-infinite-autoplay-carousel-in-react-with-splide-cac6355ba435
  const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 4, // Number of items visible per page
    perMove: 1, // Move one item at a time
    rewind: true, // Rewind to start when the end is reached
    pagination: false, // Enable pagination dots,
    autoScroll: {
      pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
      pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
      rewind: true, // Rewind to start when the end is reached
      speed: 1 // Scrolling speed
    },
  };

  // Define the style for the images in the carousel
  const imageStyle = {
    width: '500px',
    height: '664px',
    borderRadius: '20px',
    border: '1px solid #FFFFFF33',
  };

  function startGame(){
    // hide carousel
    // make jumbotron 
  }

  return (
    <div className="h-screen relative flex items-center justify-center bg-stone-200">
      {/* Container for the carousel with a fixed width */}
      <h1 className="onePieceHeader">How well do you know your DEVIL FRUITS?</h1>

      <div className="w-1/2" id="fruitCarousel">
        {/* Splide component with configuration options */}
        <Splide options={splideOptions}>

          {fruits.map((fruit) => (
            <div>
              <SplideSlide>
                <img src={fruit.filename} alt={fruit.roman_name} style={imageStyle} />
              </SplideSlide>
              <p>{fruit.roman_name}</p>
            </div>
          ))}
        </Splide>
      </div>
      <Button variant="danger"><span className="onePieceHeader">Let's Play (guessing game coming soon)</span></Button>
    </div>


  );
}

export default DevilFruitFinder;
