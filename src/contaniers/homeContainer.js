import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer, IconContainer, TitleIcon, Counter } from './style'
import { TextInput, SectionFlex } from './../Components'
import { Theme } from './../utils'
import { SugestionsService } from './../services/segestionsServie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAreas } from './../services'
import './../style.css'
export class Home extends PureComponent {
    componentWillMount() {
        getAreas().then(({ results }) => {
            this.setState({ areas: results })
        })
    }
    state = {
        options: [],
        areas: []
    }
    change = (e) => {
        SugestionsService(e.target.value).then(data => {
            this.setState({ options: data })
        })

    }

    render() {
        return (
            <HomeContainer>
                <SectionFlex
                    bgColor={Theme.ColorPrincipal}
                    bgImg={'./assets/business-desktop.jpg'}
                    height={500}
                    shadow={true}
                >
                    <div>
                        <h1>
                            QUE ESTAS BUSCANDO
                        </h1>
                        <TextInput
                            placeHolder="paco"
                            id="paco"
                            onChange={this.change}
                            options={this.state.options}

                        />
                    </div>
                </SectionFlex>
                <SectionFlex><h1>Vacantes Disponibles</h1></SectionFlex>
                <SectionFlex justify="space-evenly" marign={'30px 0'} responsiveToBlock="phone">
                    {this.state.areas && this.state.areas.map(item => <Link to={{
                        pathname: `/search/${item.nombre_area}`
                    }} key={item.id_area}>
                        <IconContainer>
                            <div>
                                <FontAwesomeIcon icon={item.logo} size="2x" />
                            </div>
                            <TitleIcon>{item.nombre_area}</TitleIcon>
                            <Counter>
                                {item.cantidad}
                            </Counter>
                        </IconContainer>
                    </Link>
                    )}
                </SectionFlex>
            </HomeContainer >
        )
    }
}