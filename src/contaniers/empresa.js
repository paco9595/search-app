import React from 'react'
import { SectionFlex, ImageComponent } from './../Components'
import { EmpresaContainer } from './style'
export const Empresa = props => {
  return (
    <EmpresaContainer>
      <SectionFlex
        bgColor='white'
        width="80%"
        height="fit-content"
        vw
        vh
      >
        <ImageComponent />
        <div>
          hola
        </div>
      </SectionFlex>
    </EmpresaContainer>
  )
}