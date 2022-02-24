import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AddContact from "../../components/AddContact/AddContact";
import * as contactAPI from "../../utils/contactAPI";

import { Grid } from "semantic-ui-react";
import userService from "../../utils/userService";

export default function Profile(props) {
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState(false);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const { username } = useParams();

    console.log(username)

    function toggleForm(){
      setForm(true);
    }

    async function getProfile(){
      try {
        const data = await userService.getProfile(username)
        console.log(data, "<- data in getProfile");
        setContacts(() => data.contacts);
        setUser(() => data.user);
      } catch(err) {
        console.log(err);
        setError("Profile does not exist!")
      }
    }

    async function handleAddContact(contact){
      try {
        const data = await contactAPI.create(contact);
        console.log (data, "response from server, in handleAddContact");
        setContacts([...contacts, data.contact])
        setForm(false);
      } catch(err) {
        setError(err.message);
        console.log(err);
      }
    }

    async function getContacts(){
      try {
        const data = await contactAPI.getAll();
        console.log(data, "<- data from getContacts");
        setContacts([...data.contacts]);
      } catch(err) {
        console.log(err.message, "<-getContacts error message");
        setError(err.message);
      }
    }

    useEffect(()=>{
      setForm(false);
      getProfile()
    }, [username]);

    if (error) {
      return (
        <>
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
        </>
      );
    }

    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <Header handleLogout={props.handleLogout} user={props.user} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
            <h2>Profile Page</h2>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 437 }}>
          <AddContact user={user} form={form} handleAddContact={handleAddContact} toggleForm={toggleForm} />
        </Grid.Column>
      </Grid.Row>
      </Grid>
    );
  }
  