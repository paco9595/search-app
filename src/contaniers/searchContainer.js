import React, { PureComponent } from 'react'
import { SearchContainer } from './style';
import { SectionFlex, TextInput, Filter, Card } from './../Components'
import { Theme, media } from './../utils'
import styled from 'styled-components'
import { Empresas } from './../data/empresas'

const SearchReslts = styled.div`
    width: 80%;
    display: flex;
    div{
        ${media.laptop`
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        `}
    }
    ${media.laptop`
        width:100%;
    `}
`
export class Search extends PureComponent {
    state = {
        results: []
    }
    componentDidMount() {
        this.setState({ results: Empresas })
    }
    change(estado, municipio) {
        console.log({ estado, municipio })
    }
    clickCard(data) {
        console.log('paco')
    }
    render() {
        return (
            <SearchContainer>
                <SectionFlex
                    bgColor={Theme.ColorPrincipal}
                    height={100}
                >
                    <TextInput />
                </SectionFlex>
                <SectionFlex>
                    <SectionFlex
                        margin='100px 0'
                        align='flex-start'
                        width='90vw'
                    >
                        <Filter change={this.change} />
                        <SearchReslts>
                            {this.state.results.map(item =>
                                <Card className='card' interactive={true} elevation={Elevation.THREE} key={item.id}>
                                    <div className='cards'>
                                        <img src={item.img} alt={item.nombre} />
                                        <div>
                                            <h5>{item.nombre}</h5>
                                            <p>{item.descripcion}</p>
                                            <StarRatings
                                                rating={item.rating}
                                                starDimension="20px"
                                                starSpacing="5px"
                                                starRatedColor="#ffc107"
                                            />
                                        </div>
                                    </div>
                                </Card>
                            )}
                        </SearchReslts>
                    </SectionFlex>
                </SectionFlex>
            </SearchContainer>
        )
    }
}