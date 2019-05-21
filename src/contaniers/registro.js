import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { createUser } from './../services'
import {
  FormGroup,
  InputGroup,
  Button,
  TagInput
} from '@blueprintjs/core'

const RegistroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  background-image: url('./assets/O6NM390.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90vh;
`
const FormContainer = styled.div`
  margin:20px;
  background-color: white;
  border-radius: 10px;
  width: 300px;
  height:350px;
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
class Registro extends Component {
  state = {
    nombre: '',
    pass: '',
    email: '',
    edad: 0,
    skill: [],
    hasError: false,
    tel: '',
    descripcion: '',
    img: {},
    cv: {}
  }
  handleChange = (e, m) => {
    console.log(e)
    this.setState({ skill: e })
  }
  change = (e, field) => {
    const { target: { value } = {} } = e
    this.setState({ [field]: value })
  }
  submit = (e) => {
    e.preventDefault()
    createUser(this.state).then(res => {
      if (res.status === 200) {
        console.log(res.data)
        localStorage.setItem('user', JSON.stringify(res.data.user[0]))
        localStorage.setItem('token', JSON.stringify(res.data.token))
        this.props.history.push('/profile')
      }
      else if (res.status === 406) {
        this.setState({ hasError: true })
      }
    })
  }
  changeFile = (e, field) => {
    console.log(e.target.files)
    const files = Array.from(e.target.files)
    const formData = new FormData()
    files.forEach((file, i) => {
      formData.append(i, file)
    })
    console.log(files)
    this.setState({ [field]: files })
  }
  cancel = () => {
    this.setState({
      nombre: '',
      email: '',
      pass: '',
      email: '',
      edad: 0,
      skill: [],
      hasError: false,
      tel: '',
      descripcion: '',
      img: {},
      cv: {}
    })
  }
  render() {
    const {
      nombre,
      email,
      pass,
      edad,
      skill,
      tel,
      descripcion,
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
                  onChange={(e) => this.change(e, 'nombre')}
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='email'
                labelFor='email'
              >
                <InputGroup
                  id='email'
                  value={email}
                  onChange={(e) => this.change(e, 'email')}
                  intent={hasError ? 'danger' : 'none'}
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='pass'
                labelFor='pass'
              >
                <InputGroup
                  id='pass'
                  value={pass}
                  onChange={(e) => this.change(e, 'pass')}
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='telefono'
                labelFor='telefono'
              >
                <InputGroup
                  id='telefono'
                  value={tel}
                  onChange={(e) => this.change(e, 'tel')}
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
                  onChange={(e) => this.change(e, 'edad')}
                  type='number'
                  required
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='descripcion'
                labelFor='descripcion'
              >
                <textarea
                  rows="4"
                  cols="50"
                  name="comment"
                  id='descripcion'
                  value={descripcion}
                  onChange={(e) => this.change(e, 'descripcion')}
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
                  addOnBlur={true}
                  onChange={(e, m) => this.handleChange(e, m)}
                  placeholder="Separate values with commas..."
                  values={skill}
                />
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='cv'
                labelFor='CV'
              >
                <label className="bp3-file-input .modifier">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={e => this.changeFile(e, 'cv')}
                  />
                  <span className="bp3-file-upload-input">Choose file...</span>
                </label>
              </FormGroup>
            </FormItem>
            <FormItem>
              <FormGroup
                label='Imagen'
                labelFor='imagen'
              >
                <label className="bp3-file-input .modifier">
                  <input
                    type="file"
                    accept=".jpg,.png"
                    onChange={e => this.changeFile(e, 'img')}
                  />
                  <span className="bp3-file-upload-input">Choose file...</span>
                </label>
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
                onClick={this.cancel}
              />
            </FormItem>
          </form>
        </FormContainer>
      </RegistroContainer>
    )
  }
}
export default withRouter(Registro)