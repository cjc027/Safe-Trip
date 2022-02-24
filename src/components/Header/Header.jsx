import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Menu, Dropdown, Icon } from "semantic-ui-react";

const UBER = process.env.REACT_APP_UBER_CLIENT;

export default function PageHeader({ user, handleLogout }){
    console.log(user, '<- user in the header component')

    return (
        <Segment clearing>
            <Menu floated="right">
                <Menu.Item onClick={handleLogout}>
                    Logout
                </Menu.Item>
            </Menu>
            <Menu floated="left">
                <Dropdown item text="Dashboard" simple>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={`/${user.username}`} text='Profile' />
                        <Dropdown.Item as={Link} to="/" text="Saved Locations" />
                        <Dropdown.Item>
                            <a href={`https://m.uber.com/ul/?action=setPickup&client_id=${UBER}&pickup=my_location&dropoff%5Bnickname%5D=Home&dropoff%5Blatitude%5D=${user.latitude}&dropoff%5Blongitude%5D=${user.longitude}`}>Go Home</a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </Segment>
    )
}