import React, { useEffect, useState } from 'react';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Container } from 'react-bootstrap';
import { shuffleArray } from './util';
import { DevilFruit } from '../../types';
import FruitCarousel from './FruitCarousel';


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



  function startGame() {
  }

  function getFalseOptions() { }



  return (
    <Container className="bg-light py-5 my-4">
      <FruitCarousel
        fruits={imageFruits}/>
    </Container>




  );
}

export default DevilFruitFinder;
