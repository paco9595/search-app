import React, { Component } from 'react'
import { SectionFlex, } from '../Components'
import { EmpresaContainer } from './style'
import { vacantes } from './../data/vacantes'
import { config } from './../config'
import styled from 'styled-components'

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
  background-color:red;
`
const titleEmpresa = styled.div`

`
export class Vacante extends Component {
  state = {
    data: {}
  }
  componentWillMount() {
    const { id } = this.props.match.params;
    console.log(id)
    const data = vacantes.filter(i => i.id == id.toString())
    this.setState({ data: data[0] }, () => {
      console.log(this.state)
    })
  }
  render() {
    const { data: { logo, description, empresa } = {} } = this.state
    return (
      <EmpresaContainer>
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
            <h2>{empresa}</h2>

          </SideInfo>


        </InfoContainer>}
      </EmpresaContainer >
    )
  }
}