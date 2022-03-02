import React from "react";
import { Card, Button } from "semantic-ui-react";

const UBER = process.env.REACT_APP_UBER_CLIENT;


function UberCard({ location, user }) {

  return (
    <Card centered raised>
      <Card.Header as="h3" style={{ paddingTop: "10px" }}>
        Request Uber
      </Card.Header>
      <Card.Content extra>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <a href={`https://m.uber.com/ul/?action=setPickup&client_id=${UBER}&pickup=my_location&dropoff%5Bnickname%5D=${location.name}&dropoff%5Blatitude%5D=${location.latitude}&dropoff%5Blongitude%5D=${location.longitude}`}>
            <Button basic color="blue" style={{ width: "95%" }}>
              To Location
            </Button>
          </a>
          <a href={`https://m.uber.com/ul/?action=setPickup&client_id=${UBER}&pickup=my_location&dropoff%5Bnickname%5D=Home&dropoff%5Blatitude%5D=${user.latitude}&dropoff%5Blongitude%5D=${user.longitude}`}>
            <Button basic color="green" style={{ width: "95%" }}>
              Go Home
            </Button>
          </a>
        </div>
      </Card.Content>
    </Card>
  );
}

export default UberCard;
