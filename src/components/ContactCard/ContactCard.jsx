import React from 'react';
import { Card, Segment, Grid, Icon, Header } from 'semantic-ui-react'
import { Link } from "react-router-dom";

function ContactCard({contact, user}){

    const cardStyle = {
        display:'grid',
        gridTemplateColumns: "1fr 1fr",
        color: 'inherit',
        fontSize: '2rem',
        paddingTop: '12px'
    }

    return (

        <Card key={contact._id} raised style={cardStyle}>
                
                <h3 style={{gridColumn: "span 1", paddingLeft: '15px'}}>
                    {contact.fullName}
                </h3>
                <div>
                    <a href={`mailto:${contact.email}`} style={{display: "inline", marginLeft: '50px'}}>
                        &#9993;
                    </a>
                    <a href={`tel:${contact.phoneNumber}`} style={{display: "inline", marginLeft: '30px'}}>
                        &#128381;
                    </a>
                </div>
                

        </Card>

    )

}

export default ContactCard;