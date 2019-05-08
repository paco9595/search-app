import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SectionFlex, } from '../Components'
import { EmpresaContainer } from './style'
import { vacantes } from './../data/vacantes'
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
const titleEmpresa = styled.div`

`
const RightButton = styled.div`
  width: 100%;
  text-align: right;
  padding:40px;
`
const VacanteInfo = styled.div``
class Vacante extends Component {
  state = {
    data: {},
    applybuttonDisable: false
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    const data = vacantes.filter(i => i.id == id.toString())
    this.setState({ data: data[0] }, () => {
      console.log(this.state)
    })
  }
  clickApply = () => {
    const user = localStorage.getItem('user')
    if (!user) {
      this.props.history.push('/login')
    } else {
      this.setState({ applybuttonDisable: true })
    }
  }
  refHandlers = {
    toaster: (ref) => (this.toaster = ref),
  };
  render() {
    const { data: { logo, description, empresa, dirrecion, telefono, skills } = {} } = this.state
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
          {logo && <Img src={`${config.urlImgBase}${logo}`} />}
        </LogoContainer>
        {description && <InfoContainer>
          <SideInfo>
            <InfoItem
              title="empresa"
              info={empresa}
            />
            <InfoItem
              title="telefono"
              info={telefono}
            />
            <InfoItem
              title="dirrecion"
              info={dirrecion}
            />
          </SideInfo>
          <VacanteInfo>
            <RightButton>
              <Button
                large
                rightIcon="arrow-right"
                intent="success"
                text="Aplicar puesto"
                onClick={this.clickApply}
                disabled={this.state.applybuttonDisable}
              />
            </RightButton>
            <SectionFlex display='block' margin={'20px'}>
              <h3>Descripcion</h3>
              <div>
                {description}
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