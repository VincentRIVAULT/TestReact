/* eslint-disable no-unused-vars */

import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Button, Container, Header, Form, Icon, Input, Label, List, Modal } from 'semantic-ui-react';

import _ from 'lodash';

export default class Todolist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {nvTache: "", tabTaches: [], open: false};
    }

    state = {
        nvTache: "",
        tabTaches: [],
        open: false
    };

    componentDidMount() {
        // this.setState({nvTache: "", tabTaches: []});
        let listeTaches = JSON.parse(localStorage.getItem('tâches'));
        this.setState({nvTache: "", tabTaches: listeTaches});
        // this.setState({nvTache: "", tabTaches: JSON.parse(localStorage.getItem('tâches'))});
    }

    // componentDidUpdate() {

    // }

    
    handleChange = (e) => {
        // console.log(e.currentTarget.value);
        // this.setInput(e.currentTarget.value);
        this.setState({nvTache: e.currentTarget.value});
    }
    
    handleSubmit = (e) => {
        // console.log(this.state.nvTache);
        e.preventDefault();
        if (this.state.nvTache !== "") {
            let listeTaches = this.state.tabTaches;
            listeTaches.push(this.state.nvTache);
            this.setState({tabTaches: listeTaches});
            localStorage.setItem('tâches', JSON.stringify(this.state.tabTaches));
            this.setState({nvTache: ""});

        }
    }

    handleCancel = () => this.setState({ open: false });

    // handleConfirm = () => this.handleDelete();

    handleDelete = (index) => {
        //  console.log(index);
        // if (window.confirm(`Voulez-vous vraiment effacer cette tâche n° ${index + 1} : ${this.state.tabTaches[index]} ?`)) {
            let listeTaches = this.state.tabTaches;
            listeTaches.splice(index, 1);
            this.setState({tabTaches: listeTaches});
            localStorage.setItem('tâches', JSON.stringify(this.state.tabTaches));
            this.setState({ open: false });
        // }
    }

    render () {
        // console.log(this.props.show);
        let nbTaches = (this.state.tabTaches).length;
        if (!this.props.show) {
            if (nbTaches === 0) {
                return (<Header as='h4'>Il ne reste aucune tâche à effectuer...</Header>);
            } else {
                return (
                    nbTaches === 1 ? <Header as='h4'>Il reste {nbTaches} tâche à effectuer...</Header> : <Header as='h4'>Il reste {nbTaches} tâches à effectuer...</Header>
                );
            }
        }
        let index = 0;
        return (
            <div className="Todolist">
                <Container text>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <Label attached='top'>
                                Indiquer une tâche à effectuer
                            </Label>
                            <Input
                                placeholder="Veuillez indiquer une tâche"
                                value={this.state.nvTache}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Button color='green' type="submit">
                            Ajouter
                        </Button>
                    </Form>
                    <div style={ { margin: '50px auto' } }>
                        <List as='ol'>
                            {this.state.tabTaches.map((tache, index) => 
                                <List.Item key={index}>
                                    <List.Content floated='right'>
                                        <Button 
                                            color='red'
                                            onClick={() => {this.setState({ open: true })}}
                                        >
                                            Supprimer
                                        </Button>
                                    </List.Content>
                                    <Icon name='right triangle' />
                                    <List.Content>
                                        <List.Header href="#">{tache}</List.Header>
                                    </List.Content>
                                </List.Item>
                            )}
                        </List>
                    </div>
                    <Modal
                        onClose={() => {
                            this.setState({ open: false });
                        }}
                        onOpen={() => {
                            this.setState({ open: true });
                        }}
                        open={this.state.open}
                        size='small'
                        // trigger={<Button>Basic Modal</Button>}
                        >
                        <Header>
                            Confirmation
                        </Header>
                        <Modal.Content>
                            Vous confirmez la suppression de la tâche numéro {index + 1} : {this.state.tabTaches[index]} ?
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.handleCancel}>
                                Non
                            </Button>
                            <Button color='red' onClick={() => this.handleDelete()}>
                                Oui <Icon name='trash' />
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Container>
            </div>
        );
    }
}




