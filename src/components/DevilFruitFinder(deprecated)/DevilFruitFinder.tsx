import React, { useEffect, useState } from 'react';
// Default theme
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { Container } from 'react-bootstrap';
import { shuffleArray } from '../DevilFruits/util';
import { Character, DevilFruitREST } from '../../types';
import FruitCarousel from './FruitCarousel';
import DFFImageCard from './game/DFFImageCard';

// Deprecating this and starting from scratch in graphQL i think

// interface for characters but leverage redux . also -- put them 
export interface DFFQuizOpiton {
  status: boolean;
  character: string; // should this be a Character obj for the images ? tbd 
}

const DevilFruitFinder = () => {
  const [fruits, setFruits] = useState<DevilFruitREST[]>([]);
  const [imageFruits, setImageFruits] = useState<DevilFruitREST[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currChoice, setCurrChoice] = useState<DFFQuizOpiton>();
  const [gameNumber, setGameNumber] = useState(0); // only 23 fruits have valid images. gotta use the rest for info about the character etc 
  const [gameCard, setGameCard] = useState<{
    fruit: DevilFruitREST,
    options: DFFQuizOpiton[]
  }>();


  // const [numFruits, setNumFruits] = useState(10);
  /** 
  export default function App() {
  return (
    <Select
      optionData={[
        { value: "0", text: "first option" },
        { value: "1", text: "second option" }
      ]}
      // hnadle selecting a different option
      onChange={(data) => console.log(data)}
    />
  );
}

// Creates a function to handle the change event dispatched by the select element
const createChangeHandler = callback => event => {
  if (typeof callback === "function") {
    const select = event.target;
    const selectedIndex = select.selectedIndex;
    const selectedOption = select.options[selectedIndex];
    const value = selectedOption.value;
    const text = selectedOption.innerText;
    callback({ value, text });
  }
};

function Select(props) {
  const { optionData, onChange: _onChange } = props;
  // onChange will be called when the select dispatches a change event
  const onChange = useCallback(createChangeHandler(_onChange), [_onChange]);
  return (
    <select onChange={onChange}>
      {optionData.map((data) => {
        const { value, text } = data;
        return (
          <option key={value} value={value}>
            {text}
          </option>
        );
      })}
    </select>
  );
}
   */

  function validateAnswer(option: DFFQuizOpiton) {
    console.log(option);
    if (option?.status == true) {
      console.log('success')
      console.log(currChoice)
    }
  }


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
      .then((data) => updateCharacters(data))
      .catch((e) => console.log('character fetch issue ', e));

    fruitFetch();
    charFetch();

  }, []);

  function updateFruits(data: DevilFruitREST[]) {
    setFruits(data);
    const filteredFruits = data.filter(fruit => fruit.filename && fruit.filename !== "https://images.api-onepiece.com/fruits/");
    setImageFruits(shuffleArray(filteredFruits));
  }

  function updateCharacters(data: Character[]) {
    let powerUsers = data.filter(char => char.fruit !== null && char.fruit !== undefined)
    setCharacters(powerUsers);
  }

  function startGame() {

  }


  function getOptions() {
    let index = Math.floor(Math.random() * imageFruits.length);
    let fruit = imageFruits.splice(index, 1)[0];
    setImageFruits(imageFruits);
    let correct = characters.filter(char => char!.fruit!.id == fruit.id)[0];

    let options = [correct];
    while (options.length < 5) {
      let i = Math.floor(Math.random() * characters.length);
      let c = characters[i];
      if (!options.includes(c)) options.push(c);
    }

    let out: DFFQuizOpiton[] = [
      { status: true, character: correct.name },
      { status: false, character: options[1].name },
      { status: false, character: options[2].name },
      { status: false, character: options[3].name },
      { status: false, character: options[4].name },
    ]
    out = shuffleArray(out);
    setGameCard({ fruit, options: out })
    setGameNumber(gameNumber + 1);
    return out;
  }



  return (
    <Container className="bg-light py-5 my-4">
      {gameNumber == 0 && <FruitCarousel
        fruits={imageFruits} />}

      <button onClick={getOptions}> test </button>
      {gameNumber > 0 && <div><DFFImageCard
        fruit={gameCard!.fruit}
        options={(gameCard!.options)}
        onClick={validateAnswer}
      ></DFFImageCard>
      </div>}
    </Container>




  );
}

export default DevilFruitFinder;
