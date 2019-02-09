import React, {PureComponent} from 'react'
import { HomeContainer } from './style'
import { TextInput } from './../commons'

export class Home extends PureComponent {
    state={
        options:[]
    }
    change = (e)=>{
        console.log(e.target.value)
        this.setState({options: [e.target.value]})
    }
    render(){
        return(
            <HomeContainer>
                <TextInput 
                    placeHolder="paco"
                    id="paco"
                    onChange={this.change}
                    options={this.state.options}
                    
                />
            </HomeContainer>
        )
    }
}