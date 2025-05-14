import React, {useState, useEffect} from "react";

interface Stats {
    name: string;
    index: number;
    fruit: string;
    age: number;
    bounty: string;

}

const Characters = () => {

    //We need to call the One Piece Characters API
    const [characters, setCharacters] = useState<Stats[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchApi = async ()  => {
            try {
                const response = await fetch('https://api.api-onepiece.com/v2/characters/en');
                const data = await response.json();
                console.log('Characters', data)
                setCharacters(data);
            } catch (error) {
                if(error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An Unknown error occurred');
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchApi();
    }, [])
    


    return (
        <div>
            <h2>GANG SHIT</h2>
            {characters.map((char, index) => (
                <div key={index}>
                    <h3>{char.name}</h3>
                    <p>{char.age}</p>
                    <p>{char.bounty}</p>
                </div>
            ))}
        </div>
    )
};

export default Characters;