import React, { PureComponent } from 'react'
import { HomeContainer, IconContainer, TitleIcon } from './style'
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
        console.log(e.target.value)
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
                    height={500}
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
                <SectionFlex justify="space-evenly" marign={'30px 0'} responsiveToBlock>
                    <IconContainer>
                        <div>
                            <FontAwesomeIcon icon={'tools'} size="7x" />
                        </div>
                        <TitleIcon>Reparaciones</TitleIcon>
                    </IconContainer>
                    <IconContainer>
                        <div>
                            <FontAwesomeIcon icon={'plane-departure'} size="7x" />
                        </div>
                        <TitleIcon>Viajes</TitleIcon>
                    </IconContainer>
                    <IconContainer>
                        <div>
                            <FontAwesomeIcon icon={'gifts'} size="7x" />
                        </div>
                        <TitleIcon>Regalos</TitleIcon>
                    </IconContainer>
                </SectionFlex>
                {/* <section>
                    <SliderComponent />
                </section> */}
            </HomeContainer>
        )
    }
}