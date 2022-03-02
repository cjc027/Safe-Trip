import React from "react";
import { Card } from "semantic-ui-react";
import LocationCard from "../LocationCard/LocationCard";
// import { useNavigate, Link } from "react-router-dom";

export default function LocationIndex({ locations, user }) {

  // const navigate = useNavigate();

  return (
    <Card.Group itemsPerRow={1} stackable>
      {locations.map((location) => {
        return (

            <LocationCard location={location} key={location._id} user={user} />
          
        );
      })}
    </Card.Group>
  );
}
