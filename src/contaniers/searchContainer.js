import React, { PureComponent } from 'react'
import { SearchContainer } from './style';
import { SectionFlex, TextInput } from './../Components'
import { Theme } from './../utils'
import styled from 'styled-components'
// import { Empresas } from './../data/empresas'
import { Elevation, Card } from "@blueprintjs/core";
import StarRatings from 'react-star-ratings'
import { config } from './../config'
import { getAllVacantes } from './../services'

const SearchReslts = styled.div`
    display: flex;
    width:90vw;
    flex-wrap: wrap;
    justify-content: center;
    .card{
        margin: 10px;
        display: flex;
        width: 300px;   
        .cards{
            img{
                width: 250px;
                height: 200px;
                margin-right: 20px;
            }
        }
    }
`

export class Search extends PureComponent {

    state = {
        results: []
    }
    componentWillMount() {
        getAllVacantes().then(results => {
            console.log(results)
            this.setState({ results: results.vacantes })
        })
    }
    change(estado, municipio) {
        console.log({ estado, municipio })
    }
    clickCard = id => {
        this.props.history.push(`/vacante/${id}`)
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
                        width='90vw'
                        display='block'
                    >
                        <SearchReslts>
                            {this.state.results.map(item =>
                                <Card
                                    onClick={e => this.clickCard(item.id_vacante)}
                                    className='card'
                                    interactive={true}
                                    elevation={Elevation.THREE}
                                    key={item.id_vacante}
                                >
                                    <div className='cards'>
                                        <img src={`${config.urlImgLogoBase}${item.logo}`} alt={item.empresa} />
                                        <div>
                                            <h5>{item.Nombre_puesto}</h5>
                                            <p>{item.description}</p>
                                            <h6>{item.nombre}</h6>
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