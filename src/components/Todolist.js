/* eslint-disable no-unused-vars */

import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Button, Container, Header, Form, Icon, Input, Label, List, Modal } from 'semantic-ui-react';

import _ from 'lodash';

export default class Todolist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tache: "", todos: []};
    }

    state = {
        tache: "",
        todos: []
    };

    componentDidMount() {
        // console.log('coucou');

        // création du tableau
        // if (localStorage.getItem('todos') === null) {
        //     console.log('tableau vide');
        //     localStorage.setItem('todos', JSON.stringify(this.state.todos));
        // }
        // else {
        //     console.log('recupere la liste');
        //     // console.log(localStorage.getItem('todos'));
        //     this.setState({tache: "", todos: JSON.parse(localStorage.getItem('todos'))});
        // }
        localStorage.getItem('todos') === null ? localStorage.setItem('todos', JSON.stringify(this.state.todos)) : this.setState({tache: "", todos: JSON.parse(localStorage.getItem('todos'))});
    }

    componentDidUpdate() {
        
    }
    
    componentWillUnmount() {
        
    }
    
    handleChange = (e) => {
        // console.log(e.currentTarget.value);
        // this.setInput(e.currentTarget.value);
        this.setState({tache: e.currentTarget.value});
    }
    
    handleSubmit = (e) => {
        // console.log(this.state.tache);
        e.preventDefault();
        if (this.state.tache !== "") {
            let todos = this.state.todos;
            todos.push(this.state.tache);
            this.setState({todos: todos});
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
            this.setState({tache: ""});

        }
    }

    // handleCancel = () => this.setState({ open: false });

    // handleConfirm = () => this.handleDelete();

    handleDelete = (index) => {
        //  console.log(index);
        // if (window.confirm(`Voulez-vous vraiment effacer cette tâche n° ${index + 1} : ${this.state.todos[index]} ?`)) {
            let todos = this.state.todos;
            todos.splice(index, 1);
            this.setState({todos: todos});
            localStorage.setItem('todos', JSON.stringify(this.state.todos));
            this.setState({ open: false });
        // }
    }

    render () {
        // affichage du tableau
        if (!this.state.todos) {
            return "";
        }
        let nTodos = this.state.todos.length;
        // console.log(this.props.show);
        // affichage du texte
        if (!this.props.show) {
            if (nTodos === 0) {
                return (<Header as='h4'>Il ne reste aucune tâche à effectuer...</Header>);
            } else {
                return (
                    nTodos === 1 ? <Header as='h4'>Il reste {nTodos} tâche à effectuer...</Header> : <Header as='h4'>Il reste {nTodos} tâches à effectuer...</Header>
                );
            }
        }
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
                                value={this.state.tache}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Button color='green' type="submit">
                            Ajouter
                        </Button>
                    </Form>
                    <div style={ { margin: '50px auto' } }>
                        <List as='ol'>
                            {this.state.todos.map((tache, index) => 
                                <List.Item key={index}>
                                    <List.Content floated='right'>
                                        <Button 
                                            color='red'
                                            onClick={() => {this.setState({ open: true, id: index })}}
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
                            Vous confirmez la suppression de la tâche numéro {this.state.id + 1} : {this.state.todos[this.state.id]} ?
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={() => this.setState({ open: false  })}>
                                Non
                            </Button>
                            <Button color='red' onClick={() => this.handleDelete(this.state.id)}>
                                Oui <Icon name='trash' />
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Container>
            </div>
        );
    }
}




