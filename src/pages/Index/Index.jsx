import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddLocation from "../../components/AddLocation/AddLocation";
import LocationIndex from "../../components/LocationIndex/LocationIndex";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as locationAPI from "../../utils/locationAPI";

import { Grid, Card } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

export default function Index({ user, handleLogout }) {
  const [locations, setLocations] = useState([]);
  const [form, setForm] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function toggleForm(){
    setForm(true);
  }

  async function handleAddLocation(location){
    try {
      console.log(location, "<- form data")
      const data = await locationAPI.create(location);
      console.log(data, "<- response from server, in handleAddLocation")
      setLocations([...locations, data.location])
      setForm(false);
    } catch(err) {
      setError(err.message);
      console.log(err);
    }
  }

  async function getLocations() {
    try {
      const data = await locationAPI.getAll();
      console.log(data, "this is data from getLocations");
      setLocations([...data.locations]);
    } catch(err) {
      console.log(err.message, "<- getLocations error message");
      setError(err.message);
    }
  }

  useEffect(() => {
    setForm(false);
    getLocations();
  }, []);

  console.log(locations)

  return (
    <Grid centered >
      <Grid.Row>
        <Grid.Column>
          <Header handleLogout={handleLogout} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
        <Card centered>
            <Card.Content>
              <h2>Saved Locations</h2>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 437 }}>
          <LocationIndex locations={locations} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 437 }}>
          <AddLocation user={user} form={form} handleAddLocation={handleAddLocation} toggleForm={toggleForm} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
