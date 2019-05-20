import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SectionFlex } from '../Components'
import { getVacante, applyVacante } from './../services'
import { EmpresaContainer } from './style'
import { config } from './../config'
import styled from 'styled-components'
import { InfoItem } from './../Components'
import { Button, Position, Toaster } from '@blueprintjs/core'
const Img = styled.img`
  width: 80%;
`
const LogoContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;  

`
const InfoContainer = styled.div`
  display:flex;
`
const SideInfo = styled.div`
  width: 300px;
`

const RightButton = styled.div`
  width: 100%;
  text-align: right;
  padding:40px;
`
const VacanteInfo = styled.div`
  width:100%;
`
class Vacante extends Component {
  state = {
    data: {},
    applybuttonDisable: false
  }
  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))
    const { id } = this.props.match.params;
    let id_usuario = 0
    if (user) id_usuario = user.id_usuario
    getVacante(id, id_usuario).then(data => {
      this.setState({ data: data.vacante })
    })
  }
  clickApply = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      this.props.history.push('/login')
    } else {
      const { id } = this.props.match.params;
      applyVacante(id, user.id_usuario).then(res => {
        if (res.status === 200) {
          this.setState({ applybuttonDisable: true })
        }

      })
    }
  }
  refHandlers = {
    toaster: (ref) => (this.toaster = ref),
  };
  render() {
    const { data: { logo, descripcion, nombre, direccion, telefono, skills, apply } = {} } = this.state
    return (
      <EmpresaContainer>
        <Toaster
          autoFocus={false}
          canEscapeKeyClear={true}
          position={Position.TOP}
          ref={this.refHandlers.toaster}
        />
        <LogoContainer
          bgColor='white'
          height="fit-content"
          vw
          vh
        >
          {logo && <Img src={`${config.urlImgLogoBase}${logo}`} />}
        </LogoContainer>
        {direccion && <InfoContainer>
          <SideInfo>
            <InfoItem
              title="empresa"
              info={nombre}
            />
            <InfoItem
              title="telefono"
              info={telefono}
            />
            <InfoItem
              title="dirrecion"
              info={direccion}
            />
          </SideInfo>
          <VacanteInfo>
            <RightButton>
              <Button
                large
                rightIcon="arrow-right"
                intent="success"
                text={!apply || !this.state.applybuttonDisable ? "Aplicar puesto" : 'puestoAplicado'}
                onClick={this.clickApply}
                disabled={apply === 'true' || this.state.applybuttonDisable}
              />
            </RightButton>
            <SectionFlex display='block' heightPor={100} margin={'20px'}>
              <h3>Descripcion</h3>
              <div>
                {descripcion}
              </div>
            </SectionFlex>
            <SectionFlex display='block' margin={'20px'}>
              <h3>Habilidades</h3>
              <div>
                <ul>
                  {skills && skills.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </SectionFlex>
          </VacanteInfo>
        </InfoContainer>}
      </EmpresaContainer >
    )
  }
}
export default withRouter(Vacante)