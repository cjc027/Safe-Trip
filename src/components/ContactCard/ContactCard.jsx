import React from "react";
import { Card, Button, Segment, Grid, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ContactCard({ contact, isProfile }) {
  
  return (
    <Card key={contact._id} raised>
      <Card.Header as="h3" style={{ paddingTop: "10px" }}>
        {contact.fullName}
        {isProfile ? (
          <Link style={{color: 'inherit'}} to={`/${contact._id}/edit`}>
              <Icon name="edit" style={{paddingLeft: "20px"}}/>
          </Link>
        ) : ( 
          ""
        )}
      </Card.Header>
      <Card.Content extra>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <a href={`tel:${contact.phoneNumber}`}>
            <Button basic color="green" style={{ width: "95%" }}>
              Call
            </Button>
          </a>
          <a href={`mailto:${contact.email}`}>
            <Button basic color="red" style={{ width: "95%" }}>
              Email
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ContactCard;
