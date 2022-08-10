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
                <h1>{props.sound}</h1>
            </div>
        </div>
    );
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyError: '',
            sound: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    handleClick(e) {
        const audio = e.target.children[0];
        audio.play();
        this.setState({
            sound: e.target.id,
        });
    }

    handleKeyDown(e) {
        if (
            e.keyCode === 81 ||
            e.keyCode === 87 ||
            e.keyCode === 69 ||
            e.keyCode === 65 ||
            e.keyCode === 83 ||
            e.keyCode === 68 ||
            e.keyCode === 90 ||
            e.keyCode === 88 ||
            e.keyCode === 67
        ) {
            document
                .getElementById(e.key.toUpperCase())
                .parentNode.classList.add('active-DP');
            document.getElementById(e.key.toUpperCase()).play();
            this.setState({
                keyError: '',
                sound: document.getElementById(e.key.toUpperCase()).parentNode
                    .id,
            });
        } else {
            this.setState({
                keyError: 'Please press either Q, W, E, A, S, D,Z, X, or C',
                sound: '',
            });
        }
    }

    handleKeyUp(e) {
        document
            .getElementById(e.key.toUpperCase())
            .parentNode.classList.remove('active-DP');
    }

    render() {
        return (
            <div id="drum-machine">
                <h1>{this.state.keyError}</h1>
                <Buttons onClick={this.handleClick} sound={this.state.sound} />
            </div>
        );
    }
}

export default App;
