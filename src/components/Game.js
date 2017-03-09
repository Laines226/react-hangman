import React, { Component } from 'react';
import ShowImageOfArray from './ShowImageOfArray.js'

// Styles
import '../styles/text.css';

//Hangman-Images
import HangImageEmpty from '../images/hangmanEmpty.png';
import HangImage00 from '../images/hangman00.png';
import HangImage01 from '../images/hangman01.png';
import HangImage02 from '../images/hangman02.png';
import HangImage03 from '../images/hangman03.png';
import HangImage04 from '../images/hangman04.png';
import HangImage05 from '../images/hangman05.png';
import HangImage06 from '../images/hangman06.png';
import HangImage07 from '../images/hangman07.png';
import HangImage08 from '../images/hangman08.png';
import HangImage09 from '../images/hangman09.png';


class Game extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            noOfFails: 0,
            lettersArray: [],
            letter: '',
            loose: false,
        }
        this.imageArray = [HangImageEmpty, HangImage00, HangImage01, HangImage02, HangImage03, HangImage04, HangImage05, HangImage06, HangImage07, HangImage08, HangImage09];
        this.maxLives = this.imageArray.length;
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }
    onKeyPressed(event) {
        let newLetter = event.key.toUpperCase();
        let text = this.props.text.split('');
        let lettersArray = this.state.lettersArray;

        console.log("onKeyPress", newLetter);
        this.setState({ letter: newLetter });
        var reg = new RegExp(/^[A-Za-z]$/, 'gi');
        if (newLetter.match(reg)) {
            if (text.indexOf(newLetter) !== -1 || this.state.lettersArray >= -1 ) {
                this.state.lettersArray.push(newLetter);
            }
            else{
                this.setState(prevState => ({ noOfFails: prevState.noOfFails + 1 }));
                if (this.state.noOfFails === this.maxLives - 2) {
                    this.setState({loose: true});
                }
            }
        }
        else {
            console.log("onKeyPress not matched [key]", event.key);
        }
        this.setState({ letter: '' });
    }
    render() {
        let toRender = <div> <p> error</p> </div>;

        let lettersArray = this.state.lettersArray
        let text = this.props.text.split('');

        let completedWord = true;
        let textToUnderScores = (
            <div> Word:
             {
                    text.map((letter, index) => {
                        let show = '_ ';
                        if (lettersArray.indexOf(letter) !== -1) {
                            show = letter + ' ';
                        }
                        else{
                            completedWord = false;
                        }
                        return <span key={index}>{show}</span>;
                    })
                }
            </div>
        );

        if(this.state.loose){
            toRender = <p className="redtext">Verloren, das Word war {this.props.text} </p>
        }
        else if(completedWord){
            toRender = <p className="greentext">Gewonnen, das Word war {this.props.text} </p>
        }
        else{
            toRender = (<div>
                <input type="text" onKeyPress={this.onKeyPressed} value={this.state.letter} />

                <ShowImageOfArray array={this.imageArray} index={this.state.noOfFails} />
                {textToUnderScores}
            </div>);
        }
        console.log("toRender", toRender);
        return (
            <div>
                {toRender}
            </div>
        );
    }
}

Game.propTypes = {
    text: React.PropTypes.string.isRequired
}



        // let lettersTypedIn = (
        //     <div> Wrond letters:
        //         {
        //             lettersArray.map((letter, index) => {
        //                 return <span key={index}>{letter}, </span>
        //             })
        //         }
        //     </div>
        // );

export default Game;