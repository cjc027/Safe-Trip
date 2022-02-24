import React from "react";
import { Card, Button, Segment, Grid, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ContactCard({ contact, user }) {
  const cardStyle = {
    // display:'grid',
    // gridTemplateColumns: "1fr 1fr",
    color: "inherit",
    fontSize: "2rem",
    paddingTop: "12px",
  };

  return (
    <Card key={contact._id} raised>
      <Card.Header as="h3" style={{paddingTop: '10px'}}>{contact.fullName}</Card.Header>
      <Card.Content extra>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <a href={`tel:${contact.phoneNumber}`} >
            <Button basic color="green" style={{width: '95%'}}>
                Call
            </Button>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Button basic color="red" style={{width: '95%'}}>
                Email
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ContactCard;
