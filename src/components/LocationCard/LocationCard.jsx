import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function LocationCard({location, user}){

    return (
        <Card key={location._id} raised>
            <Card.Content textAlign='center'>
                <h3>{location.name}</h3>
            </Card.Content>
        </Card>
    )

}

export default LocationCard;