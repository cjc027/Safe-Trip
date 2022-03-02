import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddContactForm({user, handleAddContact, form, toggleForm}){

    const [state, setState] = useState({
        fullName: "",
        email: "",
        phoneNumber: ""
    })

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        handleAddContact(state)
        setState({
            fullName: "",
            email: "",
            phoneNumber: ""
        });
    }

    if (!form) {
        return(
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment inverted color='grey' onClick={toggleForm} style={{cursor: 'pointer'}}>
                        <h3>Add Contact &nbsp;&nbsp;+</h3>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

    return (
        <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Segment inverted color='grey'>
            
                <Form autoComplete="off" onSubmit={handleSubmit}>
                
                <Form.Input
                    className="form-control"
                    name="fullName"
                    value={state.fullName}
                    placeholder="Full name"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="email"
                    value={state.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    placeholder="Phone Number (Format: +1-202-224-3121)"
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    className="btn"
                >
                    Add Contact
                </Button>
                </Form>
            </Segment>
        </Grid.Column>
        </Grid>
    )
}