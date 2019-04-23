import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { estados } from './../data/estados'
import { municipio } from './../data/municipios'
import { media } from './../utils'
const FilterContainer = styled.div`
    position:relative;
    left: 30px;
    width: 300px;
    ${media.laptop`
        position: initial;
        width: 100%;
    `}
`
const FilterGroup = styled.div`
    ${media.laptop`
        display: flex;

    `}
`

const FilterTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
`
const FilterSubtitle = styled.div`
    font-weight: lighter;
    font-size: 24px;
`
const FilterItem = styled.div``
// const FilterSelect = styled.select`
//     appearance: none;
//     border: none;
//     border-bottom: 1px solid black;
//     width: 200px;
// `
export class Filter extends PureComponent {
    state = {
        estado: '',
        municipio: ''
    }
    componentDidMount() {
    }
    changeEstado = (e) => {
        const estado = e.target.value
        this.setState({ estado })
        this.props.change(estado, municipio[estado][0])
    }
    changeMuncipio = (e) => {
        const municipio = e.target.value
        this.setState({ municipio })
        this.props.change(this.state.estado, municipio)
    }

    render() {
        return (
            <FilterContainer>
                <FilterTitle>Ubicacion</FilterTitle>
                <FilterGroup>
                    <FilterItem>
                        <FilterSubtitle>Estado</FilterSubtitle>
                        <div className="bp3-select modifier">
                            <select className="bp3-minimal" onChange={this.changeEstado}>
                                <option selected>Choose an item...</option>
                                {estados.map(item =>
                                    <option
                                        key={item.clave}
                                        value={item.nombre}
                                    >
                                        {item.nombre}
                                    </option>)}
                            </select>
                        </div>
                    </FilterItem>
                    <FilterItem>
                        <FilterSubtitle>municipio</FilterSubtitle>
                        {this.state.estado !== '' && (<div className="bp3-select modifier"><select onChange={this.changeMuncipio}>
                            <option value={0}>todos los municipios</option>
                            {municipio[this.state.estado].map((item, i) => <option key={i} value={item}>{item}</option>)}
                        </select></div>)}
                    </FilterItem>
                </FilterGroup>
            </FilterContainer >
        )
    }
} 