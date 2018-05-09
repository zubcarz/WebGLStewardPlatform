import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Steward from './Physical/StewardPlatform.js';

class MainController extends React.Component {

    constructor(props) {
        super(props);
        let platform = new Steward(null, 5,5,5);
        console.log ("Create platform with Parameters \n"  + { a : "5", b : "5", d : "5"});
        console.log ("Platform up vertices \n");
        console.log(platform.getVerticesUpPlatform());
        console.log ("Platform down vertices \n");
        console.log(platform.getVerticesDownPlatform());
    }

    render() {

        return (
            <div>
                <h2> Hello Steward Word {this.props.name} </h2>
            </div>
        );
    }
}

ReactDOM.render(
    <MainController message="World" />, document.getElementById('root')
);