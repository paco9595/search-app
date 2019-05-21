import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
    Navbar,
    Alignment,
    AnchorButton,
    Popover,
    PopoverInteractionKind,
    Classes
} from '@blueprintjs/core'
const DropdownItem = styled.div`
    height: 30px;
`
class NavBarNavigation extends Component {
    state = {
        isLogin: false,
        isOpen: false,
        user: {}
    }
    componentWillUpdate(nextProps) {
        if (nextProps !== this.props) {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user && nextProps.location.pathname === '/login') {
                this.props.history.push('/profile')
            }
        }
    }
    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'))
        user && this.setState({ isLogin: true, user })
        if (user && this.props.location.pathname === '/login') {
            this.props.history.push('/profile')
        }

    }
    render() {
        const { isLogin } = this.state
        return (
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Link to="/">
                        <Navbar.Heading>
                            Bearpoint
                    </Navbar.Heading>
                    </Link>
                    <Navbar.Divider />
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Popover
                        popoverClassName={0 <= 2 ? Classes.POPOVER_CONTENT_SIZING : ""}
                        interactionKind={PopoverInteractionKind.HOVER}
                        isOpen={this.state.isOpen === true ? /* Controlled */ true : /* Uncontrolled */ undefined}
                    >
                        <AnchorButton
                            text={isLogin ? '' : 'Login'}
                            icon={isLogin ? 'user' : 'office'}
                            href={!isLogin ? "/login" : null}
                        />
                        {isLogin &&
                            <div>
                                <DropdownItem>
                                    <div><Link to="/profile"> profile</Link></div>
                                </DropdownItem>
                                {this.state.user && this.state.user.rol === 'empresa' &&
                                    <DropdownItem>
                                        <div><Link to="/aplicaiones"> aplicaciones</Link></div>
                                    </DropdownItem>}
                                <DropdownItem>
                                    <div><Link to="/profile"> log out</Link></div>
                                </DropdownItem>
                            </div>
                        }
                    </Popover>
                </Navbar.Group>
            </Navbar>
        )
    }
}
export default withRouter(NavBarNavigation)