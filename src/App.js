import React from 'react';
import './style.scss';

const Buttons = (props) => {
    return (
        <div id="display">
            <div>
                <button id="Q" className="drum-pad">
                    <audio id="Q" className="clip" src=""></audio>Q
                </button>
                <button id="W" className="drum-pad">
                    <audio id="W" className="clip" src=""></audio>W
                </button>
                <button id="E" className="drum-pad">
                    <audio id="E" className="clip" src=""></audio>E
                </button>
            </div>
            <div>
                <button id="A" className="drum-pad">
                    <audio id="A" className="clip" src=""></audio>A
                </button>
                <button id="S" className="drum-pad">
                    <audio id="S" className="clip" src=""></audio>S
                </button>
                <button id="D" className="drum-pad">
                    <audio id="D" className="clip" src=""></audio>D
                </button>
            </div>
            <div>
                <button id="Z" className="drum-pad">
                    <audio id="Z" className="clip" src=""></audio>Z
                </button>
                <button id="X" className="drum-pad">
                    <audio id="X" className="clip" src=""></audio>X
                </button>
                <button id="C" className="drum-pad">
                    <audio id="C" className="clip" src=""></audio>C
                </button>
            </div>
        </div>
    );
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="drum-machine">
                <Buttons />
            </div>
        );
    }
}

export default App;
