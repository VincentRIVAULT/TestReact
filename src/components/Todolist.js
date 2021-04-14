
import React, { useState } from 'react';

import { Button, Container, Form, Icon, Input, List } from 'semantic-ui-react'

const Todolist = () => {

    const [input, setInput] = useState("");
    const [taches, setTaches] = useState( [] );
    
    const [incrID, setIncrID] = useState(1);
    
    const handleChange = (e) => {
        // console.log(e.currentTarget.value);
        setInput(e.currentTarget.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(input); 
        if (input !== "") {
            setTaches([...taches, {id: incrID, nomTache: input, effectuee: false} ]);
            setIncrID(incrID + 1);
            setInput("");
            localStorage.setItem(incrID, input);
        }
    }
    const handleDelete = (id) => {
        // console.log(id);
        if (window.confirm("Voulez-vous vraiment effacer cette tâche ?")) {
            setTaches(taches.filter(tache => tache.id !== id));
            localStorage.removeItem(id);
        }
        
    }

    return (
        <div className="Todolist">
            <Container text>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <Input
                            placeholder="Veuillez indiquer une tâche"
                            value={input}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Button color='green' type="submit">
                        Ajouter
                    </Button>
                </Form>
                <List as='ol'>
                    {taches.map((tache) => 
                        <List.Item key={tache.id}>
                            <List.Content floated='right'>
                                <Button 
                                    color='red'
                                    onClick={() => handleDelete(tache.id)}
                                >
                                    Supprimer
                                </Button>
                            </List.Content>
                            <Icon name='right triangle' />
                            <List.Content>
                                <List.Header href="#">{tache.nomTache}</List.Header>
                            </List.Content>
                        </List.Item>
                    )}
                </List>
            </Container>
        </div>
    );

}

export default Todolist;


