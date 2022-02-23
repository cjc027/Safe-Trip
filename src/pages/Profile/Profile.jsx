import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import { Grid } from "semantic-ui-react";

export default function Profile({ user, handleLogout }) {
    console.log("Header log");
    return (
      <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <Header handleLogout={handleLogout} user={user} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" style={{ maxWidth: 450 }}>
            <h2>Profile Page</h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  