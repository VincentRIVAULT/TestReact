
import React from 'react';

import { Button, Container, Header } from 'semantic-ui-react'

import Todolist from './Todolist';

export default class Bonjour extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    nom = "RIVAULT";
    prenom = "Vincent";

    componentDidMount() {
        this.setState({text: "Cliquer sur un bouton"});
        // const hello = localStorage.getItem('Hello World !');
        // this.setState(hello);
    }

    componentDidUpdate() {
        
    }
    
    componentWillUnmount() {
        
    }

    handleClick = () => {
        // console.log("Hello World !");
        this.setState({text: "Ma Todolist !"});
        // const clicBouton = this.state;
        // localStorage.setItem("Cliquer sur un bouton", clicBouton);
        const hello = this.state;
        localStorage.setItem('Ma Todolist !', hello);
    }

    handleDelete = () => {
        this.setState({text: ""});
        localStorage.removeItem('Ma Todolist !');
        // localStorage.removeItem("Cliquer sur un bouton");
    }

    render() {
        return (
            <div className="Bonjour" style={ { margin: '50px auto' } }>
                <Container text>
                    <Header as="h2">
                        Bonjour {this.prenom} !
                    </Header>
                    <Header as="h3">
                        {this.state.text}
                    </Header>
                    <Button primary onClick={this.handleClick}>
                        Afficher
                    </Button>
                    <Button secondary onClick={this.handleDelete}>
                        Effacer
                    </Button>
                </Container>
                <div style={ { margin: '50px auto' } }>
                    <Todolist />
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
	console.log("Nous pouvons utiliser localStorage");
    // Nous pouvons utiliser localStorage
}
else {
	console.log("Malheureusement, localStorage n'est pas disponible");
    // Malheureusement, localStorage n'est pas disponible
}

