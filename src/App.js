import React from 'react';
import './style.scss';

const Buttons = (props) => {
    return (
        <div id="display">
            <div>
                <button id="Q" className="drum-pad">Q</button>
                <button id="W" className="drum-pad">W</button>
                <button id="E" className="drum-pad">E</button>
            </div>
            <div>
                <button id="A" className="drum-pad">A</button>
                <button id="S" className="drum-pad">S</button>
                <button id="D" className="drum-pad">D</button>
            </div>
            <div>
                <button id="Z" className="drum-pad">Z</button>
                <button id="X" className="drum-pad">X</button>
                <button id="C" className="drum-pad">C</button>
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
