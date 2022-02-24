import React, { useState } from 'react';

import { Button, Form, Grid, Segment } from 'semantic-ui-react'

export default function AddLocationForm({
    user, 
    form, 
    handleAddLocation,
    toggleForm
}){


    const [state, setState] = useState({
        user: user._id,
        name: "",
        street: "",
        city: "",
        state: "",
        latitude: "",
        longitude: ""
    })

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        handleAddLocation(state)
    }

    if (!form) {
        return(
            <Grid textAlign='center' verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Segment onClick={toggleForm} style={{cursor: 'pointer'}}>
                        <h3>Add Location &nbsp;&nbsp;+</h3>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }

    return (
        <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>
            
                <Form autoComplete="off" onSubmit={handleSubmit}>
                
                <Form.Input
                    className="form-control"
                    name="name"
                    value={state.name}
                    placeholder="Location Name"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="street"
                    value={state.street}
                    placeholder="Street Number and Name"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="city"
                    value={state.city}
                    placeholder="City"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="state"
                    value={state.state}
                    placeholder="State "
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="latitude"
                    type='number'
                    value={state.latitude}
                    placeholder="Latitude"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="longitude"
                    type='number'
                    value={state.longitude}
                    placeholder="Longitude"
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    className="btn"
                >
                    Add Location
                </Button>
                </Form>
            </Segment>
        </Grid.Column>
        </Grid>
    )
}