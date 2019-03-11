import React from 'react';
//here goes the array full of objects
import Card from './Card.js';


const CardList = ({robots}) => {
return (
    //here goes one property at a time
    <div>
      {
        robots.map((user, i) => {
            return (
             <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
            )
        })
      }
    </div>
  );
}
export default CardList;
//in case we delete something so react knows which element of the array we have deleted we say key ={i}.
//curly braces because its javascript
