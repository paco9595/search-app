import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Alignment, AnchorButton } from '@blueprintjs/core'
export const NavBarNavigation = props => {
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Link to="/">
                    <Navbar.Heading>
                        Blueprint
                </Navbar.Heading>
                </Link>
                <Navbar.Divider />
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <AnchorButton
                    href="/login"
                    icon="office"
                    text='Empresas'
                />
            </Navbar.Group>
        </Navbar>
    )
}