import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddLocation from "../../components/AddLocation/AddLocation";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as locationAPI from "../../utils/locationAPI";

import { Grid } from "semantic-ui-react";

export default function Index({ user, handleLogout }) {
  const [locations, setLocations] = useState([]);
  const [form, setForm] = useState(false);
  const [error, setError] = useState("");

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
      console.log(data, "this is data from getLocation");
      setLocations([...data.locations]);
    } catch(err) {
      console.log(err.message, "<- getLocations error message");
      setError(err.message);
    }
  }

  useEffect(() => {
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
          <h2>Index Page</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <AddLocation user={user} form={form} handleAddLocation={handleAddLocation} toggleForm={toggleForm} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
