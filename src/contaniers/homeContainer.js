import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer, IconContainer, TitleIcon, Counter } from './style'
import { TextInput, SectionFlex } from './../Components'
import { Theme } from './../utils'
import { SugestionsService } from './../services/segestionsServie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './../style.css'
export class Home extends PureComponent {
    state = {
        options: []
    }
    change = (e) => {
        console.log(e)
        SugestionsService(e.target.value).then(data => {
            console.log(data)
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
                    <Link to={{
                        pathname: "/search/repearaciones"
                    }}>
                        <IconContainer>
                            <div>
                                <FontAwesomeIcon icon={'desktop'} size="2x" />
                            </div>
                            <TitleIcon>Tecnologica</TitleIcon>
                            <Counter>
                                10
                            </Counter>
                        </IconContainer>
                    </Link>
                    <Link to={{
                        pathname: "/search/viajes"
                    }}>
                        <IconContainer>
                            <div>
                                <FontAwesomeIcon icon={'building'} size="2x" />
                            </div>
                            <TitleIcon>Arquitectura</TitleIcon>
                            <Counter>
                                10
                            </Counter>
                        </IconContainer>
                    </Link>
                    <Link to={{
                        pathname: "/search/regalos"
                    }}>
                        <IconContainer>
                            <div>
                                <FontAwesomeIcon icon={'gavel'} size="2x" />
                            </div>
                            <TitleIcon>Leyes</TitleIcon>
                            <Counter>
                                10
                            </Counter>
                        </IconContainer>
                    </Link>
                    <Link to={{
                        pathname: "/search/regalos"
                    }}>
                        <IconContainer>
                            <div>
                                <FontAwesomeIcon icon={'flask'} size="2x" />
                            </div>
                            <TitleIcon>ciencia</TitleIcon>
                            <Counter>
                                10
                            </Counter>
                        </IconContainer>
                    </Link>
                </SectionFlex>
                {/* <section>
                    <SliderComponent />
                </section> */}
            </HomeContainer >
        )
    }
}