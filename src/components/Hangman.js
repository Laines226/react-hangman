import React, { Component } from 'react';
import InputText from './InputText';
import Game from './Game';

/** @class Represents the hangman container.
 * Renders an input textfield and an image with the state of the game.
 * 
 * !! you must pass the array of images in ORDER!!! from no hangman to full hangman.
 * 
 */
class Hangman extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(text) {
    console.log("handleInput [text]", text);
    this.setState({text : text.toUpperCase()});
  }
  onKeyPressed(event){
    console.log("Hangman.onKeyPressed [event.key]", event.key);
  }
  render() {
    /**
        <TextToLines text={} letters={} />
        <showImageFromArray array={} index={} />
        */
    let whatIRenderInner;
    if (this.state.text === '') {
      whatIRenderInner = (
        <div>
          <span>Type in an word, which your oponent has to guess</span>
          <InputText returnFunction={this.handleInput} />
        </div>
      );
    }
    else{
      whatIRenderInner = (
        <div>
          <Game text={this.state.text}  />
        </div>
      );
    }
    return (
      <div onKeyDown={this.onKeyPressed}>
        <div>
          <h2>Let's play Hangman</h2>
        </div>
        {whatIRenderInner}
      </div>
    );
  }
}

export default Hangman;
