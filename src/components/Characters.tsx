import React, {useState, useEffect} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";


interface Fruit {
    id: number;
    name: string;
    description: string;
    type: string;
    filename: string;
    roman_name: string;
    technicalFile: string;
}
interface Stats {
    name: string;
    index: number;
    fruit?: Fruit;
    age: string;
    bounty: string;
    job?: string;

}

const Characters = () => {

    //We need to call the One Piece Characters API
    const [characters, setCharacters] = useState<Stats[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchApi = async ()  => {
            const strawHats = ["Monkey D Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji", "Tony-Tony Chopper", "Nico Robin", "Franky", "Brook", "Jinbe"];
            try {
                const response = await fetch('https://api.api-onepiece.com/v2/characters/en');
                const data = await response.json();
                console.log('Characters', data)
                const filtered = data.filter((char: any) => strawHats.includes(char.name));
                setCharacters(filtered);
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
    

    if(isLoading) {
        return <p>Loading Straw Hats...</p>
    }

    if(error) {
        return <p style={{color: 'red'}}>{error}</p>
    }

    return (
        <Container className="bg-light py-5 my-4">
            <h2 className="text-center my-4">GANG SHIT</h2>
            <Row className="justify-content-center">
            {characters.map((char, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center mb-4">
                <Card className="bg-dark text-light shadow-sm border-0 rounded" style={{width: '18rem', margin: '10px'}}>
                    <Card.Body>
                        <Card.Title className="fw-bold">{char.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{char.fruit?.name || 'No Devil Fruit'}</Card.Subtitle>
                        <Card.Text>
                            Bounty: {char.bounty || 'Unknown'} <br />
                            Age: {char.age?.split(' ans')[0]} years <br />
                            Job: {char.job || 'Unemployed'}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
};

export default Characters;