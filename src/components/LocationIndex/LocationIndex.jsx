import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import LocationCard from "../LocationCard/LocationCard";


export default function LocationIndex({ locations, user }){

    return (
        <Card.Group itemsPerRow={1} stackable>
        {locations.map((location) => {
            return (
                <LocationCard 
                    location={location}
                    key={location._id}
                    user={user}
                />
            )
        })}
        </Card.Group>
    )

}