import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ContactIndex from "../../components/ContactIndex/ContactIndex";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import LocationDetails from "../../components/LocationDetails/LocationDetails";
import UberCard from "../../components/UberCard/UberCard";
import * as locationAPI from "../../utils/locationAPI";

import { useNavigate } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";
import userService from "../../utils/userService";


export default function Location(props) {
  const [location, setLocation] = useState({});
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const { username, locationId } = useParams();

  const navigate = useNavigate();

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, "<- data in getProfile");
      setContacts(() => data.contacts);
      setUser(() => data.user);
    } catch (err) {
      console.log(err);
      setError("Profile does not exist!");
    }
  }

  async function getLocation() {
    try {
      const data = await locationAPI.getOne(locationId);
      console.log(data, "<- data in getLocation");
      setLocation(() => data.location);
    } catch(err) {
      console.log(err);
      setError("Could not retrieve location!");
    }
  }

  async function handleDelete(){
    try {
      const data = await locationAPI.deleteOne(locationId);
      console.log(data, "deleted location")
      navigate('/');
    } catch(err) {
      console.log(err);
      setError("An error occured when trying to delete location!")
    }
  }

  useEffect(()=>{
    getProfile();
    getLocation();
    console.log(location, "<- location in Location details")
  }, [locationId]);

  if (error) {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header handleLogout={props.handleLogout} user={props.user} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign="center">
          <Grid.Column>
            <ErrorMessage error={error} />;
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header handleLogout={props.handleLogout} user={props.user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <LocationDetails location={location} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <UberCard location={location} user={props.user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <br />
          <ContactIndex isProfile={false} contacts={contacts} user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <br />
          <Button onClick={handleDelete} negative>
            Delete Location
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
