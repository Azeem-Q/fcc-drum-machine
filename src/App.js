import React from 'react';
import './style.scss';

const Buttons = (props) => {
    return (
        <div id="buttonsContainer">
            <div>
                <button>Q</button>
                <button>W</button>
                <button>E</button>
            </div>
            <div>
                <button>A</button>
                <button>S</button>
                <button>D</button>
            </div>
            <div>
                <button>Z</button>
                <button>X</button>
                <button>C</button>
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
