import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import AddLocation from "../../components/AddLocation/AddLocation";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
      const data = 'placeholder';


    } catch(err) {
      setError(err.message);
      console.log(err);
    }
  }

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
