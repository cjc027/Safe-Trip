import React from "react";
import { Card } from "semantic-ui-react";
import ContactCard from "../ContactCard/ContactCard";

export default function ContactIndex({ contacts, user, isProfile }){

    return (
        <Card.Group itemsPerRow={1} stackable>
            {contacts.map((contact) => {
                return (
                    <ContactCard
                        isProfile={isProfile} 
                        contact={contact}
                        key={contact._id}
                        user={user}
                    />
                )
            })}
        </Card.Group>
    )

}