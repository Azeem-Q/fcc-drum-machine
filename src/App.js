import React from 'react';
import './style.scss';

const Buttons = (props) => {
    return (
        <div id="display">
            <div>
                <button id="QA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="Q"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    Q
                </button>
                <button id="WA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="W"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    W
                </button>
                <button id="EA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="E"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    E
                </button>
            </div>
            <div>
                <button id="AA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="A"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    A
                </button>
                <button id="SA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="S"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    S
                </button>
                <button id="DA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="D"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    D
                </button>
            </div>
            <div>
                <button id="ZA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="Z"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    Z
                </button>
                <button id="XA" className="drum-pad" onClick={props.onClick}>
                    <audio
                        id="X"
                        className="clip"
                        src="https://www.soundjay.com/nature/sounds/rain-03.mp3"
                    ></audio>
                    X
                </button>
                <button id="CA" className="drum-pad" onClick={props.onClick}>
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
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const audio = e.target.children[0];
        audio.play();
    }

    render() {
        return (
            <div id="drum-machine">
                <Buttons onClick={this.handleClick} />
            </div>
        );
    }
}

export default App;
