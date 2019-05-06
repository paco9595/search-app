import React, { PureComponent } from 'react'
import { SearchContainer } from './style';
import { SectionFlex, TextInput } from './../Components'
import { Theme } from './../utils'
import styled from 'styled-components'
// import { Empresas } from './../data/empresas'
import { Elevation, Card } from "@blueprintjs/core";
import StarRatings from 'react-star-ratings'
import { vacantes } from '../data/vacantes';
import { config } from './../config'


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
    componentDidMount() {
        this.setState({ results: vacantes })
    }
    change(estado, municipio) {
        console.log({ estado, municipio })
    }
    clickCard = id => {
        this.props.history.push(`/empresa/${id}`)
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
                        {/* <Filter change={this.change} /> */}
                        <SearchReslts>
                            {this.state.results.map(item =>
                                <Card
                                    onClick={e => this.clickCard(item.id)}
                                    className='card'
                                    interactive={true}
                                    elevation={Elevation.THREE}
                                    key={item.id}
                                >
                                    <div className='cards'>
                                        <img src={`${config.urlImgBase}${item.logo}`} alt={item.empresa} />
                                        <div>
                                            <h5>{item.nombreVacante}</h5>
                                            <p>{item.description}</p>
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