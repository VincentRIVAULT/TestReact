
import '../css/App.css';

import React from "react";

import Bonjour from './Bonjour';


export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Bonjour />
            </div>
        );
    }
}

