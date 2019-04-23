import React from 'react'
import styled from 'styled-components'
import StarRatings from 'react-star-ratings';

const Container = styled.div`
    width: 300px;
    height: 200px;
    background-color: white;
    ${props => props.shadow ? 'box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.75);' : null}
    margin: 20px;
`
const CardImg = styled.img`
    width: 300px;
    height: 100px;
`
const CardTitle = styled.div`
    font-size: 20px;
`
const CardDescription = styled.div``
export const CardContainer = props => {
    const { nombre, img, descripcion, shadow, click, rating } = props;
    return (
        <Container shadow={shadow} onClick={click}>
            <CardImg src={img} />
            <CardTitle>{nombre}</CardTitle>
            <CardDescription>{descripcion}</CardDescription>

            <StarRatings
                rating={rating}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="#ffc107"
            />
        </Container>
    )
}