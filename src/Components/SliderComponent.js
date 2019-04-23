import React from 'react'
import styled from 'styled-components'
// import Slider from 'react-slick'
// import { Card } from './CardComponent'
// import { Empresas } from './../data/empresas'

const SliderContainer = styled.div`
    margin: 0 auto;
    padding: 40px;
    width: 80%;
    color: #333;
    background: #419be0
    margin: 50px auto;
`

// const SliderSettings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
// };

export const SliderComponent = (props) => {
    return (
        <SliderContainer>
            {/* <Slider {...SliderSettings} {...props}>
                {Empresas.map(item => <div key={item.id}><Card {...item} /></div>)}
            </Slider> */}
        </SliderContainer>
    )
}