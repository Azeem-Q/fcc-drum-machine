import React from 'react';
import './style.scss';

const Buttons = (props) => {
    return (
        <div id="display">
            <div>
                <button
                    id="QA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="Q"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    Q
                </button>
                <button
                    id="WA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="W"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    W
                </button>
                <button
                    id="EA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="E"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    E
                </button>
            </div>
            <div>
                <button
                    id="AA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="A"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    A
                </button>
                <button
                    id="SA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="S"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    S
                </button>
                <button
                    id="DA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="D"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    D
                </button>
            </div>
            <div>
                <button
                    id="ZA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="Z"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    Z
                </button>
                <button
                    id="XA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="X"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    X
                </button>
                <button
                    id="CA"
                    className="drum-pad"
                    tabIndex="0"
                    onClick={props.onClick}
                    onKeyDown={props.onKeyDown}
                >
                    <audio
                        id="C"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    C
                </button>
            </div>
        </div>
    );
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyAlert: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleClick(e) {
        const audio = e.target.children[0];
        audio.play();
    }

    handleKeyDown(e) {
        switch (e.keyCode) {
            case 81:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 87:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 69:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 65:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 83:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 68:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 90:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 88:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            case 67:
                e.target.children[0].play();
                this.setState = {
                    keyAlert: '',
                };
                break;
            default:
                this.setState = {
                    keyAlert: 'Please press either Q, W, E, A, S, D,Z, X, or C',
                };
                break;
        }
    }

    render() {
        return (
            <div id="drum-machine">
                <h1>{this.state.keyAlertm}</h1>
                <Buttons
                    onClick={this.handleClick}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        );
    }
}

export default App;
