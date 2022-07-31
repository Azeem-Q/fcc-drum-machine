import React from 'react';
import './style.scss';

const Buttons = (props) => {
    return (
        <div id="display">
            <div>
                <button className="drum-pad">Q</button>
                <button className="drum-pad">W</button>
                <button className="drum-pad">E</button>
            </div>
            <div>
                <button className="drum-pad">A</button>
                <button className="drum-pad">S</button>
                <button className="drum-pad">D</button>
            </div>
            <div>
                <button className="drum-pad">Z</button>
                <button className="drum-pad">X</button>
                <button className="drum-pad">C</button>
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
