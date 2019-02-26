import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 300px;
    height: 200px;
    background-color: white;
    ${props => props.shadow ? 'box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.75);' : null}
    margin: 20px;
`
const CardImg = styled.img`
    width: 300px;
    height: 100px;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
`
const CardTitle = styled.div`
    font-size: 20px;
`
const CardDescription = styled.div``
export const Card = props => {
    const { nombre, img, descripcion, shadow, click } = props;
    return (
        <CardContainer shadow={shadow} onClick={click}>
            <CardImg src={img} />
            <CardTitle>{nombre}</CardTitle>
            <CardDescription>{descripcion}</CardDescription>
        </CardContainer>
    )
}