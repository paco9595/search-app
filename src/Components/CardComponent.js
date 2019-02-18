import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    width: 300px;
    height: 200px;
    background-color: white;
    box-shadow: 17px 6px 5px 0px rgba(0,0,0,0.75);
`
const CardImg = styled.img`
    width: 300px;
    height: 100px;
    border-bottom: 1px solid black;
`
const CardTitle = styled.div`
    font-size: 20px;
`
const CardDescription = styled.div``
export const Card = props => {
    const { nombre, img, Descripcion } = props;
    return (
        <CardContainer>
            <CardImg src={img} />
            <CardTitle>{nombre}</CardTitle>
            <CardDescription>{Descripcion}</CardDescription>
        </CardContainer>
    )
}