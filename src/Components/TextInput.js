import React from 'react'
import styled from 'styled-components'
import { media } from '../utils'
const Input = styled.input`
    border-radius: 3px;
    border:none;
    height: 50px;
    width: 500px;
    padding: 10px;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.56);
    ${media.phone`
        width:90%;
    `}
`
const Opciones = styled.div`
    margin-top: 5px;
    background-color:white;
    ${media.phone`
        width:90%;
    `}
`
const Opcion = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid #adb5bd;
    :hover{
        background-color:#0072ffbf;
    }
    ${media.phone`
        width:90%;
    `}
`
const InputContainer = styled.div`
    ${media.phone`
        width:90%;
        display: flex;
        justify-content: center;
    `}
`
export const TextInput = props => {
    const { options } = props
    return (
        <div >
            <InputContainer>
                <Input
                    {...props}
                />
            </InputContainer>
            {options && (<Opciones >
                {options.map(item => <Opcion>{item}</Opcion>)}
            </Opciones>)}
        </div>
    )
}

