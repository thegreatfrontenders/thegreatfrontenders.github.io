import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

interface DevilFruit {
  id: number;
  name: string;
  description: string;
  roman_name: string;
  type: string; // make type later
  filename: string;
}

//interface Cha

interface MultipleChoiceOption {
  status: boolean;
  fruit: DevilFruit;
}

const DevilFruitFinder = () => {
  const [fruits, setFruits] = useState<DevilFruit[]>([]);
  const [imageFruits, setImageFruits] = useState<DevilFruit[]>([]);
  const [characters, setCharacters] = useState([]);
  const [gameNumber, setGameNumber] = useState<number>(1); // only 23 fruits have valid images. gotta use the rest for info about the character etc 
  // const [numFruits, setNumFruits] = useState(10);


  useEffect(() => {
    // GET all fruits 
    const fruitFetch = async () => fetch('https://api.api-onepiece.com/v2/fruits/en')
      .then(response => response.json())
      .then((data) => {
        setFruits(data);
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
    setFruits(data);
    const filteredFruits = data.filter(fruit => fruit.filename && fruit.filename !== "https://images.api-onepiece.com/fruits/");
    setImageFruits(shuffleArray(filteredFruits));
  }

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

  function startGame() {
    // hide carousel
    // make jumbotron 

    /**
     * run thrgouh filteredfruits with images and allow user to stop game early and give a 
     */
  }

  function getFalseOptions() { }

  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <Container className="bg-light py-5 my-4">
      <div className="h-screen relative flex items-center justify-center bg-stone-200">
        {/* Container for the carousel with a fixed width */}
        <h1 className="onePieceHeader">How well do you know your DEVIL FRUITS?</h1>

        <div className="w-1/2" id="fruitCarousel">
          {/* Splide component with configuration options */}
          <Splide options={splideOptions}>
            {imageFruits.map((fruit) => (
              <SplideSlide key={fruit.id}>
                <img src={fruit.filename} alt={fruit.roman_name} style={imageStyle} />
                <p>{fruit.roman_name}</p>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <Button variant="danger"><span className="onePieceHeader">Let's Play (guessing game coming soon)</span></Button>
      </div>
    </Container>




  );
}

export default DevilFruitFinder;
