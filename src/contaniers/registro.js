import React, { Component } from 'react'
import styled from 'styled-components'
import {
  FormGroup,
  InputGroup,
  Button,
  TagInput
} from '@blueprintjs/core'

const RegistroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/O6NM390.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
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
  ${props => props.flex ? 'display: flex;' : null}
  justify-content: space-evenly;
  align-items: center;
`
const FormTitle = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  margin: 25px 0px;
  font-size:30px;
`


export class Registro extends Component {
  state = {
    nombre: '',
    apellido: '',
    correo: '',
    edad: 0,
    skill: [],
    hasError: false
  }
  handleChange = e => {
    console.log(e)
  }
  change = e => {
    const { target: { value, id } = {} } = e
    id === 'Nombre' ?
      this.setState({ nombre: value }) :
      this.setState({ apellido: value })
  }
  render() {
    const {
      nombre,
      apellido,
      edad,
      skill,
      hasError
    } = this.state
    return (
      <RegistroContainer>
        <FormContainer>
          <form onSubmit={this.submit}>
            <FormTitle>Registro</FormTitle>
            <FormItem>
              <FormGroup
                label='Nombre'
                labelFor='Nombre'
                intent='danger'
              >
                <InputGroup
                  id='Nombre'
                  value={nombre}
                  onChange={this.change}
                  intent={hasError ? 'danger' : 'none'}
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='Apellido'
                labelFor='Apellido'
              >
                <InputGroup
                  id='Apellido'
                  value={apellido}
                  onChange={this.change}
                  intent={hasError ? 'danger' : 'none'}
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='Edad'
                labelFor='Edad'
              >
                <InputGroup
                  id='Edad'
                  value={edad}
                  onChange={this.change}
                  intent={hasError ? 'danger' : 'none'}
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='skills'
                labelFor='skills'
              >
                <TagInput
                  leftIcon={"user"}
                  onChange={this.handleChange}
                  placeholder="Separate values with commas..."
                  values={skill}
                />
              </FormGroup>
            </FormItem>
            <FormItem flex={true}>
              <Button
                icon="log-in"
                text='Ingresar'
                type='submit'
              />
              <Button
                icon="eraser"
                text='Borrar'
                type='submit'
              />
            </FormItem>
          </form>
        </FormContainer>
      </RegistroContainer>
    )
  }
}
