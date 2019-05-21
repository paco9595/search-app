import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { empresavacante, deleteVacante } from './../services'
import styled from 'styled-components'
const Item = styled.div`
  display:flex;
  justify-content: space-between;
`
const AplicaionesContainer = styled.div`
  display: flex;
  justify-content:center;
`
class Aplicaiones extends Component {
  state = {
    vacantes: []
  }
  componentWillMount() {
    const { id_usuario } = JSON.parse(localStorage.getItem('user'))
    empresavacante(id_usuario).then(vacantes => {
      console.log(vacantes)
      this.setState({ vacantes })
    })
  }
  format = fecha => {
    if (fecha) {
      return fecha.split('T')[0]
    }
    return fecha
  }
  CancelAplication = id => {

  }
  render() {
    return (
      <AplicaionesContainer>
        <table className="bp3-html-table .modifier">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>status</th>
              <th>telefono</th>
              <th>fecha</th>
              <th>action</th>

            </tr>
          </thead>
          <tbody>
            {this.state.vacantes.map((item, i) =>
              <tr key={i}>
                <td>{item.id_usuario}</td>
                <td><Link to={`/profile/${item.id_usuario}`}> {item.nombre}</Link></td>
                <td>{item.estado}</td>
                <td>{item.tel}</td>
                <td>{this.format(item.Fecha)}</td>
                <td>
                  <Item>
                    <FontAwesomeIcon icon='forward' size="1x" />
                    <FontAwesomeIcon onClick={() => this.CancelAplication(item.id_relacion)} icon='times' size="1x" />
                  </Item>
                </td>
              </tr>)}
          </tbody>
        </table>
      </AplicaionesContainer>
    )
  }
}

export default withRouter(Aplicaiones)
