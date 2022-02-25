import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ContactEditForm from "../../components/ContactEditForm/ContactEditForm";

import { Card, Grid } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import * as contactAPI from "../../utils/contactAPI";

export default function ContactEdit(props) {
  const [contact, setContact] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { contactId } = useParams();

  async function getContact() {
    try {
      const data = await contactAPI.getOne(contactId);
      console.log(data, "<- data from getContact");
      setContact(data.contact);
    } catch (err) {
      console.log(err.message, "<-getContact error message");
      setError(err.message);
    }
  }

  async function handleUpdateContact(contact, contactId) {
    try {
        const data = await contactAPI.update(contact, contactId);
        console.log(data, "<- data from handleUpdateContact");
        navigate(`/${props.user.username}`)
    } catch(err) {
        console.log(err.message, "<-handleUpdateContact error message")
        setError(err.message);
    }
  }

  useEffect(() => {
    getContact();
  }, [contactId]);

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
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Header handleLogout={props.handleLogout} user={props.user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
          <h2>Edit Contact</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center" style={{ maxWidth: 437 }}>
          <ContactEditForm
            contact={contact}
            handleUpdateContact={handleUpdateContact}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
