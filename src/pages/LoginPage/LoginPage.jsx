import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          {/* <Header as="h1" color="blue" style={{fontFamily:"Helvetica"}} textAlign="center">
           Safe Trip <Icon name="car"/>
          </Header> */}
          <img style={{maxWidth: 250}} src="https://i.imgur.com/iNL5fkN.png"/>
          <br />
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment>
              <Form.Input
                type="email"
                name="email"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          {/* <Segment attached="bottom">
          <Button style={{ minWidth: 225}} color="green" as={Link} to="/signup">
            Sign Up
          </Button>

          </Segment> */}
          <Message>
            <Link to="/signup" style={{fontSize: "1.2rem", color:"#51be6a"}}>Create an Account</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}
