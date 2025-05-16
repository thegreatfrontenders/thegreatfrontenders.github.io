import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DevilFruit } from '../../../types';
import { DFFQuizOpiton } from '../DevilFruitFinder';

function DFFImageCard (props: {
    fruit: DevilFruit,
    options: DFFQuizOpiton[], 
    onClick: any
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
        {props.options.map((option, index)=> (
           <Button variant="secondary outline-warning" size="lg" key={index}
            onClick={props.onClick(option)}>{option.character}</Button>
        ))}
       
      </Card.Body>
    </Card>
  );
}

export default DFFImageCard;