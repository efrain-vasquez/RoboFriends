import React from 'react';//this is importing the app and doing the render.
//It is the painter that renders on our component it is the core of the pacage that does the manipulation for us.
import ReactDOM from 'react-dom';//used for rendering onto the DOM of the websites.
import './index.css';//applies CSS to app.js
import App from './App';
import 'tachyons';//allows us to directly apply to file
import MyComponent from './MyComponent.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyComponent cumbia={"BestCumbia: "+" El Recuerdo"}/>, document.getElementById('root'));
//inside MyComponents we are creating props so we can pass something
//i want react Dom package to use this function to render.
//rendering to the DOM using react DOM. react DOM is the canvas you want to render on.
//what your using to be rendered and where your rendering to.
//what your rendering and where your going to render it to.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
