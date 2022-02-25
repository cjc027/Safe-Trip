import React, { useEffect, useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function ContactEditForm({contact, handleUpdateContact}){
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
        handleUpdateContact(state, contact._id)
    }

    useEffect(() => {
        setState({
            fullName: contact.fullName,
                email: contact.email,
                phoneNumber: contact.phoneNumber
        })
    }, [contact])

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
                    Edit Contact
                </Button>
                </Form>
            </Segment>
        </Grid.Column>
        </Grid>
    )

    
}