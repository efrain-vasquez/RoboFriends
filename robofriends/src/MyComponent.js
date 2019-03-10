
import React, { Component } from 'react';
import './MyComponent.css';//importing the css to the MyComponent.js file



class MyComponent extends Component {
  render(){//this function renders my new Component
    return(//the return should only return one item so need to encapsulate (wrap) in div tags
    //jsx react letting us use this syntax.
    <div className='f1 tc'>
    <h1>Hello World</h1>
    <p>{this.props.cumbia}</p>
    //curly brackets tells that we are using js and calling props
    </div>
  );
  }
}
export default MyComponent;//export so it becomes available to render() method.


//react uses jsx to develope or render there fake DOM.
//reacts uses jsx to create virtual DOM then compares it actual DOM if different updates real DOM.

//better to have functionality and style within each component in react
