import React, { Component } from 'react';
import ShowImageOfArray from './ShowImageOfArray.js'

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

function TextToUnderScores(props) {
    console.log("textToUnderScores props", props);
    const text = props.text.split('');
    const lettersArray = props.letters;

    let renderIt = (
        <div>
            {
                text.map((letter, index) => {
                    let show = '_ ';
                    if (lettersArray.indexOf(letter) !== -1) {
                        show = letter + ' ';
                    }
                    return <span key={index}>{show}</span>;
                })
            }
        </div>
    );
    return renderIt;
}


class Game extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            noOfFails: 0,
            lettersArray: [],
            letter: ''
        }
        this.imageArray = [HangImageEmpty, HangImage00, HangImage01, HangImage02, HangImage03, HangImage04, HangImage05, HangImage06, HangImage07, HangImage08, HangImage09];
        this.maxLives = this.imageArray.length;
        this.onKeyPressed = this.onKeyPressed.bind(this);
    }
    onKeyPressed(event) {
        console.log("onKeyPress", event.key);
        this.setState({ letter: event.key });
        var reg = new RegExp(/^[A-Za-z]$/, 'gi');
        if (event.key.toString().match(reg) && this.state.lettersArray.indexOf(event.key) === -1) {
            this.state.lettersArray.push(event.key);
            this.setState(prevState => ({ noOfFails: prevState.noOfFails + 1 }));
            if (this.state.noOfFails === this.maxLives - 2) {
                alert("Looser!!");
            }
            Component.forceUpdate();
        }
        else {
            console.log("onKeyPress not matched [key]", event.key);
        }
        this.setState({ letter: '' });
    }
    render() {
        //<lettersTypedIn />
        const lettersArray = this.state.lettersArray
        // const text = this.props.text.split('');

        // let textToUnderScores = (
        //     <div>
        //     {
        //         text.map((letter, index)=>{
        //             let show = '_ ';
        //             if(lettersArray.indexOf(letter) !== -1){
        //                 show = letter + ' ';
        //             }
        //             return <span key={index}>{show}</span>;
        //         })
        //     }
        //     </div>
        // );

        let lettersTypedIn = (
            <div>
                {
                    lettersArray.map((letter, index) => {
                        return <p key={index}>{letter}</p>
                    })
                }
            </div>
        );
        return (
            <div>
                <input type="text" onKeyPress={this.onKeyPressed} value={this.state.letter} />

                <ShowImageOfArray array={this.imageArray} index={this.state.noOfFails} />
                <TextToUnderScores text={this.props.text} letters={this.state.lettersArray} />
                {lettersTypedIn}
            </div>
        );
    }
}

Game.propTypes = {
    text: React.PropTypes.string.isRequired
}

export default Game;