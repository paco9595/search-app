import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { config } from './../config'
import { usuario } from './../data/usuario'
import styled from 'styled-components'
import { Elevation, Card } from "@blueprintjs/core";
const ProfileContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: top;
  background-color: red;
  width: 100vw;  
`
const Slide = styled.div`
  width: 300px;
  height: 400px;
`
const Img = styled.img`
  width: 100%;
  border-radius: 50%;
  background-color: green;
`
const Name = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 30px;
  font-weight: 500;
`
const InfoContainer = styled.div`
  width:800px;
  background-color: blue;
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

class Profile extends Component {
  clickVacante = (id) => {
    this.props.history.push('/vacante/' + id)
  }
  render() {
    const { img, nombre, descripcion, skills, aplicaiones } = usuario
    return (
      <ProfileContainer>
        <Slide>
          <Img src={`${config.urlImgUserBase}${img}`} />
          <Name>
            {nombre}
          </Name>
        </Slide>
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
                  key={item.id_vacante}
                >
                  <div className='cards'>
                    <div>
                      <h5>{item.nombre_puesto}</h5>
                      <p>{item.status}</p>
                      <p>{item.fecha}</p>
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