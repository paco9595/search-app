import React, { Component } from 'react';
import styled from 'styled-components';

const ImgaeContainer = styled.div`
    width: 400px;
`


const BigImage = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 300px;

`
const SmallImageContainer = styled.div`
    width: 100%;
    display: flex;
    margin: 15px 0;
    justify-content: space-evenly;
    
`
const Image = styled.img`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '100%'};
`


export class ImageComponent extends Component {
    render() {
        return (
            <ImgaeContainer>
                <BigImage>
                    <Image src="https://http2.mlstatic.com/instalacion-y-venta-de-material-de-ferreteria-domicilio-D_NQ_NP_332221-MLM20748375170_062016-F.webp" />
                </BigImage>
                <SmallImageContainer>
                    <Image width={'60px'} height={'60px'} src="https://http2.mlstatic.com/instalacion-y-venta-de-material-de-ferreteria-domicilio-D_NQ_NP_332221-MLM20748375170_062016-F.webp" />
                    <Image width={'60px'} height={'60px'} src="https://http2.mlstatic.com/instalacion-y-venta-de-material-de-ferreteria-domicilio-D_NQ_NP_332221-MLM20748375170_062016-F.webp" />
                    <Image width={'60px'} height={'60px'} src="https://http2.mlstatic.com/instalacion-y-venta-de-material-de-ferreteria-domicilio-D_NQ_NP_332221-MLM20748375170_062016-F.webp" />
                </SmallImageContainer>
            </ImgaeContainer >
        );
    }
}
