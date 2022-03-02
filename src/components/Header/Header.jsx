import React from "react";
import { Link } from "react-router-dom";
import { Segment, Menu, Dropdown } from "semantic-ui-react";

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
                            <a href={`https://m.uber.com/ul/?action=setPickup&client_id=Q96yl0jakjUw65i3uIHMfvzBXQG0aJlb&pickup=my_location&dropoff%5Bnickname%5D=Home&dropoff%5Blatitude%5D=${user.latitude}&dropoff%5Blongitude%5D=${user.longitude}`}>Go Home</a>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </Segment>
    )
}