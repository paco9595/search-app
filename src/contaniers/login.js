import React, { Component } from 'react';
import styled from 'styled-components'
import { Theme } from './../utils'
import {
    FormGroup,
    InputGroup,
    Button,
    Callout
} from '@blueprintjs/core'

const LoginContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    width: 100vw;
    height: 93.5vh;
    background-color:${Theme.ColorPrincipal};
`
const FormContainer = styled.div`
    margin:20px;
    background-color: white;
    border-radius: 10px;
    width: 300px;
    height:35   0px;
`
const FormItem = styled.div`
    width: 80%;
    margin: 10px auto;
`
const FormTitle = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    margin: 25px 0px;
    font-size:30px;
`
export class Login extends Component {
    state = {
        email: '',
        pass: '',
        hasError: false
    }
    change = e => {
        const { target: { value, id } = {} } = e
        id === 'email' ?
            this.setState({ email: value }) :
            this.setState({ pass: value })
    }
    submit = e => {
        e.preventDefault()
        const { email, pass } = this.state
        console.log(this.props)
        if (email === 'paco' && pass === 'paco') {
            localStorage.setItem('user', JSON.stringify(this.state))
            this.props.history.goBack();
        }
        this.setState({ hasError: !this.state.hasError })
    }
    render() {
        const { hasError, email, pass } = this.state
        return (
            <LoginContainer>
                <FormContainer>
                    <form onSubmit={this.submit}>
                        <FormTitle>Login</FormTitle>
                        {hasError && <FormItem>
                            <Callout>
                                correo o contrase;a incorecta
                            </Callout>
                        </FormItem>}
                        <FormItem>
                            <FormGroup
                                label='email'
                                labelFor='email'
                                intent='danger'
                            >
                                <InputGroup
                                    id='email'
                                    value={email}
                                    onChange={this.change}
                                    intent={hasError ? 'danger' : 'none'}
                                    required
                                />
                            </FormGroup>
                        </FormItem>
                        <FormItem>
                            <FormGroup
                                label='contrase;a'
                                labelFor='pass'
                            >
                                <InputGroup
                                    id='pass'
                                    type='password'
                                    value={pass}
                                    onChange={this.change}
                                    intent={hasError ? 'danger' : 'none'}
                                    required
                                />
                            </FormGroup>
                        </FormItem>
                        <FormItem>
                            <Button
                                icon="log-in"
                                text='Ingresar'
                                type='submit'
                            />
                        </FormItem>
                    </form>
                </FormContainer>
            </LoginContainer >
        );
    }
}