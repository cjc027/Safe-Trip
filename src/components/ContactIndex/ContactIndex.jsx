import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import ContactCard from "../ContactCard/ContactCard";

export default function ContactIndex({ contacts, user }){

    return (
        <Card.Group itemsPerRow={1} stackable>
            {contacts.map((contact) => {
                return (
                    <ContactCard 
                        contact={contact}
                        key={contact._id}
                        user={user}
                    />
                )
            })}
        </Card.Group>
    )

}