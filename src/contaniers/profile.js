import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { config } from './../config'
import styled from 'styled-components'
import { Elevation, Card } from "@blueprintjs/core";
import { getUser, getVacanteUser } from './../services'
import { InfoItem } from './../Components'
const ProfileContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: top;
  width: 100vw;  
`
const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`
const InfoContainer = styled.div`
  width:800px;
  margin: 0 20px;
  
`
const VacanteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card{
        margin: 10px;
        display: flex;
        width: 200px;   
        .cards{
            img{
                width: 250px;
                height: 200px;
                margin-right: 20px;
            }
        }
    }
`
const SideInfo = styled.div`
  width: 300px;
`
class Profile extends Component {
  state = {
    user: {},
    aplicaiones: []
  }
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    let id = user.id_usuario
    if (this.props.match.params.id) {
      id = this.props.match.params.id
    }
    getUser(id).then(res => {
      if (res.status !== 200) {
        this.props.history.push('/login')
      }
      const { data: { user } } = res
      this.setState({ user })
      getVacanteUser(user.id_usuario).then(aplicaiones => {
        this.setState({ aplicaiones })
      })
    })
  }
  clickVacante = id => {
    this.props.history.push('/vacante/' + id)
  }
  renderFecha = fecha => {
    if (fecha) {
      return fecha.split('T')[0]
    }
    return fecha
  }
  render() {
    const { img, nombre, descripcion, skills, email, tel, edad } = this.state.user
    const aplicaiones = this.state.aplicaiones
    return (
      <ProfileContainer>
        <SideInfo>
          <InfoItem
            title=""
            info={<Img src={`${config.urlImgUserBase}${img}`} />}
          />
          <InfoItem
            title=""
            info={nombre}
          />
          <InfoItem
            title="edad"
            info={edad}
          />
          <InfoItem
            title="telefono"
            info={tel}
          />
          <InfoItem
            title="email"
            info={email}
          />
        </SideInfo>
        <InfoContainer>
          <h1>profile</h1>
          <p>{descripcion}</p>
          <div>
            <ul>
              {skills && skills.split(',').map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3> Solicitudes </h3>
            <VacanteContainer>
              {aplicaiones && aplicaiones.map(item =>
                <Card
                  onClick={e => this.clickVacante(item.id_vacante)}
                  className='card'
                  interactive={true}
                  elevation={Elevation.THREE}
                  key={item.id_Relacion}
                >
                  <div className='cards'>
                    <div>
                      <h5>{item.Nombre_puesto}</h5>
                      <p>{item.estado}</p>
                      <p>{this.renderFecha(item.Fecha)}</p>
                    </div>
                  </div>
                </Card>)}
            </VacanteContainer>
          </div>
        </InfoContainer>
      </ProfileContainer>
    )
  }
}

export default withRouter(Profile)