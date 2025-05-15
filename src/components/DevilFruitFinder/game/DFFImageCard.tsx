import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DevilFruit } from '../../../types';
import { DFFQuizOpiton } from '../DevilFruitFinder';

function DFFImageCard (props: {
    fruit: DevilFruit,
    options: DFFQuizOpiton[] 
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.fruit.filename} />
      <Card.Body>
        <Card.Title>{props.fruit.name}</Card.Title>
        <Card.Text>
          <i>{props.fruit.roman_name}</i> <br/>
         {props.fruit.description.split('.')[0]}
        </Card.Text>
        {props.options.map((option)=> (
           <Button variant="secondary outline-warning" size="lg">{option.character}</Button>
        ))}
       
      </Card.Body>
    </Card>
  );
}

export default DFFImageCard;