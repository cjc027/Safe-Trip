import React from "react";
import { Card } from "semantic-ui-react";
function LocationDetails({ location }) {

  const GOOGLE = process.env.REACT_APP_GOOGLE_KEY

  return (
    <Card style={{minWidth: '350px'}} centered raised>
      <Card.Header as="h3" style={{ paddingTop: "10px" }}>
        {location.name}
      </Card.Header>
      <Card.Content>
        <h4>
          {location.street}, {location.city}, {location.state}
        </h4>
      </Card.Content>
      <Card.Content>
        <iframe
          
          src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE}&q=${location.street},${location.city},${location.state}`}
          allowfullscreen
        />
      </Card.Content>
    </Card>
  );
}

export default LocationDetails;
