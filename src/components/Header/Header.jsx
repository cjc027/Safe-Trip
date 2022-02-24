import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Menu, Dropdown, Icon } from "semantic-ui-react";

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
                        <Dropdown.Item as={Link} to="/profile" text='Profile' />
                        <Dropdown.Item as={Link} to="/" text="Saved Locations" />
                        <Dropdown.Item>
                            <a href="" target={'_blank'}>Go Home</a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </Segment>
    )
}