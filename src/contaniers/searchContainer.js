import React, { PureComponent } from 'react'
import { SearchContainer } from './style';
import { SectionFlex, TextInput, Filter, Card } from './../Components'
import { Theme } from './../utils'
import styled from 'styled-components'
import { Empresas } from './../data/empresas'
const SearchReslts = styled.div`
    width: 1300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
                        margin='100px 0;'
                        align='flex-start'
                    >
                        <Filter change={this.change} />
                        <SearchReslts>
                            {this.state.results.map(data => <Card click={this.clickCard} shadow key={data.id} {...data} />)}
                        </SearchReslts>
                    </SectionFlex>
                </SectionFlex>
            </SearchContainer >
        )
    }
}