import React, { Fragment } from 'react'
import styled from 'styled-components'

const Label = styled.label`
    color: #6c757d
`
const Info = styled.div`
    font-weight: bold;
    font-size: 30px;
`

export const InfoItem = ({ title, info }) => {
    return (
        <Fragment>
            <Label>{title}</Label>
            <Info>{info}</Info>
        </Fragment>
    );
}