
//we import react so it can read jsx
import React from 'react';
//using the destructuring of props to create object
//Card.js is creating an instance of card as an atom an individual item
const Card = ({ name, email, id }) => {
  return (
    //<h1>RoboFriends</h1>
    //this HTML builds the card
    //id in line 12 is randomizing the robots
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 dim'>
      <img alt='robots' src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

//an API gives you functionality or serves an object
//tachyons a way to directly inject css to the js file to manipulate the DOM
