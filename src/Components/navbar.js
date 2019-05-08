import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Navbar, Alignment, AnchorButton } from '@blueprintjs/core'
class NavBarNavigation extends Component {
    state = {
        isLogin: false
    }
    componentWillUpdate(nextProps) {
        if (nextProps !== this.props) {
            const user = localStorage.getItem('user')
            if (user && nextProps.location.pathname === '/login') {
                this.props.history.push('/profile')
            }
        }
    }
    componentWillMount() {
        const user = localStorage.getItem('user')
        user && this.setState({ isLogin: true })
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
                    <AnchorButton
                        href={isLogin ? '/profile' : "/login"}
                        icon={isLogin ? 'user' : 'office'}
                        text={isLogin ? 'profile' : 'Login'}
                    />
                </Navbar.Group>
            </Navbar>
        )
    }
}
export default withRouter(NavBarNavigation)