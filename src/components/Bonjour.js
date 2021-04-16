
import React from 'react';

import { Button, Container, Header } from 'semantic-ui-react'

import Todolist from './Todolist';

export default class Bonjour extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: true, text: ""};
    }

    componentDidMount() {
        this.setState({text: "Cliquer sur un bouton"});
        // let texte = localStorage.getItem('texte');
        // this.setState({text: texte});
        // this.setState({text: localStorage.getItem('texte')});

    }

    componentDidUpdate() {
        
    }
    
    componentWillUnmount() {
        
    }

    handleShow = () => {
        // console.log("Hello World !");
        this.setState({show: true, text: "Afficher la liste"});
        localStorage.setItem('texte', 'Afficher la liste');
    }

    handleHide = () => {
        this.setState({show: false, text: "Masquer la liste"});
        localStorage.setItem('texte', 'Masquer la liste');
    }

    render() {
        return (
            <div className="Bonjour" style={ { margin: '50px auto' } }>
                <Container text>
                    <Header as="h2">
                        Bonjour !
                    </Header>
                    <Header as="h3">
                        {this.state.text}
                    </Header>
                    <Button primary onClick={this.handleShow}>
                        Afficher la liste
                    </Button>
                    <Button secondary onClick={this.handleHide}>
                        Masquer la liste
                    </Button>
                </Container>
                <div style={ { margin: '50px auto' } }>
                    <Todolist show={this.state.show} />
                </div>
            </div>
            
        );
    }
}


// Disponibilité de localStorage
function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

if (storageAvailable('localStorage')) {
	// console.log("Nous pouvons utiliser localStorage");
    // Nous pouvons utiliser localStorage
}
else {
	// console.log("Malheureusement, localStorage n'est pas disponible");
    // Malheureusement, localStorage n'est pas disponible
}

